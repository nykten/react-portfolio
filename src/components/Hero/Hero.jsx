import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Neeha</h1>
        <p className={styles.description}>I'm mostly an AR developer with experiences working with many AR tools. 
          Reach me out for any ideas or works!</p>
        <a href='mailto:nik@neeha.my' className={styles.contactBtn}>HMU!</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Me img' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
