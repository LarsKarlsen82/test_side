// Contact.jsx
import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.heroImage}>
        <img src="\assets\img\inussuk_1.png" alt="Contact Inussuk-IT" className={styles.heroImage} />
      </div>

      <div className={styles.contactInfo}>
        <h1>Kontakt os</h1>

        <p>Vi bor centralt i Nuuk og du er altid velkommen til at besøge os. 
          Vil du være sikker på, vi har frisk kaffe, kan du lave en aftale, inden du kommer.</p>
          <br />
        <address>
        <h3>Inussuk-IT
        Grønlands Fællesoffentlige IT</h3>
          Aqqusinersuaq 4, 2. sal
          3900 Nuuk
          <br />
          Grønland
          <br />
          <a href="mailto:support@inussuk-it.gl">support@inussuk-it.gl</a>
          <br />
          Tlf: +299 34 52 30
        </address>
      </div>
    </div>
  );
};

export default Contact;
