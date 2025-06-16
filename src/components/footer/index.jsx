import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import styles from "./index.module.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/royalLogo.png"
function Footer() {
  const navItems = [
    { id: 'I', label: 'Rooms' },
    { id: 'II', label: 'Wellness' },
    { id: 'III', label: 'Gastro' },
    { id: 'IV', label: 'Hotel' },
    { id: 'V', label: 'Events' },
  ];

  const handleClick = (label) => {
    alert(`Navigation item clicked: ${label}`);
  };

  return (
    <div className={styles.container}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
      <div className={styles.navSection}>
        {navItems.map((item) => (
          <div
            key={item.id}
            className={styles.navItem}
            onClick={() => handleClick(item.label)}
          >
            <span>{item.id}</span> {item.label}
          </div>
        ))}
      </div>

      <div className={styles.infoSection}>
        <h2>More about rooms</h2>
        <ul>
          <li>120 comfortable rooms</li>
          <li>Dinings</li>
          <li>Packages</li>
          <li>Pools</li>
        </ul>
      </div>
    </div>

      {/* Right Panel */}
       <div className={styles.rightPanel}>
      <img
        src={logo}
        alt="Logo"
      />
      <div className={styles.headings}>
        <h3>Wellness & Pools</h3>
      <h3>Hotel Royal Phoenicia</h3>
      </div>
      
      <p>Building 1288</p>
      <p>Road 3931, Block 339</p>
      <p>Umm Al Hasam – Manama</p>
      <p>Bahrain</p>
      <div className={styles.contacts}>
      <p>+973 1730 7307</p>
            <Link to="mailto:info@royalphoeniciahotel.com"> info@royalphoeniciahotel.com</Link>
            <br/>
      <Link to="#">Contacts →</Link>
</div>
      <div className={styles.socialIcons}>
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
      </div>
    </div>
    </div>
  );
}

export default Footer;
