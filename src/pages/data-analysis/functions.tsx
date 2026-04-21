import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const Functions: React.FC = () => {
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
      question: '编写一个函数，接受可变数量的参数并返回它们的和',
      correctAnswer: 'def sum_args(*args):\n    return sum(args)',
      explanation: '使用*args参数接受可变数量的位置参数，然后使用sum函数计算它们的和。',
      sampleInput: 'sum_args(1, 2, 3, 4, 5)',
      sampleOutput: '15'
    },
    {
      id: 2,
      question: '编写一个函数，接受关键字参数并返回一个包含这些参数的字典',
      correctAnswer: 'def create_dict(**kwargs):\n    return kwargs',
      explanation: '使用**kwargs参数接受可变数量的关键字参数，然后直接返回这些参数组成的字典。',
      sampleInput: 'create_dict(name="Alice", age=20, score=85)',
      sampleOutput: "{'name': 'Alice', 'age': 20, 'score': 85}"
    },
    {
      id: 3,
      question: '编写一个模块，包含计算圆面积和周长的函数',
      correctAnswer: 'import math\n\ndef calculate_area(radius):\n    return math.pi * radius ** 2\n\ndef calculate_circumference(radius):\n    return 2 * math.pi * radius',
      explanation: '导入math模块获取π值，然后定义两个函数分别计算圆的面积和周长。',
      sampleInput: 'calculate_area(5)\ncalculate_circumference(5)',
      sampleOutput: '78.53981633974483\n31.41592653589793'
    },
    {
      id: 4,
      question: '编写一个函数，使用try-except处理除零错误',
      correctAnswer: 'def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "错误：除数不能为零"',
      explanation: '使用try-except语句捕获可能的ZeroDivisionError异常，当除数为零时返回错误信息。',
      sampleInput: 'divide(10, 2)\ndivide(10, 0)',
      sampleOutput: '5.0\n错误：除数不能为零'
    },
    {
      id: 5,
      question: '编写一个函数，使用装饰器记录函数的执行时间',
      correctAnswer: 'import time\n\ndef timing_decorator(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs)\n        end_time = time.time()\n        print(f"函数执行时间: {end_time - start_time:.4f}秒")\n        return result\n    return wrapper\n\n@timing_decorator\ndef slow_function():\n    time.sleep(1)\n    return "完成"',
      explanation: '定义一个装饰器函数，在被装饰函数执行前后记录时间并计算执行时间。',
      sampleInput: 'slow_function()',
      sampleOutput: '函数执行时间: 1.0001秒\n完成'
    },
    {
      id: 6,
      question: '编写一个函数，使用递归计算阶乘',
      correctAnswer: 'def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)',
      explanation: '使用递归的方式计算阶乘，当n为0或1时返回1，否则返回n乘以n-1的阶乘。',
      sampleInput: 'factorial(5)',
      sampleOutput: '120'
    },
    {
      id: 7,
      question: '编写一个函数，读取文件内容并返回文件的行数',
      correctAnswer: 'def count_lines(filename):\n    try:\n        with open(filename, "r") as f:\n            return len(f.readlines())\n    except FileNotFoundError:\n        return "错误：文件不存在"',
      explanation: '使用with语句打开文件，读取所有行并计算行数，同时处理文件不存在的异常。',
      sampleInput: 'count_lines("test.txt")',
      sampleOutput: '5'
    },
    {
      id: 8,
      question: '编写一个函数，使用lambda表达式和map函数将列表中的元素平方',
      correctAnswer: 'def square_list(lst):\n    return list(map(lambda x: x ** 2, lst))',
      explanation: '使用map函数和lambda表达式对列表中的每个元素进行平方操作，然后将结果转换为列表。',
      sampleInput: 'square_list([1, 2, 3, 4, 5])',
      sampleOutput: '[1, 4, 9, 16, 25]'
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
            函数与模块训练
          </h1>
          <p className="text-lg text-amber-700">
            练习Python函数定义、模块导入和异常处理
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

export default Functions;