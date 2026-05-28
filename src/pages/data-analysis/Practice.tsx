import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, CheckCircle, 
  Lightbulb, Target, Code, Database
} from 'lucide-react';
import { allBranchContent } from '@/data/allBranchContent';
import CodeEditor from '@/components/CodeEditor';
import { getLanguageFromTitle, getPlaceholder } from '@/utils/practiceUtils';

const Practice: React.FC = () => {
  const { sectionId, branchId } = useParams<{
    sectionId: string;
    branchId: string;
  }>();
  
  const currentBranch = allBranchContent[branchId || ''];

  if (!currentBranch) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">模块不存在</h2>
          <Link to="/data-analysis" className="text-amber-700 hover:text-green-700">
            返回主页
          </Link>
        </div>
      </div>
    );
  }

  const practices = currentBranch.practices;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* 顶部导航 */}
        <div className="mb-8">
          <Link 
            to={`/data-analysis/${sectionId}/${branchId}`}
            className="inline-flex items-center text-amber-700 hover:text-green-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回学习内容</span>
          </Link>
          
          <div className={`bg-gradient-to-r ${currentBranch.color} text-white rounded-2xl p-6 shadow-lg`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Code className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm opacity-90">代码练习</p>
                <h1 className="text-2xl font-bold">{currentBranch.title}</h1>
                <p className="opacity-90 text-sm mt-1">共 {practices.length} 道练习题</p>
              </div>
            </div>
          </div>
        </div>

        {/* 知识点回顾 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
            本模块知识点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentBranch.knowledgePoints.map((kp, idx) => (
              <div key={idx} className="bg-amber-50 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-amber-200 text-amber-700 rounded-full text-xs flex items-center justify-center mr-2">
                    {idx + 1}
                  </span>
                  {kp.title}
                </h3>
                <p className="text-amber-600 text-sm line-clamp-2">{kp.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 练习题目 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2 text-red-500" />
            练习题目
          </h2>
          
          {practices.length > 0 ? (
            <div className="space-y-8">
              {practices.map((practice, idx) => (
                <div key={idx} className="border-2 border-amber-200 rounded-xl overflow-hidden">
                  <div className="bg-amber-50 p-4 border-b border-amber-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          practice.type === 'basic' ? 'bg-green-100 text-green-700' :
                          practice.type === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {practice.type === 'basic' ? '基础' : practice.type === 'intermediate' ? '进阶' : '综合'}
                        </span>
                        <h3 className="text-lg font-bold text-amber-800">{practice.title}</h3>
                      </div>
                    </div>
                    <p className="text-amber-600 mt-2 ml-11">{practice.description}</p>
                  </div>
                  
                  <div className="p-6 bg-white">
                    {practice.dataSource && (
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <h4 className="text-gray-300 text-sm font-bold mb-2 flex items-center">
                          <Database className="w-4 h-4 mr-2" />
                          数据源
                        </h4>
                        <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                          {practice.dataSource}
                        </pre>
                      </div>
                    )}
                    
                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      题目要求
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {practice.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-medium">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-green-500" />
                      你的答案
                    </h4>
                    <CodeEditor
                      initialCode={practice.initialCode}
                      placeholder={practice.initialCode || getPlaceholder(practice.language || getLanguageFromTitle(practice.title))}
                      language={practice.language || getLanguageFromTitle(practice.title)}
                      requirements={practice.requirements}
                      expectedPattern={practice.expectedPattern}
                      referenceAnswer={practice.referenceAnswer}
                    />

                    {practice.scoringCriteria.length > 0 && (
                      <div className="mt-4 bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-bold text-gray-600 mb-2">评分标准</h4>
                        <ul className="space-y-1">
                          {practice.scoringCriteria.map((criteria, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">暂无练习题目</h3>
            </div>
          )}
        </div>

        {/* 底部导航 */}
        <div className="flex justify-center">
          <Link
            to={`/data-analysis/${sectionId}/${branchId}`}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回继续学习
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;
