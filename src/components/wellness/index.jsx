import React from 'react'
import styles from "./index.module.css"
import fitness from '../../assets/fitness.jpg'
import dinner from '../../assets/dinner.jpg'
import wellness from '../../assets/wellness.jpg'
const Wellness = () => {
  return (
    <>
    <div className={styles.wellnessCont}>
        <div className={styles.cardCont}>
<div className={styles.imgCont}>
    <img src={fitness} className={styles.img1}/>
    <div className={styles.textCont}>
    <h3>fitness</h3>
    <h2>Center</h2>
    <p>for those lookin to maintain their fitness routine while travelling the hotels offers as well as equiped well equiped center</p>
    </div>
     </div>
<div className={styles.imgCont}>
    <img src={dinner} className={styles.img2}/>
    <div className={styles.textCont}>
    <h3>On-site</h3>
    <h2>Dining</h2>
    <p>for those lookin to maintain their fitness routine while travelling the hotels offers as well as equiped well equiped center</p>
    </div>
     </div>
<div className={styles.imgCont}>
    <img src={wellness} className={styles.img3}/>
    <div className={styles.textCont}>
    <h3>Wellness</h3>
    <h2>& Spa</h2>
    <p>for those lookin to maintain their fitness routine while travelling the hotels offers as well as equiped well equiped center</p>
    </div>
     </div>
        </div>
    </div>
    </>
  )
}

export default Wellness
