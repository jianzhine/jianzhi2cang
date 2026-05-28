export type ProgrammingLanguage = 'python' | 'sql' | 'excel';

export const getLanguageFromTitle = (title: string): ProgrammingLanguage => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('sql')) return 'sql';
  if (lowerTitle.includes('excel')) return 'excel';
  return 'python';
};

export const getPlaceholder = (language: ProgrammingLanguage): string => {
  if (language === 'sql') {
    return `-- 使用SQL完成查询：

SELECT 
FROM table_name
WHERE condition`;
  }
  if (language === 'excel') {
    return `-- Excel公式示例：
=SUM(A1:A10)
=VLOOKUP(A1, B:C, 2, FALSE)`;
  }
  return `# 使用Python完成数据分析
import pandas as pd

# 在这里编写代码...`;
};
