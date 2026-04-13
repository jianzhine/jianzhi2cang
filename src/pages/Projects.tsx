import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import MapleLeafFall from '../components/MapleLeafFall';

const Projects: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 作品数据
  const projects = [
    {
      id: '1',
      title: '个人作品集网站',
      description: '使用React和Tailwind CSS构建的响应式个人作品集网站，展示个人信息、技能和作品。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20personal%20portfolio%20website%20with%20warm%20colors&image_size=landscape_16_9',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'React Router'],
      details: '这是一个使用现代前端技术构建的个人作品集网站，具有响应式设计，适配各种设备屏幕。网站采用暖色系和枫叶元素，营造出温馨的视觉效果。主要功能包括个人信息展示、技能展示、作品展示等模块。',
    },
    {
      id: '2',
      title: '数据可视化项目',
      description: '使用D3.js实现的商务数据可视化仪表板，用于展示和分析商务数据。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9',
      technologies: ['D3.js', 'HTML', 'CSS', 'JavaScript'],
      details: '这是一个使用D3.js库实现的数据可视化项目，用于展示商务数据分析结果。项目包含多种图表类型，如折线图、柱状图、饼图等，能够直观地展示数据趋势和分布。用户可以通过交互式操作查看不同维度的数据。',
    },
    {
      id: '3',
      title: '视频剪辑作品',
      description: '使用PR和AE制作的创意视频剪辑，展示个人剪辑技巧和创意能力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=video%20editing%20workspace%20with%20timeline&image_size=landscape_16_9',
      technologies: ['Premiere Pro', 'After Effects', 'Audition'],
      details: '这是一个使用专业视频编辑软件制作的创意视频剪辑作品。视频包含精美的转场效果、特效处理和音效设计，展示了个人的视频剪辑技巧和创意能力。作品风格独特，叙事流畅，视觉效果丰富。',
    },
    {
      id: '4',
      title: '品牌海报设计',
      description: '为学校社团设计的宣传海报，使用Photoshop进行创意设计和图像处理。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20poster%20design%20with%20warm%20colors&image_size=landscape_16_9',
      technologies: ['Photoshop', 'Illustrator'],
      details: '这是为学校社团设计的宣传海报，使用Photoshop进行创意设计和图像处理。海报采用暖色系配色方案，结合现代设计元素，营造出活力四射的视觉效果。设计风格独特，构图合理，信息传达清晰。',
    },
    {
      id: '5',
      title: '数据处理脚本',
      description: '使用Python编写的数据处理脚本，用于处理和分析商务数据。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20code%20for%20data%20processing&image_size=landscape_16_9',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      details: '这是一个使用Python编写的数据处理脚本，用于处理和分析商务数据。脚本能够自动读取数据文件，进行数据清洗、转换和分析，并生成可视化图表和分析报告。脚本结构清晰，代码规范，功能强大。',
    },
    {
      id: '6',
      title: '微信小程序',
      description: '开发的微信小程序，用于展示个人作品和信息。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wechat%20mini%20program%20interface&image_size=landscape_16_9',
      technologies: ['微信小程序', 'JavaScript', 'WXML', 'WXSS'],
      details: '这是一个开发的微信小程序，用于展示个人作品和信息。小程序具有简洁美观的界面设计，功能完善，包括个人信息展示、作品浏览、联系功能等。小程序适配各种移动设备，用户体验良好。',
    },
  ];

  // 如果有id参数，显示作品详情
  if (id) {
    const project = projects.find(p => p.id === id);
    if (!project) {
      return (
        <div className="relative min-h-screen">
          <MapleLeafFall />
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-display font-bold text-maple-600 mb-4">
                作品不存在
              </h1>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-maple-500 text-white rounded-full hover:bg-maple-600 transition-colors duration-300"
              >
                <ArrowLeft size={16} />
                返回作品列表
              </Link>
            </div>
          </section>
        </div>
      );
    }

    return (
      <div className="relative min-h-screen">
        {/* 枫叶飘落效果 */}
        <MapleLeafFall />

        {/* 作品详情 */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-maple-600 rounded-full hover:bg-primary-200 transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={16} />
              返回作品列表
            </Link>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden fade-in">
              <div className="w-full h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-maple-600 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  {project.description}
                </p>
                <div className="mb-8">
                  <h2 className="text-xl font-display font-semibold text-maple-600 mb-4">
                    使用技术
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-primary-100 text-maple-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold text-maple-600 mb-4">
                    项目详情
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 否则显示作品列表
  return (
    <div className="relative min-h-screen">
      {/* 枫叶飘落效果 */}
      <MapleLeafFall />

      {/* 页面标题 */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-maple-600 mb-4">
              作品展示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              查看我的近期作品和项目
            </p>
          </div>
        </div>
      </section>

      {/* 作品列表 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id} 
                className="block group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-maple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">查看详情</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white rounded-full text-maple-600 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white rounded-full text-maple-600 text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;