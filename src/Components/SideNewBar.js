import React from "react";
import './NewNav.css'

const SideNewBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light   nav-fix"
        style={{ width: 280, height: 900 }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">MusicBee</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              <i class="fa-solid fa-film"></i>
              Trends
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              <i class="fa-solid fa-compass"></i>
              Feed
            </a>
          </li>
          <p>Discover</p>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              <i class="fa-solid fa-sun"></i>
              New and Notable
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              <i class="fa-solid fa-calendar-days"></i>
              Realease Calender
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              <i class="fa-solid fa-ticket"></i>
              Events
            </a>
          </li>
          <p>Your Collections</p>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              <i class="fa-sharp fa-solid fa-heart"></i>
              Favaorite Songs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              <i class="fa-solid fa-user-group"></i>
              Artist
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              <i class="fa-regular fa-star"></i>
              Albums
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>Ceptari Tysa</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
            style={{}}
          ></ul>
        </div>
      </div>
    </>
  );
};

export default SideNewBar;
