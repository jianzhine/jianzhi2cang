import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Code, PenTool, Brain, Music } from 'lucide-react';
import MapleLeafFall from '../components/MapleLeafFall';

const Home: React.FC = () => {
  // 技能数据
  const skills = [
    {
      icon: <PenTool size={24} />,
      name: 'PS',
      description: '熟练使用Photoshop进行图像处理和设计',
      level: 90,
    },
    {
      icon: <Video size={24} />,
      name: '剪辑',
      description: '擅长视频剪辑和后期制作',
      level: 85,
    },
    {
      icon: <Code size={24} />,
      name: '编程',
      description: '会编写简单脚本和小程序',
      level: 75,
    },
    {
      icon: <Camera size={24} />,
      name: '前端开发',
      description: '有一定的前端开发经验',
      level: 70,
    },
    {
      icon: <Brain size={24} />,
      name: 'AI训练',
      description: '在AI训练方面有一定涉猎',
      level: 65,
    },
  ];

  // 作品数据
  const projects = [
    {
      id: 1,
      title: '个人作品集网站',
      description: '使用React和Tailwind CSS构建的响应式个人作品集网站',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20personal%20portfolio%20website%20with%20warm%20colors&image_size=landscape_16_9',
    },
    {
      id: 2,
      title: '数据可视化项目',
      description: '使用D3.js实现的商务数据可视化仪表板',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9',
    },
    {
      id: 3,
      title: '视频剪辑作品',
      description: '使用PR和AE制作的创意视频剪辑',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=video%20editing%20workspace%20with%20timeline&image_size=landscape_16_9',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* 枫叶飘落效果 */}
      <MapleLeafFall />

      {/* 英雄区 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary-50 to-white">
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
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20student%20portrait%20warm%20colors%20maple%20leaves&image_size=square_hd" 
                    alt="个人照片" 
                    className="w-full h-full object-cover rounded-full border-4 border-maple-300 shadow-xl float"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-300 rounded-full flex items-center justify-center shadow-lg">
                  <Music size={32} className="text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能展示 */}
      <section className="py-20 px-4 bg-white">
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
      <section className="py-20 px-4 bg-primary-50">
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
      <section className="py-20 px-4 bg-white">
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