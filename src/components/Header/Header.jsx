// import React from 'react';
// import styles from './Header.module.scss';

// // Import the hero image
// import heroImage from '../../assets/img/inussuk_bear.jpg';

// export const Header = () => {
//   return (
//     <header className={styles.Header}>
//       <div className={styles.Container}>
//         {/* Driftsinfo box */}
//         <div className={styles.Driftsinfo}>
//           <h2>Driftsinfo</h2>
//           <p>Der er planlagt vedligeholdelse på vores systemer d. 5. januar mellem kl. 22:00 og 04:00. 
//             Tjenester kan være ustabile i denne periode.</p>
//             <br />
//             <p>Med venlig hilsen</p>
//             <p>ERP-Team</p>
//         </div>

//         <div className={styles.DriftsinfoRed}>
//           <h2>Vigtig Info</h2>
//           <p>Der opleves i øjeblikket udfordringer med login til AX-Prisme. Vi arbejder på at løse problemet og beklager ulejligheden.</p>
//           <br />
//           <p>Med venlig hilsen</p>
//           <p>Support-Team</p>
//         </div>

//         {/* Hero section */}
//         <div className={styles.Hero} style={{ backgroundImage: `url(${heroImage})` }}>
//           <h1><span className={styles.Leo}>Inussuk</span>-IT</h1>
//           <p>Vi har pligt til at blive selvstændige</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import styles from './Header.module.scss';

// Import the hero image
import heroImage from '../../assets/img/polar_bear.jpg';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        {/* Driftsinfo box */}
        <div className={styles.Driftsinfo}>
          <h2>Driftsinfo</h2>
          <p>03-01-2025</p>
          <p>Der er planlagt vedligeholdelse på vores systemer d. 5. januar mellem kl. 22:00 og 04:00. 
            Tjenester kan være ustabile i denne periode.</p>
          <br />
          <p>Med venlig hilsen</p>
          <p>ERP-Team</p>
        </div>

        {/* DriftsinfoRed box */}
        <div className={styles.DriftsinfoRed}>
          <h2>Vigtig Info</h2>
          <p>03-01-2025</p>
          <p>Der opleves i øjeblikket udfordringer med login til AX-Prisme. Vi arbejder på at løse problemet og beklager ulejligheden.</p>
          <br />
          <p>Med venlig hilsen</p>
          <p>Support-Team</p>
        </div>

        {/* Hero section */}
        <div className={styles.Hero} style={{ backgroundImage: `url(${heroImage})` }}>
          <h1><span className={styles.Leo}>Inussuk</span>-IT</h1>
          <p>Vi har pligt til at blive selvstændige</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
