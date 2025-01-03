import React from 'react';
import styles from './Support.module.scss';
import { Link } from 'react-router-dom'; // Import Link to enable routing

const Support = () => {
  return (
    <div className={styles.SupportsContainer}>
      <div className={styles.supportCard}>
        <img
          src="/assets/img/support.jpg"
          alt="Support 1"
          className={styles.SupportImage}
        />
        <h2 className={styles.supportName}>Vi sidder klar til at hjælpe</h2>
        <p className={styles.supportDescription}>
          For at vi kan hjælpe bedst muligt, hurtigst muligt, er det vigtigt, 
          vi modtager alle de oplysninger, vi har brug for første gang. Derfor benytter vi os af online blanketter, 
          som du finder herunder.
        </p>
      </div>

      <div className={styles.supportCard}>
        <img
          src="/assets/img/point.jpg"
          alt="Point"
          className={styles.SupportImage}
        />
        <h2 className={styles.supportName}>Hvad skal du have hjælp til?</h2>
        <p className={styles.supportDescription}>
          Her kan du tilgå support for:
        </p>
        <ul>
          <li>
            <Link to="/support/axprisme" className={styles.SupportLink}>
              AX-Prisme
            </Link>
          </li>
          <li>
            <Link to="/support/mindkey" className={styles.SupportLink}>
              Mindkey
            </Link>
          </li>
          <li>
            <Link to="/support/go" className={styles.SupportLink}>
              Get Organized
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;

