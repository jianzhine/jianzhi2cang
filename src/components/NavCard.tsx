import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import type { NavCardProps } from '@/types';

const NavCard: React.FC<NavCardProps> = ({ title, description, link, icon }) => {
  const { isDark } = useTheme();
  
  return (
    <Link to={link} className="block group">
      <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${isDark ? 'bg-gray-800 border-gray-700 group-hover:border-maple-500 hover:translate-y-[-5px]' : 'bg-gradient-to-br from-amber-50 to-green-50 border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]'}`}>
        <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-4 ${isDark ? 'bg-gray-700' : 'bg-gradient-to-br from-amber-100 to-green-100 group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300'}`}>
          <div className={`${isDark ? 'text-maple-400 group-hover:text-maple-300' : 'text-amber-700 group-hover:text-green-700'} transition-colors duration-300`}>
            {icon}
          </div>
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-200 group-hover:text-maple-400' : 'text-amber-800 group-hover:text-green-800'} transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`mb-4 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-amber-600 group-hover:text-green-600'} transition-colors duration-300`}>
          {description}
        </p>
        <div className={`flex items-center ${isDark ? 'text-maple-400 group-hover:text-maple-300' : 'text-green-600 group-hover:text-green-800'} transition-colors duration-300`}>
          <span className="font-medium">查看详情</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default NavCard;