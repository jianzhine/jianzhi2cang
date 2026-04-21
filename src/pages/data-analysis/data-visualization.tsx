import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const DataVisualization: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<{
    id: number;
    question: string;
    correctAnswer: string;
    explanation: string;
    sampleInput: string;
    sampleOutput: string;
  } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<{
    correct: boolean;
    error: string | null;
    output: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  // 题目库
  const questions = [
    {
      id: 1,
      question: '使用Matplotlib绘制简单的折线图',
      correctAnswer: 'import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\n\nplt.plot(x, y)\nplt.title("简单折线图")\nplt.xlabel("X轴")\nplt.ylabel("Y轴")\nplt.show()',
      explanation: '使用Matplotlib的plot函数绘制折线图，然后添加标题和坐标轴标签，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 一条从(1,2)到(5,10)的直线'
    },
    {
      id: 2,
      question: '使用Matplotlib绘制柱状图',
      correctAnswer: 'import matplotlib.pyplot as plt\n\ncategories = ["A", "B", "C", "D", "E"]\nvalues = [10, 20, 15, 25, 30]\n\nplt.bar(categories, values)\nplt.title("柱状图")\nplt.xlabel("类别")\nplt.ylabel("值")\nplt.show()',
      explanation: '使用Matplotlib的bar函数绘制柱状图，然后添加标题和坐标轴标签，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 5个不同高度的柱状图'
    },
    {
      id: 3,
      question: '使用Matplotlib绘制饼图',
      correctAnswer: 'import matplotlib.pyplot as plt\n\nlabels = ["A", "B", "C", "D"]\nsizes = [30, 25, 20, 25]\n\nplt.pie(sizes, labels=labels, autopct="%1.1f%%")\nplt.title("饼图")\nplt.axis("equal")\nplt.show()',
      explanation: '使用Matplotlib的pie函数绘制饼图，设置标签和百分比显示，然后添加标题并确保饼图是圆形的，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 一个分成4部分的饼图，各部分占比分别为30%、25%、20%和25%'
    },
    {
      id: 4,
      question: '使用Matplotlib绘制散点图',
      correctAnswer: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.random.rand(50)\ny = np.random.rand(50)\n\nplt.scatter(x, y)\nplt.title("散点图")\nplt.xlabel("X轴")\nplt.ylabel("Y轴")\nplt.show()',
      explanation: '使用NumPy生成随机数据，然后使用Matplotlib的scatter函数绘制散点图，添加标题和坐标轴标签，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 50个随机分布的点'
    },
    {
      id: 5,
      question: '使用Seaborn绘制热力图',
      correctAnswer: 'import seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# 创建一个随机矩阵\nmatrix = np.random.rand(10, 10)\n\n# 绘制热力图\nsns.heatmap(matrix)\nplt.title("热力图")\nplt.show()',
      explanation: '使用NumPy生成随机矩阵，然后使用Seaborn的heatmap函数绘制热力图，添加标题，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 一个10x10的热力图，颜色根据值的大小变化'
    },
    {
      id: 6,
      question: '使用Seaborn绘制箱线图',
      correctAnswer: 'import seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# 创建随机数据\ndata = np.random.normal(0, 1, size=100)\n\n# 绘制箱线图\nsns.boxplot(data=data)\nplt.title("箱线图")\nplt.show()',
      explanation: '使用NumPy生成正态分布的随机数据，然后使用Seaborn的boxplot函数绘制箱线图，添加标题，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 一个展示数据分布的箱线图'
    },
    {
      id: 7,
      question: '使用Pandas和Matplotlib绘制DataFrame数据',
      correctAnswer: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 创建DataFrame\ndata = {\n    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],\n    "score": [85, 90, 75, 80, 95]\n}\ndf = pd.DataFrame(data)\n\n# 绘制柱状图\ndf.plot(kind="bar", x="name", y="score")\nplt.title("学生成绩")\nplt.xlabel("学生")\nplt.ylabel("分数")\nplt.show()',
      explanation: '使用Pandas创建DataFrame，然后使用DataFrame的plot方法绘制柱状图，设置x轴和y轴，添加标题和坐标轴标签，最后使用show函数显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 5个学生的成绩柱状图'
    },
    {
      id: 8,
      question: '使用Matplotlib绘制多个子图',
      correctAnswer: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 创建数据\nx = np.linspace(0, 10, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\n# 创建子图\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))\n\n# 绘制第一个子图\nax1.plot(x, y1)\nax1.set_title("正弦函数")\n\n# 绘制第二个子图\nax2.plot(x, y2)\nax2.set_title("余弦函数")\n\nplt.tight_layout()\nplt.show()',
      explanation: '使用NumPy生成数据，然后使用Matplotlib的subplots函数创建多个子图，在每个子图上绘制不同的函数，添加标题，最后使用tight_layout调整布局并显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 两个子图，分别显示正弦函数和余弦函数'
    }
  ];

  // 生成随机题目
  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setUserAnswer('');
    setResult(null);
    setShowAnswer(false);
    setShowOutput(false);
  };

  useEffect(() => {
    generateQuestion();
    setLoading(false);
  }, []);

  // 验证答案
  const validateAnswer = () => {
    if (!currentQuestion) return;

    try {
      // 简单的答案验证（实际项目中可能需要更复杂的验证）
      const isCorrect = userAnswer.trim() === currentQuestion.correctAnswer.trim();
      
      // 模拟代码运行，显示示例输出
      let output = null;
      if (currentQuestion.sampleOutput) {
        output = currentQuestion.sampleOutput;
      }
      
      setResult({
        correct: isCorrect,
        error: isCorrect ? null : '答案不正确，请检查代码',
        output: output
      });
      setShowOutput(true);
    } catch (error) {
      setResult({
        correct: false,
        error: error instanceof Error ? error.message : '代码执行出错',
        output: null
      });
    }
  };

  if (loading || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-amber-800">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* 导航栏 */}
        <div className="mb-8">
          <Link 
            to="/data-analysis" 
            className="flex items-center text-amber-800 hover:text-green-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">返回训练主页</span>
          </Link>
        </div>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            数据可视化训练
          </h1>
          <p className="text-lg text-amber-700">
            练习Matplotlib、Seaborn等库的使用
          </p>
        </div>

        {/* 题目区域 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6">
            题目 {currentQuestion.id}
          </h2>
          <p className="text-amber-700 mb-6">
            {currentQuestion.question}
          </p>

          {/* 代码编辑器 */}
          <div className="mb-6">
            <label className="block text-amber-700 font-medium mb-2">
              请输入你的代码：
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-4 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-green-300 transition-colors duration-300"
              rows={8}
              placeholder="在此输入Python代码..."
            />
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={validateAnswer}
              className="bg-gradient-to-r from-amber-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-green-600 transition-colors duration-300 flex items-center"
            >
              <Check className="w-4 h-4 mr-2" />
              提交答案
            </button>
            <button
              onClick={generateQuestion}
              className="bg-white border-2 border-amber-300 text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-300 flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              换一题
            </button>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-white border-2 border-green-300 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300 flex items-center"
            >
              {showAnswer ? '隐藏答案' : '显示参考答案'}
            </button>
          </div>

          {/* 参考答案 */}
          {showAnswer && currentQuestion && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-medium text-amber-800 mb-2">参考答案：</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {currentQuestion.correctAnswer}
              </pre>
              {currentQuestion.sampleInput && (
                <div className="mt-4">
                  <h5 className="font-medium text-amber-700 mb-2">示例输入：</h5>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {currentQuestion.sampleInput}
                  </pre>
                </div>
              )}
              {currentQuestion.sampleOutput && (
                <div className="mt-4">
                  <h5 className="font-medium text-amber-700 mb-2">示例输出：</h5>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {currentQuestion.sampleOutput}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 结果显示 */}
        {result && (
          <div className={`rounded-2xl p-6 ${result.correct ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
            <div className="flex items-center mb-4">
              {result.correct ? (
                <Check className="w-6 h-6 text-green-500 mr-2" />
              ) : (
                <X className="w-6 h-6 text-red-500 mr-2" />
              )}
              <h3 className={`text-xl font-semibold ${result.correct ? 'text-green-700' : 'text-red-700'}`}>
                {result.correct ? '回答正确！' : '回答错误'}
              </h3>
            </div>
            {result.error && (
              <p className="text-red-600 mb-4">
                {result.error}
              </p>
            )}
            
            {/* 运行成果 */}
            {result.output && (
              <div className="mt-4">
                <h4 className="font-medium text-amber-800 mb-2">运行成果：</h4>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {result.output}
                </pre>
              </div>
            )}
            
            <div className="mt-4">
              <h4 className="font-medium text-amber-800 mb-2">正确答案：</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {currentQuestion.correctAnswer}
              </pre>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-amber-800 mb-2">解析：</h4>
              <p className="text-amber-700">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataVisualization;