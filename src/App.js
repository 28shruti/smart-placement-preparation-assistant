import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import Home from './pages/Home';
import Aptitude from './pages/Aptitude';
import Coding from './pages/Coding';
import Interview from './pages/Interview';
import Resume from './pages/Resume';
import Tracker from './pages/Tracker';
import NotFound from './pages/NotFound';
import Company from './pages/Company';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';

export default function App(){
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/DashboardHome" element={<DashboardHome />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Shell>
  )
}