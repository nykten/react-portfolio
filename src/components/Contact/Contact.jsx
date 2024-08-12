import React from 'react'

import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach me out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='email icon'/>
          <a href='mailto:nik@neeha.my'>nik@neeha.my</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt='linkedin icon'/>
          <a href='https://www.linkedin.com/in/nykten'>linkedin.com/in/nykten</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt='github icon'/>
          <a href='https://www.github.com/nykten'>github.com/nykten</a>
        </li>
      </ul>
    </footer>
  )
}
