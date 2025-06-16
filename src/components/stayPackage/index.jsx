import React from 'react';
import styles from './index.module.css';
import pic1 from "../../assets/husbandWife.jpg"
import swims from "../../assets/swims.jpg"
import family from "../../assets/family.jpg"
import Button from '../button';
import { FaBagShopping } from "react-icons/fa6";
import { FaLessThan } from 'react-icons/fa';
import Button2 from '../button2';
const packages = [
  {
    title: "Royal Weekend Escape Package",
    description: "From BHD 250 / Per person / 3 Night",
    image: pic1
  },
  {
    title: "Family Fun Staycation",
    description: "From BHD 150 / 4 person / 2 Night",
    image:swims
  },
  {
    title: "Family Fun Staycation",
    description: "From BHD 150 / 4 person / 2 Night",
    image: family
  },
    
];

const StayPackages = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Stay packages</h1>
      <div className={styles.cardContainer}>
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={styles.card}
            style={{ backgroundImage: `url(${pkg.image})` }}
          >
            <div className={styles.overlay}>
              <span className={styles.season}>All season</span>
              <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>{pkg.title}</h2>
              <p className={styles.cardDesc}>{pkg.description}</p>
              </div>
            <div className={styles.btn}>
<Button value="More" color1="#FFFFFF33" textColor="white" color2="#FFFFFF25" value2={<FaLessThan/>}/>
<Button2 value={<FaBagShopping/>} color1="#FFFFFF33" textColor="white" color2="#3C6B8A" value2="Booking"/>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StayPackages;
