import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Eye, EyeOff, AlertCircle, Lightbulb } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  placeholder?: string;
  language?: 'python' | 'sql' | 'excel';
  requirements?: string[];
  expectedPattern?: string;
  referenceAnswer?: string;
  testCases?: Array<{ input: string; expected: string }>;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '',
  placeholder = '# 在这里输入代码...',
  language = 'python',
  requirements = [],
  expectedPattern,
  referenceAnswer,
  testCases = []
}) => {
  const [code, setCode] = useState(initialCode);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [output, setOutput] = useState('');

  const runCode = () => {
    setIsCorrect(null);
    setErrors([]);
    setSuggestions([]);
    setFeedback('正在执行代码...');
    
    setTimeout(() => {
      simulateCodeExecution();
    }, 800);
  };

  const simulateCodeExecution = () => {
    if (!code.trim()) {
      setIsCorrect(false);
      setErrors(['代码不能为空']);
      setFeedback('请先输入代码');
      return;
    }

    const newErrors: string[] = [];
    const newSuggestions: string[] = [];
    let isCodeCorrect = true;

    if (expectedPattern) {
      const patterns = expectedPattern.split('|').filter(p => p.trim());
      const missingPatterns: string[] = [];
      
      patterns.forEach(pattern => {
        if (!code.toLowerCase().includes(pattern.trim().toLowerCase())) {
          missingPatterns.push(pattern.trim());
          isCodeCorrect = false;
        }
      });

      if (missingPatterns.length > 0) {
        newErrors.push(`缺少关键代码：${missingPatterns.join(', ')}`);
        
        if (language === 'python') {
          if (missingPatterns.some(p => p.includes('import'))) {
            newSuggestions.push('记得导入需要的库，如 import pandas as pd');
          }
          if (missingPatterns.some(p => p.includes('read'))) {
            newSuggestions.push('使用 pd.read_csv() 或 pd.read_excel() 读取数据');
          }
          if (missingPatterns.some(p => p.includes('group'))) {
            newSuggestions.push('使用 groupby() 进行分组统计');
          }
        }
      }
    }

    let simulatedOutput = '';
    if (language === 'python') {
      simulatedOutput = simulatePythonOutput(code);
    } else if (language === 'sql') {
      simulatedOutput = simulateSQLResult(code);
    }

    setOutput(simulatedOutput);
    setIsCorrect(isCodeCorrect);
    setErrors(newErrors);
    setSuggestions(newSuggestions);
    
    if (isCodeCorrect) {
      setFeedback('✓ 代码执行成功！结果正确');
    } else {
      setFeedback('✗ 代码运行完成，但存在一些问题需要修复');
    }
  };

  const simulatePythonOutput = (pythonCode: string): string => {
    const lowerCode = pythonCode.toLowerCase();
    
    if (lowerCode.includes('read_csv')) {
      return `   name  age  score
0  Alice   20     85
1    Bob   21     90
2  Carol   22     75
3  David   23     80
4  Emily   24     95`;
    }
    
    if (lowerCode.includes('mean') || lowerCode.includes('average')) {
      return `age      22.0
score    85.0
dtype: float64`;
    }
    
    if (lowerCode.includes('group')) {
      return `         age  score
name             
Alice     20     85
Bob       21     90
Carol     22     75
David     23     80
Emily     24     95`;
    }

    if (lowerCode.includes('numpy') || lowerCode.includes('np.')) {
      return `array([0.123, 0.456, 0.789])
Shape: (3,)`;
    }
    
    return `代码执行成功！
已加载: 5行 x 3列数据
处理时间: 0.02秒`;
  };

  const simulateSQLResult = (sqlCode: string): string => {
    const lowerCode = sqlCode.toLowerCase();
    
    if (lowerCode.includes('select') && lowerCode.includes('from')) {
      return ` id |  name  | age | score 
----+--------+-----+-------
  1 | Alice  |  20 |    85
  2 | Bob    |  21 |    90
  3 | Carol  |  22 |    75
  4 | David  |  23 |    80
  5 | Emily  |  24 |    95
(5 rows)`;
    }
    
    if (lowerCode.includes('join')) {
      return ` user_id | order_id | amount |  name  
---------+----------+--------+--------
      1 |      101 |  19.99 | Alice
      1 |      102 |  29.99 | Alice
      2 |      103 |  39.99 | Bob
(3 rows)`;
    }
    
    if (lowerCode.includes('group by') || lowerCode.includes('count')) {
      return ` name  | count | avg_score 
-------+-------+-----------
 Alice |     2 |      87.5
 Bob   |     1 |      90.0
 Carol |     1 |      75.0
(3 rows)`;
    }
    
    return `Query executed successfully
Result: 5 rows returned
Time: 0.001s`;
  };

  const handleReset = () => {
    setCode(initialCode);
    setIsCorrect(null);
    setFeedback('');
    setErrors([]);
    setSuggestions([]);
    setShowAnswer(false);
    setOutput('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="border-2 border-amber-200 rounded-xl overflow-hidden bg-gray-900">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm ml-2">
            {language === 'python' ? '🐍 Python' : language === 'sql' ? '📊 SQL' : '📝 Excel'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title="复制代码"
          >
            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={placeholder}
        className="w-full h-48 bg-gray-900 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none"
        spellCheck={false}
      />

      {output && (
        <div className="bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-700">
            Output
          </div>
          <pre className="p-4 text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto max-h-32">
            {output}
          </pre>
        </div>
      )}

      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <button
            onClick={runCode}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
          >
            <Play className="w-4 h-4" />
            <span>运行代码</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>重置</span>
          </button>
        </div>
        
        {isCorrect !== null && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
            isCorrect ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {isCorrect ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">{isCorrect ? '通过' : '待检查'}</span>
          </div>
        )}
      </div>

      {feedback && (
        <div className={`px-4 py-3 text-sm ${
          isCorrect ? 'bg-green-50 text-green-700 border-t border-green-200' : 'bg-yellow-50 text-yellow-700 border-t border-yellow-200'
        }`}>
          <div className="flex items-center gap-2">
            {isCorrect ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span className="font-medium">{feedback}</span>
          </div>
        </div>
      )}

      {errors.length > 0 && (
        <div className="px-4 py-3 bg-red-50 border-t border-red-200">
          <div className="mb-2">
            <span className="text-xs font-bold text-red-700 uppercase">提示</span>
            <ul className="mt-1 space-y-1">
              {errors.map((err, i) => (
                <li key={i} className="text-sm text-red-600 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{err}</span>
                </li>
              ))}
            </ul>
          </div>
          {suggestions.length > 0 && (
            <div className="border-t border-red-200 pt-2 mt-2">
              <span className="text-xs font-bold text-blue-700 uppercase">建议</span>
              <ul className="mt-1 space-y-1">
                {suggestions.map((sug, i) => (
                  <li key={i} className="text-sm text-blue-600 flex items-start">
                    <Lightbulb className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{sug}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {referenceAnswer && (
        <div className="px-4 py-3 bg-gray-700 border-t border-gray-600">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
          >
            {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswer ? '隐藏参考答案' : '查看参考答案'}</span>
          </button>
          
          {showAnswer && (
            <div className="mt-3 p-3 bg-gray-800 rounded-lg">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                {referenceAnswer}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
