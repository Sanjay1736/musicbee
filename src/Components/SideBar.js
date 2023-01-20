import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <>
      <div className="side-menu">
        <i class="fa-solid fa-bars"></i>
        <div className="top-section">
          <div className="logo">
            <h3>Music Bee</h3>
          </div>
          <div className="MenuList">
            <div></div>
            <li className="active">
              <i class="fa-solid fa-house"></i>Home
            </li>
            <li>
              <i class="fa-solid fa-compass"></i> Feed
            </li>
            <li>
              <i class="fa-solid fa-compass"></i> Feed
            </li>
          </div>
          <div className="MenuList">
            <h6>Discover</h6>
            <li>
              <i class="fa-solid fa-compass"></i> New and Notable
            </li>
            <li>Release Calender</li>
            <li>Events</li>
          </div>
          <div className="MenuList">
            <h6>Your Collections</h6>
            <li>
              <i class="fa-regular fa-heart"></i>Favorate Songs
            </li>
            <li>
              <i class="fa-solid fa-user-group"></i>Artist
            </li>
            <li>
              <i class="fa-regular fa-star"></i>Albums
            </li>
          </div>
          <div className="bottom">
            <section className="bottom-section">
              <h5>
                <b>Ceptari Tysa</b>
              </h5>
            </section>
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;
