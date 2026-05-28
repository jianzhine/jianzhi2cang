import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  GraduationCap, Target, Wrench, Sparkles, BarChart3, 
  TrendingUp, Cpu, PieChart, Building2, Award,
  ArrowLeft, Clock, BookOpen, ChevronRight, CheckCircle,
  Brain
} from 'lucide-react';
import { allBranchContent } from '@/data/allBranchContent';

const sectionConfig: Record<string, {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  phase: string;
  duration: string;
  color: string;
  branches: { id: string; title: string; duration: string; level: string; description: string }[];
}> = {
  assessment: {
    title: '学前测评与个性化路径规划',
    subtitle: '测评定位 · 路径规划 · 进度锚定',
    icon: <GraduationCap className="w-12 h-12" />,
    phase: '学前规划',
    duration: '4-5小时',
    color: 'from-blue-500 to-cyan-500',
    branches: [
      { id: 'assessment-beginner', title: '零基础入门通道', duration: '1小时', level: '入门', description: '数据分析基础认知与学习准备' },
      { id: 'assessment-intermediate', title: '进阶提升通道', duration: '1.5小时', level: '进阶', description: '能力评估与提升路径规划' },
      { id: 'assessment-career', title: '职业规划通道', duration: '2小时', level: '专项', description: '数据分析师职业发展路径' },
      { id: 'assessment-path', title: '学习路径定制', duration: '30分钟', level: '通用', description: '个性化学习计划制定' }
    ]
  },
  cognition: {
    title: '数据分析核心认知与能力体系',
    subtitle: '行业认知 · 岗位能力 · 方法论',
    icon: <Brain className="w-12 h-12" />,
    phase: '认知筑基',
    duration: '10-12小时',
    color: 'from-purple-500 to-pink-500',
    branches: [
      { id: 'cognition-concept', title: '数据分析思维培养', duration: '3小时', level: '认知', description: '数据思维核心要素与培养方法' },
      { id: 'cognition-business', title: '业务理解与分析框架', duration: '4小时', level: '核心', description: 'MECE、5W2H等分析方法论' },
      { id: 'cognition-industry', title: '行业数据分析认知', duration: '3小时', level: '方法', description: '电商、金融、零售等行业分析特点' }
    ]
  },
  tools: {
    title: '必备工具栈零基础全精通',
    subtitle: 'Excel · SQL · Python',
    icon: <Wrench className="w-12 h-12" />,
    phase: '工具精通',
    duration: '40-50小时',
    color: 'from-green-500 to-emerald-500',
    branches: [
      { id: 'tools-excel', title: 'Excel数据处理精通', duration: '10小时', level: '基础', description: '函数公式、数据透视表、图表制作' },
      { id: 'tools-sql', title: 'SQL数据查询精通', duration: '12小时', level: '核心', description: '查询语句、聚合函数、窗口函数' },
      { id: 'tools-python', title: 'Python数据分析入门', duration: '15小时', level: '进阶', description: 'Pandas、NumPy、数据可视化' }
    ]
  },
  cleaning: {
    title: '数据清洗与预处理核心技能',
    subtitle: '缺失值 · 异常值 · 标准化 · 集成',
    icon: <Sparkles className="w-12 h-12" />,
    phase: '技能落地',
    duration: '12-15小时',
    color: 'from-orange-500 to-amber-500',
    branches: [
      { id: 'cleaning-missing', title: '缺失值处理技术', duration: '3小时', level: '基础', description: '识别、填充、删除策略' },
      { id: 'cleaning-outlier', title: '异常值检测与处理', duration: '3小时', level: '进阶', description: '3σ原则、IQR方法、业务规则' },
      { id: 'cleaning-standardize', title: '数据标准化与转换', duration: '3小时', level: '核心', description: '归一化、标准化、编码转换' },
      { id: 'cleaning-integrate', title: '多源数据整合', duration: '3小时', level: '实战', description: '表关联、数据合并、联合查询' }
    ]
  },
  statistics: {
    title: '描述性统计与探索性分析EDA',
    subtitle: '统计基础 · 单多变量 · 可视化洞察',
    icon: <BarChart3 className="w-12 h-12" />,
    phase: '技能落地',
    duration: '15-20小时',
    color: 'from-teal-500 to-cyan-500',
    branches: [
      { id: 'statistics-basic', title: '描述性统计分析', duration: '4小时', level: '基础', description: '均值、中位数、方差、分布形态' },
      { id: 'statistics-univariate', title: '单变量分析技术', duration: '4小时', level: '进阶', description: '直方图、密度图、正态分布检验' },
      { id: 'statistics-multivariate', title: '多变量分析技术', duration: '5小时', level: '核心', description: '相关性分析、交叉分析、热力图' },
      { id: 'statistics-eda', title: '探索性数据分析EDA', duration: '5小时', level: '实战', description: '完整EDA分析流程与报告撰写' }
    ]
  },
  metrics: {
    title: '业务指标体系搭建与拆解',
    subtitle: '北极星指标 · 多维度拆解 · 漏斗 · 留存',
    icon: <Target className="w-12 h-12" />,
    phase: '技能落地',
    duration: '12-15小时',
    color: 'from-red-500 to-rose-500',
    branches: [
      { id: 'metrics-northstar', title: '北极星指标体系', duration: '3小时', level: '基础', description: '北极星指标定义与选择方法' },
      { id: 'metrics-dimension', title: '指标拆解与维度分析', duration: '4小时', level: '进阶', description: '指标公式拆解、维度细分' },
      { id: 'metrics-funnel', title: '业务漏斗分析', duration: '3小时', level: '核心', description: '转化漏斗、流失分析、优化策略' },
      { id: 'metrics-retention', title: '用户留存分析', duration: '4小时', level: '实战', description: '留存曲线、Cohort同期群分析' }
    ]
  },
  advanced: {
    title: '进阶分析方法与模型实战',
    subtitle: '相关性回归 · 用户分群RFM · AB测试',
    icon: <Cpu className="w-12 h-12" />,
    phase: '进阶提升',
    duration: '20-25小时',
    color: 'from-indigo-500 to-blue-500',
    branches: [
      { id: 'advanced-correlation', title: '相关性分析方法', duration: '4小时', level: '基础', description: 'Pearson、Spearman相关系数' },
      { id: 'advanced-rfm', title: 'RFM用户分层模型', duration: '4小时', level: '核心', description: 'RFM原理、分层方法、运营策略' },
      { id: 'advanced-abtest', title: 'A/B测试分析', duration: '5小时', level: '进阶', description: '实验设计、显著性检验、结果解读' },
      { id: 'advanced-prediction', title: '预测分析入门', duration: '5小时', level: '实战', description: '分类预测、回归预测、模型评估' }
    ]
  },
  visualization: {
    title: '数据可视化与分析报告输出',
    subtitle: '可视化规范 · Tableau/Power BI · 报告撰写',
    icon: <PieChart className="w-12 h-12" />,
    phase: '技能落地',
    duration: '15-18小时',
    color: 'from-violet-500 to-purple-500',
    branches: [
      { id: 'viz-principles', title: '可视化设计原则', duration: '3小时', level: '基础', description: '图表选择、配色规范、设计原则' },
      { id: 'viz-tableau', title: 'Tableau可视化', duration: '5小时', level: '进阶', description: 'Tableau基础操作、仪表板设计' },
      { id: 'viz-powerbi', title: 'Power BI报表开发', duration: '5小时', level: '进阶', description: 'Power BI基础、DAX计算、报表发布' },
      { id: 'viz-report', title: '数据分析报告撰写', duration: '4小时', level: '核心', description: '报告结构设计、数据故事化呈现' }
    ]
  },
  projects: {
    title: '全行业全流程实战项目营',
    subtitle: '电商 · 互联网 · 金融 · 零售',
    icon: <Building2 className="w-12 h-12" />,
    phase: '实战闭环',
    duration: '30-40小时',
    color: 'from-emerald-500 to-green-500',
    branches: [
      { id: 'project-ecommerce', title: '电商数据分析项目', duration: '8小时', level: '实战', description: '用户行为分析、RFM分层、运营策略' },
      { id: 'project-internet', title: '互联网产品分析项目', duration: '8小时', level: '实战', description: 'AARRR模型、产品指标体系设计' },
      { id: 'project-finance', title: '金融风控分析项目', duration: '10小时', level: '实战', description: '信用评分卡、欺诈检测模型' },
      { id: 'project-retail', title: '零售数据分析项目', duration: '8小时', level: '实战', description: 'ABC分类、商品分析、顾客分析' }
    ]
  },
  'assessment-final': {
    title: '能力考核与求职进阶配套',
    subtitle: '阶段测评 · 面试题库 · 作品集 · 简历',
    icon: <Award className="w-12 h-12" />,
    phase: '求职进阶',
    duration: '15-20小时',
    color: 'from-yellow-500 to-orange-500',
    branches: [
      { id: 'final-testing', title: '综合能力测试', duration: '3小时', level: '考核', description: '综合能力测评与自我评估' },
      { id: 'final-interview', title: '面试技巧与模拟', duration: '4小时', level: '进阶', description: '常见面试问题、STAR法则、模拟面试' },
      { id: 'final-portfolio', title: '作品集制作', duration: '4小时', level: '核心', description: '项目展示、作品集规划与发布' },
      { id: 'final-resume', title: '简历优化与投递', duration: '3小时', level: '求职', description: '简历结构设计、关键词优化、投递策略' }
    ]
  }
};

const SectionContent: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const config = sectionId ? sectionConfig[sectionId] : null;

  if (!config) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">板块不存在</h2>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/data-analysis" 
            className="inline-flex items-center text-amber-700 hover:text-green-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回训练主页</span>
          </Link>
          
          <div className={`bg-gradient-to-r ${config.color} text-white rounded-2xl p-6 shadow-lg`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-xl">
                {config.icon}
              </div>
              <div>
                <p className="text-sm opacity-90 mb-1">{config.phase}</p>
                <h1 className="text-3xl font-bold">{config.title}</h1>
                <p className="opacity-90 mt-1">{config.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4 mr-2" />
                预计学习时长：{config.duration}
              </span>
              <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                {config.branches.length}个学习模块
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h2 className="font-bold text-amber-800">学习思路导览</h2>
                <p className="text-sm text-amber-600">先了解整体学习框架和方法论</p>
              </div>
            </div>
            <Link
              to="/data-analysis/learning-path"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-sm"
            >
              查看学习思路
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
            学习模块
          </h2>
          
          <div className="space-y-4">
            {config.branches
              .filter(branch => allBranchContent[branch.id])
              .map((branch, index) => {
                return (
                  <Link
                    key={branch.id}
                    to={`/data-analysis/${sectionId}/${branch.id}`}
                    className="block bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 bg-gradient-to-br ${config.color} text-white`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-amber-800">
                              {branch.title}
                            </h3>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                              可学习
                            </span>
                          </div>
                          <p className="text-amber-600 text-sm mb-3">
                            {branch.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-amber-500">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {branch.duration}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full ${
                              branch.level === '基础' || branch.level === '入门' || branch.level === '考核' || branch.level === '求职'
                                ? 'bg-blue-100 text-blue-700' 
                                : branch.level === '核心' || branch.level === '通用' || branch.level === '方法'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {branch.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-amber-400" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-green-100 rounded-2xl p-6 border-2 border-amber-200">
          <h3 className="font-bold text-amber-800 mb-2">💡 学习提示</h3>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• 建议按顺序学习各模块，确保知识体系的完整性</li>
            <li>• 每个模块都配套有完整的练习题，学完记得检验学习效果</li>
            <li>• 遇到问题可以回顾学习思路导览，寻找解决方法</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
