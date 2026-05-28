export interface Practice {
  title: string;
  type: 'basic' | 'intermediate' | 'advanced';
  description: string;
  dataSource?: string;
  requirements: string[];
  referenceAnswer: string;
  scoringCriteria: string[];
  language?: 'python' | 'sql' | 'excel';
  initialCode?: string;
  expectedPattern?: string;
}

export interface KnowledgePoint {
  title: string;
  content: string;
  keyPoints: string[];
  caseStudy: string;
  pitfalls: string[];
}

export interface BranchData {
  id: string;
  title: string;
  section: string;
  sectionTitle: string;
  duration: string;
  level: string;
  color: string;
  prerequisites: string[];
  knowledgePoints: KnowledgePoint[];
  practices: Practice[];
  validationCriteria: string[];
  resources: { title: string; content: string; type: string }[];
}

export const allBranchContent: Record<string, BranchData> = {
  'assessment-beginner': {
    id: 'assessment-beginner',
    title: '零基础入门通道',
    section: 'assessment',
    sectionTitle: '学前测评与个性化路径规划',
    duration: '2小时',
    level: '入门',
    color: 'from-blue-500 to-cyan-500',
    prerequisites: ['无'],
    knowledgePoints: [{
      title: 'Python基础入门',
      content: '学习Python编程语言的基础知识。',
      keyPoints: ['变量与数据类型', '基本运算', '流程控制'],
      caseStudy: '编写第一个Python程序。',
      pitfalls: ['缩进错误', '语法错误']
    }],
    practices: [{
      title: 'Python基本运算',
      type: 'basic',
      description: '练习Python中的基本数学运算。',
      dataSource: `# 基础运算数据
a = 10
b = 3
c = 25
d = 7`,
      requirements: ['四则运算', '幂运算', '取模运算'],
      referenceAnswer: `a = 10
b = 3
print(f"加法: {a + b}")
print(f"乘法: {a * b}")
print(f"幂运算: {a ** b}")`,
      scoringCriteria: ['运算正确：80分', '输出清晰：20分'],
      language: 'python',
      initialCode: 'a = 10\nb = 3\n# 计算',
      expectedPattern: '\\+|\\*|\\*\\*'
    }, {
      title: '条件判断练习',
      type: 'intermediate',
      description: '使用条件判断处理不同情况。',
      dataSource: `# 成绩等级判断数据
student_scores = [
    {"name": "小明", "score": 92},
    {"name": "小红", "score": 85},
    {"name": "小刚", "score": 78},
    {"name": "小丽", "score": 65},
    {"name": "小强", "score": 58}
]`,
      requirements: ['if-elif-else结构', '逻辑运算符'],
      referenceAnswer: `score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
else:
    print("继续努力")`,
      scoringCriteria: ['条件结构：60分', '输出正确：40分'],
      language: 'python',
      initialCode: 'score = 85\n# 判断等级',
      expectedPattern: 'if |elif |else'
    }, {
      title: '循环结构练习',
      type: 'advanced',
      description: '练习循环结构的使用。',
      dataSource: `# 循环练习数据
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]`,
      requirements: ['for循环', 'while循环'],
      referenceAnswer: `for i in range(1, 6):
    print(i)

count = 0
while count < 5:
    print(count)
    count += 1`,
      scoringCriteria: ['for循环：50分', 'while循环：50分'],
      language: 'python',
      initialCode: '# 循环练习',
      expectedPattern: 'for |while'
    }],
    validationCriteria: ['能够编写基础Python代码'],
    resources: [{ title: 'Python基础', content: '变量/运算/条件/循环', type: 'formula' }]
  },

  'cognition-concept': {
    id: 'cognition-concept',
    title: '数据分析思维培养',
    section: 'cognition',
    sectionTitle: '数据分析核心认知与能力体系',
    duration: '3小时',
    level: '认知',
    color: 'from-purple-500 to-pink-500',
    prerequisites: ['数据分析入门'],
    knowledgePoints: [{
      title: '数据思维核心要素',
      content: '培养数据分析思维，理解数据驱动决策的重要性。',
      keyPoints: ['数据敏感度', '逻辑思维', '问题拆解', '验证假设'],
      caseStudy: '电商平台用户流失分析案例。',
      pitfalls: ['主观臆断', '样本偏差']
    }],
    practices: [{
      title: '数据敏感度训练',
      type: 'basic',
      description: '训练数据敏感度，发现数据中的规律。',
      dataSource: `# 销售数据字典
sales_data = {
    "product_a": {"category": "电子产品", "sales": 1500, "cost": 900},
    "product_b": {"category": "服装", "sales": 2300, "cost": 1200},
    "product_c": {"category": "食品", "sales": 800, "cost": 400},
    "product_d": {"category": "电子产品", "sales": 3200, "cost": 1800},
    "product_e": {"category": "家居", "sales": 1100, "cost": 600}
}`,
      requirements: ['识别数据异常', '理解数据含义'],
      referenceAnswer: `sales_data = {
    "product_a": 1500,
    "product_b": 2300,
    "product_c": 800,
    "product_d": 3200
}

avg = sum(sales_data.values()) / len(sales_data)
print(f"平均销售额: {avg}")
print("\\n高于平均的产品:")
for p, v in sales_data.items():
    if v > avg:
        print(f"  {p}: {v}")`,
      scoringCriteria: ['计算准确：50分', '识别正确：50分'],
      language: 'python',
      initialCode: 'sales_data = {\n    "product_a": 1500,\n    "product_b": 2300,\n    "product_c": 800,\n    "product_d": 3200\n}\n\n# 计算平均销售额并找出高于平均的产品',
      expectedPattern: 'sum|len|avg|for'
    }, {
      title: '问题拆解练习',
      type: 'intermediate',
      description: '练习将复杂问题拆解为可分析的子问题。',
      dataSource: `# 业务问题背景数据
business_data = {
    "problem": "门店销售额同比下降15%",
    "time_range": "2024年Q1 vs 2023年Q1",
    "store_count": 50,
    "affected_stores": 35,
    "key_metrics": {
        "avg_transaction_value": {"current": 180, "previous": 200},
        "foot_traffic": {"current": 1200, "previous": 1350},
        "conversion_rate": {"current": 0.08, "previous": 0.09}
    }
}`,
      requirements: ['问题拆解', '指标定义'],
      referenceAnswer: `problem = "门店销售额下降"

print(f"问题: {problem}\\n")
print("拆解维度:")
print("1. 时间维度: 哪个时间段下降最明显?")
print("2. 地域维度: 哪些门店下降最严重?")
print("3. 产品维度: 哪些品类下降最多?")
print("4. 客户维度: 哪类客户流失最多?")
print("\\n关键指标:")
print("- 销售额同比/环比增长率")
print("- 客单价变化")
print("- 客流量变化")
print("- 转化率变化")`,
      scoringCriteria: ['拆解完整：60分', '指标合理：40分'],
      language: 'python',
      initialCode: 'problem = "门店销售额下降"\n\n# 将问题拆解为分析维度',
      expectedPattern: 'print'
    }, {
      title: '假设验证练习',
      type: 'advanced',
      description: '练习提出假设并验证的思维方式。',
      dataSource: `# 假设验证数据
hypothesis_data = {
    "hypothesis": "新用户留存率低是因为注册流程复杂",
    "registration_metrics": {
        "steps": 5,
        "avg_completion_time": 180,
        "drop_rates": {"step1": 0.05, "step2": 0.15, "step3": 0.25, "step4": 0.10},
        "final_retention": 0.35
    },
    "benchmark": {
        "industry_avg_steps": 3,
        "industry_avg_time": 90,
        "industry_avg_retention": 0.55
    }
}`,
      requirements: ['提出假设', '设计验证方法', '得出结论'],
      referenceAnswer: `print("=== 假设验证分析 ===\\n")

hypothesis = "新用户留存率低是因为注册流程复杂"
print(f"假设: {hypothesis}\\n")

print("验证方法:")
print("1. 对比分析: 复杂注册流程用户 vs 简化流程用户")
print("2. 漏斗分析: 每步注册流失率")
print("3. 用户调研: 问卷调查注册体验\\n")

print("数据结构设计:")
data = {
    "registration_steps": 5,
    "avg_completion_time": 180,
    "step1_drop": 0.05,
    "step2_drop": 0.15,
    "step3_drop": 0.25,
    "final_retention": 0.35
}
print(f"注册步骤数: {data["registration_steps"]}")
print(f"完成时间: {data["avg_completion_time"]}秒")
print(f"最终留存率: {data["final_retention"]*100}%")`,
      scoringCriteria: ['假设合理：30分', '方法科学：40分', '结论明确：30分'],
      language: 'python',
      initialCode: 'print("=== 假设验证分析 ===\\n")\n\nhypothesis = "新用户留存率低是因为注册流程复杂"\n\n# 设计验证方法和数据结构',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够运用数据思维分析问题'],
    resources: [{ title: '数据思维', content: '敏感度/拆解/假设/验证', type: 'formula' }]
  },

  'cognition-business': {
    id: 'cognition-business',
    title: '业务理解与分析框架',
    section: 'cognition',
    sectionTitle: '数据分析核心认知与能力体系',
    duration: '4小时',
    level: '核心',
    color: 'from-purple-500 to-pink-500',
    prerequisites: ['数据分析思维培养'],
    knowledgePoints: [{
      title: '业务理解框架',
      content: '学习理解业务的核心框架和方法论。',
      keyPoints: ['MECE原则', '5W2H分析', '金字塔原理', 'SWOT分析'],
      caseStudy: '使用MECE原则拆解业务问题。',
      pitfalls: ['分析过度', '脱离业务']
    }],
    practices: [{
      title: 'MECE原则练习',
      type: 'basic',
      description: '练习使用MECE原则对问题进行不重不漏的拆解。',
      dataSource: `# 用户分类数据
user_base = {
    "total_users": 100000,
    "new_users_monthly": 8000,
    "active_users_daily": 15000,
    "revenue_per_user": {"high": 500, "medium": 150, "low": 30}
}`,
      requirements: ['不重不漏', '相互独立', '完全穷尽'],
      referenceAnswer: `print("=== 用户分类 (MECE原则) ===\\n")

categories = {
    "按生命周期": ["新用户", "成长期用户", "成熟期用户", "流失用户"],
    "按消费能力": ["高价值", "中价值", "低价值", "负价值"],
    "按活跃度": ["高度活跃", "中度活跃", "低度活跃", "沉默用户"]
}

for dimension, cats in categories.items():
    print(f"{dimension}:")
    for i, cat in enumerate(cats, 1):
        print(f"  {i}. {cat}")
    print()

print(f"总计 {len(categories)} 个维度，分类完整且互不重叠")`,
      scoringCriteria: ['分类完整：50分', '不重不漏：50分'],
      language: 'python',
      initialCode: 'print("=== 用户分类 (MECE原则) ===\\n")\n\n# 使用MECE原则对用户进行分类',
      expectedPattern: 'print|dict|for'
    }, {
      title: '5W2H分析练习',
      type: 'intermediate',
      description: '练习使用5W2H框架全面分析业务问题。',
      dataSource: `# 促销活动数据
campaign_data = {
    "name": "618大促活动",
    "duration": "2024-06-01至2024-06-18",
    "budget": 5000000,
    "target_roi": 3.0,
    "target_audience": {"age_range": "25-35", "gender": "female", "income_level": "middle"},
    "channels": ["线上平台", "线下门店", "社交媒体", "直播"],
    "promotion_types": ["满减", "红包", "秒杀", "直播带货"]
}`,
      requirements: ['5W: What/Why/Who/When/Where', '2H: How/How much'],
      referenceAnswer: `print("=== 促销活动分析 (5W2H) ===\\n")

analysis = {
    "What(做什么)": "618大促活动",
    "Why(为什么)": "提升GMV和用户活跃度",
    "Who(谁)": "目标人群：25-35岁女性用户",
    "When(何时)": "6月1日-6月18日",
    "Where(何地)": "线上平台+线下门店",
    "How(如何做)": "满减+红包+秒杀+直播",
    "How much(多少)": "预算500万，预计ROI 3.0"
}

for key, value in analysis.items():
    print(f"{key}")
    print(f"  {value}\\n")`,
      scoringCriteria: ['覆盖完整：70分', '分析深入：30分'],
      language: 'python',
      initialCode: 'print("=== 促销活动分析 (5W2H) ===\\n")\n\n# 使用5W2H框架分析促销活动',
      expectedPattern: 'print|dict|for'
    }, {
      title: '业务指标拆解练习',
      type: 'advanced',
      description: '练习将业务目标拆解为可执行的指标。',
      dataSource: `# GMV拆解数据
gmv_target = {
    "target_gmv": 10000000,
    "current_uv": 800000,
    "current_conversion_rate": 0.025,
    "current_avg_order_value": 300,
    "new_user_ratio": 0.4,
    "return_user_ratio": 0.6
}`,
      requirements: ['目标拆解', '指标定义', '计算公式'],
      referenceAnswer: `print("=== GMV指标拆解 ===\\n")

gmv = 10000000
print(f"目标GMV: {gmv:,}元\\n")

print("拆解公式:")
print("GMV = UV × 转化率 × 客单价\\n")

uv = 1000000
conversion_rate = 0.03
avg_order_value = 333

calculated_gmv = uv * conversion_rate * avg_order_value
print(f"各指标目标:")
print(f"  UV(访客数): {uv:,}")
print(f"  转化率: {conversion_rate*100}%")
print(f"  客单价: {avg_order_value}元")
print(f"  计算GMV: {calculated_gmv:,}元\\n")

print("进一步拆解UV:")
print("UV = 新用户 + 老用户")
print("  = 渠道流量 × 渠道转化")
print(f"  新用户目标: {int(uv * 0.4):,}")
print(f"  老用户目标: {int(uv * 0.6):,}")`,
      scoringCriteria: ['拆解逻辑：50分', '计算准确：30分', '可执行性：20分'],
      language: 'python',
      initialCode: 'print("=== GMV指标拆解 ===\\n")\n\ngmv = 10000000\nprint(f"目标GMV: {gmv:,}元\\n")\n\n# 拆解GMV为关键指标',
      expectedPattern: 'print|uv|conversion|gmv'
    }],
    validationCriteria: ['能够使用框架分析业务问题'],
    resources: [{ title: '分析框架', content: 'MECE/5W2H/金字塔/SWOT', type: 'formula' }]
  },

  'cognition-industry': {
    id: 'cognition-industry',
    title: '行业数据分析认知',
    section: 'cognition',
    sectionTitle: '数据分析核心认知与能力体系',
    duration: '3小时',
    level: '方法',
    color: 'from-purple-500 to-pink-500',
    prerequisites: ['业务理解与分析框架'],
    knowledgePoints: [{
      title: '行业分析特点',
      content: '了解不同行业数据分析的特点和重点。',
      keyPoints: ['电商行业', '金融行业', '零售行业', '互联网行业'],
      caseStudy: '电商行业核心指标体系设计。',
      pitfalls: ['照搬模式', '忽视行业特性']
    }],
    practices: [{
      title: '电商行业指标体系',
      type: 'basic',
      description: '设计电商行业核心指标体系。',
      dataSource: `# 电商平台运营数据
ecommerce_metrics = {
    "daily_uv": 500000,
    "daily_pv": 2000000,
    "bounce_rate": 0.45,
    "avg_stay_time": 360,
    "add_to_cart_rate": 0.12,
    "order_conversion_rate": 0.035,
    "payment_conversion_rate": 0.92,
    "daily_orders": 17500,
    "daily_gmv": 5250000,
    "avg_order_value": 300,
    "new_users": 25000,
    "active_users": 80000,
    "repurchase_rate": 0.35,
    "day7_retention": 0.45,
    "gross_margin": 0.35,
    "net_margin": 0.12,
    "roi": 4.5,
    "cac": 80,
    "ltv": 480
}`,
      requirements: ['指标选取', '指标分类'],
      referenceAnswer: `print("=== 电商行业核心指标体系 ===\\n")

metrics = {
    "流量指标": ["UV", "PV", "跳失率", "平均停留时长"],
    "转化指标": ["加购率", "下单转化率", "支付转化率", "整体转化率"],
    "订单指标": ["订单数", "GMV", "客单价", "件单价"],
    "用户指标": ["新用户数", "活跃用户数", "复购率", "留存率"],
    "利润指标": ["毛利率", "净利率", "ROI", "CAC", "LTV"]
}

for category, metric_list in metrics.items():
    print(f"{category}:")
    print(f"  {', '.join(metric_list)}")`,
      scoringCriteria: ['指标全面：50分', '分类合理：50分'],
      language: 'python',
      initialCode: 'print("=== 电商行业核心指标体系 ===\\n")\n\n# 设计电商行业指标体系',
      expectedPattern: 'print|dict|for'
    }, {
      title: '零售行业分析练习',
      type: 'intermediate',
      description: '分析零售行业数据分析的特点。',
      dataSource: `# 零售门店数据
retail_data = {
    "stores": 50,
    "total_area": 100000,
    "avg_store_area": 2000,
    "foot_traffic_daily": {"weekday": 1500, "weekend": 3000},
    "conversion_rate": 0.15,
    "avg_transaction_value": 280,
    "sku_count": 8000,
    "inventory_turnover": 8.5,
    "sell_through_rate": 0.72,
    "same_store_sales_growth": 0.03,
    "store_efficiency": {"avg_revenue_per_sqm": 12000, "avg_profit_per_sqm": 1500}
}`,
      requirements: ['人货场分析', '关键指标'],
      referenceAnswer: `print("=== 零售行业分析框架 ===\\n")

framework = {
    "人": {
        "客流": ["进店人数", "客流量时段分布", "客流转化率"],
        "客群": ["年龄结构", "性别比例", "消费能力"],
        "复购": ["复购周期", "复购频次", "会员贡献度"]
    },
    "货": {
        "品类": ["品类结构", "SKU数", "品类关联"],
        "库存": ["库存周转", "售罄率", "库存结构"],
        "销售": ["畅销款", "滞销款", "连带率"]
    },
    "场": {
        "门店": ["店效", "坪效", "位置分析"],
        "陈列": ["动线", "热区", "黄金位置"],
        "促销": ["促销效果", "促销频率", "促销形式"]
    }
}

for dimension, aspects in framework.items():
    print(f"{dimension}维度:")
    for aspect, items in aspects.items():
        print(f"  {aspect}: {', '.join(items)}")`,
      scoringCriteria: ['框架完整：50分', '指标实用：50分'],
      language: 'python',
      initialCode: 'print("=== 零售行业分析框架 ===\\n")\n\n# 设计人货场分析框架',
      expectedPattern: 'print|dict|for'
    }, {
      title: '互联网行业指标练习',
      type: 'advanced',
      description: '分析互联网行业的数据指标体系。',
      dataSource: `# 互联网产品AARRR数据
aarrr_data = {
    "acquisition": {
        "channels": ["应用商店", "社交媒体", "广告投放", "口碑传播"],
        "cac": {"app_store": 45, "social_media": 35, "ads": 65, "referral": 15},
        "conversion_rate": {"impression_to_install": 0.08, "install_to_register": 0.75}
    },
    "activation": {
        "key_actions": ["完成注册", "完善资料", "首次发布内容", "首次互动"],
        "activation_rate": 0.42,
        "onboarding_completion": 0.68
    },
    "retention": {
        "day1_retention": 0.65,
        "day7_retention": 0.42,
        "day30_retention": 0.28,
        "churn_rate_monthly": 0.15
    },
    "revenue": {
        "arpu": 120,
        "arppu": 480,
        "payment_rate": 0.25,
        "ltv": 1800
    },
    "referral": {
        "k_factor": 1.2,
        "share_rate": 0.18,
        "invitation_rate": 0.35
    }
}`,
      requirements: ['AARRR模型', '北极星指标'],
      referenceAnswer: `print("=== 互联网产品AARRR模型 ===\\n")

aarrr = {
    "Acquisition(获客)": {
        "指标": ["CAC", "渠道曝光", "渠道转化率"],
        "公式": "CAC = 渠道成本 / 获客数量"
    },
    "Activation(激活)": {
        "指标": ["激活率", "关键行为完成率", "新手引导完成率"],
        "公式": "激活率 = 完成关键行为用户 / 访客"
    },
    "Retention(留存)": {
        "指标": ["次日留存", "7日留存", "30日留存", "流失率"],
        "公式": "留存率 = 某日活跃用户 / N日前活跃用户"
    },
    "Revenue(变现)": {
        "指标": ["ARPU", "ARPPU", "付费率", "LTV"],
        "公式": "LTV = ARPU × 平均生命周期"
    },
    "Referral(推荐)": {
        "指标": ["K因子", "分享率", "裂变系数"],
        "公式": "K = 分享用户数 × 平均邀请数"
    }
}

for stage, data in aarrr.items():
    print(stage)
    print("  指标:", ", ".join(data["指标"]))
    print("  公式:", data["公式"])`,
      scoringCriteria: ['模型理解：40分', '指标准确：40分', '公式正确：20分'],
      language: 'python',
      initialCode: 'print("=== 互联网产品AARRR模型 ===\\n")\n\n# 设计AARRR模型指标体系',
      expectedPattern: 'print|dict|for'
    }],
    validationCriteria: ['能够针对不同行业设计分析指标'],
    resources: [{ title: '行业分析', content: '电商/零售/互联网/金融', type: 'formula' }]
  },

  'tools-python': {
    id: 'tools-python',
    title: 'Python数据分析入门',
    section: 'tools',
    sectionTitle: '必备工具栈零基础全精通',
    duration: '8小时',
    level: '基础',
    color: 'from-green-500 to-emerald-500',
    prerequisites: ['掌握Python基础'],
    knowledgePoints: [{
      title: 'Pandas数据处理',
      content: '学习使用Pandas进行数据处理。',
      keyPoints: ['DataFrame操作', '数据筛选', '数据统计'],
      caseStudy: '分析销售数据。',
      pitfalls: ['索引错误', '类型错误']
    }],
    practices: [{
      title: 'DataFrame创建',
      type: 'basic',
      description: '创建和操作DataFrame。',
      dataSource: `# 用户信息数据（JSON格式）
user_data = [
    {"name": "Alice", "age": 28, "city": "北京", "salary": 15000},
    {"name": "Bob", "age": 32, "city": "上海", "salary": 22000},
    {"name": "Carol", "age": 26, "city": "广州", "salary": 12000},
    {"name": "David", "age": 30, "city": "深圳", "salary": 18000},
    {"name": "Eve", "age": 24, "city": "杭州", "salary": 10000}
]`,
      requirements: ['创建DataFrame', '访问列', '基本统计'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Carol"],
    "age": [20, 25, 30]
})
print(df)
print(df["age"].mean())`,
      scoringCriteria: ['创建：50分', '统计：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 创建数据框',
      expectedPattern: 'DataFrame|mean'
    }, {
      title: '数据筛选',
      type: 'intermediate',
      description: '筛选符合条件的数据。',
      dataSource: `# 产品销售数据
product_sales = [
    {"product": "A", "category": "电子", "sales": 100, "price": 500},
    {"product": "B", "category": "服装", "sales": 150, "price": 200},
    {"product": "C", "category": "电子", "sales": 80, "price": 800},
    {"product": "D", "category": "食品", "sales": 200, "price": 50},
    {"product": "E", "category": "服装", "sales": 120, "price": 300},
    {"product": "F", "category": "电子", "sales": 95, "price": 450}
]`,
      requirements: ['条件筛选', '多重条件', '数据过滤'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "product": ["A", "B", "C", "D"],
    "sales": [100, 150, 80, 200]
})
result = df[df["sales"] > 100]
print(result)`,
      scoringCriteria: ['筛选：60分', '输出：40分'],
      language: 'python',
      initialCode: 'import pandas as pd\ndf = pd.DataFrame({\n    "product": ["A", "B", "C"],\n    "sales": [100, 150, 80]\n})\n# 筛选销售额>100的',
      expectedPattern: '\\[.*>.*\\]'
    }, {
      title: '数据分组统计',
      type: 'advanced',
      description: '按类别分组统计数据。',
      dataSource: `# 销售明细数据
sales_data = [
    {"category": "电子产品", "product": "手机", "sales": 120, "revenue": 599880},
    {"category": "电子产品", "product": "电脑", "sales": 45, "revenue": 359955},
    {"category": "电子产品", "product": "平板", "sales": 78, "revenue": 233922},
    {"category": "服装", "product": "T恤", "sales": 320, "revenue": 79920},
    {"category": "服装", "product": "裤子", "sales": 180, "revenue": 89910},
    {"category": "服装", "product": "外套", "sales": 95, "revenue": 142425},
    {"category": "食品", "product": "零食", "sales": 500, "revenue": 24950},
    {"category": "食品", "product": "饮料", "sales": 380, "revenue": 19958}
]`,
      requirements: ['groupby操作', '聚合函数', '多列统计'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "category": ["电子", "服装", "电子", "服装"],
    "sales": [100, 80, 120, 90]
})
grouped = df.groupby("category").sum()
print(grouped)`,
      scoringCriteria: ['groupby：50分', '聚合：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 分组统计',
      expectedPattern: 'groupby|sum'
    }],
    validationCriteria: ['能够使用Pandas进行数据处理'],
    resources: [{ title: 'Pandas', content: 'DataFrame/groupby/merge', type: 'formula' }]
  },

  'tools-sql': {
    id: 'tools-sql',
    title: 'SQL数据查询精通',
    section: 'tools',
    sectionTitle: '必备工具栈零基础全精通',
    duration: '6小时',
    level: '进阶',
    color: 'from-green-500 to-emerald-500',
    prerequisites: ['了解数据库基础'],
    knowledgePoints: [{
      title: 'SQL查询基础',
      content: '学习SQL查询语句。',
      keyPoints: ['SELECT', 'WHERE', 'ORDER BY'],
      caseStudy: '查询销售数据。',
      pitfalls: ['语法错误', '性能问题']
    }],
    practices: [{
      title: '基本SELECT查询',
      type: 'basic',
      description: '练习基本的SELECT查询。',
      dataSource: `-- products表结构
-- CREATE TABLE products (
--     id INT PRIMARY KEY,
--     name VARCHAR(100),
--     category VARCHAR(50),
--     price DECIMAL(10,2),
--     sales INT,
--     stock INT
-- );
-- 
-- 示例数据
-- INSERT INTO products VALUES
-- (1, 'iPhone 15', '电子', 5999, 1200, 200),
-- (2, 'MacBook Pro', '电子', 12999, 450, 80),
-- (3, 'AirPods Pro', '电子', 1899, 3200, 500),
-- (4, '运动T恤', '服装', 199, 5600, 800),
-- (5, '牛仔裤', '服装', 299, 3200, 400),
-- (6, '休闲鞋', '服装', 399, 2800, 350);`,
      requirements: ['选择列', '条件过滤', '排序'],
      referenceAnswer: `SELECT name, sales FROM products
WHERE category = '电子'
ORDER BY sales DESC;`,
      scoringCriteria: ['语法：50分', '逻辑：50分'],
      language: 'sql',
      initialCode: '-- 查询电子产品\nSELECT ',
      expectedPattern: 'SELECT|FROM|WHERE'
    }, {
      title: '聚合函数',
      type: 'intermediate',
      description: '使用聚合函数统计数据。',
      dataSource: `-- sales表结构
-- CREATE TABLE sales (
--     id INT PRIMARY KEY,
--     product_id INT,
--     sale_date DATE,
--     quantity INT,
--     amount DECIMAL(10,2),
--     region VARCHAR(50)
-- );
-- 
-- 示例数据
-- INSERT INTO sales VALUES
-- (1, 1, '2024-01-05', 10, 59990, '华东'),
-- (2, 1, '2024-01-12', 8, 47992, '华北'),
-- (3, 2, '2024-01-08', 5, 64995, '华东'),
-- (4, 3, '2024-01-15', 20, 37980, '华南'),
-- (5, 4, '2024-01-20', 50, 9950, '华东'),
-- (6, 5, '2024-01-22', 30, 8970, '华北'),
-- (7, 6, '2024-01-25', 25, 9975, '华南'),
-- (8, 1, '2024-02-02', 12, 71988, '华东');`,
      requirements: ['COUNT', 'SUM', 'GROUP BY'],
      referenceAnswer: `SELECT category, COUNT(*), SUM(sales)
FROM products
GROUP BY category
HAVING SUM(sales) > 1000;`,
      scoringCriteria: ['聚合：50分', '分组：50分'],
      language: 'sql',
      initialCode: '-- 按类别统计\nSELECT ',
      expectedPattern: 'GROUP BY|HAVING|SUM'
    }, {
      title: '多表连接',
      type: 'advanced',
      description: '连接多个表查询数据。',
      dataSource: `-- categories表结构
-- CREATE TABLE categories (
--     id INT PRIMARY KEY,
--     name VARCHAR(50),
--     parent_id INT
-- );
-- 
-- 示例数据
-- INSERT INTO categories VALUES
-- (1, '电子产品', NULL),
-- (2, '服装', NULL),
-- (3, '手机', 1),
-- (4, '电脑', 1),
-- (5, '配件', 1),
-- (6, '男装', 2),
-- (7, '女装', 2);
-- 
-- products表 (同上)
-- sales表 (同上)`,
      requirements: ['INNER JOIN', 'LEFT JOIN', '多表连接'],
      referenceAnswer: `SELECT p.name, c.name as category
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE c.name = '电子';`,
      scoringCriteria: ['连接：60分', '条件：40分'],
      language: 'sql',
      initialCode: '-- 多表连接\nSELECT ',
      expectedPattern: 'JOIN|ON'
    }],
    validationCriteria: ['能够编写复杂SQL查询'],
    resources: [{ title: 'SQL', content: 'SELECT/JOIN/GROUP BY', type: 'formula' }]
  },

  'cleaning-missing': {
    id: 'cleaning-missing',
    title: '缺失值处理技术',
    section: 'cleaning',
    sectionTitle: '数据清洗与预处理核心技能',
    duration: '4小时',
    level: '基础',
    color: 'from-orange-500 to-amber-500',
    prerequisites: ['掌握Pandas'],
    knowledgePoints: [{
      title: '缺失值处理',
      content: '学习处理数据中的缺失值。',
      keyPoints: ['检测缺失值', '删除缺失值', '填充缺失值'],
      caseStudy: '处理销售数据中的缺失值。',
      pitfalls: ['过度删除', '不当填充']
    }],
    practices: [{
      title: '检测缺失值',
      type: 'basic',
      description: '检测数据中的缺失值。',
      dataSource: `# 含缺失值的学生数据
student_data = [
    {"name": "Alice", "age": 20, "gender": "女", "score": 85, "major": "计算机"},
    {"name": "Bob", "age": None, "gender": "男", "score": 90, "major": None},
    {"name": "Carol", "age": 22, "gender": None, "score": None, "major": "数学"},
    {"name": "David", "age": 21, "gender": "男", "score": 78, "major": "物理"},
    {"name": "Eve", "age": 19, "gender": "女", "score": 92, "major": "化学"},
    {"name": "Frank", "age": None, "gender": "男", "score": 88, "major": "计算机"}
]`,
      requirements: ['isnull检测', '统计缺失值', '定位缺失值'],
      referenceAnswer: `import pandas as pd
import numpy as np
df = pd.DataFrame({
    "name": ["Alice", None, "Carol"],
    "age": [20, np.nan, 30]
})
print(df.isnull().sum())`,
      scoringCriteria: ['检测：50分', '统计：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 检测缺失值',
      expectedPattern: 'isnull|sum'
    }, {
      title: '缺失值填充',
      type: 'intermediate',
      description: '填充数据中的缺失值。',
      dataSource: `# 含缺失值的销售数据
sales_data = [
    {"date": "2024-01-01", "revenue": 10000, "profit": 2500, "orders": 80},
    {"date": "2024-01-02", "revenue": 12000, "profit": None, "orders": 95},
    {"date": "2024-01-03", "revenue": None, "profit": 3000, "orders": 100},
    {"date": "2024-01-04", "revenue": 11000, "profit": 2800, "orders": None},
    {"date": "2024-01-05", "revenue": 13500, "profit": 3200, "orders": 110},
    {"date": "2024-01-06", "revenue": None, "profit": None, "orders": 90},
    {"date": "2024-01-07", "revenue": 9500, "profit": 2200, "orders": 75}
]`,
      requirements: ['均值填充', '中位数填充', '自定义填充'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "age": [20, None, 30, 25, None]
})
df["age"] = df["age"].fillna(df["age"].mean())
print(df)`,
      scoringCriteria: ['填充：60分', '方法选择：40分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 填充缺失值',
      expectedPattern: 'fillna|mean'
    }, {
      title: '缺失值处理策略',
      type: 'advanced',
      description: '根据业务场景选择缺失值处理策略。',
      dataSource: `# 综合缺失值处理数据
customer_data = [
    {"customer_id": 1001, "name": "张三", "age": 28, "gender": "男", "phone": "13800138001", "email": "zhangsan@example.com", "income": 15000},
    {"customer_id": 1002, "name": "李四", "age": None, "gender": "女", "phone": None, "email": "lisi@example.com", "income": 12000},
    {"customer_id": 1003, "name": "王五", "age": 35, "gender": None, "phone": "13900139002", "email": None, "income": None},
    {"customer_id": 1004, "name": None, "age": 42, "gender": "男", "phone": "13700137003", "email": "wangwu@example.com", "income": 25000},
    {"customer_id": 1005, "name": "赵六", "age": 26, "gender": "女", "phone": "13600136004", "email": "zhaoliu@example.com", "income": 18000},
    {"customer_id": 1006, "name": "钱七", "age": None, "gender": None, "phone": None, "email": None, "income": None}
]`,
      requirements: ['删除策略', '填充策略', '业务判断'],
      referenceAnswer: `import pandas as pd
import numpy as np
df = pd.DataFrame({
    "name": ["Alice", None, "Carol"],
    "age": [20, np.nan, 30],
    "score": [85, 90, np.nan]
})
# 删除完全缺失的行
df_clean = df.dropna(how="all")
# 填充数值列
df_clean["age"] = df_clean["age"].fillna(df_clean["age"].median())
print(df_clean)`,
      scoringCriteria: ['策略选择：40分', '综合处理：60分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 综合处理缺失值',
      expectedPattern: 'dropna|fillna'
    }],
    validationCriteria: ['能够处理数据中的缺失值'],
    resources: [{ title: '缺失值处理', content: '检测/删除/填充', type: 'formula' }]
  },

  'statistics-basic': {
    id: 'statistics-basic',
    title: '描述性统计基础',
    section: 'statistics',
    sectionTitle: '统计分析与数据建模',
    duration: '4小时',
    level: '基础',
    color: 'from-rose-500 to-red-500',
    prerequisites: ['掌握Pandas'],
    knowledgePoints: [{
      title: '描述性统计',
      content: '学习基本的统计描述方法。',
      keyPoints: ['均值', '中位数', '标准差'],
      caseStudy: '分析考试成绩数据。',
      pitfalls: ['忽视数据分布']
    }],
    practices: [{
      title: '基本统计量计算',
      type: 'basic',
      description: '计算基本统计量。',
      dataSource: `# 考试成绩数据
exam_scores = [85, 90, 78, 92, 88, 75, 83, 95, 81, 87, 79, 91, 84, 89, 82]`,
      requirements: ['均值', '中位数', '标准差'],
      referenceAnswer: `import pandas as pd
data = pd.Series([85, 90, 78, 92, 88])
print(f"均值: {data.mean()}")
print(f"中位数: {data.median()}")
print(f"标准差: {data.std()}")`,
      scoringCriteria: ['计算：60分', '输出：40分'],
      language: 'python',
      initialCode: 'import pandas as pd\ndata = pd.Series([85, 90, 78, 92, 88])\n# 计算统计量',
      expectedPattern: 'mean|median|std'
    }, {
      title: '数据分布分析',
      type: 'intermediate',
      description: '分析数据的分布特征。',
      dataSource: `# 身高体重数据
physical_data = [
    {"height": 170, "weight": 65, "age": 25},
    {"height": 165, "weight": 55, "age": 22},
    {"height": 180, "weight": 80, "age": 30},
    {"height": 175, "weight": 70, "age": 28},
    {"height": 168, "weight": 60, "age": 24},
    {"height": 185, "weight": 85, "age": 32},
    {"height": 172, "weight": 68, "age": 26},
    {"height": 160, "weight": 52, "age": 21}
]`,
      requirements: ['极差', '四分位数', '偏度'],
      referenceAnswer: `import pandas as pd
data = pd.Series([85, 90, 78, 92, 88, 80, 95, 75])
print(f"极差: {data.max() - data.min()}")
print(f"四分位数: {data.quantile([0.25, 0.5, 0.75])}")
print(f"偏度: {data.skew()}")`,
      scoringCriteria: ['计算：60分', '解读：40分'],
      language: 'python',
      initialCode: 'import pandas as pd\ndata = pd.Series([85, 90, 78, 92, 88])\n# 分析分布',
      expectedPattern: 'quantile|skew|max|min'
    }, {
      title: '统计综合分析',
      type: 'advanced',
      description: '进行综合统计分析。',
      dataSource: `# 多科目考试成绩数据
multi_subject_scores = [
    {"student_id": 1, "math": 85, "english": 76, "physics": 90, "chemistry": 82},
    {"student_id": 2, "math": 90, "english": 85, "physics": 88, "chemistry": 88},
    {"student_id": 3, "math": 78, "english": 90, "physics": 85, "chemistry": 92},
    {"student_id": 4, "math": 92, "english": 82, "physics": 95, "chemistry": 85},
    {"student_id": 5, "math": 88, "english": 89, "physics": 82, "chemistry": 90},
    {"student_id": 6, "math": 80, "english": 92, "physics": 78, "chemistry": 86},
    {"student_id": 7, "math": 95, "english": 80, "physics": 92, "chemistry": 88},
    {"student_id": 8, "math": 75, "english": 88, "physics": 80, "chemistry": 95}
]`,
      requirements: ['describe方法', '自定义统计', '可视化'],
      referenceAnswer: `import pandas as pd
data = pd.DataFrame({
    "math": [85, 90, 78, 92, 88],
    "english": [76, 85, 90, 82, 89]
})
print(data.describe())
print(f"\\n数学平均分: {data["math"].mean()}")
print(f"英语最高分: {data["english"].max()}")`,
      scoringCriteria: ['describe：40分', '综合分析：60分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 综合统计分析',
      expectedPattern: 'describe|mean|max'
    }],
    validationCriteria: ['能够进行描述性统计分析'],
    resources: [{ title: '统计量', content: '均值/中位数/标准差/偏度', type: 'formula' }]
  },

  'metrics-analysis': {
    id: 'metrics-analysis',
    title: '业务指标分析',
    section: 'metrics',
    sectionTitle: '业务指标体系构建与分析',
    duration: '4小时',
    level: '核心',
    color: 'from-cyan-500 to-blue-500',
    prerequisites: ['掌握基础统计'],
    knowledgePoints: [{
      title: '业务指标',
      content: '学习常用业务指标的计算方法。',
      keyPoints: ['转化率', '留存率', '复购率'],
      caseStudy: '分析电商业务指标。',
      pitfalls: ['口径不一致']
    }],
    practices: [{
      title: '转化率计算',
      type: 'basic',
      description: '计算转化率指标。',
      dataSource: `# 转化漏斗数据
conversion_data = {
    "channel": "首页Banner",
    "date": "2024-01-15",
    "impressions": 10000,
    "clicks": 600,
    "visitors": 550,
    "registrations": 88,
    "purchases": 22
}`,
      requirements: ['访问量', '转化量', '转化率'],
      referenceAnswer: `visitors = 10000
conversions = 500
rate = conversions / visitors * 100
print(f"转化率: {rate:.2f}%")`,
      scoringCriteria: ['计算：80分', '输出：20分'],
      language: 'python',
      initialCode: 'visitors = 10000\nconversions = 500\n# 计算转化率',
      expectedPattern: '/.*100|print'
    }, {
      title: '留存率计算',
      type: 'intermediate',
      description: '计算用户留存率。',
      dataSource: `# 用户留存数据
retention_data = {
    "cohort_date": "2024-01-01",
    "new_users": 1000,
    "day1_active": 750,
    "day3_active": 580,
    "day7_active": 420,
    "day14_active": 320,
    "day30_active": 260
}`,
      requirements: ['新增用户', '留存用户', '留存率'],
      referenceAnswer: `day0_users = 1000
day7_users = 350
retention = day7_users / day0_users * 100
print(f"7日留存率: {retention:.2f}%")`,
      scoringCriteria: ['计算：80分', '输出：20分'],
      language: 'python',
      initialCode: 'day0_users = 1000\nday7_users = 350\n# 计算留存率',
      expectedPattern: '/.*100|print'
    }, {
      title: '漏斗分析',
      type: 'advanced',
      description: '进行漏斗转化率分析。',
      dataSource: `# 电商购买漏斗数据
funnel_data = {
    "steps": ["曝光", "点击", "访问", "加购", "下单", "支付"],
    "users": [100000, 8000, 6500, 2600, 1300, 1105],
    "step_names": ["广告曝光", "商品详情页", "商品列表页", "购物车", "确认订单", "支付成功"]
}`,
      requirements: ['各环节用户数', '转化率', '瓶颈分析'],
      referenceAnswer: `funnel = [10000, 6000, 3000, 1500, 800]
for i in range(1, len(funnel)):
    rate = funnel[i] / funnel[i-1] * 100
    print(f"步骤{i}: {rate:.2f}%")
overall = funnel[-1] / funnel[0] * 100
print(f"\\n整体转化率: {overall:.2f}%")`,
      scoringCriteria: ['计算：50分', '分析：50分'],
      language: 'python',
      initialCode: 'funnel = [10000, 6000, 3000, 1500, 800]\n# 漏斗分析',
      expectedPattern: 'for|range|print'
    }],
    validationCriteria: ['能够计算和分析业务指标'],
    resources: [{ title: '业务指标', content: '转化/留存/复购', type: 'formula' }]
  },

  'advanced-correlation': {
    id: 'advanced-correlation',
    title: '相关性分析方法',
    section: 'advanced',
    sectionTitle: '进阶分析方法与模型实战',
    duration: '4小时',
    level: '基础',
    color: 'from-indigo-500 to-blue-500',
    prerequisites: ['掌握描述性统计'],
    knowledgePoints: [{
      title: '相关系数',
      content: '学习计算变量之间的相关性。',
      keyPoints: ['Pearson相关', 'Spearman相关', '相关矩阵'],
      caseStudy: '分析影响销售额的因素。',
      pitfalls: ['相关不等于因果']
    }],
    practices: [{
      title: 'Pearson相关系数',
      type: 'basic',
      description: '计算Pearson相关系数。',
      dataSource: `# 身高体重相关数据
height_weight_data = [
    {"height": 165, "weight": 52, "age": 20},
    {"height": 170, "weight": 60, "age": 22},
    {"height": 175, "weight": 68, "age": 25},
    {"height": 180, "weight": 72, "age": 24},
    {"height": 168, "weight": 55, "age": 21},
    {"height": 172, "weight": 62, "age": 23},
    {"height": 185, "weight": 80, "age": 28},
    {"height": 162, "weight": 48, "age": 19}
]`,
      requirements: ['计算相关系数', '解读相关性'],
      referenceAnswer: `import pandas as pd
data = pd.DataFrame({
    "height": [170, 165, 180, 175],
    "weight": [65, 55, 80, 70]
})
corr = data["height"].corr(data["weight"])
print(f"相关系数: {corr:.4f}")`,
      scoringCriteria: ['计算：50分', '解读：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 计算相关系数',
      expectedPattern: 'corr\\(|print'
    }, {
      title: '相关矩阵',
      type: 'intermediate',
      description: '计算多个变量的相关矩阵。',
      dataSource: `# 销售影响因素数据
sales_factors_data = [
    {"sales": 120, "price": 800, "ads_spend": 50, "competition": 3, "season": 1},
    {"sales": 150, "price": 750, "ads_spend": 80, "competition": 2, "season": 2},
    {"sales": 90, "price": 850, "ads_spend": 30, "competition": 4, "season": 1},
    {"sales": 200, "price": 650, "ads_spend": 100, "competition": 2, "season": 2},
    {"sales": 180, "price": 700, "ads_spend": 90, "competition": 3, "season": 2},
    {"sales": 80, "price": 900, "ads_spend": 25, "competition": 5, "season": 1},
    {"sales": 160, "price": 720, "ads_spend": 75, "competition": 3, "season": 2},
    {"sales": 130, "price": 780, "ads_spend": 60, "competition": 4, "season": 1}
]`,
      requirements: ['创建相关矩阵', '识别高相关变量'],
      referenceAnswer: `import pandas as pd
data = pd.DataFrame({
    "sales": [100, 150, 80, 200],
    "price": [1000, 800, 1200, 500],
    "ads": [50, 80, 30, 100]
})
corr_matrix = data.corr()
print(corr_matrix.round(2))`,
      scoringCriteria: ['计算：50分', '分析：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 计算相关矩阵',
      expectedPattern: 'corr\\(\\)|round'
    }, {
      title: 'Spearman秩相关',
      type: 'advanced',
      description: '使用Spearman相关分析非线性关系。',
      dataSource: `# 非线性关系数据
nonlinear_data = [
    {"x": 1, "y": 1},
    {"x": 2, "y": 4},
    {"x": 3, "y": 9},
    {"x": 4, "y": 16},
    {"x": 5, "y": 25},
    {"x": 6, "y": 36},
    {"x": 7, "y": 49},
    {"x": 8, "y": 64}
]`,
      requirements: ['Spearman相关', '与Pearson对比'],
      referenceAnswer: `from scipy import stats
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]
spearman_corr, _ = stats.spearmanr(x, y)
print(f"Spearman相关: {spearman_corr}")`,
      scoringCriteria: ['计算：50分', '对比：50分'],
      language: 'python',
      initialCode: 'from scipy import stats\n# Spearman相关',
      expectedPattern: 'spearmanr|print'
    }],
    validationCriteria: ['能够进行相关性分析'],
    resources: [{ title: '相关系数', content: 'Pearson/Spearman', type: 'formula' }]
  },

  'visualization-matplotlib': {
    id: 'visualization-matplotlib',
    title: '数据可视化入门',
    section: 'visualization',
    sectionTitle: '数据可视化与分析报告输出',
    duration: '4小时',
    level: '基础',
    color: 'from-violet-500 to-purple-500',
    prerequisites: ['掌握Python基础'],
    knowledgePoints: [{
      title: 'Matplotlib可视化',
      content: '学习使用Matplotlib创建图表。',
      keyPoints: ['折线图', '柱状图', '散点图'],
      caseStudy: '可视化销售数据。',
      pitfalls: ['图表过于复杂']
    }],
    practices: [{
      title: '折线图',
      type: 'basic',
      description: '创建折线图展示趋势。',
      dataSource: `# 月度销售额数据
monthly_sales_data = [
    {"month": "1月", "sales": 120, "profit": 30},
    {"month": "2月", "sales": 145, "profit": 38},
    {"month": "3月", "sales": 130, "profit": 32},
    {"month": "4月", "sales": 165, "profit": 45},
    {"month": "5月", "sales": 180, "profit": 50},
    {"month": "6月", "sales": 175, "profit": 48}
]`,
      requirements: ['导入matplotlib', '绘制折线', '添加标题'],
      referenceAnswer: `import matplotlib.pyplot as plt
months = [1, 2, 3, 4, 5]
sales = [100, 120, 90, 150, 180]
plt.plot(months, sales)
plt.title("月度销售额")
plt.xlabel("月份")
plt.ylabel("销售额")
plt.show()`,
      scoringCriteria: ['绘图：60分', '样式：40分'],
      language: 'python',
      initialCode: 'import matplotlib.pyplot as plt\n# 绘制折线图',
      expectedPattern: 'plot|show'
    }, {
      title: '柱状图',
      type: 'intermediate',
      description: '创建柱状图展示对比。',
      dataSource: `# 产品销售对比数据
product_comparison_data = [
    {"product": "A", "sales_2023": 1200, "sales_2024": 1500, "category": "电子"},
    {"product": "B", "sales_2023": 800, "sales_2024": 950, "category": "电子"},
    {"product": "C", "sales_2023": 2000, "sales_2024": 2300, "category": "服装"},
    {"product": "D", "sales_2023": 1500, "sales_2024": 1650, "category": "服装"},
    {"product": "E", "sales_2023": 600, "sales_2024": 850, "category": "食品"}
]`,
      requirements: ['柱状图', '多组数据', '图例'],
      referenceAnswer: `import matplotlib.pyplot as plt
products = ["A", "B", "C"]
sales_2023 = [100, 150, 80]
sales_2024 = [120, 165, 95]
plt.bar(products, sales_2023, label="2023")
plt.bar(products, sales_2024, bottom=sales_2023, label="2024")
plt.legend()
plt.show()`,
      scoringCriteria: ['绘图：60分', '对比：40分'],
      language: 'python',
      initialCode: 'import matplotlib.pyplot as plt\n# 绘制柱状图',
      expectedPattern: 'bar|legend|show'
    }, {
      title: '组合图表',
      type: 'advanced',
      description: '创建组合图表。',
      dataSource: `# 组合图表数据
combo_chart_data = [
    {"month": "1月", "sales": 120, "profit": 30, "cost": 90},
    {"month": "2月", "sales": 145, "profit": 38, "cost": 107},
    {"month": "3月", "sales": 130, "profit": 32, "cost": 98},
    {"month": "4月", "sales": 165, "profit": 45, "cost": 120},
    {"month": "5月", "sales": 180, "profit": 50, "cost": 130},
    {"month": "6月", "sales": 175, "profit": 48, "cost": 127}
]`,
      requirements: ['双轴图表', '多类型图表', '布局调整'],
      referenceAnswer: `import matplotlib.pyplot as plt
months = [1, 2, 3, 4, 5]
sales = [100, 120, 90, 150, 180]
profit = [20, 25, 18, 30, 35]
fig, ax1 = plt.subplots()
ax2 = ax1.twinx()
ax1.bar(months, sales, color="blue")
ax2.plot(months, profit, color="red")
plt.show()`,
      scoringCriteria: ['双轴：50分', '布局：50分'],
      language: 'python',
      initialCode: 'import matplotlib.pyplot as plt\n# 组合图表',
      expectedPattern: 'subplots|twinx|bar|plot'
    }],
    validationCriteria: ['能够创建基本数据可视化图表'],
    resources: [{ title: '可视化', content: '折线图/柱状图/散点图', type: 'formula' }]
  },

  'project-ecommerce': {
    id: 'project-ecommerce',
    title: '电商数据分析实战',
    section: 'project',
    sectionTitle: '综合项目实战',
    duration: '10小时',
    level: '高级',
    color: 'from-rose-500 to-red-500',
    prerequisites: ['掌握Python和统计'],
    knowledgePoints: [{
      title: '电商数据分析',
      content: '学习电商数据分析方法。',
      keyPoints: ['用户分析', '销售分析', '商品分析'],
      caseStudy: '分析电商平台销售数据。',
      pitfalls: ['数据质量问题']
    }],
    practices: [{
      title: '数据导入与清洗',
      type: 'basic',
      description: '导入并清洗电商数据。',
      dataSource: `# 电商订单数据（含缺失值）
ecommerce_orders = [
    {"order_id": "ORD001", "user_id": 101, "order_date": "2024-01-05", "amount": 299.0, "status": "completed", "payment_method": "alipay"},
    {"order_id": "ORD002", "user_id": 102, "order_date": "2024-01-06", "amount": None, "status": "completed", "payment_method": "wechat"},
    {"order_id": "ORD003", "user_id": 101, "order_date": "2024-01-08", "amount": 159.0, "status": "cancelled", "payment_method": None},
    {"order_id": "ORD004", "user_id": 103, "order_date": None, "amount": 459.0, "status": "completed", "payment_method": "alipay"},
    {"order_id": "ORD005", "user_id": 104, "order_date": "2024-01-10", "amount": 89.0, "status": "completed", "payment_method": "wechat"},
    {"order_id": "ORD006", "user_id": 102, "order_date": "2024-01-12", "amount": 329.0, "status": "pending", "payment_method": "alipay"}
]`,
      requirements: ['读取数据', '处理缺失值', '数据类型转换'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "order_id": [1, 2, 3],
    "user_id": [101, 102, 101],
    "amount": [100.0, None, 150.0]
})
df["amount"] = df["amount"].fillna(df["amount"].mean())
print(df)`,
      scoringCriteria: ['导入：30分', '清洗：70分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 数据导入与清洗',
      expectedPattern: 'DataFrame|fillna|mean'
    }, {
      title: '用户购买行为分析',
      type: 'intermediate',
      description: '分析用户购买行为。',
      dataSource: `# 用户购买记录数据
user_purchase_data = [
    {"user_id": 101, "order_id": "ORD001", "amount": 299, "date": "2024-01-05", "category": "电子"},
    {"user_id": 101, "order_id": "ORD003", "amount": 159, "date": "2024-01-08", "category": "服装"},
    {"user_id": 101, "order_id": "ORD007", "amount": 89, "date": "2024-01-15", "category": "食品"},
    {"user_id": 102, "order_id": "ORD002", "amount": 399, "date": "2024-01-06", "category": "电子"},
    {"user_id": 102, "order_id": "ORD006", "amount": 329, "date": "2024-01-12", "category": "服装"},
    {"user_id": 103, "order_id": "ORD004", "amount": 459, "date": "2024-01-09", "category": "电子"},
    {"user_id": 103, "order_id": "ORD008", "amount": 179, "date": "2024-01-14", "category": "家居"},
    {"user_id": 103, "order_id": "ORD009", "amount": 239, "date": "2024-01-20", "category": "服装"},
    {"user_id": 103, "order_id": "ORD010", "amount": 59, "date": "2024-01-25", "category": "食品"},
    {"user_id": 104, "order_id": "ORD005", "amount": 89, "date": "2024-01-10", "category": "食品"}
]`,
      requirements: ['用户分组', '购买频次', '消费金额'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "user_id": [101, 101, 102, 103, 103, 103],
    "amount": [100, 150, 80, 200, 150, 100]
})
user_stats = df.groupby("user_id").agg({
    "amount": ["count", "sum"]
})
print(user_stats)`,
      scoringCriteria: ['分组：50分', '统计：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 用户购买行为分析',
      expectedPattern: 'groupby|agg|count|sum'
    }, {
      title: '销售趋势分析',
      type: 'advanced',
      description: '分析销售趋势。',
      dataSource: `# 周销售趋势数据
weekly_sales_data = [
    {"week_start": "2024-01-01", "sales": 1250, "orders": 45, "avg_order_value": 278},
    {"week_start": "2024-01-08", "sales": 1420, "orders": 52, "avg_order_value": 273},
    {"week_start": "2024-01-15", "sales": 1180, "orders": 42, "avg_order_value": 281},
    {"week_start": "2024-01-22", "sales": 1650, "orders": 58, "avg_order_value": 284},
    {"week_start": "2024-01-29", "sales": 1820, "orders": 64, "avg_order_value": 284},
    {"week_start": "2024-02-05", "sales": 1590, "orders": 56, "avg_order_value": 284},
    {"week_start": "2024-02-12", "sales": 1780, "orders": 62, "avg_order_value": 287},
    {"week_start": "2024-02-19", "sales": 1950, "orders": 68, "avg_order_value": 287},
    {"week_start": "2024-02-26", "sales": 2100, "orders": 72, "avg_order_value": 292},
    {"week_start": "2024-03-04", "sales": 2280, "orders": 78, "avg_order_value": 292}
]`,
      requirements: ['时间序列', '趋势分析', '可视化'],
      referenceAnswer: `import pandas as pd
import matplotlib.pyplot as plt
df = pd.DataFrame({
    "date": pd.date_range("2024-01-01", periods=10, freq="W"),
    "sales": [100, 120, 90, 150, 180, 160, 200, 190, 220, 250]
})
plt.plot(df["date"], df["sales"])
plt.title("周销售趋势")
plt.xticks(rotation=45)
plt.show()`,
      scoringCriteria: ['时间序列：40分', '可视化：60分'],
      language: 'python',
      initialCode: 'import pandas as pd\nimport matplotlib.pyplot as plt\n# 销售趋势分析',
      expectedPattern: 'date_range|plot|show'
    }],
    validationCriteria: ['能够完成电商数据分析'],
    resources: [{ title: '电商分析', content: '用户/销售/商品分析', type: 'formula' }]
  },

  'final-testing': {
    id: 'final-testing',
    title: '综合能力测试',
    section: 'assessment-final',
    sectionTitle: '能力考核与求职进阶配套',
    duration: '3小时',
    level: '考核',
    color: 'from-yellow-500 to-orange-500',
    prerequisites: ['完成所有学习模块'],
    knowledgePoints: [{
      title: '综合数据分析',
      content: '综合应用所学知识进行数据分析。',
      keyPoints: ['数据清洗', '统计分析', '可视化', '报告撰写'],
      caseStudy: '完成一个完整的数据分析项目。',
      pitfalls: ['遗漏关键分析']
    }],
    practices: [{
      title: '数据清洗综合练习',
      type: 'basic',
      description: '综合练习数据清洗技能。',
      dataSource: `# 待清洗的综合数据
dirty_data = [
    {"id": "001", "name": "Alice", "age": 28, "email": "alice@example.com", "score": 85},
    {"id": "002", "name": "Bob", "age": None, "email": "bob@example.com", "score": 90},
    {"id": "001", "name": "Alice", "age": 28, "email": "alice@example.com", "score": 85},
    {"id": "003", "name": None, "age": 32, "email": None, "score": 78},
    {"id": "004", "name": "David", "age": 25, "email": "david@example.com", "score": None},
    {"id": "005", "name": "Eve", "age": 29, "email": "eve@example.com", "score": 92}
]`,
      requirements: ['处理缺失值', '处理重复值', '数据转换'],
      referenceAnswer: `import pandas as pd
import numpy as np
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Alice", None],
    "age": [20, np.nan, 20, 25],
    "score": [85, 90, 85, np.nan]
})
df = df.drop_duplicates()
df["age"] = df["age"].fillna(df["age"].median())
print(df)`,
      scoringCriteria: ['去重：30分', '填充：40分', '输出：30分'],
      language: 'python',
      initialCode: 'import pandas as pd\nimport numpy as np\n# 综合数据清洗',
      expectedPattern: 'drop_duplicates|fillna|median'
    }, {
      title: '统计分析综合练习',
      type: 'intermediate',
      description: '综合练习统计分析技能。',
      dataSource: `# 综合统计分析数据
stats_data = [
    {"category": "A", "value": 120, "month": "1月"},
    {"category": "A", "value": 135, "month": "2月"},
    {"category": "A", "value": 118, "month": "3月"},
    {"category": "B", "value": 95, "month": "1月"},
    {"category": "B", "value": 105, "month": "2月"},
    {"category": "B", "value": 98, "month": "3月"},
    {"category": "C", "value": 80, "month": "1月"},
    {"category": "C", "value": 85, "month": "2月"},
    {"category": "C", "value": 92, "month": "3月"}
]`,
      requirements: ['描述统计', '相关分析', '分组统计'],
      referenceAnswer: `import pandas as pd
df = pd.DataFrame({
    "category": ["A", "A", "B", "B", "C"],
    "value": [100, 120, 80, 90, 150]
})
print(df.describe())
print(df.groupby("category").mean())`,
      scoringCriteria: ['描述统计：50分', '分组分析：50分'],
      language: 'python',
      initialCode: 'import pandas as pd\n# 综合统计分析',
      expectedPattern: 'describe|groupby|mean'
    }, {
      title: '完整数据分析项目',
      type: 'advanced',
      description: '完成一个完整的数据分析项目。',
      dataSource: `# 完整数据分析项目数据
project_data = [
    {"month": "1月", "sales": 1200, "cost": 720, "orders": 40, "customers": 35},
    {"month": "2月", "sales": 1350, "cost": 810, "orders": 45, "customers": 40},
    {"month": "3月", "sales": 1180, "cost": 708, "orders": 39, "customers": 36},
    {"month": "4月", "sales": 1520, "cost": 912, "orders": 51, "customers": 45},
    {"month": "5月", "sales": 1680, "cost": 1008, "orders": 56, "customers": 48},
    {"month": "6月", "sales": 1850, "cost": 1110, "orders": 62, "customers": 52}
]`,
      requirements: ['数据导入', '清洗', '分析', '可视化'],
      referenceAnswer: `import pandas as pd
import matplotlib.pyplot as plt
df = pd.DataFrame({
    "month": [1, 2, 3, 4, 5],
    "sales": [100, 120, 90, 150, 180],
    "cost": [60, 70, 55, 85, 100]
})
df["profit"] = df["sales"] - df["cost"]
plt.plot(df["month"], df["profit"])
plt.title("月度利润趋势")
plt.show()
print(f"总利润: {df["profit"].sum()}")`,
      scoringCriteria: ['完整流程：60分', '分析深度：40分'],
      language: 'python',
      initialCode: 'import pandas as pd\nimport matplotlib.pyplot as plt\n# 完整数据分析',
      expectedPattern: 'DataFrame|plot|show|sum'
    }],
    validationCriteria: ['能够完成综合数据分析任务'],
    resources: [{ title: '考核要点', content: '数据清洗/统计分析/可视化/报告撰写', type: 'formula' }]
  },

  'final-interview': {
    id: 'final-interview',
    title: '面试技巧与模拟',
    section: 'assessment-final',
    sectionTitle: '能力考核与求职进阶配套',
    duration: '4小时',
    level: '进阶',
    color: 'from-yellow-500 to-orange-500',
    prerequisites: ['完成综合能力测试'],
    knowledgePoints: [{
      title: '面试技巧',
      content: '学习数据分析面试技巧。',
      keyPoints: ['STAR法则', '常见问题', '案例分析'],
      caseStudy: '模拟数据分析面试。',
      pitfalls: ['准备不充分']
    }],
    practices: [{
      title: 'SQL面试题练习',
      type: 'basic',
      description: '练习常见SQL面试题。',
      dataSource: `-- sales_data表结构
-- CREATE TABLE sales_data (
--     id INT PRIMARY KEY,
--     date DATE,
--     sales DECIMAL(10,2),
--     product_id INT,
--     region VARCHAR(50)
-- );
-- 
-- 示例数据
-- INSERT INTO sales_data VALUES
-- (1, '2024-01-01', 1000, 1, '华东'),
-- (2, '2024-01-02', 1200, 1, '华东'),
-- (3, '2024-01-03', 900, 1, '华东'),
-- (4, '2024-01-04', 850, 1, '华东'),
-- (5, '2024-01-05', 1100, 1, '华北'),
-- (6, '2024-01-06', 950, 1, '华北'),
-- (7, '2024-01-07', 880, 1, '华北');`,
      requirements: ['复杂查询', '窗口函数', '性能优化'],
      referenceAnswer: `-- 查找连续3天销售额下降的日期
SELECT date FROM (
    SELECT date, sales,
           LAG(sales, 1) OVER(ORDER BY date) as prev1,
           LAG(sales, 2) OVER(ORDER BY date) as prev2
    FROM sales_data
) t
WHERE sales < prev1 AND prev1 < prev2;`,
      scoringCriteria: ['语法正确：50分', '逻辑正确：50分'],
      language: 'sql',
      initialCode: '-- SQL面试题：查找连续下降日期\nSELECT ',
      expectedPattern: 'LAG|OVER|WHERE'
    }, {
      title: 'Python面试题练习',
      type: 'intermediate',
      description: '练习Python面试题。',
      dataSource: `# Python面试题数据
interview_data = [
    {"category": "算法", "questions": ["反转链表", "两数之和", "最长回文子串"]},
    {"category": "数据结构", "questions": ["栈和队列的区别", "二叉树遍历", "哈希表的应用"]},
    {"category": "Python特性", "questions": ["生成器和迭代器的区别", "装饰器的作用", "GIL是什么"]},
    {"category": "数据处理", "questions": ["Pandas中的groupby", "缺失值处理", "数据合并方法"]}
]`,
      requirements: ['数据处理', '算法基础', '代码优化'],
      referenceAnswer: `# 找出列表中出现次数最多的元素
from collections import Counter
def most_frequent(lst):
    counter = Counter(lst)
    return max(counter, key=counter.get)

print(most_frequent([1, 2, 3, 2, 2, 3, 1, 1, 1]))`,
      scoringCriteria: ['正确性：60分', '效率：40分'],
      language: 'python',
      initialCode: '# 找出出现次数最多的元素\nfrom collections import Counter\ndef most_frequent(lst):\n    ',
      expectedPattern: 'Counter|max|print'
    }, {
      title: '业务分析面试题',
      type: 'advanced',
      description: '练习业务分析面试题。',
      dataSource: `# 业务分析面试题背景数据
business_interview_data = {
    "company": "电商平台",
    "problem": "用户流失率连续3个月上升，当前月流失率15%，行业平均8%",
    "user_base": {"total": 1000000, "active_daily": 150000, "new_users_monthly": 50000},
    "retention": {"day7": 42, "day30": 28, "day90": 18},
    "competitors": ["平台A", "平台B", "平台C"],
    "recent_changes": ["新增收费会员体系", "调整搜索算法", "物流时效优化"]
}`,
      requirements: ['需求理解', '指标设计', '分析思路'],
      referenceAnswer: `# 如何分析用户流失原因
print("1. 定义流失标准：连续30天未登录")
print("2. 对比流失用户与留存用户特征")
print("3. 分析流失前行为模式")
print("4. 构建流失预测模型")
print("5. 提出针对性留存策略")
print("\\n关键指标：留存率、活跃度、使用频率")`,
      scoringCriteria: ['思路清晰：40分', '指标设计：30分', '策略可行：30分'],
      language: 'python',
      initialCode: '# 分析用户流失原因\n',
      expectedPattern: 'print'
    }],
    validationCriteria: ['能够应对数据分析面试'],
    resources: [{ title: '面试技巧', content: 'STAR法则/常见问题/案例分析', type: 'formula' }]
  },

  'final-portfolio': {
    id: 'final-portfolio',
    title: '作品集制作',
    section: 'assessment-final',
    sectionTitle: '能力考核与求职进阶配套',
    duration: '4小时',
    level: '核心',
    color: 'from-yellow-500 to-orange-500',
    prerequisites: ['完成至少2个项目'],
    knowledgePoints: [{
      title: '作品集设计',
      content: '学习制作专业的数据分析师作品集。',
      keyPoints: ['项目展示', '可视化呈现', '文档撰写'],
      caseStudy: '创建个人数据分析师作品集。',
      pitfalls: ['内容空洞']
    }],
    practices: [{
      title: '项目文档撰写',
      type: 'basic',
      description: '撰写项目文档。',
      dataSource: `# 项目背景数据
project_info = {
    "name": "电商用户行为分析",
    "domain": "电商",
    "duration": "2024年1月-2月",
    "tools": ["Python", "Pandas", "Matplotlib", "SQL"],
    "objective": "分析用户购买行为，识别高价值用户特征，优化推荐策略",
    "data_sources": ["用户行为日志", "订单数据", "用户画像数据"],
    "key_findings": ["用户复购率与首次购买金额正相关", "移动端用户转化率高于PC端", "周三为一周购买高峰"]
}`,
      requirements: ['项目背景', '分析方法', '结果呈现'],
      referenceAnswer: `# 项目文档模板
print("## 项目背景")
print("描述业务问题和分析目标")
print("\\n## 数据来源")
print("数据源说明和数据字典")
print("\\n## 分析方法")
print("使用的分析方法和工具")
print("\\n## 关键发现")
print("核心分析结论")
print("\\n## 建议行动")
print("基于分析结果的建议")`,
      scoringCriteria: ['结构完整：50分', '内容详实：50分'],
      language: 'python',
      initialCode: '# 项目文档撰写\n',
      expectedPattern: 'print'
    }, {
      title: '可视化作品制作',
      type: 'intermediate',
      description: '制作可视化作品。',
      dataSource: `# 可视化作品数据
visualization_data = [
    {"month": "1月", "sales": 120, "profit": 30, "cost": 90},
    {"month": "2月", "sales": 145, "profit": 38, "cost": 107},
    {"month": "3月", "sales": 130, "profit": 32, "cost": 98},
    {"month": "4月", "sales": 165, "profit": 45, "cost": 120},
    {"month": "5月", "sales": 180, "profit": 50, "cost": 130},
    {"month": "6月", "sales": 175, "profit": 48, "cost": 127}
]`,
      requirements: ['图表选择', '配色设计', '故事呈现'],
      referenceAnswer: `import matplotlib.pyplot as plt
import pandas as pd

df = pd.DataFrame({
    "month": ["1月", "2月", "3月", "4月", "5月"],
    "sales": [100, 120, 90, 150, 180]
})

plt.figure(figsize=(10, 6))
plt.plot(df["month"], df["sales"], marker="o", linewidth=2, color="#2563eb")
plt.title("月度销售额趋势", fontsize=14)
plt.xlabel("月份", fontsize=12)
plt.ylabel("销售额(万元)", fontsize=12)
plt.grid(alpha=0.3)
plt.show()`,
      scoringCriteria: ['图表选择：40分', '设计美观：30分', '易读性：30分'],
      language: 'python',
      initialCode: 'import matplotlib.pyplot as plt\nimport pandas as pd\n\n# 创建可视化作品\n',
      expectedPattern: 'plot|figure|show'
    }, {
      title: '作品集网页设计',
      type: 'advanced',
      description: '设计作品集网页。',
      dataSource: `# 作品集网页设计数据
portfolio_data = {
    "personal_info": {
        "name": "张三",
        "title": "高级数据分析师",
        "experience": "5年数据分析经验",
        "email": "zhangsan@example.com",
        "location": "北京"
    },
    "skills": ["Python", "SQL", "Pandas", "NumPy", "Tableau", "Power BI", "统计分析", "机器学习"],
    "projects": [
        {
            "title": "电商用户RFM分析",
            "description": "使用RFM模型对用户进行分层，识别高价值用户",
            "tools": ["Python", "Pandas", "Matplotlib"],
            "results": "成功识别20%高价值用户，贡献80%营收"
        },
        {
            "title": "销售预测模型",
            "description": "构建时间序列预测模型，预测月度销售额",
            "tools": ["Python", "Prophet", "Scikit-learn"],
            "results": "预测准确率达到92%"
        },
        {
            "title": "A/B测试分析",
            "description": "分析产品改版A/B测试结果，评估效果",
            "tools": ["Python", "SQL", "统计检验"],
            "results": "验证新版本提升转化率15%"
        }
    ]
}`,
      requirements: ['页面结构', '项目展示', '交互设计'],
      referenceAnswer: `# 作品集网页结构
portfolio = {
    "about": "数据分析师，3年经验",
    "skills": ["Python", "SQL", "Tableau", "Excel"],
    "projects": [
        {
            "title": "电商用户分析",
            "description": "使用RFM模型进行用户分层",
            "tools": ["Python", "Pandas", "Matplotlib"]
        }
    ],
    "contact": "email@example.com"
}

print("作品集结构设计完成")
print(f"技能标签: {portfolio["skills"]}")`,
      scoringCriteria: ['结构设计：40分', '内容展示：30分', '专业性：30分'],
      language: 'python',
      initialCode: '# 作品集网页设计\nportfolio = {\n    ',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够制作专业的数据分析作品集'],
    resources: [{ title: '作品集', content: '项目文档/可视化/网页设计', type: 'formula' }]
  },

  'final-resume': {
    id: 'final-resume',
    title: '简历优化与投递',
    section: 'assessment-final',
    sectionTitle: '能力考核与求职进阶配套',
    duration: '3小时',
    level: '求职',
    color: 'from-yellow-500 to-orange-500',
    prerequisites: ['完成作品集'],
    knowledgePoints: [{
      title: '简历优化',
      content: '学习优化数据分析师简历。',
      keyPoints: ['关键词优化', '项目经验', '成果量化'],
      caseStudy: '优化个人简历。',
      pitfalls: ['信息冗长']
    }],
    practices: [{
      title: '简历关键词优化',
      type: 'basic',
      description: '优化简历关键词。',
      dataSource: `# 简历关键词数据
resume_keywords = {
    "target_jd": {
        "title": "高级数据分析师",
        "requirements": ["Python", "SQL", "Pandas", "统计分析", "A/B测试", "用户行为分析", "数据可视化", "Tableau", "业务指标"],
        "preferred": ["机器学习", "Spark", "数据建模", "商业洞察"]
    },
    "current_skills": ["Excel", "SQL", "基础统计", "数据报表"],
    "missing_skills": ["Python", "Pandas", "Tableau", "A/B测试"]
}`,
      requirements: ['关键词识别', '匹配JD', '突出技能'],
      referenceAnswer: `# 简历关键词
keywords = {
    "技术技能": ["Python", "SQL", "Pandas", "NumPy", "Tableau"],
    "分析方法": ["数据分析", "数据清洗", "统计分析", "可视化"],
    "业务领域": ["电商", "用户分析", "销售分析", "运营分析"]
}

print("优化后的关键词:")
for category, words in keywords.items():
    print(f"{category}: {words}")`,
      scoringCriteria: ['关键词准确：50分', '覆盖全面：50分'],
      language: 'python',
      initialCode: '# 简历关键词优化\nkeywords = {\n    ',
      expectedPattern: 'print|dict'
    }, {
      title: '项目经验描述',
      type: 'intermediate',
      description: '撰写项目经验。',
      dataSource: `# 项目经验数据
project_experience = {
    "project": "用户流失分析与留存策略",
    "background": "公司用户月流失率从8%上升至15%，业务增长受阻",
    "task": "分析用户流失原因，识别关键流失因素，提出留存策略",
    "actions": ["构建用户流失预测模型", "分析流失用户行为特征", "设计A/B测试验证策略"],
    "tools": ["Python", "Pandas", "Scikit-learn", "SQL"],
    "results": {"retention_improvement": 8, "model_accuracy": 0.85, "revenue_lift": "12%"}
}`,
      requirements: ['STAR法则', '成果量化', '简洁明了'],
      referenceAnswer: `# 项目经验描述模板
project = {
    "背景": "用户流失率上升15%",
    "任务": "分析流失原因并提出解决方案",
    "行动": "使用Python进行用户行为分析，构建流失预测模型",
    "结果": "识别关键流失因素，制定留存策略，降低流失率8%"
}

print(f"【项目经验】")
print(f"背景：{project["背景"]}")
print(f"行动：{project["行动"]}")
print(f"结果：{project["结果"]}")`,
      scoringCriteria: ['STAR结构：40分', '成果量化：30分', '简洁：30分'],
      language: 'python',
      initialCode: '# 项目经验描述\nproject = {\n    ',
      expectedPattern: 'print|dict'
    }, {
      title: '简历投递策略',
      type: 'advanced',
      description: '制定简历投递策略。',
      dataSource: `# 简历投递策略数据
job_search_data = {
    "target_companies": ["互联网大厂", "电商平台", "金融科技", "数据服务公司"],
    "target_positions": ["数据分析师", "商业分析师", "增长分析师", "BI工程师"],
    "channels": {
        "招聘网站": {"platforms": ["Boss直聘", "拉勾", "猎聘"], "effectiveness": "高"},
        "LinkedIn": {"platforms": ["领英"], "effectiveness": "中"},
        "内推": {"platforms": ["校友", "前同事", "行业人脉"], "effectiveness": "高"},
        "招聘会": {"platforms": ["线下招聘会", "行业沙龙"], "effectiveness": "低"}
    },
    "time_frame": {"total_duration": "3个月", "daily_applications": 5, "weekly_follow_up": 10},
    "expected_outcome": {"interviews_per_week": 2, "offer_rate": 0.2}
}`,
      requirements: ['渠道选择', '时间安排', '跟进策略'],
      referenceAnswer: `# 简历投递策略
strategy = {
    "渠道": ["招聘网站", "LinkedIn", "内推", "招聘会"],
    "投递频率": "每天5-10份",
    "跟进周期": "投递后3-5天",
    "优化周期": "每周根据反馈优化"
}

print("投递策略:")
for key, value in strategy.items():
    print(f"{key}: {value}")

print("\\n关键要点：")
print("1. 针对性修改简历")
print("2. 准备面试准备")
print("3. 保持积极跟进")`,
      scoringCriteria: ['策略完整：40分', '可执行性：30分', '效果评估：30分'],
      language: 'python',
      initialCode: '# 简历投递策略\nstrategy = {\n    ',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够制作优秀的数据分析简历'],
    resources: [{ title: '简历', content: '关键词/项目经验/投递策略', type: 'formula' }]
  },

  'metrics-northstar': {
    id: 'metrics-northstar',
    title: '北极星指标体系',
    section: 'metrics',
    sectionTitle: '业务指标体系构建与分析',
    duration: '4小时',
    level: '核心',
    color: 'from-red-500 to-rose-500',
    prerequisites: ['掌握业务指标分析'],
    knowledgePoints: [{
      title: '北极星指标设计',
      content: '学习北极星指标的定义、选择原则和实施方法。',
      keyPoints: ['北极星指标定义', '选择标准', '拆解方法', 'OKR对齐'],
      caseStudy: 'Netflix北极星指标设计案例。',
      pitfalls: ['指标过于复杂', '与业务脱节']
    }],
    practices: [{
      title: '北极星指标识别',
      type: 'basic',
      description: '识别不同产品的北极星指标。',
      dataSource: `# 不同产品数据
product_data = {
    "product_a": {
        "name": "社交媒体APP",
        "metrics": ["DAU", "MAU", "用户时长", "分享数", "互动率", "留存率", "内容数"],
        "users": 10000000,
        "revenue_model": "广告"
    },
    "product_b": {
        "name": "电商平台",
        "metrics": ["GMV", "订单量", "客单价", "转化率", "复购率", "活跃买家", "UV"],
        "users": 5000000,
        "revenue_model": "交易抽成"
    },
    "product_c": {
        "name": "在线教育平台",
        "metrics": ["付费用户", "完课率", "续费率", " NPS", "学习时长", "通过率"],
        "users": 2000000,
        "revenue_model": "会员订阅"
    }
}`,
      requirements: ['理解北极星指标特点', '识别核心指标', '说明选择理由'],
      referenceAnswer: `northstar_metrics = {
    "社交媒体APP": {
        "northstar": "日均用户时长",
        "reason": "用户时长直接反映产品价值和用户粘性"
    },
    "电商平台": {
        "northstar": "GMV",
        "reason": "GMV直接反映平台交易规模"
    },
    "在线教育平台": {
        "northstar": "完课率",
        "reason": "完课率反映学习效果和用户价值"
    }
}

for product, data in northstar_metrics.items():
    print(f"{product}: {data['northstar']}")
    print(f"  原因: {data['reason']}\\n")`,
      scoringCriteria: ['指标选择：60分', '理由说明：40分'],
      language: 'python',
      initialCode: 'northstar_metrics = {\n    "社交媒体APP": "请选择北极星指标",\n    "电商平台": "请选择北极星指标",\n    "在线教育平台": "请选择北极星指标"\n}\n# 补充选择理由',
      expectedPattern: 'print|dict|GMV|DAU|时长'
    }, {
      title: '北极星指标拆解',
      type: 'intermediate',
      description: '将北极星指标拆解为可操作的增长指标。',
      dataSource: `# 北极星指标拆解数据
northstar_data = {
    "product": "电商平台",
    "northstar": "GMV",
    "time_period": "月",
    "current_value": 10000000,
    "target_value": 15000000,
    "formula": "GMV = UV × 转化率 × 客单价",
    "breakdown_dimensions": {
        "traffic": ["自然流量", "付费流量", "私域流量", "渠道流量"],
        "conversion": ["曝光点击率", "点击加购率", "加购付款率"],
        "value": ["新客客单价", "老客客单价", "品类结构"]
    }
}`,
      requirements: ['理解指标公式', '多维度拆解', '设计子指标'],
      referenceAnswer: `print("=== 北极星指标拆解 ===\\n")

gmv_target = 15000000
print(f"目标GMV: {gmv_target:,}元\\n")

print("拆解公式: GMV = UV × 转化率 × 客单价\\n")

breakdown = {
    "UV": {
        "目标": 5000000,
        "拆解": ["自然流量", "付费流量", "私域流量"],
        "策略": "提升各渠道获客效率"
    },
    "转化率": {
        "目标": 0.05,
        "拆解": ["曝光点击率", "点击加购率", "加购付款率"],
        "策略": "优化购物流程和用户体验"
    },
    "客单价": {
        "目标": 300,
        "拆解": ["提升件单价", "关联销售", "促销活动"],
        "策略": "提高客单价和连带率"
    }
}

for metric, data in breakdown.items():
    print(f"{metric}:")
    print(f"  目标值: {data['目标']}")
    print(f"  拆解: {', '.join(data['拆解'])}")`,
      scoringCriteria: ['拆解完整：50分', '策略合理：50分'],
      language: 'python',
      initialCode: 'print("=== 北极星指标拆解 ===\\n")\n\ngmv_target = 15000000\nprint(f"目标GMV: {gmv_target:,}元\\n")\n# 拆解GMV指标',
      expectedPattern: 'print|UV|转化|客单|GMV'
    }, {
      title: '北极星指标体系设计',
      type: 'advanced',
      description: '设计完整的产品北极星指标体系。',
      dataSource: `# 新产品指标体系设计数据
new_product_data = {
    "product_type": "健身APP",
    "launch_date": "2024-01-01",
    "current_stage": "成长期",
    "business_model": "会员订阅+付费课程",
    "target_users": ["健身爱好者", "减脂人群", "健身新手"],
    "key_activities": ["每日打卡", "课程学习", "社区互动", "数据记录"],
    "competitors": ["Keep", "Fit", "薄荷健康"],
    "industry_benchmark": {
        "day1_retention": 0.50,
        "day7_retention": 0.30,
        "day30_retention": 0.15,
        "paid_rate": 0.05
    }
}`,
      requirements: ['北极星指标设计', '指标分层', 'OKR对齐', '监测机制'],
      referenceAnswer: `print("=== 健身APP北极星指标体系设计 ===\\n")

metrics_system = {
    "北极星指标": {
        "指标": "每周有效健身次数",
        "选择理由": "直接反映用户健身习惯和产品核心价值",
        "目标值": 3,
        "OKR对齐": "O: 帮助用户养成健身习惯"
    },
    "健康指标": {
        "指标": ["周活跃用户", "留存率", "会员续费率"],
        "作用": "监测北极星指标的前置指标"
    },
    "运营指标": {
        "指标": ["新增用户", "课程完成率", "社区互动率", "打卡完成率"],
        "作用": "指导日常运营决策"
    },
    "结果指标": {
        "指标": ["付费转化率", "LTV", "NPS"],
        "作用": "衡量商业成功"
    }
}

for level, data in metrics_system.items():
    print(f"{level}:")
    if isinstance(data['指标'], list):
        print(f"  指标: {', '.join(data['指标'])}")
    else:
        print(f"  指标: {data['指标']}")
    print(f"  作用: {data['作用']}")`,
      scoringCriteria: ['体系完整：40分', '逻辑清晰：30分', '实用性强：30分'],
      language: 'python',
      initialCode: 'print("=== 健身APP北极星指标体系设计 ===\\n")\n\n# 设计完整的指标体系',
      expectedPattern: 'print|dict|北极星|指标'
    }],
    validationCriteria: ['能够设计和实施北极星指标体系'],
    resources: [{ title: '北极星指标', content: '定义/拆解/OKR对齐', type: 'formula' }]
  },

  'metrics-dimension': {
    id: 'metrics-dimension',
    title: '指标拆解与维度分析',
    section: 'metrics',
    sectionTitle: '业务指标体系构建与分析',
    duration: '5小时',
    level: '核心',
    color: 'from-red-500 to-rose-500',
    prerequisites: ['掌握业务指标分析', '了解北极星指标'],
    knowledgePoints: [{
      title: '指标拆解方法论',
      content: '学习多维度指标拆解的方法和框架。',
      keyPoints: ['维度拆解', '公式拆解', '分层分析', '交叉分析'],
      caseStudy: 'GMV指标多维度拆解案例。',
      pitfalls: ['维度遗漏', '口径不一致']
    }],
    practices: [{
      title: 'GMV维度拆解',
      type: 'basic',
      description: '练习GMV指标的多维度拆解。',
      dataSource: `# GMV分析数据
gmv_data = {
    "total_gmv": 10000000,
    "by_channel": {"自然流量": 3000000, "付费流量": 5000000, "私域流量": 2000000},
    "by_category": {"服装": 4000000, "电子": 3500000, "食品": 1500000, "家居": 1000000},
    "by_region": {"华东": 4000000, "华南": 3000000, "华北": 2000000, "其他": 1000000},
    "by_user_type": {"新客": 3000000, "老客": 7000000}
}`,
      requirements: ['时间维度', '空间维度', '用户维度', '产品维度'],
      referenceAnswer: `print("=== GMV多维度拆解分析 ===\\n")

gmv = 10000000
print(f"总GMV: {gmv:,}元\\n")

dimensions = {
    "渠道维度": {
        "自然流量": 3000000,
        "付费流量": 5000000,
        "私域流量": 2000000
    },
    "品类维度": {
        "服装": 4000000,
        "电子": 3500000,
        "食品": 1500000,
        "家居": 1000000
    }
}

for dim, data in dimensions.items():
    print(f"{dim}:")
    for k, v in data.items():
        pct = v / gmv * 100
        print(f"  {k}: {v:,} ({pct:.1f}%)")
    print()`,
      scoringCriteria: ['维度完整：60分', '计算准确：40分'],
      language: 'python',
      initialCode: 'print("=== GMV多维度拆解分析 ===\\n")\n\ngmv = 10000000\nprint(f"总GMV: {gmv:,}元\\n")\n# 按渠道和品类拆解',
      expectedPattern: 'print|dict|/|%'
    }, {
      title: '指标异动分析',
      type: 'intermediate',
      description: '分析指标异动原因并定位问题。',
      dataSource: `# 指标异动数据
metric_anomaly_data = {
    "metric": "DAU",
    "date": "2024-01-15",
    "current_value": 85000,
    "previous_value": 100000,
    "change_rate": -0.15,
    "breakdown_by_channel": {
        "应用商店": {"current": 30000, "previous": 32000, "change": -0.0625},
        "信息流广告": {"current": 25000, "previous": 35000, "change": -0.285},
        "社交分享": {"current": 20000, "previous": 23000, "change": -0.13},
        "私域社群": {"current": 10000, "previous": 10000, "change": 0}
    },
    "breakdown_by_version": {
        "v1.0": {"current": 20000, "change": 0.05},
        "v1.1": {"current": 45000, "change": -0.10},
        "v1.2": {"current": 20000, "change": -0.35}
    }
}`,
      requirements: ['定位异动维度', '计算影响程度', '提出假设'],
      referenceAnswer: `print("=== DAU异动分析 ===\\n")

daus = {
    "当前": 85000,
    "昨日": 100000
}
change_rate = (daus["当前"] - daus["昨日"]) / daus["昨日"] * 100
print(f"DAU变化: {change_rate:.1f}%\\n")

print("按渠道分析:")
channels = {
    "信息流广告": {"current": 25000, "previous": 35000},
    "应用商店": {"current": 30000, "previous": 32000}
}

for channel, data in channels.items():
    impact = (data["current"] - data["previous"]) / daus["previous"] * 100
    print(f"  {channel}: 变化{impact:+.1f}%")

print("\\n结论: 信息流广告渠道下降是主要原因")`,
      scoringCriteria: ['分析思路：50分', '定位准确：50分'],
      language: 'python',
      initialCode: 'print("=== DAU异动分析 ===\\n")\n\ndaus = {\n    "当前": 85000,\n    "昨日": 100000\n}\nchange_rate = (daus["当前"] - daus["昨日"]) / daus["昨日"] * 100\nprint(f"DAU变化: {change_rate:.1f}%\\n")\n# 分析异动原因',
      expectedPattern: 'print|dict|/|%'
    }, {
      title: '综合指标体系建设',
      type: 'advanced',
      description: '设计完整的业务指标体系和监控机制。',
      dataSource: `# 综合指标体系建设数据
comprehensive_metrics_data = {
    "business": "电商平台",
    "stakeholders": ["运营", "产品", "市场", "财务", "客服"],
    "kpis": {
        "运营": ["GMV", "订单量", "客单价", "转化率", "库存周转"],
        "产品": ["DAU", "MAU", "留存率", "功能使用率", "NPS"],
        "市场": ["CAC", "ROI", "新增用户", "渠道效率"],
        "财务": ["毛利率", "净利率", "现金流", "LTV"],
        "客服": ["响应时间", "解决率", "满意度", "投诉率"]
    },
    "data_sources": ["订单系统", "用户行为系统", "广告系统", "财务系统", "客服系统"],
    "reporting_cycle": {"日报": ["核心KPI"], "周报": ["运营指标"], "月报": ["全指标"]}
}`,
      requirements: ['指标分层', '职责对齐', '监控机制', '预警机制'],
      referenceAnswer: `print("=== 电商平台指标体系建设 ===\\n")

metrics_system = {
    "战略层(北极星)": {
        "指标": "GMV",
        "频率": "日",
        "负责人": "CEO"
    },
    "战役层(战役指标)": {
        "指标": ["转化率", "客单价", "新客获取"],
        "频率": "周",
        "负责人": "COO"
    },
    "战斗层(运营指标)": {
        "指标": ["UV", "加购率", "支付率", "复购率"],
        "频率": "日",
        "负责人": "运营总监"
    }
}

print("指标分层:")
for layer, data in metrics_system.items():
    print(f"\\n{layer}:")
    print(f"  指标: {data['指标']}")
    print(f"  监控频率: {data['频率']}")
    print(f"  负责人: {data['负责人']}")

print("\\n预警机制:")
print("  - GMV日环比下降>10%: 触发预警")
print("  - 转化率周环比下降>5%: 触发预警")`,
      scoringCriteria: ['体系完整：40分', '职责清晰：30分', '监控有效：30分'],
      language: 'python',
      initialCode: 'print("=== 电商平台指标体系建设 ===\\n")\n\n# 设计完整的指标体系',
      expectedPattern: 'print|dict|GMV|指标'
    }],
    validationCriteria: ['能够进行多维度指标拆解和分析'],
    resources: [{ title: '指标拆解', content: '维度拆解/公式拆解/分层分析', type: 'formula' }]
  },

  'metrics-funnel': {
    id: 'metrics-funnel',
    title: '业务漏斗分析',
    section: 'metrics',
    sectionTitle: '业务指标体系构建与分析',
    duration: '4小时',
    level: '核心',
    color: 'from-red-500 to-rose-500',
    prerequisites: ['掌握业务指标分析'],
    knowledgePoints: [{
      title: '漏斗分析方法',
      content: '学习业务漏斗的构建和分析方法。',
      keyPoints: ['漏斗设计', '转化率计算', '流失分析', '优化策略'],
      caseStudy: '电商购买漏斗分析案例。',
      pitfalls: ['环节遗漏', '因果混淆']
    }],
    practices: [{
      title: '基本漏斗构建',
      type: 'basic',
      description: '构建业务漏斗并计算各环节转化率。',
      dataSource: `# 电商购买漏斗数据
funnel_data = {
    "product_page": 100000,
    "add_to_cart": 15000,
    "checkout": 8000,
    "payment": 6000,
    "completed": 5500
}`,
      requirements: ['漏斗设计', '转化率计算', '整体转化率'],
      referenceAnswer: `print("=== 电商购买漏斗分析 ===\\n")

funnel = {
    "浏览商品": 100000,
    "加入购物车": 15000,
    "提交订单": 8000,
    "完成支付": 5500
}

print("各环节数据:")
prev = None
for stage, count in funnel.items():
    print(f"  {stage}: {count:,}")
    if prev:
        rate = count / prev * 100
        print(f"    转化率: {rate:.2f}%")
    prev = count

print(f"\\n整体转化率: {funnel['完成支付'] / funnel['浏览商品'] * 100:.2f}%")`,
      scoringCriteria: ['环节完整：40分', '计算准确：60分'],
      language: 'python',
      initialCode: 'print("=== 电商购买漏斗分析 ===\\n")\n\nfunnel = {\n    "浏览商品": 100000,\n    "加入购物车": 15000,\n    "提交订单": 8000,\n    "完成支付": 5500\n}\n\n# 计算各环节转化率',
      expectedPattern: 'print|dict|/|%'
    }, {
      title: '漏斗对比分析',
      type: 'intermediate',
      description: '对比不同用户群体的漏斗表现。',
      dataSource: `# 漏斗对比数据
funnel_comparison_data = {
    "mobile_users": {
        "landing": 50000,
        "browse": 40000,
        "add_to_cart": 8000,
        "checkout": 5000,
        "payment": 4000
    },
    "pc_users": {
        "landing": 50000,
        "browse": 45000,
        "add_to_cart": 12000,
        "checkout": 9000,
        "payment": 7500
    }
}`,
      requirements: ['分组对比', '转化率对比', '流失点识别'],
      referenceAnswer: `print("=== 移动端 vs PC端漏斗对比 ===\\n")

funnels = {
    "移动端": {
        "落地": 50000,
        "浏览": 40000,
        "加购": 8000,
        "结算": 5000,
        "支付": 4000
    },
    "PC端": {
        "落地": 50000,
        "浏览": 45000,
        "加购": 12000,
        "结算": 9000,
        "支付": 7500
    }
}

print("各环节转化率对比:")
for platform, funnel in funnels.items():
    print(f"\\n{platform}:")
    stages = list(funnel.keys())
    for i in range(1, len(stages)):
        rate = funnel[stages[i]] / funnel[stages[i-1]] * 100
        print(f"  {stages[i-1]}→{stages[i]}: {rate:.2f}%")

print("\\n结论: PC端整体转化率更高，主要优势在加购环节")`,
      scoringCriteria: ['对比分析：60分', '结论清晰：40分'],
      language: 'python',
      initialCode: 'print("=== 移动端 vs PC端漏斗对比 ===\\n")\n\nfunnels = {\n    "移动端": {\n        "落地": 50000,\n        "浏览": 40000,\n        "加购": 8000,\n        "结算": 5000,\n        "支付": 4000\n    },\n    "PC端": {\n        "落地": 50000,\n        "浏览": 45000,\n        "加购": 12000,\n        "结算": 9000,\n        "支付": 7500\n    }\n}\n\n# 对比分析',
      expectedPattern: 'print|dict|/|%'
    }, {
      title: '漏斗优化策略分析',
      type: 'advanced',
      description: '基于漏斗分析提出优化策略。',
      dataSource: `# 漏斗优化分析数据
funnel_optimization_data = {
    "current_funnel": {
        "step1_曝光": 1000000,
        "step2_点击": 80000,
        "step3_访问": 70000,
        "step4_注册": 21000,
        "step5_首次购买": 6300
    },
    "industry_benchmark": {
        "曝光_点击": 0.10,
        "点击_访问": 0.90,
        "访问_注册": 0.30,
        "注册_购买": 0.30
    },
    "bottlenecks": ["曝光→点击转化率仅0.8%", "注册→购买流失严重"],
    "resources": {"budget": 1000000, "timeline": "3个月"}
}`,
      requirements: ['瓶颈识别', '优先级排序', '策略制定', 'ROI预估'],
      referenceAnswer: `print("=== 漏斗优化策略分析 ===\\n")

funnel = {
    "曝光": 1000000,
    "点击": 80000,
    "访问": 70000,
    "注册": 21000,
    "购买": 6300
}

print("各环节转化率:")
stages = list(funnel.keys())
conversions = {}
for i in range(1, len(stages)):
    rate = funnel[stages[i]] / funnel[stages[i-1]]
    conversions[f"{stages[i-1]}→{stages[i]}"] = rate
    print(f"  {stages[i-1]}→{stages[i]}: {rate*100:.2f}%")

print("\\n瓶颈识别:")
bottlenecks = [(k, v) for k, v in conversions.items() if v < 0.5]
for step, rate in sorted(bottlenecks, key=lambda x: x[1]):
    print(f"  {step}: {rate*100:.2f}% (优化空间最大)")

print("\\n优化策略:")
print("1. 优化广告素材，提升曝光→点击转化率")
print("2. 简化注册流程，降低流失")
print("3. 新用户首单优惠，促进转化")`,
      scoringCriteria: ['分析深度：40分', '策略合理：40分', '可执行性：20分'],
      language: 'python',
      initialCode: 'print("=== 漏斗优化策略分析 ===\\n")\n\nfunnel = {\n    "曝光": 1000000,\n    "点击": 80000,\n    "访问": 70000,\n    "注册": 21000,\n    "购买": 6300\n}\n\n# 识别瓶颈并制定优化策略',
      expectedPattern: 'print|dict|/|%'
    }],
    validationCriteria: ['能够进行业务漏斗分析并提出优化建议'],
    resources: [{ title: '漏斗分析', content: '漏斗设计/转化率/流失分析', type: 'formula' }]
  },

  'metrics-retention': {
    id: 'metrics-retention',
    title: '用户留存分析',
    section: 'metrics',
    sectionTitle: '业务指标体系构建与分析',
    duration: '5小时',
    level: '核心',
    color: 'from-red-500 to-rose-500',
    prerequisites: ['掌握业务指标分析'],
    knowledgePoints: [{
      title: '用户留存分析',
      content: '学习用户留存的定义、计算方法和分析框架。',
      keyPoints: ['留存定义', '留存曲线', 'Cohort分析', '流失分析'],
      caseStudy: '社交产品留存分析案例。',
      pitfalls: ['定义不清', '周期混淆']
    }],
    practices: [{
      title: '留存率计算',
      type: 'basic',
      description: '计算用户留存率指标。',
      dataSource: `# 留存率计算数据
retention_data = {
    "cohort_date": "2024-01-01",
    "cohort_size": 10000,
    "retention_by_day": {
        "day0": 10000,
        "day1": 6500,
        "day3": 4500,
        "day7": 3200,
        "day14": 2500,
        "day30": 1800
    }
}`,
      requirements: ['留存率计算', '表格展示', '趋势解读'],
      referenceAnswer: `print("=== 用户留存率分析 ===\\n")

cohort_size = 10000
retention_data = {
    "day0": 10000,
    "day1": 6500,
    "day7": 3200,
    "day30": 1800
}

print("留存率:")
for day, users in retention_data.items():
    rate = users / cohort_size * 100
    print(f"  {day}: {rate:.2f}% ({users:,}人)")

print(f"\\nDay7留存率: {retention_data['day7'] / cohort_size * 100:.2f}%")
print(f"Day30留存率: {retention_data['day30'] / cohort_size * 100:.2f}%")`,
      scoringCriteria: ['计算准确：60分', '展示清晰：40分'],
      language: 'python',
      initialCode: 'print("=== 用户留存率分析 ===\\n")\n\ncohort_size = 10000\nretention_data = {\n    "day0": 10000,\n    "day1": 6500,\n    "day7": 3200,\n    "day30": 1800\n}\n\n# 计算各时间点留存率',
      expectedPattern: 'print|dict|/|%'
    }, {
      title: 'Cohort分析',
      type: 'intermediate',
      description: '进行用户Cohort分析。',
      dataSource: `# Cohort分析数据
cohort_analysis_data = {
    "cohorts": {
        "2024-01": {"size": 10000, "week1": 0.65, "week2": 0.50, "week3": 0.42, "week4": 0.38},
        "2024-02": {"size": 12000, "week1": 0.68, "week2": 0.52, "week3": 0.45, "week4": 0.40},
        "2024-03": {"size": 15000, "week1": 0.70, "week2": 0.55, "week3": 0.48, "week4": 0.43}
    }
}`,
      requirements: ['Cohort表格', '留存趋势', '同比分析'],
      referenceAnswer: `print("=== Cohort留存分析 ===\\n")

cohorts = {
    "2024-01": {"size": 10000, "week1": 0.65, "week4": 0.38},
    "2024-02": {"size": 12000, "week1": 0.68, "week4": 0.40},
    "2024-03": {"size": 15000, "week1": 0.70, "week4": 0.43}
}

print("Cohort留存表:")
print(f"{'月份':<10} {'规模':<10} {'Week1':<10} {'Week4':<10}")
for month, data in cohorts.items():
    print(f"{month:<10} {data['size']:<10} {data['week1']*100:.1f}%{'':<5} {data['week4']*100:.1f}%")

print("\\n分析结论:")
print("1. 规模逐月增长，说明获客能力提升")
print("2. 留存率逐月改善，产品粘性增强")`,
      scoringCriteria: ['表格规范：40分', '分析深入：60分'],
      language: 'python',
      initialCode: 'print("=== Cohort留存分析 ===\\n")\n\ncohorts = {\n    "2024-01": {"size": 10000, "week1": 0.65, "week4": 0.38},\n    "2024-02": {"size": 12000, "week1": 0.68, "week4": 0.40},\n    "2024-03": {"size": 15000, "week1": 0.70, "week4": 0.43}\n}\n\n# Cohort分析',
      expectedPattern: 'print|dict|%|format'
    }, {
      title: '流失用户分析',
      type: 'advanced',
      description: '分析流失用户特征并制定留存策略。',
      dataSource: `# 流失用户分析数据
churn_analysis_data = {
    "total_users": 100000,
    "churned_users": 25000,
    "churn_rate": 0.25,
    "churn_by_segment": {
        "高活跃": {"users": 30000, "churn_rate": 0.08},
        "中活跃": {"users": 40000, "churn_rate": 0.20},
        "低活跃": {"users": 30000, "churn_rate": 0.50}
    },
    "churn_by_channel": {
        "自然流量": 0.15,
        "付费推广": 0.35,
        "私域引流": 0.12
    },
    "churn_timing": {
        "首周流失": 0.30,
        "第2-4周": 0.25,
        "第2-3月": 0.30,
        "3月后": 0.15
    },
    "churn_reasons": ["无持续价值", "竞品吸引", "功能不满足", "体验问题"]
}`,
      requirements: ['流失画像', '流失原因', '留存策略', '优先级'],
      referenceAnswer: `print("=== 流失用户分析报告 ===\\n")

churn_analysis = {
    "流失概况": {
        "总用户": 100000,
        "流失用户": 25000,
        "流失率": "25%"
    },
    "按活跃度分层": {
        "高活跃": "流失率8%",
        "中活跃": "流失率20%",
        "低活跃": "流失率50%"
    },
    "流失时机": {
        "首周流失": "30%",
        "2-4周": "25%",
        "2-3月": "30%"
    }
}

print("流失概况:")
print(f"  总用户: {churn_analysis['流失概况']['总用户']:,}")
print(f"  流失率: {churn_analysis['流失概况']['流失率']}")

print("\\n流失时机分析:")
print("  首周流失占比最高，说明新用户引导需优化")

print("\\n留存策略建议:")
print("1. 优化新用户引导流程 (针对首周流失)")
print("2. 建立低活跃用户唤醒机制 (针对低活跃流失)")
print("3. 竞品监测与差异化定位 (针对竞品流失)")`,
      scoringCriteria: ['分析完整：40分', '策略合理：40分', '可落地：20分'],
      language: 'python',
      initialCode: 'print("=== 流失用户分析报告 ===\\n")\n\nchurn_analysis = {\n    "流失概况": {\n        "总用户": 100000,\n        "流失用户": 25000,\n        "流失率": "25%"\n    },\n    "按活跃度分层": {\n        "高活跃": "流失率8%",\n        "中活跃": "流失率20%",\n        "低活跃": "流失率50%"\n    }\n}\n\n# 分析流失原因并制定留存策略',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够进行用户留存分析并制定留存策略'],
    resources: [{ title: '留存分析', content: '留存率/Cohort/流失分析', type: 'formula' }]
  },

  'viz-principles': {
    id: 'viz-principles',
    title: '可视化设计原则',
    section: 'visualization',
    sectionTitle: '数据可视化与分析报告输出',
    duration: '3小时',
    level: '基础',
    color: 'from-violet-500 to-purple-500',
    prerequisites: ['掌握数据可视化基础'],
    knowledgePoints: [{
      title: '可视化设计原则',
      content: '学习数据可视化的设计原则和最佳实践。',
      keyPoints: ['选择正确的图表', '配色方案', '布局设计', '信息层次'],
      caseStudy: '优秀可视化案例分析。',
      pitfalls: ['图表滥用', '信息过载']
    }],
    practices: [{
      title: '图表类型选择',
      type: 'basic',
      description: '根据数据特点选择合适的图表类型。',
      dataSource: `# 数据场景与图表选择数据
chart_selection_data = {
    "scenarios": [
        {"data_type": "趋势数据", "time_points": 12, "suggested_charts": ["折线图", "面积图"], "avoid": "饼图"},
        {"data_type": "比较数据", "categories": 5, "suggested_charts": ["柱状图", "条形图"], "avoid": "折线图"},
        {"data_type": "占比数据", "categories": 4, "suggested_charts": ["饼图", "环形图", "堆叠柱状图"], "avoid": "太多分类"},
        {"data_type": "关系数据", "variables": 2, "suggested_charts": ["散点图"], "avoid": "柱状图"}
    ]
}`,
      requirements: ['理解数据关系', '选择合适图表', '说明理由'],
      referenceAnswer: `print("=== 图表类型选择指南 ===\\n")

chart_guide = {
    "折线图": {
        "适用": "时间趋势、连续数据",
        "举例": "月度销售额变化",
        "优势": "清晰展示趋势"
    },
    "柱状图": {
        "适用": "类别对比、独立数据",
        "举例": "各产品销量对比",
        "优势": "直观比较大小"
    },
    "饼图": {
        "适用": "占比展示、少量分类",
        "举例": "市场份额",
        "优势": "展示整体与部分关系"
    },
    "散点图": {
        "适用": "相关性、分布",
        "举例": "身高体重关系",
        "优势": "发现变量关系"
    }
}

for chart, info in chart_guide.items():
    print(f"{chart}:")
    print(f"  适用: {info['适用']}")
    print(f"  举例: {info['举例']}")`,
      scoringCriteria: ['选择正确：60分', '理由充分：40分'],
      language: 'python',
      initialCode: 'print("=== 图表类型选择指南 ===\\n")\n\nchart_guide = {\n    "折线图": {"适用": "时间趋势", "举例": "月度销售额"},\n    "柱状图": {"适用": "类别对比", "举例": "产品销量"},\n    "饼图": {"适用": "占比展示", "举例": "市场份额"}\n}\n\n# 补充散点图信息',
      expectedPattern: 'print|dict|折线|柱状|饼图'
    }, {
      title: '配色方案设计',
      type: 'intermediate',
      description: '设计专业的数据可视化配色方案。',
      dataSource: `# 配色方案数据
color_scheme_data = {
    "color_palettes": {
        "商务蓝": ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"],
        "活力橙": ["#ea580c", "#f97316", "#fb923c", "#fdba74", "#fed7aa"],
        "专业绿": ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#dcfce7"],
        "科技紫": ["#7c3aed", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ede9fe"]
    },
    "use_cases": {
        "年度报告": "商务蓝",
        "营销报告": "活力橙",
        "运营监控": "专业绿",
        "产品分析": "科技紫"
    }
}`,
      requirements: ['配色选择', '色值搭配', '使用场景'],
      referenceAnswer: `print("=== 数据可视化配色方案 ===\\n")

color_schemes = {
    "连续色系(数值大小)": {
        "方案": ["#f7fbff", "#6baed6", "#2171b5", "#08306b"],
        "适用": "热力图、地图"
    },
    "分类色系(类别区分)": {
        "方案": ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
        "适用": "柱状图、饼图"
    }
}

print("配色方案:")
for scheme_type, info in color_schemes.items():
    print(f"\\n{scheme_type}:")
    print(f"  色值: {info['方案']}")
    print(f"  适用: {info['适用']}")

print("\\n设计原则:")
print("1. 色盲友好：避免红绿组合")
print("2. 语义一致：绿色=正向，红色=负向")
print("3. 数量控制：同色系不超过7种颜色")`,
      scoringCriteria: ['配色合理：50分', '原则清晰：50分'],
      language: 'python',
      initialCode: 'print("=== 数据可视化配色方案 ===\\n")\n\ncolor_schemes = {\n    "连续色系": ["#f7fbff", "#6baed6", "#2171b5", "#08306b"],\n    "分类色系": ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]\n}\n\n# 设计配色使用原则',
      expectedPattern: 'print|dict|颜色|色值'
    }, {
      title: '仪表盘设计',
      type: 'advanced',
      description: '设计完整的数据仪表盘。',
      dataSource: `# 仪表盘设计数据
dashboard_design_data = {
    "purpose": "电商运营监控大屏",
    "target_audience": ["管理层", "运营团队", "市场团队"],
    "key_metrics": ["DAU", "GMV", "转化率", "客单价", "库存周转"],
    "update_frequency": "实时",
    "layout_zones": {
        "顶部": ["核心KPI卡片", "今日目标进度"],
        "中部左侧": ["流量趋势图", "转化漏斗"],
        "中部右侧": ["品类销售排行", "地区销售分布"],
        "底部": ["实时订单滚动", "异常预警"]
    }
}`,
      requirements: ['布局规划', '信息层次', '交互设计', '用户体验'],
      referenceAnswer: `print("=== 电商运营监控仪表盘设计 ===\\n")

dashboard = {
    "仪表盘结构": {
        "1. 顶部导航区": {
            "内容": ["Logo", "时间选择", "刷新按钮"],
            "高度": "60px"
        },
        "2. KPI指标区": {
            "内容": ["DAU", "GMV", "转化率", "客单价"],
            "布局": "4列卡片"
        },
        "3. 核心图表区": {
            "左侧": "销售趋势图(折线图)",
            "右侧": "品类占比(饼图)"
        },
        "4. 明细数据区": {
            "内容": ["实时订单", "TOP商品排行"]
        }
    },
    "设计原则": [
        "重要指标放左上",
        "趋势图比明细更重要",
        "颜色数量控制在5种以内",
        "留白增加可读性"
    ]
}

for section, info in dashboard["仪表盘结构"].items():
    print(f"{section}:")
    if isinstance(info["内容"], list):
        print(f"  内容: {', '.join(info['内容'])}")
    else:
        print(f"  内容: {info['内容']}")`,
      scoringCriteria: ['结构清晰：40分', '层次分明：30分', '实用性强：30分'],
      language: 'python',
      initialCode: 'print("=== 电商运营监控仪表盘设计 ===\\n")\n\ndashboard = {\n    "顶部导航区": ["Logo", "时间选择", "刷新按钮"],\n    "KPI指标区": ["DAU", "GMV", "转化率", "客单价"],\n    "核心图表区": {"左侧": "销售趋势图", "右侧": "品类占比"}\n}\n\n# 设计完整的仪表盘结构',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够设计专业的数据可视化图表和仪表盘'],
    resources: [{ title: '可视化原则', content: '图表选择/配色/布局', type: 'formula' }]
  },

  'viz-tableau': {
    id: 'viz-tableau',
    title: 'Tableau可视化',
    section: 'visualization',
    sectionTitle: '数据可视化与分析报告输出',
    duration: '6小时',
    level: '进阶',
    color: 'from-violet-500 to-purple-500',
    prerequisites: ['掌握可视化设计原则'],
    knowledgePoints: [{
      title: 'Tableau数据可视化',
      content: '学习使用Tableau创建专业数据可视化。',
      keyPoints: ['数据连接', '基础图表', '计算字段', '仪表盘创建'],
      caseStudy: '电商数据可视化看板制作。',
      pitfalls: ['数据混洗', '过度复杂']
    }],
    practices: [{
      title: 'Tableau数据连接',
      type: 'basic',
      description: '练习Tableau数据连接和基础操作。',
      dataSource: `-- Tableau数据连接练习数据
-- sales_data表
CREATE TABLE sales_data (
    order_id INT PRIMARY KEY,
    order_date DATE,
    product VARCHAR(100),
    category VARCHAR(50),
    region VARCHAR(50),
    amount DECIMAL(10,2),
    quantity INT
);

-- 示例数据
INSERT INTO sales_data VALUES
(1, '2024-01-05', 'iPhone', '电子', '华东', 5999, 1),
(2, '2024-01-06', 'T恤', '服装', '华北', 199, 3),
(3, '2024-01-07', 'MacBook', '电子', '华东', 12999, 1),
(4, '2024-01-08', '牛仔裤', '服装', '华南', 299, 2),
(5, '2024-01-09', 'iPad', '电子', '华东', 3999, 1);`,
      requirements: ['数据导入', '数据预览', '字段设置'],
      referenceAnswer: `-- Tableau数据连接步骤
-- 1. 打开Tableau Desktop
-- 2. 选择数据源类型(Excel/SQL Server/CSV等)
-- 3. 拖拽表到画布建立连接
-- 4. 设置数据字段类型

-- 数据源设置示例
SELECT 
    order_date,
    product,
    category,
    region,
    amount,
    quantity
FROM sales_data
WHERE order_date >= '2024-01-01'`,
      scoringCriteria: ['步骤完整：50分', '设置正确：50分'],
      language: 'sql',
      initialCode: '-- Tableau数据连接步骤：\n-- 1. 打开Tableau\n-- 2. 选择数据源\n-- 3. 连接数据表\n-- 4. 设置字段属性',
      expectedPattern: 'SELECT|FROM|WHERE'
    }, {
      title: 'Tableau图表创建',
      type: 'intermediate',
      description: '使用Tableau创建各类图表。',
      dataSource: `-- 图表创建数据
-- 销售数据
product_sales = [
    {"product": "iPhone", "category": "电子", "sales": 120000, "growth": 0.15},
    {"product": "MacBook", "category": "电子", "sales": 250000, "growth": 0.20},
    {"product": "T恤", "category": "服装", "sales": 80000, "growth": -0.05},
    {"product": "牛仔裤", "category": "服装", "sales": 95000, "growth": 0.08}
]

monthly_trend = [
    {"month": "1月", "sales": 120000, "profit": 30000},
    {"month": "2月", "sales": 145000, "profit": 38000},
    {"month": "3月", "sales": 130000, "profit": 32000}
]`,
      requirements: ['维度与度量', '行列功能', '图表类型'],
      referenceAnswer: `-- Tableau图表创建步骤
-- 1. 拖拽维度到列(Columns)
-- 2. 拖拽度量到行(Rows)
-- 3. 选择标记类型(Marks)
-- 4. 应用筛选器和颜色

-- 柱状图: 维度在列, 度量在行
SELECT 
    category,
    SUM(amount) as total_sales
FROM sales_data
GROUP BY category

-- 折线图: 日期在列, 度量在行
SELECT 
    order_date,
    SUM(amount) as daily_sales
FROM sales_data
GROUP BY order_date`,
      scoringCriteria: ['操作准确：60分', '结果正确：40分'],
      language: 'sql',
      initialCode: '-- Tableau图表创建步骤：\n-- 1. 拖拽字段到列\n-- 2. 拖拽字段到行\n-- 3. 选择标记类型\n-- 4. 应用格式',
      expectedPattern: 'SELECT|FROM|GROUP'
    }, {
      title: 'Tableau仪表盘实战',
      type: 'advanced',
      description: '创建完整的Tableau仪表盘。',
      dataSource: `-- 仪表盘数据
dashboard_data = {
    "kpis": [
        {"name": "总收入", "value": 5000000, "change": 0.15},
        {"name": "订单数", "value": 25000, "change": 0.08},
        {"name": "客单价", "value": 200, "change": 0.05},
        {"name": "转化率", "value": 0.035, "change": -0.02}
    ],
    "charts": {
        "trend": "月度销售趋势(折线图)",
        "category": "品类销售占比(饼图)",
        "region": "地区销售排行(条形图)",
        "funnel": "转化漏斗(瀑布图)"
    }
}`,
      requirements: ['图表组合', '布局设计', '交互功能', '发布分享'],
      referenceAnswer: `-- Tableau仪表盘创建步骤
-- 1. 创建工作表(Sheet)
--   - 销售趋势图
SELECT 
    DATE_TRUNC('month', order_date) as month,
    SUM(amount) as sales
FROM sales_data
GROUP BY DATE_TRUNC('month', order_date)

-- 2. 创建品类分布图
SELECT 
    category,
    SUM(amount) as sales,
    SUM(amount) / (SELECT SUM(amount) FROM sales_data) as pct
FROM sales_data
GROUP BY category

-- 3. 组合到仪表盘
--   - 设置仪表盘大小
--   - 添加筛选器动作
--   - 设置工具提示
--   - 发布到Tableau Server`,
      scoringCriteria: ['图表完整：40分', '交互合理：30分', '发布规范：30分'],
      language: 'sql',
      initialCode: '-- Tableau仪表盘创建步骤：\n-- 1. 创建各个工作表\n-- 2. 新建仪表盘\n-- 3. 添加工作表到仪表盘\n-- 4. 设置布局和交互\n-- 5. 发布分享',
      expectedPattern: 'SELECT|FROM|GROUP'
    }],
    validationCriteria: ['能够使用Tableau创建专业可视化'],
    resources: [{ title: 'Tableau', content: '数据连接/图表/仪表盘', type: 'formula' }]
  },

  'viz-powerbi': {
    id: 'viz-powerbi',
    title: 'Power BI报表开发',
    section: 'visualization',
    sectionTitle: '数据可视化与分析报告输出',
    duration: '6小时',
    level: '进阶',
    color: 'from-violet-500 to-purple-500',
    prerequisites: ['掌握可视化设计原则'],
    knowledgePoints: [{
      title: 'Power BI报表开发',
      content: '学习使用Power BI创建数据报表。',
      keyPoints: ['数据建模', 'DAX函数', '可视化设计', '发布分享'],
      caseStudy: '企业级销售报表开发。',
      pitfalls: ['模型复杂', '性能问题']
    }],
    practices: [{
      title: 'Power BI数据建模',
      type: 'basic',
      description: '练习Power BI数据建模基础。',
      dataSource: `-- Power BI建模练习数据
-- 事实表: sales
CREATE TABLE sales (
    order_id INT,
    order_date DATE,
    product_id INT,
    customer_id INT,
    quantity INT,
    amount DECIMAL(10,2)
);

-- 维度表: products
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    unit_price DECIMAL(10,2)
);

-- 维度表: customers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    region VARCHAR(50),
    segment VARCHAR(50)
);`,
      requirements: ['表关系建立', '主键设置', '关系类型'],
      referenceAnswer: `-- Power BI数据建模步骤
-- 1. 获取数据
SELECT * FROM sales;
SELECT * FROM products;
SELECT * FROM customers;

-- 2. 建立表关系
-- sales[product_id] -> products[product_id] (多对一)
-- sales[customer_id] -> customers[customer_id] (多对一)

-- 3. 设置关系属性
-- 交叉筛选方向: 单向(从维度到事实表)
-- 基数: 多对一

-- 4. 创建层次结构
-- 日期层次: 年 > 季度 > 月 > 日
-- 地理层次: 国家 > 省份 > 城市`,
      scoringCriteria: ['模型正确：60分', '关系清晰：40分'],
      language: 'sql',
      initialCode: '-- Power BI数据建模步骤：\n-- 1. 导入/连接数据源\n-- 2. 创建表关系\n-- 3. 设置交叉筛选方向\n-- 4. 创建层次结构',
      expectedPattern: 'SELECT|FROM|表'
    }, {
      title: 'DAX函数应用',
      type: 'intermediate',
      description: '使用DAX函数创建计算列和度量值。',
      dataSource: `-- DAX练习数据
dax_practice_data = {
    "sales_table": {
        "columns": ["OrderID", "OrderDate", "Amount", "Cost"],
        "sample": [
            {"OrderID": 1, "OrderDate": "2024-01-05", "Amount": 1000, "Cost": 600},
            {"OrderID": 2, "OrderDate": "2024-01-06", "Amount": 1500, "Cost": 900}
        ]
    }
}`,
      requirements: ['计算列', '度量值', '时间智能函数'],
      referenceAnswer: `-- Power BI DAX函数示例
-- 1. 计算列
Profit = 'Sales'[Amount] - 'Sales'[Cost]
Profit_Margin = DIVIDE('Sales'[Amount] - 'Sales'[Cost], 'Sales'[Amount])

-- 2. 度量值
Total_Sales = SUM('Sales'[Amount])
Total_Profit = SUM('Sales'[Amount]) - SUM('Sales'[Cost])
Avg_Order_Value = AVERAGE('Sales'[Amount])

-- 3. 时间智能函数
Sales_YTD = TOTALYTD([Total_Sales], 'Sales'[OrderDate])
Sales_PY = SAMEPERIODLASTYEAR('Sales'[OrderDate])
Sales_MoM = DIVIDE([Total_Sales] - [Total_Sales_PY], [Total_Sales_PY])

-- 4. 上下文筛选
Customer_Count = DISTINCTCOUNT('Sales'[CustomerID])
Category_Top3 = TOPN(3, ALL('Products'[Category]), [Total_Sales])`,
      scoringCriteria: ['函数正确：60分', '逻辑合理：40分'],
      language: 'python',
      initialCode: '-- Power BI DAX函数示例：\n-- 计算列: 利润率 = DIVIDE(Amount - Cost, Amount)\n-- 度量值: 总销售额 = SUM(Amount)\n-- 时间函数: TOTALYTD',
      expectedPattern: 'SUM|DIVIDE|TOTALYTD'
    }, {
      title: 'Power BI报表设计',
      type: 'advanced',
      description: '设计完整的企业级Power BI报表。',
      dataSource: `-- 报表设计数据
report_design_data = {
    "report_pages": [
        {"name": "执行摘要", "charts": ["KPI卡片", "趋势图"]},
        {"name": "销售分析", "charts": ["地区销售", "品类销售", "客户分析"]},
        {"name": "产品分析", "charts": ["产品排行", "生命周期"]},
        {"name": "用户分析", "charts": ["用户画像", "行为分析"]}
    ],
    "data_sources": ["ERP系统", "CRM系统", "电商平台"],
    "refresh_schedule": "每日增量更新",
    "permissions": {"高管": "全部页面", "运营": "销售/产品", "市场": "用户分析"}
}`,
      requirements: ['报表架构', '页面设计', '权限设置', '发布管理'],
      referenceAnswer: `-- Power BI报表开发完整流程
-- 1. 需求分析
--   - 确定报表使用者和需求
--   - 定义关键指标和维度
--   - 规划报表页面结构

-- 2. 数据准备
SELECT 
    s.order_date,
    p.category,
    c.region,
    s.amount,
    s.quantity
FROM sales s
JOIN products p ON s.product_id = p.product_id
JOIN customers c ON s.customer_id = c.customer_id

-- 3. 数据建模
--   - 建立星型模型
--   - 创建度量值
--   - 设置行级安全

-- 4. 可视化设计
--   - 页面1: 执行摘要(KPI+趋势)
--   - 页面2: 销售分析(矩阵+地图)
--   - 页面3: 产品分析(排行榜)
--   - 页面4: 用户分析(散点图)

-- 5. 发布与分享
--   - 发布到Power BI Service
--   - 配置刷新计划
--   - 设置权限和共享`,
      scoringCriteria: ['流程完整：40分', '设计合理：30分', '可执行性：30分'],
      language: 'sql',
      initialCode: '-- Power BI报表开发完整流程：\n-- 1. 需求分析\n-- 2. 数据准备\n-- 3. 数据建模\n-- 4. 可视化设计\n-- 5. 发布分享',
      expectedPattern: 'SELECT|FROM|JOIN'
    }],
    validationCriteria: ['能够使用Power BI开发企业级报表'],
    resources: [{ title: 'Power BI', content: '数据建模/DAX/可视化', type: 'formula' }]
  },

  'viz-report': {
    id: 'viz-report',
    title: '数据分析报告撰写',
    section: 'visualization',
    sectionTitle: '数据可视化与分析报告输出',
    duration: '5小时',
    level: '进阶',
    color: 'from-violet-500 to-purple-500',
    prerequisites: ['掌握数据可视化基础'],
    knowledgePoints: [{
      title: '数据分析报告撰写',
      content: '学习撰写专业的数据分析报告。',
      keyPoints: ['报告结构', '数据叙事', '结论提炼', '建议输出'],
      caseStudy: '电商季度运营分析报告。',
      pitfalls: ['堆砌数据', '结论空洞']
    }],
    practices: [{
      title: '报告结构设计',
      type: 'basic',
      description: '设计数据分析报告的基本结构。',
      dataSource: `# 报告结构设计数据
report_structure_data = {
    "report_types": {
        "日报": {"frequency": "每日", "focus": "核心指标监控", "length": "1-2页"},
        "周报": {"frequency": "每周", "focus": "运营指标分析", "length": "5-10页"},
        "月报": {"frequency": "每月", "focus": "综合业务分析", "length": "15-30页"},
        "专题报告": {"frequency": "按需", "focus": "特定问题深入分析", "length": "20-50页"}
    },
    "audiences": ["管理层", "业务部门", "技术团队", "外部合作方"]
}`,
      requirements: ['报告框架', '内容规划', '受众适配'],
      referenceAnswer: `print("=== 数据分析报告结构设计 ===\\n")

report_structure = {
    "执行摘要": {
        "内容": ["核心发现", "关键结论", "主要建议"],
        "篇幅": "1页"
    },
    "背景与目标": {
        "内容": ["业务背景", "分析目的", "数据来源"],
        "篇幅": "0.5页"
    },
    "数据概览": {
        "内容": ["数据规模", "时间范围", "统计摘要"],
        "篇幅": "1页"
    },
    "核心分析": {
        "内容": ["主要发现1", "主要发现2", "主要发现3"],
        "篇幅": "5-10页"
    },
    "结论与建议": {
        "内容": ["核心结论", "优先级建议", "行动计划"],
        "篇幅": "1-2页"
    }
}

print("报告结构模板:")
for section, info in report_structure.items():
    print(f"\\n{section}:")
    print(f"  内容: {', '.join(info['内容'])}")
    print(f"  篇幅: {info['篇幅']}")`,
      scoringCriteria: ['结构完整：60分', '逻辑清晰：40分'],
      language: 'python',
      initialCode: 'print("=== 数据分析报告结构设计 ===\\n")\n\nreport_structure = {\n    "执行摘要": "核心发现和结论",\n    "背景与目标": "业务背景和目的",\n    "核心分析": "详细分析内容",\n    "结论与建议": "总结和建议"\n}\n\n# 设计完整的报告结构',
      expectedPattern: 'print|dict'
    }, {
      title: '数据叙事技巧',
      type: 'intermediate',
      description: '练习数据叙事和故事线构建。',
      dataSource: `# 数据叙事数据
data_narrative_data = {
    "scenario": "电商平台用户增长分析",
    "key_metrics": {
        "DAU": {"current": 100000, "previous": 85000, "change": 0.176},
        "MAU": {"current": 500000, "previous": 450000, "change": 0.111},
        "new_users": {"current": 15000, "previous": 12000, "change": 0.25}
    },
    "findings": [
        "新功能上线后用户活跃度提升",
        "渠道A获客效率最高",
        "周末用户活跃度明显下降"
    ]
}`,
      requirements: ['故事线构建', '数据解读', '逻辑衔接'],
      referenceAnswer: `print("=== 数据叙事: 用户增长分析报告 ===\\n")

storyline = {
    "开场(Hook)": "本季度DAU增长17.6%，达到历史新高",
    "背景(Context)": "产品上线了新社交功能，运营团队加强了渠道投放",
    "发现1": "新功能使用率与留存率正相关",
    "发现2": "渠道A的CAC最低，LTV最高",
    "发现3": "周末用户活跃度低于工作日20%",
    "结论(Insight)": "建议继续优化社交功能，调整周末运营策略",
    "行动(Action)": "1.扩大渠道A投放 2.策划周末活动"
}

print("报告故事线:")
for section, content in storyline.items():
    print(f"\\n{section}:")
    print(f"  {content}")

print("\\n叙事技巧:")
print("1. 先说结论，再说数据支撑")
print("2. 用对比突出变化")
print("3. 将数据与业务影响关联")`,
      scoringCriteria: ['叙事流畅：50分', '逻辑清晰：50分'],
      language: 'python',
      initialCode: 'print("=== 数据叙事: 用户增长分析 ===\\n")\n\nstoryline = {\n    "开场": "核心亮点",\n    "发现1": "数据发现1",\n    "发现2": "数据发现2",\n    "结论": "总结提炼",\n    "行动": "建议措施"\n}\n\n# 构建完整的报告故事线',
      expectedPattern: 'print|dict'
    }, {
      title: '完整分析报告撰写',
      type: 'advanced',
      description: '撰写完整的专业数据分析报告。',
      dataSource: `# 完整报告数据
complete_report_data = {
    "report_title": "2024年Q1电商平台运营分析报告",
    "company": "某电商平台",
    "period": "2024年1月-3月",
    "executive_summary": {
        "overall_performance": "GMV同比增长20%，完成季度目标",
        "key_wins": ["新客获取超预期", "复购率提升5个百分点"],
        "concerns": ["转化率略有下降", "部分品类库存积压"],
        "recommendations": ["优化首单转化", "加大畅销品补货"]
    },
    "key_metrics": {
        "GMV": {"value": 5000, "unit": "万元", "change": 0.20},
        "Orders": {"value": 250000, "unit": "单", "change": 0.15},
        "AOV": {"value": 200, "unit": "元", "change": 0.04},
        "Conversion": {"value": 0.035, "unit": "", "change": -0.02}
    }
}`,
      requirements: ['完整结构', '数据支撑', '结论有效', '建议可执行'],
      referenceAnswer: `print("=== 2024年Q1电商平台运营分析报告 ===\\n")

report = {
    "报告标题": "2024年Q1电商平台运营分析报告",
    "一、执行摘要": {
        "整体表现": "GMV同比增长20%，完成季度目标",
        "亮点": ["新客获取超预期", "复购率提升5%"],
        "问题": ["转化率略降", "部分品类库存积压"]
    },
    "二、核心指标": {
        "GMV": "5000万元 (+20%)",
        "订单量": "25万单 (+15%)",
        "客单价": "200元 (+4%)",
        "转化率": "3.5% (-2%)"
    },
    "三、深度分析": {
        "增长驱动": "新客增长是GMV增长主因",
        "转化问题": "流量质量下降导致转化率下降"
    },
    "四、结论与建议": {
        "结论": "整体表现良好，需关注转化率下降问题",
        "建议": [
            "1. 优化首单转化流程",
            "2. 加大畅销品补货",
            "3. 策划促销活动提升转化"
        ]
    }
}

for section, content in report.items():
    print(f"\\n{section}:")
    if isinstance(content, dict):
        for k, v in content.items():
            print(f"  {k}: {v}")`,
      scoringCriteria: ['结构完整：30分', '分析深度：30分', '建议可行：40分'],
      language: 'python',
      initialCode: 'print("=== 数据分析报告示例 ===\\n")\n\nreport = {\n    "一、执行摘要": "核心结论和亮点",\n    "二、核心指标": "关键数据呈现",\n    "三、深度分析": "问题原因剖析",\n    "四、结论与建议": "总结和行动计划"\n}\n\n# 撰写完整的分析报告',
      expectedPattern: 'print|dict'
    }],
    validationCriteria: ['能够撰写专业的数据分析报告'],
    resources: [{ title: '报告撰写', content: '结构设计/数据叙事/结论建议', type: 'formula' }]
  }
};
