import React from "react";

const UserNotifications = () => {
  return (
    <div className="header-notifications">
      {/* Notifications Trigger */}
      <div className="header-notifications-trigger">
        <a href="#">
          <i className="icon-feather-bell"></i>
          <span>4</span>
        </a>
      </div>

      {/* Notifications Dropdown */}
      <div className="header-notifications-dropdown">
        {/* Notifications Headline */}
        <div className="header-notifications-headline">
          <h4>Notifications</h4>
          <button
            className="mark-as-read ripple-effect-dark"
            title="Mark all as read"
            data-tippy-placement="left"
          >
            <i className="icon-feather-check-square"></i>
          </button>
        </div>

        {/* Notifications Content */}
        <div className="header-notifications-content">
          {/* Notifications Scroll */}
          <div className="header-notifications-scroll" data-simplebar>
            <ul>
              {/* Notification */}
              <li className="notifications-not-read">
                <a href="dashboard-manage-candidates.html">
                  <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                  </span>
                  <span className="notification-text">
                    <strong>Michael Shannah</strong> applied for a job{" "}
                    <span className="color">
                      Full Stack Software Engineer
                    </span>
                  </span>
                </a>
              </li>

              {/* Notification */}
              <li>
                <a href="dashboard-manage-bidders.html">
                  <span className="notification-icon">
                    <i className=" icon-material-outline-gavel"></i>
                  </span>
                  <span className="notification-text">
                    <strong>Gilbert Allanis</strong> placed a bid on your{" "}
                    <span className="color">iOS App Development</span> project
                  </span>
                </a>
              </li>

              {/* Notification */}
              <li>
                <a href="dashboard-manage-jobs.html">
                  <span className="notification-icon">
                    <i className="icon-material-outline-autorenew"></i>
                  </span>
                  <span className="notification-text">
                    Your job listing{" "}
                    <span className="color">Full Stack PHP Developer</span> is
                    expiring.
                  </span>
                </a>
              </li>

              {/* Notification */}
              <li>
                <a href="dashboard-manage-candidates.html">
                  <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                  </span>
                  <span className="notification-text">
                    <strong>Sindy Forrest</strong> applied for a job{" "}
                    <span className="color">Full Stack Software Engineer</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotifications;
