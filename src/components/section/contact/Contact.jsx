import React from 'react'
import styles from "./Contact.module.css"
import Button from '../../common/Button/Button'

const Contact = () => {
  return (
    <div className={styles.ContactBand}>
        <h1>You can contact us</h1>
        <Button variant='secondary' size='large'>Contact</Button>
    </div>
  )
}

export default Contact