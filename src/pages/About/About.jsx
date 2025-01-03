// About.jsx
import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['hero-image']}>
        {/* Use an absolute path from the public folder */}
        <img src="/assets/img/Lawyer_bg.jpg" alt="Hero Image" className={styles['hero-image']} />
      </div>
      <h1 className={styles['about-heading']}>Bestyrelsen</h1>
      <p className={styles['about-content']}>Ny bekendtgørelse for Inussuk IT trådte i kraft den 1.august 2023,
        hvor Pisortat Digitalinngorsaanermik Aqutsisoqatigiivi - PDA, blev den nye bestyrelse for Inussuk IT
      </p>
      <br />
      <p>
  PDA - Den nye bestyrelse for Inussuk-IT kan ses{' '}
  <a 
    href="https://digitalimik.gl/emner/strategi/faelles_offentlig_digital_portefoeljestyregruppe_pda_fois?sc_lang=da" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    her
  </a>
  <br />
  <p>Inussuk IT – Emil Kleemann, Direktør (Tilforordnet) </p>
</p>

<br />
<br />
<p>Grønlands Fællesoffentlige IT’s bestyrelse består af repræsentanter fra de 5 kommuner og Selvstyret. </p>
<p>Bestyrelsen fastsætter blandt andet hvilke It-systemer, der skal være fællesoffentlige.</p>
    </div>
  );
};

export default About;
