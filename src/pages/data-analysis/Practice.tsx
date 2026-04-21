import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const Practice: React.FC = () => {
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
      question: '编写一个程序，读取销售数据并计算总销售额',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\ntotal_sales = df["sales"].sum()\nprint(f"总销售额: {total_sales}")',
      explanation: '使用pandas读取销售数据，然后使用sum()方法计算销售额列的总和。',
      sampleInput: '',
      sampleOutput: '总销售额: 15000'
    },
    {
      id: 2,
      question: '编写一个程序，分析学生成绩并计算平均分',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("student_scores.csv")\navg_score = df["score"].mean()\nprint(f"平均分数: {avg_score}")',
      explanation: '使用pandas读取学生成绩数据，然后使用mean()方法计算分数列的平均值。',
      sampleInput: '',
      sampleOutput: '平均分数: 85.5'
    },
    {
      id: 3,
      question: '编写一个程序，使用Matplotlib绘制数据可视化图表',
      correctAnswer: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("data.csv")\ndf.plot(kind="bar", x="category", y="value")\nplt.title("数据可视化")\nplt.show()',
      explanation: '使用pandas读取数据，然后使用Matplotlib的plot方法绘制柱状图，并添加标题后显示图表。',
      sampleInput: '',
      sampleOutput: '图表显示: 柱状图展示了不同类别的值'
    },
    {
      id: 4,
      question: '编写一个程序，分析销售数据并计算各产品的销售额',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\nproduct_sales = df.groupby("product")["sales"].sum()\nprint(product_sales)',
      explanation: '使用pandas的groupby方法按产品分组，然后计算每个产品的销售额总和。',
      sampleInput: '',
      sampleOutput: 'product\nA    5000\nB    3000\nC    7000\nName: sales, dtype: int64'
    },
    {
      id: 5,
      question: '编写一个程序，计算销售数据的月度销售趋势',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf["month"] = df["date"].dt.month\nmonthly_sales = df.groupby("month")["sales"].sum()\nprint(monthly_sales)',
      explanation: '使用pandas将日期列转换为日期类型，提取月份，然后按月份分组计算销售额总和。',
      sampleInput: '',
      sampleOutput: 'month\n1    3000\n2    2500\n3    3500\n4    2000\n5    4000\nName: sales, dtype: int64'
    },
    {
      id: 6,
      question: '编写一个程序，分析学生成绩并找出最高分和最低分',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("student_scores.csv")\nhighest = df["score"].max()\nlowest = df["score"].min()\nprint(f"最高分: {highest}")\nprint(f"最低分: {lowest}")',
      explanation: '使用pandas的max和min方法分别找出分数列的最高分和最低分。',
      sampleInput: '',
      sampleOutput: '最高分: 98\n最低分: 65'
    },
    {
      id: 7,
      question: '编写一个程序，分析销售数据并计算销售增长率',
      correctAnswer: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.sort_values(by="date")\ndf["sales_growth"] = df["sales"].pct_change() * 100\nprint(df[["date", "sales", "sales_growth"]])',
      explanation: '使用pandas的pct_change方法计算销售额的百分比变化，即销售增长率。',
      sampleInput: '',
      sampleOutput: '        date  sales  sales_growth\n0 2023-01-01   1000           NaN\n1 2023-01-02   1200          20.0\n2 2023-01-03   1100          -8.333333\n3 2023-01-04   1300          18.181818'
    },
    {
      id: 8,
      question: '编写一个程序，使用Seaborn绘制销售数据的散点图',
      correctAnswer: 'import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("sales_data.csv")\nsns.scatterplot(x="date", y="sales", data=df)\nplt.title("销售数据散点图")\nplt.show()',
      explanation: '使用Seaborn的scatterplot函数绘制日期和销售额之间的散点图，以观察它们之间的关系。',
      sampleInput: '',
      sampleOutput: '图表显示: 散点图展示了日期和销售额之间的关系'
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
            综合练习
          </h1>
          <p className="text-lg text-amber-700">
            实际数据分析案例练习
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

export default Practice;