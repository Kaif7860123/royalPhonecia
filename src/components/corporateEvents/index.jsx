import React from 'react'
import styles from "./index.module.css"
import corporate from "../../assets/corporate.jpg"
import Button from '../button'
import { FaLessThan } from 'react-icons/fa'
function Corporate() {
  return (
     <>
     <div className={styles.corporateCont}>
<div className={styles.imgCont}>
    <img src={corporate}/>

<marquee>Corporate Events   Social Celebrations</marquee>
<div className={styles.textContainer}>
            <div className={styles.textCont}>
              <div className={styles.textBox}>
                <h1>For companies</h1>
                <p>Host your formal bussiness meeting in a unique and refreshing setting. Enjoy elegant venues comfortable , accommodation and exceptional cauiseine that elevate every professional gathering</p>
                       <Button value="More" color1="white" textColor="gray" color2="#3C6B8A" value2={<FaLessThan/>}/>

              </div>
            </div>
          </div>
</div>
     </div>
     </>
  )
}

export default Corporate
