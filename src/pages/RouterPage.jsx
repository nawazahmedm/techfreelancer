import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import Index2 from './index2';
import Login from './login';
import Register from './register';
import DashboardSettings from './dashboard-settings';
import FreelancersListLayout2 from './freelancers-list-layout-2';
import PostTask from './dashboard-post-a-task';
import Messages from './dashboard-messages';
import TaskDetails from './single-task-page';
import TaskList from './tasks-list-layout-2';
import FreelancerPostAdvertise from './freelancer-post-advertise';

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index2" element={<Index2 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard-settings" element={<DashboardSettings />} />
          <Route path="/freelancerslist" element={<FreelancersListLayout2 />} />
          <Route path="/posttask" element={<PostTask />} />
          <Route path="/postadvertise" element={<FreelancerPostAdvertise />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/taskdetails" element={<TaskDetails />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}
