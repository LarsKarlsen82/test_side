// import React, { useState } from 'react';
// import styles from './Axprisme.module.scss';

// const Axprisme = () => {
//   // States for each expandable section
//   const [expanded, setExpanded] = useState([false, false, false, false]);

//   // Toggle the section expansion
//   const toggleSection = (index) => {
//     setExpanded((prev) => {
//       const newExpanded = [...prev];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   return (
//     <div className={styles.AxprismeContainer}>
//       <h2>Vi sidder klar til at hjælpe</h2>
//       <h3 className={styles.AxprismeHeader}>AX-Prisme Support</h3>
//       <p className={styles.AxprismeText}>
//       For at vi kan hjælpe bedst muligt, hurtigst muligt, er det vigtigt, 
      
//       <p> vi modtager alle de oplysninger, vi har brug for første gang.  </p>
//       Derfor benytter vi os af online blanketter, som du finder herunder.
//       </p>

//       {/* Section 1 */}
//       <div className={styles.Section}>
//         <div className={styles.ToggleButton} onClick={() => toggleSection(0)}>
//           {expanded[0] ? '-' : '+'} Support
//         </div>
//         <div
//           className={`${styles.SectionContent} ${expanded[0] ? styles.Expanded : ''}`}
//         >
//           Når I har brug for hjælp og ønsker at oprette en ny supportsag, skriv til denne mail: 
//           <a href="mailto:support@inussuk-it.gl">support@inussuk-it.gl</a>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className={styles.Section}>
//         <div className={styles.ToggleButton} onClick={() => toggleSection(1)}>
//           {expanded[1] ? '-' : '+'} Medarbejderoprettelse i AX-Prisme
//         </div>
//         <div
//           className={`${styles.SectionContent} ${expanded[1] ? styles.Expanded : ''}`}
//         >
//           Brug denne <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">blanket</a>, når I har en medarbejder, som skal oprettes i AX prisme. Eller hvis I ønsker ændringer til brugerens rettigheder og placeringer. Samt ved nedlæggelse af en bruger.
//           I logger på blanketten med jeres login til PC’en – jeres ‘Windows login’.
          
//           <br />
//           <br />
//           <strong>Bemærk</strong>
          
//           <br />
//           <br />
//           Blanketten er endnu i test i de fleste regnskaber.
//           Avannaata Kommunia og Qeqertalik benytter den.
          
//           <br />
//           Hvis I ønsker at benytte den nye blanket til brugeroprettelse, send en mail til 
//           <a href="mailto:support@inussuk-it.gl">support@inussuk-it.gl</a>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className={styles.Section}>
//         <div className={styles.ToggleButton} onClick={() => toggleSection(2)}>
//           {expanded[2] ? '-' : '+'} Opret lovligt CPR- eller CVR-nummer
//         </div>
//         <div
//           className={`${styles.SectionContent} ${expanded[2] ? styles.Expanded : ''}`}
//         >
//           Med denne <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">blanket</a> kan du oplyse os om virksomheder, der skal oprettes i AX Prisme enten som debitorer eller som kreditorer og derfor ha’ et lovligt CPR- eller CVR-nummer. Du kan også bruge den til at oplyse os om rettelser af samme.
//         </div>
//       </div>

//       {/* Section 4 */}
//       <div className={styles.Section}>
//         <div className={styles.ToggleButton} onClick={() => toggleSection(3)}>
//           {expanded[3] ? '-' : '+'} Systemadministratoradgang til AX-Prisme
//         </div>
//         <div
//           className={`${styles.SectionContent} ${expanded[3] ? styles.Expanded : ''}`}
//         >
//           Får du behov for at tilgå AX Prisme med systemadministrator-rettigheder, kan du udfylde denne <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">blanket</a> og anmode om begrundet tidsbegrænset adgang.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Axprisme;


import React, { useState } from 'react';
import styles from './Axprisme.module.scss';

const Axprisme = () => {
  // States for each expandable section
  const [expanded, setExpanded] = useState([false, false, false, false]);

  // Toggle the section expansion
  const toggleSection = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className={styles.AxprismeContainer}>
      <h2>Vi sidder klar til at hjælpe</h2>
      <h3 className={styles.AxprismeHeader}>AX-Prisme Support</h3>
      <p className={styles.AxprismeText}>
        For at vi kan hjælpe bedst muligt, hurtigst muligt, er det vigtigt,
        <p>vi modtager alle de oplysninger, vi har brug for første gang.</p>
        Derfor benytter vi os af online blanketter, som du finder herunder.
      </p>

      {[
        {
          title: 'Support',
          content: (
            <>
              Når I har brug for hjælp og ønsker at oprette en ny supportsag, skriv til denne mail:{' '}
              <a href="mailto:support@inussuk-it.gl">support@inussuk-it.gl</a>
            </>
          ),
        },
        {
          title: 'Medarbejderoprettelse i AX-Prisme',
          content: (
            <>
              Brug denne{' '}
              <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">
                blanket
              </a>
              , når I har en medarbejder, som skal oprettes i AX prisme. Eller hvis I ønsker ændringer
              til brugerens rettigheder og placeringer. Samt ved nedlæggelse af en bruger.
              <br />
              <br />
              <strong>Bemærk</strong>
              <br />
              Blanketten er endnu i test i de fleste regnskaber. Avannaata Kommunia og Qeqertalik
              benytter den.
              <br />
              Hvis I ønsker at benytte den nye blanket til brugeroprettelse, send en mail til{' '}
              <a href="mailto:support@inussuk-it.gl">support@inussuk-it.gl</a>
            </>
          ),
        },
        {
          title: 'Opret lovligt CPR- eller CVR-nummer',
          content: (
            <>
              Med denne{' '}
              <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">
                blanket
              </a>{' '}
              kan du oplyse os om virksomheder, der skal oprettes i AX Prisme enten som debitorer eller
              som kreditorer og derfor ha’ et lovligt CPR- eller CVR-nummer. Du kan også bruge den til
              at oplyse os om rettelser af samme.
            </>
          ),
        },
        {
          title: 'Systemadministratoradgang til AX-Prisme',
          content: (
            <>
              Får du behov for at tilgå AX Prisme med systemadministrator-rettigheder, kan du udfylde
              denne{' '}
              <a href="URL_TO_BLANKET" target="_blank" rel="noopener noreferrer">
                blanket
              </a>{' '}
              og anmode om begrundet tidsbegrænset adgang.
            </>
          ),
        },
      ].map((section, index) => (
        <div className={styles.Section} key={index}>
          <div className={styles.ToggleButton} onClick={() => toggleSection(index)}>
            {expanded[index] ? '-' : '+'} {section.title}
          </div>
          <div
            className={`${styles.SectionContent} ${
              expanded[index] ? styles.Expanded : ''
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Axprisme;
