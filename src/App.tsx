import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";

// 懒加载组件
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Skills = lazy(() => import("@/pages/Skills"));
const Projects = lazy(() => import("@/pages/Projects"));
const Study = lazy(() => import("@/pages/Study"));
const DataAnalysis = lazy(() => import("@/pages/DataAnalysis"));
const DataAnalysisTraining = lazy(() => import("@/pages/data-analysis/DataAnalysisTraining"));
const LearningPath = lazy(() => import("@/pages/data-analysis/LearningPath"));
const SectionContent = lazy(() => import("@/pages/data-analysis/SectionContent"));
const BranchContent = lazy(() => import("@/pages/data-analysis/BranchContent"));
const KnowledgePointPage = lazy(() => import("@/pages/data-analysis/KnowledgePointPage"));
const Practice = lazy(() => import("@/pages/data-analysis/Practice"));

// 加载状态组件
const Loading = () => (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-amber-700 font-medium">加载中...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/study" element={<Study />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
            <Route path="/data-analysis/training" element={<DataAnalysisTraining />} />
            <Route path="/data-analysis/learning-path" element={<LearningPath />} />
            <Route path="/data-analysis/:sectionId" element={<SectionContent />} />
            <Route path="/data-analysis/:sectionId/:branchId" element={<BranchContent />} />
            <Route path="/data-analysis/:sectionId/:branchId/knowledge/:knowledgeIndex" element={<KnowledgePointPage />} />
            <Route path="/data-analysis/:sectionId/:branchId/practice" element={<Practice />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
