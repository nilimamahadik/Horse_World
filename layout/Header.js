"use client";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";

import { Modal, Button, Form, Input, Typography, Popover } from 'antd';
const { Text } = Typography;

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  console.log(isLoggedIn);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);


  const handleNavigation = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent navigation
      alert("We're sorry, but you are not logged in or your account does not have the required permissions for this action. Please create an account to proceed.");
    }
  };
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="index3">
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse  clearfix"
        >
          <ul className="navigation clearfix" style={{ padding: "5px" }}>
            <li className="dropdown current">
              <Link href="/">Home</Link>
              {/* <Link href="index2">Home</Link> */}
              <ul>
              </ul>

            </li>

            {/* <li className="dropdown current">
              <Link href="/addhorse"> Add a Horse</Link>
             

            </li> */}
              <li className="dropdown current">
                  <Link href="/addhorse" legacyBehavior>
                    <a onClick={handleNavigation}>Add a Horse</a>
                  </Link>
                </li>

            <li>
              <Link href="/breeder">Breeders</Link>
            </li>

            <li>
              <Link href="/stud">All Horses</Link>
            </li>
            {/* <li className="dropdown">
              <a href="#">Horses for Sale</a>
              <ul style={{ borderRadius: "10px" }}>
                <li>
                  <Link href="destination1">Litter Ad</Link>
                </li>
                <li>
                  <Link href="destination1">Litters</Link>
                </li>
                <li>
                  <Link href="destination1">Place an Ad</Link>
                </li>
              </ul>
            
            </li> */}

            <li className="dropdown">
              <a href="contact">Contact</a>
              <ul>

                {/* <li>
                  <Link href="faqs">Health Information</Link>
                </li>

                <li>
                  <Link href="faqs">Help</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li> */}

              </ul>
              {/* <div className="dropdown-btn">
                <span className="far fa-angle-down" />
              </div> */}
            </li>



          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const Header = ({ header }) => {
  const sidebarClick = () =>
    document.querySelector("body").classList.toggle("side-content-visible");

  switch (header) {
    case 1:
      return <Header1 sidebarClick={sidebarClick} />;
    case 2:
      return <Header2 sidebarClick={sidebarClick} />;

    default:
      return <Header3 sidebarClick={sidebarClick} />;
  }
};
export default Header;

const Header1 = ({ sidebarClick }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const domNode = useClickOutside(() => {
    setToggleSearch(false);
  });

  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && localStorage.getItem("token") ? true : false
  );
  // Open modal
  const handleOpen = () => setOpen(true);

  // Close modal
  const handleClose = () => setOpen(false);

  // Handle login form submission

  const [isVisible, setIsVisible] = useState(false);
  const [userdata, setUserData] = useState([])
  console.log(userdata);

  // Function to toggle popover visibility
  const togglePopover = (visible) => setIsVisible(visible);
  const profileContent = (
    <div style={{ width: "200px", textAlign: "center", padding: "10px" }}>
      <CgProfile size={25} color="#1890ff" />
      <h4 style={{ margin: "10px 0" }}>{userdata?.name || "User Name"}</h4>
      <p style={{ fontSize: "12px", color: "#666" }}>
        {userdata?.email || "user@example.com"}
      </p>
      <Button
        type="primary"
        size="small"
        block
        onClick={() => {
          router.push("/edit_account");
          togglePopover(false);
        }}
      >
        Edit My Account
      </Button>
      <Button
        type="default"
        danger
        size="small"
        block
        style={{ marginTop: "5px" }}
        onClick={() => {
          handleLogout();
          togglePopover(false);
        }}
      >
        Logout
      </Button>
    </div>
  );
  const handleLogin = async (values) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data.status === 200) {
        localStorage.setItem("token", data.token); // Save token for authentication
        setUserData(data.user)
        setIsAuthenticated(true); // Update state
        alert("Login successful!");
        setOpen(false); // Close modal
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false); // Update state
  };

  return (
    <Fragment>
      <header className="main-header header-one white-menu menu-absolute fixed-header">
        <div className="header-upper py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                <Menu />
              </div>

              <div className="menu-btns py-5">
                {isAuthenticated ? (
                  <Popover
                    content={profileContent}
                    trigger="click"
                    placement="bottomRight"
                    open={isVisible}
                    onOpenChange={togglePopover}
                  >
                    <span style={{ cursor: "pointer" }}>
                      <CgProfile size={30} color="white" />
                    </span>
                  </Popover>
                ) : (
                  // Show Sign In and Sign Up when not logged in
                  <>
                    <Link href="breeder_signup" className="theme-btn style-two bgc-secondary">
                      <span style={{ cursor: "pointer", color: "white" }}>Sign Up</span>
                    </Link>
                    <span
                      className="theme-btn style-two bgc-secondary"
                      style={{ cursor: "pointer", color: "white" }}
                      onClick={handleOpen}
                    >
                      Sign In
                    </span>
                  </>
                )}

                {/* Login Modal */}
                <Modal
                  title="Log in"
                  open={open}
                  onCancel={handleClose}
                  footer={null}
                  centered
                  width={470}
                >
                  <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item
                      label="Email:"
                      name="email"
                      rules={[{ required: true, message: "Please enter your email" }]}
                    >
                      <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                      label="Password:"
                      name="password"
                      rules={[{ required: true, message: "Please enter your password" }]}
                    >
                      <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Text style={{ fontSize: "12px" }}>
                      By clicking you agree to this site's <Link href="#">Terms</Link>.
                    </Text>

                    <Form.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button type="primary" htmlType="submit" size="medium">
                        Log in
                      </Button>
                    </Form.Item>

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                      <Link href="#">Forgot password?</Link>
                      <Text>
                        Not Registered? <Link href="breeder_signup">Free Sign Up</Link>
                      </Text>
                    </div>
                  </Form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar sidebarClick={sidebarClick} />
    </Fragment>
  );
};
const Header2 = ({ sidebarClick }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
    setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };

  return (
    <Fragment>
      <header className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center justify-content-between">
              <div className="logo-outer d-block">
                <div className="logo">
                  <Link href="index3">
                    <img
                      src="assets/images/logos/logo-two.png"
                      alt="Logo"
                      title="Logo"
                      style={{ width: "auto" }}
                    />
                  </Link>
                </div>
              </div>
              {/* Menu Button */}
              <div className="menu-btns py-10">

              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <section className="hidden-bar">
        <div className="inner-box">
          <div className="cross-icon" onClick={() => sidebarClick()}>
            <span className="fal fa-times" />
          </div>
          <div className="logo text-lg-center">
            <Link href="index3">
              <img src="assets/images/logos/logo-two.png" alt="Logo" />
            </Link>
          </div>
          <hr className="my-40" />
          <ul className="sidebar-menu">
            <li className="dropdown current">
              <a href="#" onClick={() => activeMenuSet("home")}>
                Home
              </a>
              <ul style={activeLi("home")}>

              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("home")}
              >
                <span className="far fa-angle-down" />
              </div>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => activeMenuSet("Tours")}>
                Tours
              </a>
              <ul style={activeLi("Tours")}>
                <li>
                  <Link href="tour-list">Tour List</Link>
                </li>
                <li>
                  <Link href="tour-grid">Tour Grid</Link>
                </li>
                <li>
                  <Link href="tour-sidebar">Tour Sidebar</Link>
                </li>
                <li>
                  <Link href="tour-details">Tour Details</Link>
                </li>
                <li>
                  <Link href="tour-guide">Tour Guide</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("Tours")}
              >
                <span className="far fa-angle-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => activeMenuSet("Destinations")}>
                Destinations
              </a>
              <ul style={activeLi("Destinations")}>
                <li>
                  <Link href="destination1">Destination 01</Link>
                </li>

              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("Destinations")}
              >
                <span className="far fa-angle-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => activeMenuSet("Pages")}>
                Pages
              </a>
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li className="dropdown">
                  <a href="#">Gallery</a>
                  <ul style={multiMenuActiveLi("Gallery")}>
                    <li>
                      <Link href="gellery-grid">Gallery Grid</Link>
                    </li>

                  </ul>
                  <div
                    className="dropdown-btn"
                    onClick={() => multiMenuSet("Gallery")}
                  >
                    <span className="far fa-angle-down" />
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#">products</a>
                  <ul style={multiMenuActiveLi("products")}>
                    <li>
                      <Link href="shop">Our Products</Link>
                    </li>
                    <li>
                      <Link href="product-details">Product Details</Link>
                    </li>
                  </ul>
                  <div
                    className="dropdown-btn"
                    onClick={() => multiMenuSet("products")}
                  >
                    <span className="far fa-angle-down" />
                  </div>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="404">404 Error</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("Pages")}
              >
                <span className="far fa-angle-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => activeMenuSet("blog")}>
                blog
              </a>
              <ul style={activeLi("blog")}>
                <li>
                  <Link href="blog">blog List</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("blog")}
              >
                <span className="far fa-angle-down" />
              </div>
            </li>
          </ul>
          <Link
            href="contact"
            className="theme-btn style-two style-three mt-15 mb-55"
          >
            <span data-hover="Book Now">Book Now</span>
            <i className="fal fa-arrow-right" />
          </Link>
          <hr className="mb-65" />
          <h6>Social Media</h6>
          {/*Social Icons*/}
          <div className="social-style-two mt-10">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>

      <div className="form-back-drop" onClick={() => sidebarClick()} />
    </Fragment>
  );
};

const Header3 = ({ sidebarClick }) => {
  return (
    <Fragment>
      <header className="main-header header-one">
        {/*Header-Upper*/}
        <div className="header-upper bg-white py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="index3">
                    <img
                      src="assets/images/logos/logo-two.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              {/* <div className="menu-btns py-10">
                <Link
                  href="breeder_signup"
                  className="theme-btn style-two bgc-secondary"
                >

                  <span data-hover="Sign Up">Sign Up</span>
                  <i className="fal fa-arrow-right" />
                </Link>


              </div> */}
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <Sidebar sidebarClick={sidebarClick} />
    </Fragment>
  );
};

const Sidebar = ({ sidebarClick }) => {
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => sidebarClick()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarClick()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                  <span data-hover="Sign-Up">Sign-Up</span>
                  {/* <span data-hover="Submit now">Submit now</span> */}
                  <i className="fal fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
