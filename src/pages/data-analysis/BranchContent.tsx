import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Check, X, BookOpen, Play, 
  FileText, Download, Clock, Target, CheckCircle,
  ChevronDown, ChevronUp, GraduationCap, AlertTriangle,
  Lightbulb, Code, Database, FileSpreadsheet, ExternalLink,
  BookOpenCheck
} from 'lucide-react';
import { allBranchContent } from '@/data/allBranchContent';
import CodeEditor from '@/components/CodeEditor';
import { getLanguageFromTitle, getPlaceholder } from '@/utils/practiceUtils';

const BranchContent: React.FC = () => {
  const { sectionId, branchId } = useParams<{ sectionId: string; branchId: string }>();
  const [expandedKnowledge, setExpandedKnowledge] = useState<number | null>(null);
  const [expandedPractice, setExpandedPractice] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [completedPractices, setCompletedPractices] = useState<number[]>([]);

  const currentBranch = allBranchContent[branchId || ''];

  if (!currentBranch) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">模块不存在</h2>
          <Link 
            to="/data-analysis" 
            className="inline-flex items-center text-amber-700 hover:text-green-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回训练主页</span>
          </Link>
        </div>
      </div>
    );
  }

  const togglePracticeComplete = (index: number) => {
    if (completedPractices.includes(index)) {
      setCompletedPractices(completedPractices.filter(i => i !== index));
    } else {
      setCompletedPractices([...completedPractices, index]);
    }
  };

  const getPracticeProgress = () => {
    if (currentBranch.practices.length === 0) return 0;
    return Math.round((completedPractices.length / currentBranch.practices.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* 顶部导航 */}
        <div className="mb-8">
          <Link 
            to="/data-analysis" 
            className="inline-flex items-center text-amber-700 hover:text-green-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回训练主页</span>
          </Link>
          
          <div className={`bg-gradient-to-r ${currentBranch.color} text-white rounded-2xl p-6 shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">{currentBranch.sectionTitle}</p>
                <h1 className="text-3xl font-bold">{currentBranch.title}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {currentBranch.duration}
              </span>
              <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                <Target className="w-4 h-4 mr-2" />
                {currentBranch.level}
              </span>
            </div>
          </div>
        </div>

        {/* 学习进度 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-amber-800 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              学习进度
            </h2>
            <span className="text-amber-700 font-medium">{getPracticeProgress()}% 完成</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-500 to-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getPracticeProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* 学前须知 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
            学前须知
          </h2>
          <ul className="space-y-3">
            {currentBranch.prerequisites.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-amber-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 核心教学内容模块 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
            核心教学内容
          </h2>
          
          <div className="space-y-4">
            {currentBranch.knowledgePoints.map((point, index) => (
              <div 
                key={index}
                className="border-2 border-amber-200 rounded-xl overflow-hidden"
              >
                <div 
                  className="p-4 bg-amber-50 cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedKnowledge(expandedKnowledge === index ? null : index)}
                >
                  <div className="flex items-center flex-1">
                    <div className="w-8 h-8 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800">
                      {point.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/data-analysis/${sectionId}/${branchId}/practice`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <Play className="w-4 h-4 mr-1.5" />
                      <span>练习</span>
                    </Link>
                    {expandedKnowledge === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                </div>
                
                {expandedKnowledge === index && (
                  <div className="p-6 space-y-4">
                    {/* 知识点内容 */}
                    <div>
                      <p className="text-amber-700 leading-relaxed">{point.content}</p>
                    </div>
                    
                    {/* 核心要点 */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">核心要点</h4>
                      <ul className="space-y-2">
                        {point.keyPoints.map((kp, i) => (
                          <li key={i} className="flex items-start text-green-700">
                            <Check className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 案例分析 */}
                    {point.caseStudy && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          案例分析
                        </h4>
                        <pre className="text-sm text-blue-700 whitespace-pre-wrap font-mono bg-white p-3 rounded">
                          {point.caseStudy}
                        </pre>
                      </div>
                    )}
                    
                    {/* 避坑指南 */}
                    {point.pitfalls && (
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          避坑指南
                        </h4>
                        <ul className="space-y-2">
                          {point.pitfalls.map((pitfall, i) => (
                            <li key={i} className="flex items-start text-red-700">
                              <X className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                              <span>{pitfall}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 独立页面入口 */}
                    <Link
                      to={`/data-analysis/${sectionId}/${branchId}/knowledge/${index}`}
                      className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-md"
                    >
                      <BookOpenCheck className="w-5 h-5 mr-2" />
                      在独立页面中完整学习此知识点
                      <Play className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 梯度配套练习模块 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-300 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-green-800 flex items-center">
              <Play className="w-6 h-6 mr-2 text-green-500" />
              梯度配套练习
            </h2>
            <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
              {completedPractices.length}/{currentBranch.practices.length} 已完成
            </span>
          </div>
          
          <div className="space-y-6">
            {currentBranch.practices.map((practice, index) => (
              <div 
                key={index}
                className={`border-2 rounded-xl overflow-hidden ${
                  practice.type === 'basic' ? 'border-blue-200' :
                  practice.type === 'intermediate' ? 'border-yellow-200' :
                  'border-red-200'
                }`}
              >
                {/* 练习标题 */}
                <div 
                  className={`p-4 cursor-pointer flex items-center justify-between ${
                    practice.type === 'basic' ? 'bg-blue-50' :
                    practice.type === 'intermediate' ? 'bg-yellow-50' :
                    'bg-red-50'
                  }`}
                  onClick={() => setExpandedPractice(expandedPractice === index ? null : index)}
                >
                  <div className="flex items-center flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePracticeComplete(index);
                      }}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 flex-shrink-0 ${
                        completedPractices.includes(index)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {completedPractices.includes(index) && <Check className="w-4 h-4" />}
                    </button>
                    <div>
                      <span className={`text-xs px-2 py-0.5 rounded-full mr-2 ${
                        practice.type === 'basic' ? 'bg-blue-200 text-blue-700' :
                        practice.type === 'intermediate' ? 'bg-yellow-200 text-yellow-700' :
                        'bg-red-200 text-red-700'
                      }`}>
                        {practice.type === 'basic' ? '基础巩固' :
                         practice.type === 'intermediate' ? '进阶实操' : '实战综合'}
                      </span>
                      <span className={`font-semibold ${
                        practice.type === 'basic' ? 'text-blue-800' :
                        practice.type === 'intermediate' ? 'text-yellow-800' :
                        'text-red-800'
                      }`}>
                        {practice.title}
                      </span>
                    </div>
                  </div>
                  {expandedPractice === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {/* 练习详情 */}
                {expandedPractice === index && (
                  <div className="p-6 space-y-4 border-t border-gray-200">
                    {/* 题目描述 */}
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">题目描述</h4>
                      <p className="text-amber-700">{practice.description}</p>
                    </div>
                    
                    {/* 配套数据源 */}
                    {practice.dataSource && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Database className="w-4 h-4 mr-2" />
                          配套数据源
                        </h4>
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-3 rounded overflow-x-auto">
                          {practice.dataSource}
                        </pre>
                      </div>
                    )}
                    
                    {/* 交付要求 */}
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">交付要求</h4>
                      <ul className="space-y-2 mb-4">
                        {practice.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-amber-700">
                            <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-700 text-xs flex items-center justify-center mr-2 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 代码编辑器 */}
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        代码答案
                      </h4>
                      <CodeEditor
                        initialCode=""
                        placeholder={getPlaceholder(getLanguageFromTitle(practice.title))}
                        language={getLanguageFromTitle(practice.title)}
                        requirements={practice.requirements}
                        expectedPattern={practice.referenceAnswer.split('\n')[0]?.trim()}
                        referenceAnswer={practice.referenceAnswer}
                      />
                    </div>
                    
                    {/* 评分标准 */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">评分标准</h4>
                      <ul className="space-y-1">
                        {practice.scoringCriteria.map((criteria, i) => (
                          <li key={i} className="text-sm text-purple-700">• {criteria}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 学习验收标准模块 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-purple-500" />
            学习验收标准
          </h2>
          <p className="text-amber-600 mb-4">完成本分支学习后，你应该能够：</p>
          <ul className="space-y-3">
            {currentBranch.validationCriteria.map((criteria, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-amber-700">{criteria}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 配套可复用资料模块 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
            <Download className="w-6 h-6 mr-2 text-orange-500" />
            配套可复用资料
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBranch.resources.map((resource, index) => (
              <div 
                key={index}
                className="border-2 border-amber-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center mb-3">
                  {resource.type === 'formula' && <FileText className="w-5 h-5 text-blue-500 mr-2" />}
                  {resource.type === 'code' && <Code className="w-5 h-5 text-green-500 mr-2" />}
                  {resource.type === 'template' && <FileSpreadsheet className="w-5 h-5 text-purple-500 mr-2" />}
                  {resource.type === 'data' && <Database className="w-5 h-5 text-orange-500 mr-2" />}
                  <h4 className="font-semibold text-amber-800">{resource.title}</h4>
                </div>
                <pre className="text-sm text-amber-700 whitespace-pre-wrap font-mono bg-amber-50 p-3 rounded overflow-x-auto">
                  {resource.content}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* 完成提示 */}
        {getPracticeProgress() === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 shadow-lg text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">恭喜完成！</h3>
            <p className="opacity-90">你已经完成了本模块的所有练习，继续加油！</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BranchContent;
