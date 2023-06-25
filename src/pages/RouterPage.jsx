import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Index from './index';
import Footer from './footer';
import Index2 from './index2';
import Login from './login';
import Register from './register';
import DashboardSettings from './dashboard-settings';
import FreelancersListLayout2 from './freelancers-list-layout-2';
import PostTask from './dashboard-post-a-task';
import Messages from './dashboard-messages'
import TaskDetails from './single-task-page';
import TaskList from './tasks-list-layout-2';
import FreelancerPostAdvertise from './freelancer-post-advertise';

export default function RouterPage() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" exact Component={Index} />
                        <Route path="/index2" exact Component={Index2} />
                        <Route path="/footer" exact Component={Footer} />
                        <Route path="/login" exact Component={Login} />
                        <Route path="/register" exact Component={Register} />
                        <Route path="/dashboard-settings" exact Component={DashboardSettings} />
                        <Route path="/freelancerslist" exact Component={FreelancersListLayout2} />
                        <Route path="/posttask" exact Component={PostTask} />
                        <Route path="/postadvertise" exact Component={FreelancerPostAdvertise} />
                        <Route path="/messages" exact Component={Messages} />
                        <Route path="/taskdetails" exact Component={TaskDetails} />
                        <Route path="/tasklist" exact Component={TaskList} />
                    </Routes>
                </Router>
            </div>
        )
    
}
