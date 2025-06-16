import React from 'react'
import styles from "./index.module.css"
import resto from "../../assets/resto.png"
import room from "../../assets/room.png"
import pools from "../../assets/pools.png"
const Facility = () => {
  return (
     <>
     <div className={styles.facilityCont}>
        <div className={styles.box}>
            <div className={styles.imgCont}>
                <img src={resto}/>
            </div>
            <h1>Restaurant</h1>
            <p>Royal Phonecia Hotel offers an array of top-tier facilities designed to enhance the comfort and convience of every guest</p>
        </div>
         <div className={styles.box}>
            <div className={styles.imgCont}>
                <img src={pools}/>
            </div>
            <div>
<h1>Pool</h1>
                        <p>Royal Phonecia Hotel offers an array of top-tier facilities designed to enhance the comfort and convience of every guest</p>

            </div>

        </div>
         <div className={styles.box}>
            <div className={styles.imgCont}>
                <img src={room}/>
            </div>
            <h1>Room</h1>
                       <p>Royal Phonecia Hotel offers an array of top-tier facilities designed to enhance the comfort and convience of every guest</p>


        </div>
     </div>
     </>
  )
}

export default Facility
