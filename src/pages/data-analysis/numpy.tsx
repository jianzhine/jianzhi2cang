import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const NumPy: React.FC = () => {
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
      question: '使用NumPy创建一个长度为10的全零数组',
      correctAnswer: 'import numpy as np\n\nzeros_array = np.zeros(10)\nprint(zeros_array)',
      explanation: '使用NumPy的zeros函数创建一个指定长度的全零数组。',
      sampleInput: '',
      sampleOutput: '[0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]'
    },
    {
      id: 2,
      question: '使用NumPy创建一个3x3的单位矩阵',
      correctAnswer: 'import numpy as np\n\nidentity_matrix = np.eye(3)\nprint(identity_matrix)',
      explanation: '使用NumPy的eye函数创建一个指定大小的单位矩阵。',
      sampleInput: '',
      sampleOutput: '[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]'
    },
    {
      id: 3,
      question: '使用NumPy创建一个从0到9的一维数组',
      correctAnswer: 'import numpy as np\n\narange_array = np.arange(10)\nprint(arange_array)',
      explanation: '使用NumPy的arange函数创建一个从0开始，到指定值结束的一维数组。',
      sampleInput: '',
      sampleOutput: '[0 1 2 3 4 5 6 7 8 9]'
    },
    {
      id: 4,
      question: '使用NumPy创建一个形状为(3, 3)的随机数组，值范围在0到1之间',
      correctAnswer: 'import numpy as np\n\nrandom_array = np.random.rand(3, 3)\nprint(random_array)',
      explanation: '使用NumPy的random.rand函数创建一个指定形状的随机数组，值范围在0到1之间。',
      sampleInput: '',
      sampleOutput: '[[0.12345678 0.23456789 0.34567891]\n [0.45678901 0.56789012 0.67890123]\n [0.78901234 0.89012345 0.90123456]]'
    },
    {
      id: 5,
      question: '使用NumPy计算数组的平均值、最大值和最小值',
      correctAnswer: 'import numpy as np\n\narray = np.array([1, 2, 3, 4, 5])\nprint("平均值:", np.mean(array))\nprint("最大值:", np.max(array))\nprint("最小值:", np.min(array))',
      explanation: '使用NumPy的mean、max和min函数分别计算数组的平均值、最大值和最小值。',
      sampleInput: '',
      sampleOutput: '平均值: 3.0\n最大值: 5\n最小值: 1'
    },
    {
      id: 6,
      question: '使用NumPy对数组进行排序',
      correctAnswer: 'import numpy as np\n\narray = np.array([5, 2, 8, 1, 9])\nsorted_array = np.sort(array)\nprint(sorted_array)',
      explanation: '使用NumPy的sort函数对数组进行排序。',
      sampleInput: '',
      sampleOutput: '[1 2 5 8 9]'
    },
    {
      id: 7,
      question: '使用NumPy进行矩阵乘法',
      correctAnswer: 'import numpy as np\n\nmatrix1 = np.array([[1, 2], [3, 4]])\nmatrix2 = np.array([[5, 6], [7, 8]])\nresult = np.dot(matrix1, matrix2)\nprint(result)',
      explanation: '使用NumPy的dot函数进行矩阵乘法。',
      sampleInput: '',
      sampleOutput: '[[19 22]\n [43 50]]'
    },
    {
      id: 8,
      question: '使用NumPy计算数组的标准差和方差',
      correctAnswer: 'import numpy as np\n\narray = np.array([1, 2, 3, 4, 5])\nprint("标准差:", np.std(array))\nprint("方差:", np.var(array))',
      explanation: '使用NumPy的std和var函数分别计算数组的标准差和方差。',
      sampleInput: '',
      sampleOutput: '标准差: 1.4142135623730951\n方差: 2.0'
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
            NumPy训练
          </h1>
          <p className="text-lg text-amber-700">
            练习NumPy数组操作和数学计算
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

export default NumPy;