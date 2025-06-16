import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import styles from "./index.module.css"
const Button = ({value,color1,textColor,color2,radius,padding,value2,center,flex,align}) => {
  return (
    <div>
       <div className={styles.btnCont}>
            <button className={styles.text} style={{backgroundColor:color1,borderRadius:radius ,padding:padding}} ><span style={{color:textColor}}>{value}</span></button>
            <button className={styles.icon} style={{backgroundColor:color2}}><span style={{display:flex,justifyContent:center,alignItems:align}}>{value2}</span></button>
        </div>
    </div>
  )
}

export default Button
