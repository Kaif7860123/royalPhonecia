import React from "react";
import styles from "./index.module.css";
import propertDefault from "../../assets/PropertyDefault.png";
import frame2 from "../../assets/PropertyFrame2.png";
import bedroom from "../../assets/bedroom.png";
import pool from "../../assets/pool.png";
import dining from "../../assets/dining.png";
import Button from "../button";
import { FaLessThan } from "react-icons/fa";
const FavHotel = () => {
  return (
    <>
      <div className={styles.hotelCont}>
        <div className={styles.hotelImgCont}>
          <div className={styles.textContainer}>
            <div className={styles.textCont}>
              <div className={styles.textBox}>
                <p>Favorite Hotel</p>
                <p>Bussiness and Event Spaces</p>
                <p>Diverse and Dining Options</p>
                <p>Multiple Swimming pools</p>
                <p>Family Friendly Amenities</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame2Cont}>
          <img src={frame2} />
        </div>
        <div className={styles.facility}>
          <div className={styles.imgCont}>
            <img src={bedroom} />
            <div className={styles.box1}>
              <p>Rooms</p>
            </div>
          </div>
          <div className={styles.imgCont}>
            <img src={pool} />
            <div className={styles.box1}>
              <p>Pools</p>
            </div>
          </div>
          <div className={styles.imgCont}>
            <img src={dining} />
            <div className={styles.box1}>
              <p>Dining</p>
            </div>
          </div>
        </div>
      </div>
        <Button value="Accommodation" color1="white" textColor="gray" color2="#3C6B8A" value2={<FaLessThan/>}/>

    </>
  );
};

export default FavHotel;
