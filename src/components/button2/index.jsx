import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import styles from "./index.module.css"
const Button2 = ({value,color1,textColor,color2,radius,value2}) => {
  return (
    <div>
       <div className={styles.btnCont}>
            <button className={styles.text} style={{backgroundColor:color1}} ><span style={{color:textColor}}>{value}</span></button>
            <button className={styles.icon} style={{backgroundColor:color2}}><span className={styles.texts}>{value2}</span></button>
        </div>
    </div>
  )
}

export default Button2
