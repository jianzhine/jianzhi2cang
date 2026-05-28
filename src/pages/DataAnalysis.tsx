import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Target, Wrench, Sparkles, BarChart3, 
  TrendingUp, Cpu, PieChart, Building2, Award,
  ChevronDown, Clock, CheckCircle,
  ArrowRight, Home, BookOpen, Code2, Brain
} from 'lucide-react';

const DataAnalysis: React.FC = () => {
  const sections = [
    {
      id: 'assessment',
      title: '学前测评与个性化路径规划',
      subtitle: '测评定位 · 路径规划 · 进度锚定',
      icon: <GraduationCap className="w-10 h-10" />,
      phase: '学前规划',
      duration: '4-5小时',
      color: 'from-blue-500 to-cyan-500',
      branches: 4,
      link: '/data-analysis/assessment'
    },
    {
      id: 'cognition',
      title: '数据分析核心认知与能力体系',
      subtitle: '行业认知 · 岗位能力 · 方法论',
      icon: <Brain className="w-10 h-10" />,
      phase: '认知筑基',
      duration: '10-12小时',
      color: 'from-purple-500 to-pink-500',
      branches: 3,
      link: '/data-analysis/cognition'
    },
    {
      id: 'tools',
      title: '必备工具栈零基础全精通',
      subtitle: 'Excel · SQL · Python',
      icon: <Wrench className="w-10 h-10" />,
      phase: '工具精通',
      duration: '40-50小时',
      color: 'from-green-500 to-emerald-500',
      branches: 3,
      link: '/data-analysis/tools'
    },
    {
      id: 'cleaning',
      title: '数据清洗与预处理核心技能',
      subtitle: '缺失值 · 异常值 · 标准化 · 集成',
      icon: <Sparkles className="w-10 h-10" />,
      phase: '技能落地',
      duration: '12-15小时',
      color: 'from-orange-500 to-amber-500',
      branches: 4,
      link: '/data-analysis/cleaning'
    },
    {
      id: 'statistics',
      title: '描述性统计与探索性分析EDA',
      subtitle: '统计基础 · 单多变量 · 可视化洞察',
      icon: <BarChart3 className="w-10 h-10" />,
      phase: '技能落地',
      duration: '15-20小时',
      color: 'from-teal-500 to-cyan-500',
      branches: 4,
      link: '/data-analysis/statistics'
    },
    {
      id: 'metrics',
      title: '业务指标体系搭建与拆解',
      subtitle: '北极星指标 · 多维度拆解 · 漏斗 · 留存',
      icon: <Target className="w-10 h-10" />,
      phase: '技能落地',
      duration: '12-15小时',
      color: 'from-red-500 to-rose-500',
      branches: 4,
      link: '/data-analysis/metrics'
    },
    {
      id: 'advanced',
      title: '进阶分析方法与模型实战',
      subtitle: '相关性回归 · 用户分群RFM · AB测试',
      icon: <Cpu className="w-10 h-10" />,
      phase: '进阶提升',
      duration: '20-25小时',
      color: 'from-indigo-500 to-blue-500',
      branches: 4,
      link: '/data-analysis/advanced'
    },
    {
      id: 'visualization',
      title: '数据可视化与分析报告输出',
      subtitle: '可视化规范 · Tableau/Power BI · 报告撰写',
      icon: <PieChart className="w-10 h-10" />,
      phase: '技能落地',
      duration: '15-18小时',
      color: 'from-violet-500 to-purple-500',
      branches: 4,
      link: '/data-analysis/visualization'
    },
    {
      id: 'projects',
      title: '全行业全流程实战项目营',
      subtitle: '电商 · 互联网 · 金融 · 零售',
      icon: <Building2 className="w-10 h-10" />,
      phase: '实战闭环',
      duration: '30-40小时',
      color: 'from-emerald-500 to-green-500',
      branches: 4,
      link: '/data-analysis/projects'
    },
    {
      id: 'assessment-final',
      title: '能力考核与求职进阶配套',
      subtitle: '阶段测评 · 面试题库 · 作品集 · 简历',
      icon: <Award className="w-10 h-10" />,
      phase: '求职进阶',
      duration: '15-20小时',
      color: 'from-yellow-500 to-orange-500',
      branches: 4,
      link: '/data-analysis/assessment-final'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 顶部导航和标题 */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-amber-700 hover:text-green-700 transition-colors mb-6"
          >
            <Home className="w-5 h-5 mr-2" />
            <span>返回首页</span>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
              数据分析技术全链路训练体系
            </h1>
            <p className="text-lg text-amber-700 max-w-4xl mx-auto mb-6">
              从零基础到实战专家 | 边学边练代码 | 所有题目都支持在网页上直接运行
            </p>
          </div>
        </div>

        {/* 技术训练入口 */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Code2 className="w-8 h-8 mr-4" />
              <div>
                <h2 className="text-2xl font-bold mb-1">快速技术训练</h2>
                <p className="opacity-90">直接开始练习 Pandas、NumPy、SQL 等数据分析技能</p>
              </div>
            </div>
            <Link
              to="/data-analysis/training"
              className="flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              开始训练
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* 10个递进式板块 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.link}
              className="block group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-400">
                <div className="flex items-start">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br ${section.color} text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${section.color} text-white`}>
                        {section.phase}
                      </span>
                      <span className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {section.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-1 group-hover:text-green-700 transition-colors">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="text-sm text-amber-600 mb-3">
                      {section.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        包含{section.branches}个学习模块
                      </span>
                      <div className={`flex items-center text-sm text-blue-600 group-hover:text-blue-800 transition-colors`}>
                        <span className="font-medium">开始学习</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            学习体系说明
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">科学递进路径</h3>
              <p className="text-sm text-amber-600">
                从基础认知到实战应用，遵循学习规律，确保知识体系完整
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">全代码练习</h3>
              <p className="text-sm text-amber-600">
                所有练习都是可直接编写和运行的代码，支持即时看到运行效果
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">配套参考答案</h3>
              <p className="text-sm text-amber-600">
                所有题目都有详细的参考答案和说明，点击按钮即可查看
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;
