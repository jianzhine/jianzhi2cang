import React from 'react';
import { GraduationCap, Calendar, MapPin, Phone, Mail, Music, Book, Code } from 'lucide-react';

const About: React.FC = () => {
  // 个人信息
  const personalInfo = [
    { label: '姓名', value: 'Hehaobin' },
    { label: '专业', value: '商务数据分析与应用' },
    { label: '年级', value: '大二' },
    { label: '学校', value: '广东科学技术职业学院' },
    { label: '兴趣爱好', value: '唱跳rap篮球（练习了两年半）' },
  ];

  // 教育背景
  const education = [
    {
      year: '2022 - 至今',
      title: '广东科学技术职业学院',
      description: '商务数据分析与应用专业',
    },
  ];

  // 兴趣爱好详情
  const hobbies = [
    {
      icon: <Music size={24} />,
      name: '唱歌',
      description: '喜欢演唱各种风格的歌曲，参加过学校的歌唱比赛',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.29 7 12 12 20.71 7"/>
        <line x1="12" y1="22" x2="12" y2="12"/>
      </svg>,
      name: '跳舞',
      description: '喜欢街舞和现代舞，经常参加学校的文艺活动',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>,
      name: 'Rap',
      description: '喜欢创作和演唱rap，有自己的原创作品',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>,
      name: '篮球',
      description: '已经练习了两年半，是学校篮球队的成员',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* 页面标题 */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-maple-600 mb-4">
              个人信息
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              了解更多关于我的信息
            </p>
          </div>
        </div>
      </section>

      {/* 个人信息卡片 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 fade-in">
              <div className="sticky top-24">
                <div className="w-64 h-64 mx-auto mb-8 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-amber-300 to-green-300 rounded-full flex items-center justify-center shadow-xl">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-display font-semibold text-maple-600 mb-4">
                    联系信息
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-maple-100 rounded-full flex items-center justify-center">
                        <MapPin size={20} className="text-maple-500" />
                      </div>
                      <span className="text-gray-700">广东科学技术职业学院</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-maple-100 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-maple-500" />
                      </div>
                      <span className="text-gray-700">student@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-maple-100 rounded-full flex items-center justify-center">
                        <Phone size={20} className="text-maple-500" />
                      </div>
                      <span className="text-gray-700">138****1234</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              {/* 基本信息 */}
              <div className="bg-primary-50 p-8 rounded-xl shadow-md mb-12 fade-in">
                <h2 className="text-2xl font-display font-semibold text-maple-600 mb-6">
                  基本信息
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {personalInfo.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm text-gray-500 mb-1">{item.label}</span>
                      <span className="text-lg font-medium text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 教育背景 */}
              <div className="bg-primary-50 p-8 rounded-xl shadow-md mb-12 fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-display font-semibold text-maple-600 mb-6">
                  教育背景
                </h2>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-24">
                        <div className="bg-maple-100 p-3 rounded-lg text-center">
                          <Calendar size={20} className="text-maple-500 mx-auto mb-2" />
                          <span className="text-sm font-medium text-maple-600">{item.year}</span>
                        </div>
                      </div>
                      <div className="flex-grow border-l-2 border-maple-300 pl-6 pb-8">
                        <h3 className="text-xl font-display font-semibold text-maple-600 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 兴趣爱好 */}
              <div className="bg-primary-50 p-8 rounded-xl shadow-md fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-display font-semibold text-maple-600 mb-6">
                  兴趣爱好
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-maple-100 rounded-full flex items-center justify-center">
                        <div className="text-maple-500">{hobby.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-maple-600 mb-2">
                          {hobby.name}
                        </h3>
                        <p className="text-gray-700">{hobby.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;