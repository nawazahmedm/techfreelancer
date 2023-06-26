import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="header-widget">
      <div className="header-notifications user-menu">
        <div className="header-notifications-trigger">
          <Link to="/dashboard-settings">
            <div className="user-avatar status-online">
              <img src="assets/images/user-avatar-small-01.jpg" alt="" />
            </div>
          </Link>
        </div>

        {/* User Menu Dropdown */}
        <div className="header-notifications-dropdown">
          <ul className="user-menu-small-nav">
            <li>
              <Link to="/dashboard-settings">
                <i className="icon-material-outline-settings"></i>
                User Profile & Settings
              </Link>
            </li>
            <li>
              <a href="index.html">
                <i className="icon-material-outline-power-settings-new"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
