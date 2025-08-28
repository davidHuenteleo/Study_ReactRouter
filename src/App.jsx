import './App.css'

import Menu from './components/Menu/Menu';
import BlogPage from './components/Blog/BlogPage'; 
import HomePage from './components/Home/HomePage';
import ProfilePage from './components/Profile/ProfilePage';
import NotFound from './components//NotFound/NotFound'; 

import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </HashRouter>
  ) 
} 

export default App
