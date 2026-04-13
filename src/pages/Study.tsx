import React from 'react';
import { Book, Target, Calendar, CheckCircle, Clock } from 'lucide-react';
import MapleLeafFall from '../components/MapleLeafFall';

const Study: React.FC = () => {
  // 学习任务数据
  const studyTasks = [
    {
      id: 1,
      title: '商务数据分析基础',
      description: '学习数据分析的基本概念、方法和工具，包括数据收集、清洗、分析和可视化。',
      duration: '第一学期',
      status: '已完成',
    },
    {
      id: 2,
      title: '统计学原理',
      description: '学习统计学的基本原理和方法，包括描述统计、推断统计、假设检验等。',
      duration: '第一学期',
      status: '已完成',
    },
    {
      id: 3,
      title: '数据库原理与应用',
      description: '学习数据库的基本原理和SQL语言，掌握数据存储和管理的技能。',
      duration: '第二学期',
      status: '进行中',
    },
    {
      id: 4,
      title: 'Python数据分析',
      description: '学习使用Python进行数据分析，包括NumPy、Pandas、Matplotlib等库的使用。',
      duration: '第二学期',
      status: '进行中',
    },
    {
      id: 5,
      title: '商务智能与数据挖掘',
      description: '学习商务智能系统和数据挖掘技术，掌握数据驱动决策的方法。',
      duration: '第三学期',
      status: '未开始',
    },
    {
      id: 6,
      title: '大数据分析',
      description: '学习大数据技术和分析方法，包括Hadoop、Spark等框架的使用。',
      duration: '第三学期',
      status: '未开始',
    },
    {
      id: 7,
      title: '商务数据分析实战',
      description: '通过实际项目练习，应用所学知识解决真实的商务数据分析问题。',
      duration: '第四学期',
      status: '未开始',
    },
    {
      id: 8,
      title: '毕业设计',
      description: '完成一个完整的商务数据分析项目，展示所学知识和技能。',
      duration: '第四学期',
      status: '未开始',
    },
  ];

  // 学习目标数据
  const studyGoals = [
    {
      id: 1,
      title: '掌握数据分析技能',
      description: '熟练掌握数据收集、清洗、分析和可视化的技能，能够独立完成数据分析项目。',
      progress: 70,
    },
    {
      id: 2,
      title: '精通数据分析工具',
      description: '熟练使用Excel、Python、SQL等数据分析工具，能够根据不同场景选择合适的工具。',
      progress: 60,
    },
    {
      id: 3,
      title: '培养数据思维',
      description: '培养数据驱动的思维方式，能够从数据中发现问题、分析问题并提出解决方案。',
      progress: 50,
    },
    {
      id: 4,
      title: '获得专业认证',
      description: '获得相关的数据分析认证，如微软Excel认证、Python数据分析认证等。',
      progress: 30,
    },
    {
      id: 5,
      title: '积累项目经验',
      description: '通过实际项目积累数据分析经验，建立个人作品集，为就业做准备。',
      progress: 40,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* 枫叶飘落效果 */}
      <MapleLeafFall />

      {/* 页面标题 */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-maple-600 mb-4">
              学习任务与目标
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              商务数据分析与应用专业的学习计划和目标
            </p>
          </div>
        </div>
      </section>

      {/* 学习任务 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              学习任务
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专业课程学习计划
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyTasks.map((task, index) => (
              <div 
                key={task.id} 
                className="bg-primary-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-maple-100 rounded-full flex items-center justify-center">
                      <Book size={24} className="text-maple-500" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-maple-600">
                      {task.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.status === '已完成' ? 'bg-green-100 text-green-600' :
                    task.status === '进行中' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {task.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{task.description}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="text-sm">{task.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习目标 */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              学习目标
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专业学习的长期目标和发展方向
            </p>
          </div>
          <div className="space-y-8">
            {studyGoals.map((goal, index) => (
              <div key={goal.id} className="bg-white p-6 rounded-xl shadow-md fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-maple-100 rounded-full flex items-center justify-center">
                      <Target size={24} className="text-maple-500" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-maple-600">
                      {goal.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-maple-600">
                    进度: {goal.progress}%
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{goal.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-maple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习时间线 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              学习时间线
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专业学习的时间规划
            </p>
          </div>
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-maple-200"></div>
            
            {/* 时间点 */}
            <div className="space-y-12">
              {/* 第一学期 */}
              <div className="flex items-center gap-8">
                <div className="md:w-1/2 pr-8 text-right">
                  <div className="bg-primary-50 p-6 rounded-xl shadow-md fade-in">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      第一学期
                    </h3>
                    <p className="text-gray-700 mb-4">2022年9月 - 2023年1月</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>商务数据分析基础</span>
                      </li>
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>统计学原理</span>
                      </li>
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>高等数学</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-maple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 pl-8 hidden md:block"></div>
              </div>
              
              {/* 第二学期 */}
              <div className="flex items-center gap-8">
                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-maple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 pl-8">
                  <div className="bg-primary-50 p-6 rounded-xl shadow-md fade-in">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      第二学期
                    </h3>
                    <p className="text-gray-700 mb-4">2023年2月 - 2023年6月</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-500" />
                        <span>数据库原理与应用</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-500" />
                        <span>Python数据分析</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-500" />
                        <span>线性代数</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 第三学期 */}
              <div className="flex items-center gap-8">
                <div className="md:w-1/2 pr-8 text-right">
                  <div className="bg-primary-50 p-6 rounded-xl shadow-md fade-in">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      第三学期
                    </h3>
                    <p className="text-gray-700 mb-4">2023年9月 - 2024年1月</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>商务智能与数据挖掘</span>
                      </li>
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>大数据分析</span>
                      </li>
                      <li className="flex items-center justify-end gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>机器学习基础</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-maple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 pl-8 hidden md:block"></div>
              </div>
              
              {/* 第四学期 */}
              <div className="flex items-center gap-8">
                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-maple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 pl-8">
                  <div className="bg-primary-50 p-6 rounded-xl shadow-md fade-in">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      第四学期
                    </h3>
                    <p className="text-gray-700 mb-4">2024年2月 - 2024年6月</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>商务数据分析实战</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>毕业设计</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-gray-500" />
                        <span>就业实习</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Study;