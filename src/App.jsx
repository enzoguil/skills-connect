import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import './App.css';
import Swipe from "./pages/Swipe";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar className="mb-5" />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Article />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/compte/:id' element={<Account />} />
          <Route path='/swipe' element={<Swipe />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App;
