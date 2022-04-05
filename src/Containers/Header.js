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
  {
    id: 5,
    navigation: "test",
    link: "/",
  },
  {
    id: 5,
    navigation: "test",
    link: "/",
  },
  {
    id: 5,
    navigation: "test",
    link: "/",
  },
];

const footerSidebar = [
  {
    id: 1,
    navigation: "Shilapatra TV",
    icon: "shilapatra-video",
  },
  {
    id: 2,
    navigation: "Shilapatra Podcast",
    icon: "podcast-icon",
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

const ContainerBox = ({ children, className }) => {
  return <div className={`top__links container ${className}`}>{children}</div>;
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

const SidebarDropDown = ({ windowWidth }) => {
  return (
    <Link
      class={`nav-link ${
        +windowWidth <= 768 ? "mobile-sidebar" : "desktop-sidebar"
      }`}
    >
      <div>
        University Books <i class="fas fa-caret-down"></i>
      </div>
      <div class="dropdown">
        <ul>
          {["nav", "nva", "nva", "nva"].map((item) => {
            return (
              <li class="dropdown-link">
                <Link href="#">
                  {" "}
                  BBS <i class="fas fa-caret-right"></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
};

const CommonLink = ({ className }) => {
  return (
    <div className={`${className} common-link`}>
      {footerSidebar.map((item) => {
        return (
          <Link to="#">
            <span className="icon">
              {item.icon && (
                <img src={require(`../Images/${item.icon}.svg`)} alt="" />
              )}
            </span>
            <span>{item.navigation}</span>
          </Link>
        );
      })}
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
        <ContainerBox className="remove-mobile">
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
              src={require("../Images/shilapatra-text.svg").default}
              alt=""
            />
          </div>
          <div className="final__logo-date">
            <span className="eng-date">Thursday, 10 September 2020</span>
            <span className="nep-date"> बिहीबार, २५ भदौ २०७७</span>
          </div>
        </div>
      </div>
      <header className="container">
        <nav className="nav-area ">
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
                      {["nav", "nva", "nva", "nva"].map((item) => {
                        return (
                          <li class="dropdown-link">
                            <Link href="#">
                              {" "}
                              BBS <i class="fas fa-caret-right"></i>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="side__container">
            <button className="default-btn">Unicode</button>
          </div>
        </nav>
      </header>
      <ContainerBox>
        {<CommonLink className="front-nav container"></CommonLink>}
      </ContainerBox>
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
          <SidebarDropDown windowWidth={windowWidth}></SidebarDropDown>
        </ul>
        <CommonLink className="sidebar-footer"></CommonLink>
      </Sidebar>
    </>
  );
};

export default Header;
