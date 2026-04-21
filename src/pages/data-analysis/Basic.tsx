import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const Basic: React.FC = () => {
  const navigate = useNavigate();
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
      question: '编写一个函数，计算两个数的和',
      correctAnswer: 'def add(a, b):\n    return a + b',
      explanation: '定义一个名为add的函数，接收两个参数a和b，返回它们的和。',
      sampleInput: 'add(3, 5)',
      sampleOutput: '8'
    },
    {
      id: 2,
      question: '编写一个程序，打印从1到10的数字',
      correctAnswer: 'for i in range(1, 11):\n    print(i)',
      explanation: '使用for循环和range函数，从1到10进行遍历并打印每个数字。',
      sampleInput: '',
      sampleOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10'
    },
    {
      id: 3,
      question: '编写一个函数，判断一个数是否为偶数',
      correctAnswer: 'def is_even(num):\n    return num % 2 == 0',
      explanation: '定义一个名为is_even的函数，接收一个参数num，使用取模运算符判断是否为偶数。',
      sampleInput: 'is_even(4)\nis_even(5)',
      sampleOutput: 'True\nFalse'
    },
    {
      id: 4,
      question: '编写一个函数，计算列表中所有元素的和',
      correctAnswer: 'def sum_list(lst):\n    return sum(lst)',
      explanation: '定义一个名为sum_list的函数，接收一个列表参数，使用sum函数计算列表中所有元素的和。',
      sampleInput: 'sum_list([1, 2, 3, 4, 5])',
      sampleOutput: '15'
    },
    {
      id: 5,
      question: '编写一个程序，求1到100的和',
      correctAnswer: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)',
      explanation: '使用for循环从1到100进行遍历，将每个数字累加到total变量中，最后打印结果。',
      sampleInput: '',
      sampleOutput: '5050'
    },
    {
      id: 6,
      question: '编写一个函数，将字符串反转',
      correctAnswer: 'def reverse_string(s):\n    return s[::-1]',
      explanation: '定义一个名为reverse_string的函数，接收一个字符串参数，使用切片操作[::-1]将字符串反转。',
      sampleInput: 'reverse_string("hello")',
      sampleOutput: 'olleh'
    },
    {
      id: 7,
      question: '编写一个程序，判断一个数是否为质数',
      correctAnswer: 'def is_prime(num):\n    if num <= 1:\n        return False\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            return False\n    return True',
      explanation: '定义一个名为is_prime的函数，接收一个参数num，判断其是否为质数。质数是大于1的自然数，只能被1和自身整除。',
      sampleInput: 'is_prime(7)\nis_prime(8)',
      sampleOutput: 'True\nFalse'
    },
    {
      id: 8,
      question: '编写一个函数，统计字符串中每个字符出现的次数',
      correctAnswer: 'def count_chars(s):\n    result = {}\n    for char in s:\n        if char in result:\n            result[char] += 1\n        else:\n            result[char] = 1\n    return result',
      explanation: '定义一个名为count_chars的函数，接收一个字符串参数，使用字典统计每个字符出现的次数。',
      sampleInput: 'count_chars("hello")',
      sampleOutput: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}"
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
            Python基础训练
          </h1>
          <p className="text-lg text-amber-700">
            练习Python基础语法和概念
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

export default Basic;