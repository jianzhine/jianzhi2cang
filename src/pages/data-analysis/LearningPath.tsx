import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Home, BookOpen, GraduationCap, Target,
  TrendingUp, Clock, Users, CheckCircle, BarChart3
} from 'lucide-react';

const LearningPath: React.FC = () => {
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
          
          <div className="bg-gradient-to-r from-amber-500 to-green-500 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="w-10 h-10 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">学习思路导览</h1>
                <p className="opacity-90">数据分析全链路学习路径和方法论</p>
              </div>
            </div>
          </div>
        </div>

        {/* 学习路径概览 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-500" />
            学习路径全景图
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div className="flex-1 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">学前规划阶段</h3>
                <p className="text-blue-700 text-sm mb-3">
                  通过测评了解自己的起点，明确学习目标，制定个性化的学习路径。
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：4-5小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">认知筑基阶段</h3>
                <p className="text-purple-700 text-sm mb-3">
                  建立数据分析的全局认知，了解行业应用、岗位能力要求和核心方法论。
                </p>
                <div className="flex items-center text-xs text-purple-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：10-12小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div className="flex-1 bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">工具精通阶段</h3>
                <p className="text-green-700 text-sm mb-3">
                  掌握Excel、SQL、Python三大核心工具，这是数据分析师的立身之本。
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：40-50小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div className="flex-1 bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">技能落地阶段</h3>
                <p className="text-orange-700 text-sm mb-3">
                  将工具技能应用到实际场景，包括数据清洗、统计分析、业务指标体系搭建。
                </p>
                <div className="flex items-center text-xs text-orange-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：40-50小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div className="flex-1 bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-800 mb-2">进阶提升阶段</h3>
                <p className="text-indigo-700 text-sm mb-3">
                  学习进阶分析方法，包括回归分析、用户分群、AB测试等。
                </p>
                <div className="flex items-center text-xs text-indigo-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：20-25小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                6
              </div>
              <div className="flex-1 bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-2">实战闭环阶段</h3>
                <p className="text-emerald-700 text-sm mb-3">
                  完成多个行业的实战项目，将所学知识融会贯通。
                </p>
                <div className="flex items-center text-xs text-emerald-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：30-40小时</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                7
              </div>
              <div className="flex-1 bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">求职进阶阶段</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  完成能力考核，准备面试，打造求职作品集。
                </p>
                <div className="flex items-center text-xs text-yellow-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>建议时长：15-20小时</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学习方法论 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-red-500" />
            核心学习方法论
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                刻意练习原则
              </h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 每个技能点都要有针对性的练习</li>
                <li>• 及时反馈，发现问题立即修正</li>
                <li>• 循序渐进，从简单到复杂</li>
                <li>• 定期复盘，总结经验教训</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                项目驱动学习
              </h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• 每个阶段至少完成1个实战项目</li>
                <li>• 项目要有明确的问题和目标</li>
                <li>• 完整经历数据分析全流程</li>
                <li>• 输出可展示的分析报告</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                知识体系构建
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• 建立知识点之间的关联</li>
                <li>• 形成完整的知识网络</li>
                <li>• 理解知识的底层逻辑</li>
                <li>• 能够举一反三</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                输出倒逼输入
              </h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• 学完一个知识点，尝试讲解给别人</li>
                <li>• 写技术博客记录学习心得</li>
                <li>• 做项目分享展示成果</li>
                <li>• 教是最好的学</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学习建议 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">
            给学习者的建议
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">保持耐心，不要急躁</h3>
                <p className="text-amber-600 text-sm">
                  数据分析是一个需要长期积累的技能，不要期望一周就能学会所有内容。按照自己的节奏，循序渐进。
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">多动手，多实践</h3>
                <p className="text-amber-600 text-sm">
                  看十遍不如做一遍。每个知识点都要动手实践，只有真正做过才能深刻理解。
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">结合实际业务</h3>
                <p className="text-amber-600 text-sm">
                  技术最终要服务于业务。学习过程中多思考如何用数据解决实际问题。
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">建立学习社区</h3>
                <p className="text-amber-600 text-sm">
                  和同伴一起学习可以互相督促、互相激励。遇到问题及时请教，输出分享帮助他人。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 开始学习按钮 */}
        <div className="text-center">
          <Link
            to="/data-analysis"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-green-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-green-600 transition-all shadow-lg"
          >
            开始学习之旅
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
