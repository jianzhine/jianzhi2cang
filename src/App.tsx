import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Study from "@/pages/Study";
import DataAnalysis from "@/pages/DataAnalysis";
import Basic from "@/pages/data-analysis/Basic";
import DataStructures from "@/pages/data-analysis/DataStructures";
import DataAnalysisTraining from "@/pages/data-analysis/DataAnalysisTraining";
import Practice from "@/pages/data-analysis/Practice";
import Functions from "@/pages/data-analysis/functions";
import AdvancedDataStructures from "@/pages/data-analysis/advanced-data-structures";
import NumPy from "@/pages/data-analysis/numpy";
import Pandas from "@/pages/data-analysis/pandas";
import DataVisualization from "@/pages/data-analysis/data-visualization";
import DataCleaning from "@/pages/data-analysis/data-cleaning";
import RealWorld from "@/pages/data-analysis/real-world";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
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
      </div>
    </Router>
  );
}
