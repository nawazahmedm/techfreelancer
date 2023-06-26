import React from "react";

const leftNavigation = () => {
  return (
    <nav id="navigation">
      <ul id="responsive">
        <li>
          <a className="current">Why?</a>
        </li>
        <li>
          <a>Post a Task</a>
        </li>
        <li>
          <a>Bid a Task</a>
        </li>
      </ul>
    </nav>
  );
};

export default leftNavigation;
