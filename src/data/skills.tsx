import { Camera, Video, Code, PenTool, Brain } from 'lucide-react';
import type { Skill } from '@/types';

export const skills: Skill[] = [
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