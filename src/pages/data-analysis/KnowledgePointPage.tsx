import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Check, Home, GraduationCap,
  CheckCircle, AlertTriangle, FileText, Lightbulb,
  Play, Database, Code, Download, ChevronLeft, ChevronRight
} from 'lucide-react';
import { allBranchContent } from '@/data/allBranchContent';

const KnowledgePointPage: React.FC = () => {
  const { branchId, knowledgeIndex } = useParams<{ branchId: string; knowledgeIndex: string }>();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const currentBranch = allBranchContent[branchId || ''];
  const currentIndex = parseInt(knowledgeIndex || '0');
  const currentKnowledge = currentBranch?.knowledgePoints[currentIndex];
  const prevKnowledge = currentBranch?.knowledgePoints[currentIndex - 1];
  const nextKnowledge = currentBranch?.knowledgePoints[currentIndex + 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [knowledgeIndex]);

  if (!currentBranch || !currentKnowledge) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">页面未找到</h2>
          <p className="text-amber-600 mb-6">该知识点内容不存在</p>
          <Link 
            to={`/data-analysis/${branchId}`}
            className="inline-flex items-center text-amber-700 hover:text-green-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回分支页面</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* 顶部固定导航栏 */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-amber-200 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              to={`/data-analysis/${branchId}`}
              className="flex items-center text-amber-700 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="hidden md:inline">返回分支页面</span>
              <span className="md:hidden">返回</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-amber-700 font-medium hidden md:inline">
                {currentBranch.title}
              </span>
              <span className="text-xs text-amber-500">
                知识点 {currentIndex + 1}/{currentBranch.knowledgePoints.length}
              </span>
            </div>

            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              }`}
            >
              <CheckCircle className={`w-5 h-5 mr-2 ${isCompleted ? '' : ''}`} />
              <span className="hidden md:inline">{isCompleted ? '已完成' : '标记完成'}</span>
              <span className="md:hidden">{isCompleted ? '✓' : '完成'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 知识点标题 */}
        <div className={`bg-gradient-to-r ${currentBranch.color} text-white rounded-2xl p-8 mb-8 shadow-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{currentIndex + 1}</span>
            </div>
            <div>
              <p className="text-sm opacity-90">{currentBranch.section}</p>
              <h1 className="text-3xl md:text-4xl font-bold">{currentKnowledge.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center bg-white/20 px-3 py-1 rounded-full">
              <GraduationCap className="w-4 h-4 mr-2" />
              {currentBranch.title}
            </span>
            <span className="flex items-center bg-white/20 px-3 py-1 rounded-full">
              {currentBranch.duration}
            </span>
          </div>
        </div>

        {/* 知识点内容 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-amber-800">核心内容</h2>
          </div>
          <p className="text-lg text-amber-700 leading-relaxed mb-8">
            {currentKnowledge.content}
          </p>

          {/* 核心要点 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border-2 border-green-200">
            <div className="flex items-center mb-4">
              <Check className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-green-800">核心要点</h3>
            </div>
            <ul className="space-y-3">
              {currentKnowledge.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start text-green-700">
                  <div className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 案例分析 */}
          {currentKnowledge.caseStudy && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">案例分析</h3>
              </div>
              <pre className="text-sm text-blue-700 whitespace-pre-wrap font-mono bg-white p-4 rounded-lg leading-relaxed">
                {currentKnowledge.caseStudy}
              </pre>
            </div>
          )}

          {/* 避坑指南 */}
          {currentKnowledge.pitfalls && (
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 mb-8 border-2 border-red-200">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">避坑指南</h3>
              </div>
              <ul className="space-y-3">
                {currentKnowledge.pitfalls.map((pitfall, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                      !
                    </div>
                    <span className="text-base leading-relaxed">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 实战提示 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center mb-4">
              <Play className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-purple-800">实战提示</h3>
            </div>
            <p className="text-purple-700 leading-relaxed">
              完成本知识点的学习后，建议完成对应的练习题来巩固所学知识。
              点击下方"开始练习"按钮，进入练习模块进行实战训练。
            </p>
          </div>
        </div>

        {/* 相关资源 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <div className="flex items-center mb-6">
            <Download className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold text-amber-800">配套资源</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBranch.resources.slice(0, 2).map((resource, index) => (
              <div 
                key={index}
                className="border-2 border-amber-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center mb-2">
                  {resource.type === 'formula' && <FileText className="w-5 h-5 text-blue-500 mr-2" />}
                  {resource.type === 'code' && <Code className="w-5 h-5 text-green-500 mr-2" />}
                  {resource.type === 'template' && <Database className="w-5 h-5 text-purple-500 mr-2" />}
                  <h4 className="font-semibold text-amber-800">{resource.title}</h4>
                </div>
                <pre className="text-xs text-amber-700 whitespace-pre-wrap font-mono bg-amber-50 p-2 rounded overflow-x-auto max-h-32">
                  {resource.content.substring(0, 200)}...
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex items-center justify-between gap-4">
          {prevKnowledge ? (
            <Link
              to={`/data-analysis/${branchId}/knowledge/${currentIndex - 1}`}
              className="flex items-center px-6 py-3 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              <div className="text-left">
                <p className="text-xs text-amber-500">上一个知识点</p>
                <p className="font-medium">{prevKnowledge.title}</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            to={`/data-analysis/${branchId}`}
            className="flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            <div className="text-left">
              <p className="text-xs text-green-500">返回</p>
              <p className="font-medium">分支主页</p>
            </div>
          </Link>

          {nextKnowledge ? (
            <Link
              to={`/data-analysis/${branchId}/knowledge/${currentIndex + 1}`}
              className="flex items-center px-6 py-3 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-amber-500">下一个知识点</p>
                <p className="font-medium">{nextKnowledge.title}</p>
              </div>
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* 完成状态提示 */}
        {isCompleted && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 shadow-lg text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">恭喜完成！</h3>
            <p className="opacity-90 mb-4">
              你已经完成了「{currentKnowledge.title}」的学习！
            </p>
            <Link
              to={`/data-analysis/${branchId}`}
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              继续学习下一个内容
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgePointPage;
