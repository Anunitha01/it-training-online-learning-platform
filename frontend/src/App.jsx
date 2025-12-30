import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";     // ✅ ADD THIS
import FAQ from "./pages/FAQ";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />   {/* ✅ BLOG ROUTE */}
        <Route path="/faq" element={<FAQ />} />

        {/* AUTHENTICATION */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
