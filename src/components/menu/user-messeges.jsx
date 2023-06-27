import React from "react";
import { Link } from "react-router-dom";

const UserMessages = () => {
  return (
    <div className="header-notifications">
      {/* Messages Trigger */}
      <div className="header-notifications-trigger">
        <a href="#">
          <i className="icon-feather-mail"></i>
          <span>3</span>
        </a>
      </div>

      {/* Messages Dropdown */}
      <div className="header-notifications-dropdown">
        {/* Messages Headline */}
        <div className="header-notifications-headline">
          <h4>Messages</h4>
          <button
            className="mark-as-read ripple-effect-dark"
            title="Mark all as read"
            data-tippy-placement="left"
          >
            <i className="icon-feather-check-square"></i>
          </button>
        </div>

        {/* Messages Content */}
        <div className="header-notifications-content">
          {/* Messages Scroll */}
          <div className="header-notifications-scroll" data-simplebar>
            <ul>
              {/* Message */}
              <li className="notifications-not-read">
                <a href="dashboard-messages.html">
                  <span className="notification-avatar status-online">
                    <img src="assets/images/user-avatar-small-03.jpg" alt="" />
                  </span>
                  <div className="notification-text">
                    <strong>David Peterson</strong>
                    <p className="notification-msg-text">
                      Thanks for reaching out. I'm quite busy right now on
                      many...
                    </p>
                    <span className="color">4 hours ago</span>
                  </div>
                </a>
              </li>

              {/* Message */}
              <li className="notifications-not-read">
                <a href="dashboard-messages.html">
                  <span className="notification-avatar status-offline">
                    <img src="assets/images/user-avatar-small-02.jpg" alt="" />
                  </span>
                  <div className="notification-text">
                    <strong>Sindy Forest</strong>
                    <p className="notification-msg-text">
                      Hi Tom! Hate to break it to you, but I'm actually on
                      vacation until...
                    </p>
                    <span className="color">Yesterday</span>
                  </div>
                </a>
              </li>

              {/* Message */}
              <li className="notifications-not-read">
                <a href="dashboard-messages.html">
                  <span className="notification-avatar status-online">
                    <img
                      src="assets/images/user-avatar-placeholder.png"
                      alt=""
                    />
                  </span>
                  <div className="notification-text">
                    <strong>Marcin Kowalski</strong>
                    <p className="notification-msg-text">
                      I received payment. Thanks for cooperation!
                    </p>
                    <span className="color">Yesterday</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* View All Messages Button */}
        <Link
          to="/messages"
          className="header-notifications-button ripple-effect button-sliding-icon"
        >
          View All Messages
          <i className="icon-material-outline-arrow-right-alt"></i>
        </Link>
      </div>
    </div>
  );
};

export default UserMessages;
