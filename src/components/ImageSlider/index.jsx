// import React from 'react'
// import Home from './pages/home'
// import "./App.css"
// function App() {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import image from "../../assets/swims.jpg";
import image1 from "../../assets/wellness.jpg";
import image2 from "../../assets/dinner.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
    //   setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);
let index=0;
  return (
    <div className={styles.sliderWrapper}>
    

      <div
        className={`${styles.slide} ${index === currentIndex ? styles.active : ""
        }`}
         
      >
        <img src={image} />
      </div>
      <div
        className={`${styles.slide} ${
          index === currentIndex ? styles.active : ""
        }`}
        
      >
        <img src={image1} />
      </div>
      <div
        className={`${styles.slide} ${
          index === currentIndex ? styles.active : ""
        }`}
        
      >
        <img src={image2} />
      </div>
    </div>
  );
};

export default ImageSlider;
