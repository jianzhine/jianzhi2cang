import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';
import NavCard from '@/components/NavCard';
import { useTheme } from '@/hooks/useTheme';
import { skills } from '@/data/skills.tsx';
import { projects } from '@/data/projects';

const Home: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen">
      {/* 英雄区 */}
      <section className={`pt-32 pb-20 px-4 ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-b from-primary-50 to-white text-gray-800'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-maple-600 mb-6">
                你好，我是<span className="text-primary-500">Hehaobin</span>，商务数据分析与应用专业的学生
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                擅长PS和剪辑，对编程有一定的造诣，喜欢编写小程序。
                爱好是唱跳rap篮球，已经练习了两年半。
                在前端开发和AI训练上有一定涉猎，会编写一些简单脚本。
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/about" 
                  className="px-8 py-3 bg-maple-500 text-white rounded-full hover:bg-maple-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  了解更多
                </Link>
                <Link 
                  to="/projects" 
                  className="px-8 py-3 border-2 border-maple-500 text-maple-500 rounded-full hover:bg-maple-50 transition-colors duration-300"
                >
                  查看作品
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative flex justify-center items-center h-full">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-300 to-green-300 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white mx-auto mb-4">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <h3 className="text-2xl font-bold text-white">Hehaobin</h3>
                    <p className="text-white/90">商务数据分析与应用专业</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 导航卡片 */}
      <section className={`py-16 px-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              浏览我的网站
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              探索我的个人信息、技能、作品和学习计划
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NavCard 
              title="个人信息" 
              description="了解我的基本信息、教育背景和兴趣爱好" 
              link="/about"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>}
            />
            <NavCard 
              title="技能展示" 
              description="查看我的专业技能和相关作品案例" 
              link="/skills"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>}
            />
            <NavCard 
              title="作品展示" 
              description="浏览我的近期作品和项目" 
              link="/projects"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>}
            />
            <NavCard 
              title="学习任务" 
              description="了解我的学习计划和目标" 
              link="/study"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>}
            />
            <NavCard 
              title="数据分析训练" 
              description="练习Python数据分析技能" 
              link="/data-analysis"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>}
            />
          </div>
        </div>
      </section>

      {/* 技能展示 */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              我的技能
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我掌握了多种技能，能够在不同领域发挥自己的能力
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-primary-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-maple-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-maple-500">{skill.icon}</div>
                </div>
                <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-maple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 作品预览 */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-primary-50 text-gray-800'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              我的作品
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              这里展示了我近期的一些作品，欢迎查看详情
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id} 
                className="block group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-maple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">查看详情</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-maple-500 text-white rounded-full hover:bg-maple-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              查看全部作品
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 兴趣爱好 */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
              我的兴趣爱好
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              除了专业技能，我还有一些个人爱好
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-primary-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 fade-in">
              <div className="w-16 h-16 bg-maple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music size={32} className="text-maple-500" />
              </div>
              <h3 className="text-lg font-display font-semibold text-maple-600">唱歌</h3>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-maple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-maple-600">跳舞</h3>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-maple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-maple-600">Rap</h3>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-maple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-maple-600">篮球</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;