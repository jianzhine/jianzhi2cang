import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const DataStructures: React.FC = () => {
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
      question: '编写一个函数，反转列表中的元素',
      correctAnswer: 'def reverse_list(lst):\n    return lst[::-1]',
      explanation: '使用切片操作[::-1]可以快速反转列表中的元素。',
      sampleInput: 'reverse_list([1, 2, 3, 4, 5])',
      sampleOutput: '[5, 4, 3, 2, 1]'
    },
    {
      id: 2,
      question: '编写一个程序，统计字典中每个值的出现次数',
      correctAnswer: 'from collections import Counter\n\ndef count_values(d):\n    return Counter(d.values())',
      explanation: '使用collections模块中的Counter类可以方便地统计值的出现次数。',
      sampleInput: 'count_values({"a": 1, "b": 2, "c": 1, "d": 2, "e": 3})',
      sampleOutput: 'Counter({1: 2, 2: 2, 3: 1})'
    },
    {
      id: 3,
      question: '编写一个函数，移除列表中的重复元素',
      correctAnswer: 'def remove_duplicates(lst):\n    return list(set(lst))',
      explanation: '将列表转换为集合可以自动移除重复元素，然后再转换回列表。',
      sampleInput: 'remove_duplicates([1, 2, 2, 3, 4, 4, 5])',
      sampleOutput: '[1, 2, 3, 4, 5]'
    },
    {
      id: 4,
      question: '编写一个函数，合并两个字典',
      correctAnswer: 'def merge_dicts(d1, d2):\n    result = d1.copy()\n    result.update(d2)\n    return result',
      explanation: '首先复制第一个字典，然后使用update方法将第二个字典的键值对添加到复制的字典中。',
      sampleInput: 'merge_dicts({"a": 1, "b": 2}, {"c": 3, "d": 4})',
      sampleOutput: '{"a": 1, "b": 2, "c": 3, "d": 4}'
    },
    {
      id: 5,
      question: '编写一个函数，找出列表中的最大值和最小值',
      correctAnswer: 'def find_min_max(lst):\n    return min(lst), max(lst)',
      explanation: '使用内置的min和max函数分别找出列表中的最小值和最大值。',
      sampleInput: 'find_min_max([3, 1, 4, 1, 5, 9, 2, 6])',
      sampleOutput: '(1, 9)'
    },
    {
      id: 6,
      question: '编写一个函数，计算列表中元素的频率',
      correctAnswer: 'from collections import Counter\n\ndef element_frequency(lst):\n    return dict(Counter(lst))',
      explanation: '使用collections模块中的Counter类统计列表中每个元素的出现次数，然后转换为字典。',
      sampleInput: 'element_frequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])',
      sampleOutput: '{1: 1, 2: 2, 3: 3, 4: 4}'
    },
    {
      id: 7,
      question: '编写一个函数，将列表中的元素按照长度排序',
      correctAnswer: 'def sort_by_length(lst):\n    return sorted(lst, key=len)',
      explanation: '使用sorted函数，指定key参数为len函数，按照元素的长度进行排序。',
      sampleInput: 'sort_by_length(["apple", "banana", "cherry", "date"])\n',
      sampleOutput: '["date", "apple", "cherry", "banana"]'
    },
    {
      id: 8,
      question: '编写一个函数，过滤列表中的偶数',
      correctAnswer: 'def filter_even(lst):\n    return [x for x in lst if x % 2 == 0]',
      explanation: '使用列表推导式，过滤出列表中能被2整除的元素。',
      sampleInput: 'filter_even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])',
      sampleOutput: '[2, 4, 6, 8, 10]'
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
            数据结构训练
          </h1>
          <p className="text-lg text-amber-700">
            练习Python数据结构操作
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

export default DataStructures;