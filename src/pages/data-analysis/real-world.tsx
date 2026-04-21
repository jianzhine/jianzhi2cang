import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const RealWorld: React.FC = () => {
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
      question: '分析销售数据并生成销售报告',
      correctAnswer: `import pandas as pd
import matplotlib.pyplot as plt

# 读取销售数据
df = pd.read_csv("sales_data.csv")

# 计算总销售额
total_sales = df["sales"].sum()

# 计算每月销售额
monthly_sales = df.groupby("month")["sales"].sum()

# 计算每个产品的销售额
product_sales = df.groupby("product")["sales"].sum()

# 生成销售报告
print("===== 销售报告 =====")
print(f"总销售额: {total_sales}")
print("\n每月销售额:")
print(monthly_sales)
print("\n每个产品的销售额:")
print(product_sales)

# 绘制销售趋势图
plt.figure(figsize=(10, 6))
monthly_sales.plot(kind="bar")
plt.title("月度销售趋势")
plt.xlabel("月份")
plt.ylabel("销售额")
plt.show()`,
      explanation: '使用Pandas读取销售数据，计算总销售额、每月销售额和每个产品的销售额，然后生成销售报告并绘制销售趋势图。',
      sampleInput: '',
      sampleOutput: '===== 销售报告 =====\n总销售额: 15000\n\n每月销售额:\nmonth\n1    3000\n2    2500\n3    3500\n4    2000\n5    4000\nName: sales, dtype: int64\n\n每个产品的销售额:\nproduct\nA    5000\nB    3000\nC    7000\nName: sales, dtype: int64\n\n图表显示: 月度销售趋势柱状图'
    },
    {
      id: 2,
      question: '分析学生成绩数据并生成分析报告',
      correctAnswer: `import pandas as pd
import numpy as np

# 读取学生成绩数据
df = pd.read_csv("student_scores.csv")

# 计算平均分
avg_score = df["score"].mean()

# 计算最高分和最低分
highest_score = df["score"].max()
lowest_score = df["score"].min()

# 计算及格率（假设60分为及格）
pass_rate = (df["score"] >= 60).sum() / len(df) * 100

# 按班级分组计算平均分
class_avg = df.groupby("class")["score"].mean()

# 生成分析报告
print("===== 学生成绩分析报告 =====")
print(f"平均分: {avg_score:.2f}")
print(f"最高分: {highest_score}")
print(f"最低分: {lowest_score}")
print(f"及格率: {pass_rate:.2f}%")
print("\n各班平均分:")
print(class_avg)`,
      explanation: '使用Pandas读取学生成绩数据，计算平均分、最高分、最低分和及格率，然后按班级分组计算平均分并生成分析报告。',
      sampleInput: '',
      sampleOutput: '===== 学生成绩分析报告 =====\n平均分: 82.50\n最高分: 98\n最低分: 65\n及格率: 100.00%\n\n各班平均分:\nclass\nA    85.0\nB    80.0\nName: score, dtype: float64'
    },
    {
      id: 3,
      question: '分析网站访问数据并生成流量报告',
      correctAnswer: `import pandas as pd
import matplotlib.pyplot as plt

# 读取网站访问数据
df = pd.read_csv("website_traffic.csv")

# 计算总访问量
total_visits = len(df)

# 计算平均停留时间
avg_duration = df["duration"].mean()

# 按来源渠道分组计算访问量
source_visits = df.groupby("source").size()

# 按日期分组计算访问量
daily_visits = df.groupby("date").size()

# 生成流量报告
print("===== 网站流量报告 =====")
print(f"总访问量: {total_visits}")
print(f"平均停留时间: {avg_duration:.2f}秒")
print("\n各来源渠道访问量:")
print(source_visits)
print("\n每日访问量:")
print(daily_visits)

# 绘制每日访问量趋势图
plt.figure(figsize=(10, 6))
daily_visits.plot(kind="line")
plt.title("每日访问量趋势")
plt.xlabel("日期")
plt.ylabel("访问量")
plt.show()`,
      explanation: '使用Pandas读取网站访问数据，计算总访问量、平均停留时间，按来源渠道和日期分组计算访问量，然后生成流量报告并绘制每日访问量趋势图。',
      sampleInput: '',
      sampleOutput: '===== 网站流量报告 =====\n总访问量: 1000\n平均停留时间: 120.50秒\n\n各来源渠道访问量:\nsource\ndirect    300\ngoogle    400\nsocial    200\nother     100\ndtype: int64\n\n每日访问量:\ndate\n2023-01-01    200\n2023-01-02    180\n2023-01-03    220\n2023-01-04    200\n2023-01-05    200\ndtype: int64\n\n图表显示: 每日访问量趋势折线图'
    },
    {
      id: 4,
      question: '分析电商平台用户购买数据并生成用户分析报告',
      correctAnswer: `import pandas as pd
import numpy as np

# 读取用户购买数据
df = pd.read_csv("user_purchase_data.csv")

# 计算总订单数
total_orders = len(df)

# 计算总销售额
total_sales = df["amount"].sum()

# 计算平均订单金额
avg_order_amount = df["amount"].mean()

# 计算每个用户的购买次数
user_purchase_count = df.groupby("user_id").size()

# 计算每个用户的总购买金额
user_total_amount = df.groupby("user_id")["amount"].sum()

# 生成用户分析报告
print("===== 用户购买分析报告 =====")
print(f"总订单数: {total_orders}")
print(f"总销售额: {total_sales}")
print(f"平均订单金额: {avg_order_amount:.2f}")
print(f"活跃用户数: {len(user_purchase_count)}")
print(f"平均每个用户购买次数: {user_purchase_count.mean():.2f}")
print(f"平均每个用户总购买金额: {user_total_amount.mean():.2f}")`,
      explanation: '使用Pandas读取用户购买数据，计算总订单数、总销售额、平均订单金额，分析每个用户的购买次数和总购买金额，然后生成用户分析报告。',
      sampleInput: '',
      sampleOutput: '===== 用户购买分析报告 =====\n总订单数: 500\n总销售额: 50000\n平均订单金额: 100.00\n活跃用户数: 200\n平均每个用户购买次数: 2.50\n平均每个用户总购买金额: 250.00'
    },
    {
      id: 5,
      question: '分析股票数据并生成趋势分析报告',
      correctAnswer: `import pandas as pd
import matplotlib.pyplot as plt

# 读取股票数据
df = pd.read_csv("stock_data.csv")

# 计算每日收益率
df["return"] = df["close"].pct_change() * 100

# 计算平均收益率
avg_return = df["return"].mean()

# 计算最大涨幅和最大跌幅
max_gain = df["return"].max()
max_loss = df["return"].min()

# 计算波动率（标准差）
volatility = df["return"].std()

# 生成趋势分析报告
print("===== 股票趋势分析报告 =====")
print(f"平均日收益率: {avg_return:.2f}%")
print(f"最大涨幅: {max_gain:.2f}%")
print(f"最大跌幅: {max_loss:.2f}%")
print(f"波动率: {volatility:.2f}%")

# 绘制收盘价趋势图
plt.figure(figsize=(10, 6))
plt.plot(df["date"], df["close"])
plt.title("股票收盘价趋势")
plt.xlabel("日期")
plt.ylabel("收盘价")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`,
      explanation: '使用Pandas读取股票数据，计算每日收益率、平均收益率、最大涨幅、最大跌幅和波动率，然后生成趋势分析报告并绘制收盘价趋势图。',
      sampleInput: '',
      sampleOutput: '===== 股票趋势分析报告 =====\n平均日收益率: 0.50%\n最大涨幅: 5.20%\n最大跌幅: -3.80%\n波动率: 2.10%\n\n图表显示: 股票收盘价趋势折线图'
    },
    {
      id: 6,
      question: '分析天气数据并生成天气分析报告',
      correctAnswer: `import pandas as pd
import matplotlib.pyplot as plt

# 读取天气数据
df = pd.read_csv("weather_data.csv")

# 计算平均温度
avg_temp = df["temperature"].mean()

# 计算最高温度和最低温度
max_temp = df["temperature"].max()
min_temp = df["temperature"].min()

# 计算平均湿度
avg_humidity = df["humidity"].mean()

# 按月份分组计算平均温度
monthly_avg_temp = df.groupby("month")["temperature"].mean()

# 生成天气分析报告
print("===== 天气分析报告 =====")
print(f"平均温度: {avg_temp:.2f}°C")
print(f"最高温度: {max_temp}°C")
print(f"最低温度: {min_temp}°C")
print(f"平均湿度: {avg_humidity:.2f}%")
print("\n各月平均温度:")
print(monthly_avg_temp)

# 绘制月平均温度趋势图
plt.figure(figsize=(10, 6))
monthly_avg_temp.plot(kind="bar")
plt.title("月平均温度趋势")
plt.xlabel("月份")
plt.ylabel("平均温度 (°C)")
plt.show()`,
      explanation: '使用Pandas读取天气数据，计算平均温度、最高温度、最低温度和平均湿度，按月份分组计算平均温度，然后生成天气分析报告并绘制月平均温度趋势图。',
      sampleInput: '',
      sampleOutput: '===== 天气分析报告 =====\n平均温度: 22.50°C\n最高温度: 35°C\n最低温度: 10°C\n平均湿度: 65.00%\n\n各月平均温度:\nmonth\n1     10.0\n2     12.0\n3     15.0\n4     18.0\n5     22.0\n6     26.0\n7     30.0\n8     32.0\n9     28.0\n10    24.0\n11    18.0\n12    12.0\nName: temperature, dtype: float64\n\n图表显示: 月平均温度趋势柱状图'
    },
    {
      id: 7,
      question: '分析员工数据并生成人力资源分析报告',
      correctAnswer: `import pandas as pd
import numpy as np

# 读取员工数据
df = pd.read_csv("employee_data.csv")

# 计算员工总数
total_employees = len(df)

# 计算平均薪资
avg_salary = df["salary"].mean()

# 计算平均工作年限
avg_tenure = df["tenure"].mean()

# 按部门分组计算员工数
department_count = df.groupby("department").size()

# 按部门分组计算平均薪资
department_avg_salary = df.groupby("department")["salary"].mean()

# 生成人力资源分析报告
print("===== 人力资源分析报告 =====")
print(f"员工总数: {total_employees}")
print(f"平均薪资: {avg_salary:.2f}")
print(f"平均工作年限: {avg_tenure:.2f}年")
print("\n各部门员工数:")
print(department_count)
print("\n各部门平均薪资:")
print(department_avg_salary)`,
      explanation: '使用Pandas读取员工数据，计算员工总数、平均薪资和平均工作年限，按部门分组计算员工数和平均薪资，然后生成人力资源分析报告。',
      sampleInput: '',
      sampleOutput: '===== 人力资源分析报告 =====\n员工总数: 100\n平均薪资: 6000.00\n平均工作年限: 3.50年\n\n各部门员工数:\ndepartment\nengineering    40\nsales          30\nmarketing      20\nhr             10\ndtype: int64\n\n各部门平均薪资:\ndepartment\nengineering    7000.0\nsales          5500.0\nmarketing      5000.0\nhr             4500.0\nName: salary, dtype: float64'
    },
    {
      id: 8,
      question: '分析客户评论数据并生成情感分析报告',
      correctAnswer: `import pandas as pd
from collections import Counter

# 读取客户评论数据
df = pd.read_csv("customer_reviews.csv")

# 计算评论总数
total_reviews = len(df)

# 计算平均评分
avg_rating = df["rating"].mean()

# 分析情感分布（假设评分1-2为负面，3为中性，4-5为正面）
negative_reviews = len(df[df["rating"] <= 2])
neutral_reviews = len(df[df["rating"] == 3])
positive_reviews = len(df[df["rating"] >= 4])

# 分析评论中最常见的关键词（简单实现）
all_comments = " ".join(df["comment"].tolist())
words = all_comments.lower().split()
common_words = Counter(words).most_common(10)

# 生成情感分析报告
print("===== 客户评论情感分析报告 =====")
print(f"评论总数: {total_reviews}")
print(f"平均评分: {avg_rating:.2f}")
print(f"负面评论数: {negative_reviews} ({negative_reviews/total_reviews*100:.2f}%)")
print(f"中性评论数: {neutral_reviews} ({neutral_reviews/total_reviews*100:.2f}%)")
print(f"正面评论数: {positive_reviews} ({positive_reviews/total_reviews*100:.2f}%)")
print("\n最常见的关键词:")
for word, count in common_words:
    print(f"{word}: {count}")`,
      explanation: '使用Pandas读取客户评论数据，计算评论总数、平均评分，分析情感分布（正面、中性、负面），提取最常见的关键词，然后生成情感分析报告。',
      sampleInput: '',
      sampleOutput: '===== 客户评论情感分析报告 =====\n评论总数: 100\n平均评分: 4.20\n负面评论数: 10 (10.00%)\n中性评论数: 20 (20.00%)\n正面评论数: 70 (70.00%)\n\n最常见的关键词:\n产品: 50\n服务: 40\n质量: 35\n满意: 30\n好: 25\n价格: 20\n物流: 15\n包装: 10\n速度: 8\n体验: 5'
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
            真实项目训练
          </h1>
          <p className="text-lg text-amber-700">
            真实数据分析项目实战
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

export default RealWorld;