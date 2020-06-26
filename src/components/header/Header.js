import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    let previousScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > $("#header").height() / 3) {
        if (currentScrollPosition < previousScrollPosition) {
          $("#header").fadeIn();
          $("#filter-container").css({
            transform: "translateY(0em)",
            height: "80vh"
          });
        } else if (
          !$("#header").is(":hover") &&
          !$(".dropdown-menu").is(":hover")
        ) {
          $("#header").fadeOut();
          $("#filter-container").css({
            transform: "translateY(-3em)",
            height: "84vh"
          });
          $(".dropdown-menu").removeClass("show");
        }
      }
      previousScrollPosition = currentScrollPosition;
    };
  }
  render() {
    return (
      <div id="header" className="navbar shadow-sm p-">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/assets/images/internia.png" alt="Homepage" width={100} />
          </a>
          <div class="dropdown">
            <img
              src="/assets/images/user.jpeg"
              alt="UserAvatar"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              className="rounded-circle bg-white"
              width={50}
              height={50}
              style={{ cursor: "pointer", border: "none" }}
            />
            <div
              id="dropdownMenu"
              class="dropdown-menu dropdown-menu-right shadow-sm border-none"
            >
              <Link class="dropdown-item" to="/notifications">
                <i className="fa fa-fw mr-2 fa-bell fa-sm" />
                Notifications
              </Link>
              <Link class="dropdown-item" to="/search">
                <i className="fa fa-fw mr-2 fa-coffee fa-sm" />
                Search Internships
              </Link>
              <Link class="dropdown-item" to="/applied">
                <i className="fa fa-fw mr-2 fa-clipboard fa-sm" />
                Applied Internships
              </Link>
              <Link class="dropdown-item" to="/profile">
                <i className="fa fa-fw mr-2 fa-user fa-sm" />
                Profile
              </Link>
              <Link class="dropdown-item" to="/preferences">
                <i className="fa fa-fw mr-2 fa-cog fa-sm" />
                Preferences
              </Link>
              <Link class="dropdown-item" to="/logout">
                <i className="fa fa-fw mr-2 fa-lock fa-sm" />
                Log out
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
