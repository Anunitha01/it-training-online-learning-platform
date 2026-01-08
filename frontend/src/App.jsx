import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ"; // file name is FAQ.jsx

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Wrapper to conditionally show Navbar
function Layout({ children }) {
  const location = useLocation();
  // Hide Navbar for /faq route
  const showNavbar = !location.pathname.toLowerCase().startsWith("/faq");

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faq" element={<FAQ />} />

          {/* FALLBACK */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
