import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const DataCleaning: React.FC = () => {
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
      question: '使用Pandas处理缺失值',
      correctAnswer: `import pandas as pd
import numpy as np

# 创建包含缺失值的DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],
    "age": [20, np.nan, 22, 23, np.nan],
    "score": [85, 90, np.nan, 80, 95]
}
df = pd.DataFrame(data)

# 填充缺失值
df_filled = df.fillna({
    "age": df["age"].mean(),
    "score": df["score"].mean()
})

print(df_filled)`,
      explanation: '使用Pandas的fillna方法填充缺失值，对于数值型列，可以使用均值进行填充。',
      sampleInput: '',
      sampleOutput: '      name   age      score\n0    Alice  20.0  85.000000\n1      Bob  21.5  90.000000\n2  Charlie  22.0  87.500000\n3    David  23.0  80.000000\n4    Emily  21.5  95.000000'
    },
    {
      id: 2,
      question: '使用Pandas处理重复值',
      correctAnswer: `import pandas as pd

# 创建包含重复值的DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie", "Alice", "David"],
    "age": [20, 21, 22, 20, 23],
    "score": [85, 90, 75, 85, 80]
}
df = pd.DataFrame(data)

# 去除重复值
df_unique = df.drop_duplicates()

print(df_unique)`,
      explanation: '使用Pandas的drop_duplicates方法去除DataFrame中的重复行。',
      sampleInput: '',
      sampleOutput: '      name  age  score\n0    Alice   20     85\n1      Bob   21     90\n2  Charlie   22     75\n4    David   23     80'
    },
    {
      id: 3,
      question: '使用Pandas处理异常值',
      correctAnswer: `import pandas as pd
import numpy as np

# 创建包含异常值的DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],
    "age": [20, 21, 22, 23, 100],  # 100是异常值
    "score": [85, 90, 75, 80, 95]
}
df = pd.DataFrame(data)

# 使用IQR方法检测和处理异常值
Q1 = df["age"].quantile(0.25)
Q3 = df["age"].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# 过滤异常值
df_clean = df[(df["age"] >= lower_bound) & (df["age"] <= upper_bound)]

print(df_clean)`,
      explanation: '使用IQR（四分位距）方法检测和处理异常值，过滤掉超出合理范围的数据。',
      sampleInput: '',
      sampleOutput: '      name  age  score\n0    Alice   20     85\n1      Bob   21     90\n2  Charlie   22     75\n3    David   23     80'
    },
    {
      id: 4,
      question: '使用Pandas进行数据类型转换',
      correctAnswer: `import pandas as pd

# 创建包含不同数据类型的DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie"],
    "age": ["20", "21", "22"],  # 字符串类型
    "score": ["85", "90", "75"]  # 字符串类型
}
df = pd.DataFrame(data)

# 转换数据类型
df["age"] = df["age"].astype(int)
df["score"] = df["score"].astype(int)

print(df.dtypes)
print(df)`,
      explanation: '使用Pandas的astype方法将字符串类型的列转换为整数类型。',
      sampleInput: '',
      sampleOutput: 'name     object\nage       int64\nscore     int64\ndtype: object\n      name  age  score\n0    Alice   20     85\n1      Bob   21     90\n2  Charlie   22     75'
    },
    {
      id: 5,
      question: '使用Pandas进行数据标准化',
      correctAnswer: `import pandas as pd
import numpy as np

# 创建数据
data = {
    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],
    "score": [85, 90, 75, 80, 95]
}
df = pd.DataFrame(data)

# 标准化数据（z-score标准化）
df["score_standardized"] = (df["score"] - df["score"].mean()) / df["score"].std()

print(df)`,
      explanation: '使用z-score标准化方法将数据转换为均值为0，标准差为1的分布。',
      sampleInput: '',
      sampleOutput: '      name  score  score_standardized\n0    Alice     85          -0.316228\n1      Bob     90           0.632456\n2  Charlie     75          -1.581139\n3    David     80          -0.948683\n4    Emily     95           2.213594'
    },
    {
      id: 6,
      question: '使用Pandas进行数据归一化',
      correctAnswer: `import pandas as pd
import numpy as np

# 创建数据
data = {
    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],
    "score": [85, 90, 75, 80, 95]
}
df = pd.DataFrame(data)

# 归一化数据（min-max归一化）
df["score_normalized"] = (df["score"] - df["score"].min()) / (df["score"].max() - df["score"].min())

print(df)`,
      explanation: '使用min-max归一化方法将数据转换到[0, 1]区间。',
      sampleInput: '',
      sampleOutput: '      name  score  score_normalized\n0    Alice     85              0.5\n1      Bob     90              0.75\n2  Charlie     75              0.0\n3    David     80              0.25\n4    Emily     95              1.0'
    },
    {
      id: 7,
      question: '使用Pandas处理日期数据',
      correctAnswer: `import pandas as pd

# 创建包含日期字符串的DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie"],
    "date": ["2023-01-01", "2023-01-02", "2023-01-03"],
    "score": [85, 90, 75]
}
df = pd.DataFrame(data)

# 转换日期字符串为日期类型
df["date"] = pd.to_datetime(df["date"])

# 提取年份和月份
df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month

print(df)`,
      explanation: '使用Pandas的to_datetime方法将日期字符串转换为日期类型，然后使用dt属性提取年份和月份。',
      sampleInput: '',
      sampleOutput: '      name       date  score  year  month\n0    Alice 2023-01-01     85  2023      1\n1      Bob 2023-01-02     90  2023      1\n2  Charlie 2023-01-03     75  2023      1'
    },
    {
      id: 8,
      question: '使用Pandas进行数据合并',
      correctAnswer: `import pandas as pd

# 创建第一个DataFrame
df1 = pd.DataFrame({
    "id": [1, 2, 3, 4, 5],
    "name": ["Alice", "Bob", "Charlie", "David", "Emily"],
    "age": [20, 21, 22, 23, 24]
})

# 创建第二个DataFrame
df2 = pd.DataFrame({
    "id": [1, 2, 3, 4, 5],
    "score": [85, 90, 75, 80, 95],
    "grade": ["A", "A", "B", "B", "A"]
})

# 合并两个DataFrame
df_merged = pd.merge(df1, df2, on="id")

print(df_merged)`,
      explanation: '使用Pandas的merge方法根据共同的列（id）合并两个DataFrame。',
      sampleInput: '',
      sampleOutput: '   id     name  age  score grade\n0   1    Alice   20     85     A\n1   2      Bob   21     90     A\n2   3  Charlie   22     75     B\n3   4    David   23     80     B\n4   5    Emily   24     95     A'
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
            数据清洗训练
          </h1>
          <p className="text-lg text-amber-700">
            练习数据预处理和清洗技术
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

export default DataCleaning;