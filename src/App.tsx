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
const Basic = lazy(() => import("@/pages/data-analysis/Basic"));
const DataStructures = lazy(() => import("@/pages/data-analysis/DataStructures"));
const DataAnalysisTraining = lazy(() => import("@/pages/data-analysis/DataAnalysisTraining"));
const Practice = lazy(() => import("@/pages/data-analysis/Practice"));
const Functions = lazy(() => import("@/pages/data-analysis/functions"));
const AdvancedDataStructures = lazy(() => import("@/pages/data-analysis/advanced-data-structures"));
const NumPy = lazy(() => import("@/pages/data-analysis/numpy"));
const Pandas = lazy(() => import("@/pages/data-analysis/pandas"));
const DataVisualization = lazy(() => import("@/pages/data-analysis/data-visualization"));
const DataCleaning = lazy(() => import("@/pages/data-analysis/data-cleaning"));
const RealWorld = lazy(() => import("@/pages/data-analysis/real-world"));

// 加载状态组件
const Loading = () => (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-amber-700 font-medium">加载中...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
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
            <Route path="/data-analysis/basic" element={<Basic />} />
            <Route path="/data-analysis/functions" element={<Functions />} />
            <Route path="/data-analysis/data-structures" element={<DataStructures />} />
            <Route path="/data-analysis/advanced-data-structures" element={<AdvancedDataStructures />} />
            <Route path="/data-analysis/numpy" element={<NumPy />} />
            <Route path="/data-analysis/pandas" element={<Pandas />} />
            <Route path="/data-analysis/data-visualization" element={<DataVisualization />} />
            <Route path="/data-analysis/data-cleaning" element={<DataCleaning />} />
            <Route path="/data-analysis/data-analysis" element={<DataAnalysisTraining />} />
            <Route path="/data-analysis/practice" element={<Practice />} />
            <Route path="/data-analysis/real-world" element={<RealWorld />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
