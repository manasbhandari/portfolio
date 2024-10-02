import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="toggle" />
        <label for="toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li>
              <a href="/" class="navigation__link">
                Home
              </a>
            </li>
            <li>
              <a href="/timeline" class="navigation__link">
                Timeline
              </a>
            </li>
            <li>
              <a href="/blogs" class="navigation__link">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" class="navigation__link">
                Contact me
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1PqsuF-5bD_kDCmMkU62Xa4bgCybv3OoD/view?usp=sharing" class="navigation__link">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
