import React from "react";
import Logo from "./logo";
import Navigation from "./left-navigation";
import UserNotifications from "./user-notification";
import UserMessages from "./user-messeges";
import UserProfile from "./user-profile";
import SignInJoin from "./sign-join";

const UserMenu = () => {
  const isLoggedIn = true; // Set your login state here

  return (
    <div>
      {/* Header Container */}
      <header id="header-container" className="fullwidth">
        {/* Header */}
        <div id="header">
          <div className="container">
            {/* Left Side Content */}
            <div className="left-side">
              <Logo />
              <Navigation />
              <div className="clearfix"></div>
            </div>

            {/* Right Side Content */}
            <div className="right-side">
              <div className="header-widget">
                {isLoggedIn ? (
                  <>
                    <UserNotifications />
                    <UserMessages />
                    <UserProfile />
                  </>
                ) : (
                  <>
                    <SignInJoin />
                  </>
                )}
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserMenu;
