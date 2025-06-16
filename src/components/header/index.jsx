import React, { useState } from "react";
import styles from "./index.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu
import propertyVarient from "../../assets/PropertyVarient.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.imgCont}>
          {/* Toggle Button */}
          <div className={styles.hamburger} onClick={handleToggle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation List */}
          <div
            className={`${styles.listCont} ${
              menuOpen ? styles.showMenu : ""
            }`}
          >
            <ul>
              <li>ROOMS</li>
              <li>WELLNESS</li>
              <li>GASTRO</li>
              <li>HOTEL</li>
              <li>EVENTS</li>
              <li>CONTACT</li>
            </ul>
          </div>

          {/* Text Content */}
          <div className={styles.textCont}>
            <h1>
              Hotel <br /> Royal Phonecia
            </h1>
            <p>YOUR FAVOURITE PLACE OUR FAMILY STORY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
