import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RefreshCw } from 'lucide-react';

const AdvancedDataStructures: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<{
    id: number;
    question: string;
    correctAnswer: string;
    explanation: string;
    sampleInput: string;
    sampleOutput: string;
  } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<{
    correct: boolean;
    error: string | null;
    output: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  // 题目库
  const questions = [
    {
      id: 1,
      question: '实现一个栈数据结构，包含push、pop和isEmpty方法',
      correctAnswer: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.isEmpty():\n            return self.items.pop()\n        return None\n    \n    def isEmpty(self):\n        return len(self.items) == 0',
      explanation: '使用列表实现栈数据结构，push方法添加元素到栈顶，pop方法移除并返回栈顶元素，isEmpty方法检查栈是否为空。',
      sampleInput: 'stack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\nprint(stack.pop())\nprint(stack.pop())\nprint(stack.isEmpty())\nprint(stack.pop())\nprint(stack.isEmpty())',
      sampleOutput: '3\n2\nFalse\n1\nTrue'
    },
    {
      id: 2,
      question: '实现一个队列数据结构，包含enqueue、dequeue和isEmpty方法',
      correctAnswer: 'class Queue:\n    def __init__(self):\n        self.items = []\n    \n    def enqueue(self, item):\n        self.items.append(item)\n    \n    def dequeue(self):\n        if not self.isEmpty():\n            return self.items.pop(0)\n        return None\n    \n    def isEmpty(self):\n        return len(self.items) == 0',
      explanation: '使用列表实现队列数据结构，enqueue方法添加元素到队尾，dequeue方法移除并返回队首元素，isEmpty方法检查队列是否为空。',
      sampleInput: 'queue = Queue()\nqueue.enqueue(1)\nqueue.enqueue(2)\nqueue.enqueue(3)\nprint(queue.dequeue())\nprint(queue.dequeue())\nprint(queue.isEmpty())\nprint(queue.dequeue())\nprint(queue.isEmpty())',
      sampleOutput: '1\n2\nFalse\n3\nTrue'
    },
    {
      id: 3,
      question: '实现一个二叉树节点类，并编写一个函数计算树的高度',
      correctAnswer: 'class TreeNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\ndef tree_height(root):\n    if root is None:\n        return 0\n    left_height = tree_height(root.left)\n    right_height = tree_height(root.right)\n    return max(left_height, right_height) + 1',
      explanation: '定义二叉树节点类，包含值、左子节点和右子节点。树的高度计算使用递归方法，空树高度为0，非空树高度为左右子树高度的最大值加1。',
      sampleInput: 'root = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nroot.left.right = TreeNode(5)\nprint(tree_height(root))',
      sampleOutput: '3'
    },
    {
      id: 4,
      question: '实现一个链表节点类，并编写一个函数反转链表',
      correctAnswer: 'class ListNode:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\ndef reverse_linked_list(head):\n    prev = None\n    current = head\n    while current:\n        next_node = current.next\n        current.next = prev\n        prev = current\n        current = next_node\n    return prev',
      explanation: '定义链表节点类，包含值和指向下一个节点的指针。反转链表使用迭代方法，通过三个指针（prev、current、next_node）来实现。',
      sampleInput: 'head = ListNode(1)\nhead.next = ListNode(2)\nhead.next.next = ListNode(3)\nhead.next.next.next = ListNode(4)\nreversed_head = reverse_linked_list(head)\ncurrent = reversed_head\nwhile current:\n    print(current.value)\n    current = current.next',
      sampleOutput: '4\n3\n2\n1'
    },
    {
      id: 5,
      question: '实现一个哈希表类，包含put、get和remove方法',
      correctAnswer: 'class HashTable:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    \n    def _hash(self, key):\n        return hash(key) % self.size\n    \n    def put(self, key, value):\n        index = self._hash(key)\n        for i, (k, v) in enumerate(self.table[index]):\n            if k == key:\n                self.table[index][i] = (key, value)\n                return\n        self.table[index].append((key, value))\n    \n    def get(self, key):\n        index = self._hash(key)\n        for k, v in self.table[index]:\n            if k == key:\n                return v\n        return None\n    \n    def remove(self, key):\n        index = self._hash(key)\n        for i, (k, v) in enumerate(self.table[index]):\n            if k == key:\n                del self.table[index][i]\n                return True\n        return False',
      explanation: '使用链表解决哈希冲突的哈希表实现，put方法添加或更新键值对，get方法根据键获取值，remove方法根据键删除键值对。',
      sampleInput: 'ht = HashTable()\nht.put("name", "Alice")\nht.put("age", 20)\nprint(ht.get("name"))\nprint(ht.get("age"))\nht.remove("age")\nprint(ht.get("age"))',
      sampleOutput: 'Alice\n20\nNone'
    },
    {
      id: 6,
      question: '实现一个优先队列，使用堆数据结构',
      correctAnswer: 'import heapq\n\nclass PriorityQueue:\n    def __init__(self):\n        self.heap = []\n    \n    def push(self, item, priority):\n        heapq.heappush(self.heap, (priority, item))\n    \n    def pop(self):\n        if not self.is_empty():\n            return heapq.heappop(self.heap)[1]\n        return None\n    \n    def is_empty(self):\n        return len(self.heap) == 0',
      explanation: '使用Python的heapq模块实现优先队列，push方法添加元素和优先级，pop方法移除并返回优先级最高的元素，is_empty方法检查队列是否为空。',
      sampleInput: 'pq = PriorityQueue()\npq.push("task1", 3)\npq.push("task2", 1)\npq.push("task3", 2)\nprint(pq.pop())\nprint(pq.pop())\nprint(pq.pop())',
      sampleOutput: 'task2\ntask3\ntask1'
    },
    {
      id: 7,
      question: '实现一个图数据结构，使用邻接表表示',
      correctAnswer: 'class Graph:\n    def __init__(self):\n        self.adj_list = {}\n    \n    def add_vertex(self, vertex):\n        if vertex not in self.adj_list:\n            self.adj_list[vertex] = []\n    \n    def add_edge(self, vertex1, vertex2):\n        if vertex1 in self.adj_list and vertex2 in self.adj_list:\n            self.adj_list[vertex1].append(vertex2)\n            self.adj_list[vertex2].append(vertex1)\n    \n    def get_neighbors(self, vertex):\n        return self.adj_list.get(vertex, [])',
      explanation: '使用字典实现图的邻接表表示，add_vertex方法添加顶点，add_edge方法添加边，get_neighbors方法获取顶点的所有邻居。',
      sampleInput: 'g = Graph()\ng.add_vertex(1)\ng.add_vertex(2)\ng.add_vertex(3)\ng.add_vertex(4)\ng.add_edge(1, 2)\ng.add_edge(1, 3)\ng.add_edge(2, 4)\nprint(g.get_neighbors(1))\nprint(g.get_neighbors(2))',
      sampleOutput: '[2, 3]\n[1, 4]'
    },
    {
      id: 8,
      question: '实现一个二叉搜索树，包含insert和search方法',
      correctAnswer: 'class BSTNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\nclass BinarySearchTree:\n    def __init__(self):\n        self.root = None\n    \n    def insert(self, value):\n        if self.root is None:\n            self.root = BSTNode(value)\n        else:\n            self._insert_recursive(self.root, value)\n    \n    def _insert_recursive(self, node, value):\n        if value < node.value:\n            if node.left is None:\n                node.left = BSTNode(value)\n            else:\n                self._insert_recursive(node.left, value)\n        else:\n            if node.right is None:\n                node.right = BSTNode(value)\n            else:\n                self._insert_recursive(node.right, value)\n    \n    def search(self, value):\n        return self._search_recursive(self.root, value)\n    \n    def _search_recursive(self, node, value):\n        if node is None:\n            return False\n        if node.value == value:\n            return True\n        if value < node.value:\n            return self._search_recursive(node.left, value)\n        else:\n            return self._search_recursive(node.right, value)',
      explanation: '实现二叉搜索树，insert方法插入新节点，search方法查找节点。二叉搜索树的特性是左子树所有节点值小于根节点，右子树所有节点值大于根节点。',
      sampleInput: 'bst = BinarySearchTree()\nbst.insert(5)\nbst.insert(3)\nbst.insert(7)\nbst.insert(2)\nbst.insert(4)\nprint(bst.search(4))\nprint(bst.search(6))',
      sampleOutput: 'True\nFalse'
    }
  ];

  // 生成随机题目
  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setUserAnswer('');
    setResult(null);
    setShowAnswer(false);
    setShowOutput(false);
  };

  useEffect(() => {
    generateQuestion();
    setLoading(false);
  }, []);

  // 验证答案
  const validateAnswer = () => {
    if (!currentQuestion) return;

    try {
      // 简单的答案验证（实际项目中可能需要更复杂的验证）
      const isCorrect = userAnswer.trim() === currentQuestion.correctAnswer.trim();
      
      // 模拟代码运行，显示示例输出
      let output = null;
      if (currentQuestion.sampleOutput) {
        output = currentQuestion.sampleOutput;
      }
      
      setResult({
        correct: isCorrect,
        error: isCorrect ? null : '答案不正确，请检查代码',
        output: output
      });
      setShowOutput(true);
    } catch (error) {
      setResult({
        correct: false,
        error: error instanceof Error ? error.message : '代码执行出错',
        output: null
      });
    }
  };

  if (loading || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-amber-800">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* 导航栏 */}
        <div className="mb-8">
          <Link 
            to="/data-analysis" 
            className="flex items-center text-amber-800 hover:text-green-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">返回训练主页</span>
          </Link>
        </div>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            高级数据结构训练
          </h1>
          <p className="text-lg text-amber-700">
            练习栈、队列、树等高级数据结构
          </p>
        </div>

        {/* 题目区域 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-6">
            题目 {currentQuestion.id}
          </h2>
          <p className="text-amber-700 mb-6">
            {currentQuestion.question}
          </p>

          {/* 代码编辑器 */}
          <div className="mb-6">
            <label className="block text-amber-700 font-medium mb-2">
              请输入你的代码：
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-4 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-green-300 transition-colors duration-300"
              rows={8}
              placeholder="在此输入Python代码..."
            />
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={validateAnswer}
              className="bg-gradient-to-r from-amber-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-green-600 transition-colors duration-300 flex items-center"
            >
              <Check className="w-4 h-4 mr-2" />
              提交答案
            </button>
            <button
              onClick={generateQuestion}
              className="bg-white border-2 border-amber-300 text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-300 flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              换一题
            </button>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-white border-2 border-green-300 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300 flex items-center"
            >
              {showAnswer ? '隐藏答案' : '显示参考答案'}
            </button>
          </div>

          {/* 参考答案 */}
          {showAnswer && currentQuestion && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-medium text-amber-800 mb-2">参考答案：</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {currentQuestion.correctAnswer}
              </pre>
              {currentQuestion.sampleInput && (
                <div className="mt-4">
                  <h5 className="font-medium text-amber-700 mb-2">示例输入：</h5>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {currentQuestion.sampleInput}
                  </pre>
                </div>
              )}
              {currentQuestion.sampleOutput && (
                <div className="mt-4">
                  <h5 className="font-medium text-amber-700 mb-2">示例输出：</h5>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {currentQuestion.sampleOutput}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 结果显示 */}
        {result && (
          <div className={`rounded-2xl p-6 ${result.correct ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
            <div className="flex items-center mb-4">
              {result.correct ? (
                <Check className="w-6 h-6 text-green-500 mr-2" />
              ) : (
                <X className="w-6 h-6 text-red-500 mr-2" />
              )}
              <h3 className={`text-xl font-semibold ${result.correct ? 'text-green-700' : 'text-red-700'}`}>
                {result.correct ? '回答正确！' : '回答错误'}
              </h3>
            </div>
            {result.error && (
              <p className="text-red-600 mb-4">
                {result.error}
              </p>
            )}
            
            {/* 运行成果 */}
            {result.output && (
              <div className="mt-4">
                <h4 className="font-medium text-amber-800 mb-2">运行成果：</h4>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {result.output}
                </pre>
              </div>
            )}
            
            <div className="mt-4">
              <h4 className="font-medium text-amber-800 mb-2">正确答案：</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {currentQuestion.correctAnswer}
              </pre>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-amber-800 mb-2">解析：</h4>
              <p className="text-amber-700">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedDataStructures;