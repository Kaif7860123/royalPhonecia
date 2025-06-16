import React, { useState } from 'react'
import styles from "./index.module.css"
import stick from "../../assets/roman1.png"
import { FaLessThan } from "react-icons/fa";
import Button from '../button';
const Text = () => {
   
  return (
    <>
    <div className={styles.textCont}>
        <div className={styles.imgCont}>
            <img src={stick}/>
        </div>
        <div className={styles.texts}>
         
          
                   <p> The stay at Wellness & pool hotel. Royal Phonecia means enjoying every moment Relax. Find inspiration. Be fascinated</p>
        </div>
              <Button value="Hello" color1="white" textColor="gray" color2="#3C6B8A" value2={<FaLessThan/>}/>

    </div>
    </>
  )
}

export default Text
