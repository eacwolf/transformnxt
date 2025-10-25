import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Research from './pages/Research';
import Login from './pages/Login';
// Products
import AIVideoInterviewer from './pages/products/ai-video-interviewer';
import AIAudioInterviewer from './pages/products/ai-audio-interviewer';
import AIAsyncInterviewer from './pages/products/ai-async-interviewer';
import OfficeCommunicator from './pages/products/office-communicator';
import InterviewScheduler from './pages/products/interview-scheduler';
import HRAnalytics from './pages/products/hr-analytics';
import HRReports from './pages/products/hr-reports';
import ATSCVRanker from './pages/products/ats-cv-ranker';
import HRMS from './pages/products/hrms';
import './index.css';

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/research" element={<Research />} />
            <Route path="/login" element={<Login />} />
            {/* Product pages */}
            <Route path="/products/ai-video-interviewer" element={<AIVideoInterviewer />} />
            <Route path="/products/ai-audio-interviewer" element={<AIAudioInterviewer />} />
            <Route path="/products/ai-async-interviewer" element={<AIAsyncInterviewer />} />
            <Route path="/products/office-communicator" element={<OfficeCommunicator />} />
            <Route path="/products/interview-scheduler" element={<InterviewScheduler />} />
            <Route path="/products/hr-analytics" element={<HRAnalytics />} />
            <Route path="/products/hr-reports" element={<HRReports />} />
            <Route path="/products/ats-cv-ranker" element={<ATSCVRanker />} />
            <Route path="/products/hrms" element={<HRMS />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
