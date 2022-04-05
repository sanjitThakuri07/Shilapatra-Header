import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import { Button } from "react-bootstrap";

const staticNav = [
  {
    id: 1,
    navigation: "test",
    link: "/",
  },
  {
    id: 2,
    navigation: "test",
    link: "/",
  },
  {
    id: 3,
    navigation: "test",
    link: "/",
  },
  {
    id: 4,
    navigation: "test",
    link: "/",
  },
  {
    id: 5,
    navigation: "test",
    link: "/",
  },
];

const Sidebar = styled.div`
  width: ${(p) => {
    return `${!p.isActive ? 0 : 304}px`;
  }};
  width: 304px;
  position: fixed;
  top: 0;
  left: ${(p) => {
    return `${!p.isActive ? -500 : 0}px`;
  }};
  height: 100vh;
  /* overflow: ${(p) => {
    return `${p.isActive ? "visible" : "hidden"}`;
  }}; */
  transition: all 0.5s ease-in-out;
  z-index: 500;
  background: #fff;
  padding: ${(p) => {
    return `${!p.isActive && 0}`;
  }};

  display: flex;
  flex-direction: column;
`;

const Hamburger = ({ onClick, className }) => {
  return (
    <div className={`hamburger-menu-container ${className}`} onClick={onClick}>
      <div className="hamburger-menu">
        <div></div>
      </div>
    </div>
  );
};

const ContainerBox = ({ children }) => {
  return <div className="top__links">{children}</div>;
};

const AddBox = ({ img }) => {
  return (
    <div className="col-md-6 add-container">
      <img
        src={require("../Images/rect.png")}
        alt="Rectangle"
        className="add_box"
      />
    </div>
  );
};

const Header = ({ documentCategorys = [], isLoading }) => {
  const [windowWidth, setWindowWidth] = useState();

  const [activeSidebar, setActiveSiderbar] = useState(false);

  //   const [multiDropdown, setMultiDropdown] = useState(false);

  function sizeGetter() {
    setWindowWidth((prev) => window.innerWidth);
  }

  useEffect(() => {
    sizeGetter();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", sizeGetter);

    return () => {
      // remove resize listener
      window.removeEventListener("resize", sizeGetter);
    };
  }, [windowWidth]);

  return (
    <>
      <div className="top__header container">
        <ContainerBox>
          {staticNav.map((nav) => {
            return (
              <Link to="/" className="top__header-a">
                {nav.navigation}
              </Link>
            );
          })}
        </ContainerBox>
        <div className="row add_box" style={{ paddingTop: "16px" }}>
          {[0, 1].map((item) => (
            <AddBox></AddBox>
          ))}
        </div>
        <div className="final__logo">
          <div className="final__logo-image">
            <img
              src=" https://shilapatra.com/themes/shilapatra/images/logo.svg "
              alt=""
            />
          </div>
          <div className="final__logo-date">
            <span className="eng-date"></span>
            <span className="nep-date"></span>
          </div>
        </div>
      </div>
      <header className="">
        <nav className="nav-area container">
          <input type="checkbox" id="check" checked={activeSidebar} />
          <Hamburger
            onClick={() => setActiveSiderbar(!activeSidebar)}
          ></Hamburger>
          <div
            className="overlay"
            onClick={() => setActiveSiderbar(!activeSidebar)}
          ></div>
          <div className="main__nav-container">
            <div className="nav__list-container">
              <ul className="nav__list">
                <Link to="/" className="nav__list-link no_hover">
                  <img src={require("../Images/icon-logo.png")} alt="" />
                </Link>
                {staticNav.map((nav) => {
                  return (
                    <Link to="/" className="nav__list-link desktop-nav">
                      {nav.navigation}
                    </Link>
                  );
                })}
                <li class="nav-link desktop-nav">
                  <a href="#">
                    University Books <i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <a href="#">
                          {" "}
                          BBS <i class="fas fa-caret-right"></i>
                        </a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">
                          {" "}
                          BBA <i class="fas fa-caret-right"></i>
                        </a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">
                          {" "}
                          BIM <i class="fas fa-caret-right"></i>
                        </a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">
                          {" "}
                          BHM<i class="fas fa-caret-right"></i>{" "}
                        </a>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="side__container">
            <div className="search"></div>
            <button className="default-btn">Unicode</button>
          </div>
        </nav>
      </header>
      <Sidebar
        isActive={activeSidebar}
        itemName="sidebar-id"
        className="sidebar"
      >
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img
              src={require("../Images/icon-logo.png")}
              alt="Shilapatra Logo"
              className="sidebar__icon-logo"
            />
            <img
              src={require("../Images/Text-logo.png")}
              alt="Shilapatra Logo"
              className="sidebar__text-logo"
            />
          </div>
          <Hamburger
            onClick={() => setActiveSiderbar(!activeSidebar)}
            className="cross-icon"
          ></Hamburger>
        </div>
        <ul className="sidebar-body">
          {staticNav.map((nav) => {
            return (
              <Link to="/" className="sidebar-link">
                {nav.navigation}
              </Link>
            );
          })}
          <a class={`nav-link ${"desktop-sidebar"}`}>
            <div>
              University Books <i class="fas fa-caret-down"></i>
            </div>
            <div class="dropdown">
              <ul>
                <li class="dropdown-link">
                  <a href="#">
                    {" "}
                    BBS <i class="fas fa-caret-right"></i>
                  </a>
                </li>
                <li class="dropdown-link">
                  <a href="#">
                    {" "}
                    BBA <i class="fas fa-caret-right"></i>
                  </a>
                </li>
                <li class="dropdown-link">
                  <a href="#">
                    {" "}
                    BIM <i class="fas fa-caret-right"></i>
                  </a>
                </li>
                <li class="dropdown-link">
                  <a href="#">
                    {" "}
                    BHM<i class="fas fa-caret-right"></i>{" "}
                  </a>
                </li>
                <div class="arrow"></div>
              </ul>
            </div>
          </a>
        </ul>
      </Sidebar>
    </>
  );
};

export default Header;
