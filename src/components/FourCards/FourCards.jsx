
import React from 'react';
import styles from './FourCards.module.scss';

const FourCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h2>AX-Prisme</h2>
          <p>Prisme er en overbygning til Microsofts standard ERP-system Dynamics AX 2012, 
            som Fujitsu Danmark har udviklet specifikt til danske/grønlandske kommuner og regioner:</p>

        </div>
        <div className={styles.gridItem}>
          <h2>Mindkey</h2>
          <p>Mindkey er et danskudviklet HR system, der er specialiseret til små og mellemstore virksomheder</p>
         
        </div>
        <div className={styles.gridItem}>
          <h2>GetOrganized</h2>
          <p>GetOrganized er en ESDH platform, som fokuserer på den at højne den personlige og organisatoriske produktivitet</p>
        </div>
        <div className={styles.gridItem}>
        <h2>Inussuk-IT</h2>
          <p>We few, we happy few</p>
          <br />
          <p>Her i Inussuk-IT finder vi det vigtigt at vores brugere kan tilgå vores services.</p>
        
        </div>
      </div>
    </div>
  );
};

export default FourCards;
