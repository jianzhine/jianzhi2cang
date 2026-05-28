import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';
import { allBranchContent, Practice } from '@/data/allBranchContent';
import CodeEditor from '@/components/CodeEditor';

const DataAnalysisTraining: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<{
    key: string;
    name: string;
    practices: Practice[];
  } | null>(null);
  const [currentPractice, setCurrentPractice] = useState<Practice | null>(null);
  const [loading, setLoading] = useState(true);

  const generateQuestion = () => {
    const modules = Object.entries(allBranchContent);
    if (modules.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * modules.length);
    const [key, data] = modules[randomIndex];
    const practices = data.practices;
    
    if (practices.length > 0) {
      const randomPractice = practices[Math.floor(Math.random() * practices.length)];
      setCurrentModule({ key, name: data.title, practices });
      setCurrentPractice(randomPractice);
    }
  };

  useEffect(() => {
    generateQuestion();
    setLoading(false);
  }, []);

  if (loading || !currentModule || !currentPractice) {
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
            数据分析技术训练
          </h1>
          <p className="text-lg text-amber-700 mb-4">
            模块：{currentModule.name} | 共 {currentModule.practices.length} 道练习题
          </p>
        </div>

        {/* 题目卡片 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              currentPractice.type === 'basic' ? 'bg-green-100 text-green-700' :
              currentPractice.type === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {currentPractice.type === 'basic' ? '基础' : 
               currentPractice.type === 'intermediate' ? '进阶' : '综合'}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-amber-800 mb-4">
            {currentPractice.title}
          </h2>
          
          <p className="text-amber-700 mb-6">
            {currentPractice.description}
          </p>

          {/* 数据源 */}
          {currentPractice.dataSource && (
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">数据源：</h4>
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">{currentPractice.dataSource}</pre>
            </div>
          )}

          {/* 题目要求 */}
          <div className="mb-6">
            <h4 className="font-semibold text-amber-800 mb-3">题目要求：</h4>
            <ul className="space-y-2">
              {currentPractice.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start text-amber-700">
                  <span className="mr-2">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 代码编辑器 */}
          <CodeEditor
            initialCode={currentPractice.initialCode}
            language={currentPractice.language}
            requirements={currentPractice.requirements}
            expectedPattern={currentPractice.expectedPattern}
            referenceAnswer={currentPractice.referenceAnswer}
          />

          {/* 换题按钮 */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={generateQuestion}
              className="bg-gradient-to-r from-amber-500 to-green-500 text-white px-8 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-green-600 transition-colors duration-300 flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              换一题
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisTraining;
