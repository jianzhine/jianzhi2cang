import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BarChart, Database, Code, CheckCircle } from 'lucide-react';

const DataAnalysis: React.FC = () => {
  const trainingSections = [
    // 第一阶段：Python基础
    {
      id: 'basic',
      title: 'Python基础训练',
      description: '变量、数据类型、控制流等基础概念',
      icon: <Code className="w-8 h-8" />,
      phase: '第一阶段',
      level: '入门'
    },
    {
      id: 'functions',
      title: '函数与模块训练',
      description: '函数定义、模块导入、异常处理等',
      icon: <Code className="w-8 h-8" />,
      phase: '第一阶段',
      level: '入门'
    },
    // 第二阶段：数据结构
    {
      id: 'data-structures',
      title: '数据结构训练',
      description: '列表、字典、集合等数据结构操作',
      icon: <Database className="w-8 h-8" />,
      phase: '第二阶段',
      level: '基础'
    },
    {
      id: 'advanced-data-structures',
      title: '高级数据结构训练',
      description: '栈、队列、树等高级数据结构',
      icon: <Database className="w-8 h-8" />,
      phase: '第二阶段',
      level: '基础'
    },
    // 第三阶段：数据分析基础
    {
      id: 'numpy',
      title: 'NumPy训练',
      description: 'NumPy数组操作和数学计算',
      icon: <BarChart className="w-8 h-8" />,
      phase: '第三阶段',
      level: '进阶'
    },
    {
      id: 'pandas',
      title: 'Pandas训练',
      description: 'Pandas数据处理和分析',
      icon: <BarChart className="w-8 h-8" />,
      phase: '第三阶段',
      level: '进阶'
    },
    // 第四阶段：数据分析进阶
    {
      id: 'data-visualization',
      title: '数据可视化训练',
      description: 'Matplotlib、Seaborn等库的使用',
      icon: <BarChart className="w-8 h-8" />,
      phase: '第四阶段',
      level: '高级'
    },
    {
      id: 'data-cleaning',
      title: '数据清洗训练',
      description: '数据预处理和清洗技术',
      icon: <BarChart className="w-8 h-8" />,
      phase: '第四阶段',
      level: '高级'
    },
    // 第五阶段：综合应用
    {
      id: 'practice',
      title: '综合练习',
      description: '实际数据分析案例练习',
      icon: <CheckCircle className="w-8 h-8" />,
      phase: '第五阶段',
      level: '综合'
    },
    {
      id: 'real-world',
      title: '真实项目训练',
      description: '真实数据分析项目实战',
      icon: <CheckCircle className="w-8 h-8" />,
      phase: '第五阶段',
      level: '综合'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            数据分析技术训练
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            强化Python技能，通过自动出题和批改系统提升数据分析能力
          </p>
        </div>

        {/* 训练部分卡片 */}
        <div className="space-y-12">
          {/* 第一阶段 */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">1</span>
              第一阶段：Python基础
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSections.filter(section => section.phase === '第一阶段').map((section) => (
                <Link
                  key={section.id}
                  to={`/data-analysis/${section.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300">
                        <div className="text-amber-700 group-hover:text-green-700 transition-colors duration-300">
                          {section.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        {section.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-amber-600 group-hover:text-green-600 transition-colors duration-300 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                      <span className="font-medium text-sm">开始训练</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 第二阶段 */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">2</span>
              第二阶段：数据结构
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSections.filter(section => section.phase === '第二阶段').map((section) => (
                <Link
                  key={section.id}
                  to={`/data-analysis/${section.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300">
                        <div className="text-amber-700 group-hover:text-green-700 transition-colors duration-300">
                          {section.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        {section.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-amber-600 group-hover:text-green-600 transition-colors duration-300 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                      <span className="font-medium text-sm">开始训练</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 第三阶段 */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">3</span>
              第三阶段：数据分析基础
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSections.filter(section => section.phase === '第三阶段').map((section) => (
                <Link
                  key={section.id}
                  to={`/data-analysis/${section.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300">
                        <div className="text-amber-700 group-hover:text-green-700 transition-colors duration-300">
                          {section.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        {section.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-amber-600 group-hover:text-green-600 transition-colors duration-300 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                      <span className="font-medium text-sm">开始训练</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 第四阶段 */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">4</span>
              第四阶段：数据分析进阶
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSections.filter(section => section.phase === '第四阶段').map((section) => (
                <Link
                  key={section.id}
                  to={`/data-analysis/${section.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300">
                        <div className="text-amber-700 group-hover:text-green-700 transition-colors duration-300">
                          {section.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        {section.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-amber-600 group-hover:text-green-600 transition-colors duration-300 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                      <span className="font-medium text-sm">开始训练</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 第五阶段 */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">5</span>
              第五阶段：综合应用
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSections.filter(section => section.phase === '第五阶段').map((section) => (
                <Link
                  key={section.id}
                  to={`/data-analysis/${section.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300">
                        <div className="text-amber-700 group-hover:text-green-700 transition-colors duration-300">
                          {section.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        {section.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 group-hover:text-green-800 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-amber-600 group-hover:text-green-600 transition-colors duration-300 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                      <span className="font-medium text-sm">开始训练</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 模块说明 */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-amber-100">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">模块说明</h2>
          <ul className="space-y-3 text-amber-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>自动出题系统会根据不同难度生成Python编程题目</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>提交代码后会自动批改并显示详细的错误信息</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>每个训练部分都有独立的子页面，专注于特定技能</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>完成练习后可以查看详细的结果和解析</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;