import type { Project } from '@/types';

export const projects: Project[] = [
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