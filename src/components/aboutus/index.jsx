import React from "react";
import styles from "./index.module.css";
import four from "../../assets/four.png";
import hand from "../../assets/handshake.png";
function AboutUs() {
  return (
    <>
      <div className={styles.aboutCont}>
        <div className={styles.imgCont}>
          <img src={four} />
        </div>

        <div className={styles.texts}>
          <p>Exceptional gastronomy served in elegant spaces </p>
        </div>
        <div className={styles.aboutBox}>

         <div className={styles.height}>
             <div className={styles.images}>
            <div className={styles.aboutImgCont1}></div>
            <div className={styles.aboutImgCont2}></div>
            <div className={styles.aboutImgCont3}></div>
            
          </div>
         </div>

          <div className={styles.aboutTexts}>
            <h1>About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              minima perspiciatis placeat vel itaque dignissimos fugiat, tempore
              voluptatibus optio quia ut molestiae, labore mollitia, eos aliquid
              ex delectus ipsum explicabo? Minus animi amet sit dolorem
              molestias. Voluptates repellat excepturi repellendus! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Velit, recusandae.{" "}
            </p>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default AboutUs;
