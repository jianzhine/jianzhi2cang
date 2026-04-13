import React from 'react';
import { PenTool, Video, Code, Camera, Brain, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import MapleLeafFall from '../components/MapleLeafFall';

const Skills: React.FC = () => {
  // 技能详情数据
  const skills = [
    {
      icon: <PenTool size={32} />,
      name: 'PS',
      description: '熟练使用Photoshop进行图像处理和设计，包括图片编辑、合成、修图等。能够创建各种类型的设计作品，如海报、banner、社交媒体图片等。',
      level: 90,
      cases: [
        {
          title: '品牌海报设计',
          description: '为学校社团设计的宣传海报，使用Photoshop进行创意设计和图像处理。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20poster%20design%20with%20warm%20colors&image_size=landscape_16_9',
        },
        {
          title: '产品图片修图',
          description: '为电商平台的产品图片进行精修，提升产品展示效果。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=product%20photo%20retouching%20example&image_size=landscape_16_9',
        },
      ],
    },
    {
      icon: <Video size={32} />,
      name: '剪辑',
      description: '擅长视频剪辑和后期制作，使用PR、AE等软件进行视频编辑、特效制作、颜色校正等。能够制作各种类型的视频，如宣传视频、vlog、短视频等。',
      level: 85,
      cases: [
        {
          title: '社团活动宣传视频',
          description: '为学校社团活动制作的宣传视频，包含剪辑、特效和音效处理。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=video%20editing%20workspace%20with%20timeline&image_size=landscape_16_9',
        },
        {
          title: '个人vlog',
          description: '记录日常生活的vlog视频，包含剪辑、转场和字幕制作。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vlog%20video%20editing%20example&image_size=landscape_16_9',
        },
      ],
    },
    {
      icon: <Code size={32} />,
      name: '编程',
      description: '会编写简单脚本和小程序，熟悉JavaScript、Python等语言。能够开发一些实用的小工具和应用，如数据处理脚本、自动化工具等。',
      level: 75,
      cases: [
        {
          title: '数据处理脚本',
          description: '使用Python编写的数据处理脚本，用于处理和分析商务数据。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20code%20for%20data%20processing&image_size=landscape_16_9',
        },
        {
          title: '微信小程序',
          description: '开发的微信小程序，用于展示个人作品和信息。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wechat%20mini%20program%20interface&image_size=landscape_16_9',
        },
      ],
    },
    {
      icon: <Camera size={32} />,
      name: '前端开发',
      description: '有一定的前端开发经验，熟悉HTML、CSS、JavaScript、React等技术。能够开发响应式网站和Web应用，如个人作品集、数据可视化页面等。',
      level: 70,
      cases: [
        {
          title: '个人作品集网站',
          description: '使用React和Tailwind CSS构建的响应式个人作品集网站。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20personal%20portfolio%20website&image_size=landscape_16_9',
        },
        {
          title: '数据可视化页面',
          description: '使用D3.js实现的数据可视化页面，展示商务数据分析结果。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard&image_size=landscape_16_9',
        },
      ],
    },
    {
      icon: <Brain size={32} />,
      name: 'AI训练',
      description: '在AI训练方面有一定涉猎，了解机器学习的基本原理和常用算法。能够使用Python和相关库进行简单的AI模型训练和应用。',
      level: 65,
      cases: [
        {
          title: '图像分类模型',
          description: '使用TensorFlow训练的图像分类模型，用于识别不同类型的图像。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ai%20machine%20learning%20workflow&image_size=landscape_16_9',
        },
        {
          title: '数据预测模型',
          description: '使用Python和scikit-learn构建的数据预测模型，用于预测商务数据趋势。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20prediction%20model%20visualization&image_size=landscape_16_9',
        },
      ],
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
              技能展示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              详细了解我的各项技能和相关作品案例
            </p>
          </div>
        </div>
      </section>

      {/* 技能详情 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="space-y-24">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="md:w-1/2">
                  <div className="bg-primary-50 p-8 rounded-xl shadow-md h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-maple-100 rounded-full flex items-center justify-center">
                        <div className="text-maple-500">{skill.icon}</div>
                      </div>
                      <h2 className="text-3xl font-display font-bold text-maple-600">
                        {skill.name}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {skill.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-maple-600">技能水平</span>
                        <span className="text-sm font-medium text-maple-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-maple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link 
                      to="/projects" 
                      className="inline-flex items-center gap-2 px-6 py-2 bg-maple-500 text-white rounded-full hover:bg-maple-600 transition-colors duration-300"
                    >
                      查看更多作品
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="grid grid-cols-1 gap-6">
                    {skill.cases.map((item, caseIndex) => (
                      <div key={caseIndex} className="bg-primary-50 p-6 rounded-xl shadow-md">
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;