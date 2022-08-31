import React from "react";
import "./SideNavBar.css";
import { SidebarData } from "./SidebarData";

function SideNavBar() {
  return (
    <div className="outer">
      <div className="SideNavBar">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="rows"
                id = {window.location.pathname == val.path ? "active" : " "}
                key={key}
                onClick={() => {
                  window.location.pathname = val.path;
                }}
              >
                <div id="icons">{val.icon}</div>
                <div id="titles"> {val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;
