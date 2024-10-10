import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import { Header } from './components/header';
import Layout from './components/Layout';
function App() {
 return (
 <BrowserRouter>
 <Layout>
 <Header />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/courses" element={<Courses />} />
 </Routes>
 </Layout>
 </BrowserRouter>
 );
}
export default App;
