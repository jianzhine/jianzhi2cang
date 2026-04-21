import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import type { TrainingCardProps } from '@/types';

const TrainingCard: React.FC<TrainingCardProps> = ({ id, title, description, icon, level, completed = false }) => {
  const { isDark } = useTheme();
  
  return (
    <Link
      to={`/data-analysis/${id}`}
      className="block group"
    >
      <div className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${isDark ? 'bg-gray-800 border-gray-700 group-hover:border-maple-500 hover:translate-y-[-5px]' : 'bg-white border-amber-200 group-hover:border-green-300 hover:translate-y-[-5px]'}`}>
        <div className="flex justify-between items-start mb-4">
          <div className={`rounded-full w-12 h-12 flex items-center justify-center group-hover:from-amber-200 group-hover:to-green-200 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gradient-to-br from-amber-100 to-green-100'}`}>
            <div className={`${isDark ? 'text-maple-400 group-hover:text-maple-300' : 'text-amber-700 group-hover:text-green-700'} transition-colors duration-300`}>
              {icon}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-amber-100 text-amber-700'}`}>
              {level}
            </span>
            {completed && (
              <div className={`p-1 rounded-full ${isDark ? 'bg-green-900/30' : 'bg-green-100'}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDark ? 'text-green-400' : 'text-green-600'}>
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
            )}
          </div>
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200 group-hover:text-maple-400' : 'text-amber-800 group-hover:text-green-800'} transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-amber-600 group-hover:text-green-600'} transition-colors duration-300`}>
          {description}
        </p>
        <div className={`flex items-center ${isDark ? 'text-maple-400 group-hover:text-maple-300' : 'text-green-600 group-hover:text-green-800'} transition-colors duration-300`}>
          <span className="font-medium text-sm">开始训练</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default TrainingCard;