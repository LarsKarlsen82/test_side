// //Routes.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import Home from '../Home/Home';
// import Support from '../Support/Support';
// import Axprisme from '../Support/Axprisme';
// import Mindkey from '../Support/Mindkey'; // Assuming you will create this component later
// import GetOrganized from '../Support/GetOrganized'; // Assuming you will create this component later
// import About from '../About/About';
// import Contact from '../Contact/Contact';
// import NoPage from '/src/pages/NoPage/NoPage';

// import styles from './Routes.module.scss';

// // Component to handle scrolling to top
// const ScrollToTopLink = ({ to, children }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(to);
//     window.scrollTo(0, 0); // Scroll to the top of the page
//   };

//   return (
//     <Link to={to} onClick={handleClick} className={styles.NavLink}>
//       {children}
//     </Link>
//   );
// };

// const AppRoutes = () => {
//   return (
//     <Router>
//       <nav className={styles.NavBar}>
//         <div className={styles.NavContainer}>
//           <ul className={styles.NavList}>
//             <li><ScrollToTopLink to="/">Hjem</ScrollToTopLink></li>

//             {/* Dropdown menu for Support */}
//             <li className={`${styles.NavItem} ${styles.Dropdown}`}>
//               <ScrollToTopLink to="/support">Support</ScrollToTopLink>
//               <ul className={styles.DropdownMenu}>
//                 <li><ScrollToTopLink to="/support/axprisme">AX-Prisme</ScrollToTopLink></li>
//                 <li><ScrollToTopLink to="/support/mindkey">Mindkey</ScrollToTopLink></li>
//                 <li><ScrollToTopLink to="/support/go">GetOrganized</ScrollToTopLink></li>
//               </ul>
//             </li>

//             <li><ScrollToTopLink to="/om">Om Inussuk-IT</ScrollToTopLink></li>
//             <li><ScrollToTopLink to="/kontakt">Kontakt</ScrollToTopLink></li>
//           </ul>
//           <h2 className={styles.H2Right}>
//             <span className={styles.Leo}>Inussuk</span>-IT
//           </h2>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/support" element={<Support />} />
//         {/* Individual routes for subpages */}
//         <Route path="/support/axprisme" element={<Axprisme />} />
//         <Route path="/support/mindkey" element={<Mindkey />} /> {/* Add Mindkey component */}
//         <Route path="/support/go" element={<GetOrganized />} /> {/* Add GetOrganized component */}
//         <Route path="/om" element={<About />} />
//         <Route path="/kontakt" element={<Contact />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Axprisme from '../Support/Axprisme';
import Mindkey from '../Support/Mindkey'; // Assuming you'll create this component later
import GetOrganized from '../Support/GetOrganized'; // Assuming you'll create this component later
import About from '../About/About';
import Contact from '../Contact/Contact';
import NoPage from '/src/pages/NoPage/NoPage';

import styles from './Routes.module.scss';

// Component to handle scrolling to top
const ScrollToTopLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <Link to={to} onClick={handleClick} className={styles.NavLink}>
      {children}
    </Link>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <nav className={styles.NavBar}>
        <div className={styles.NavContainer}>
          <ul className={styles.NavList}>
            <li><ScrollToTopLink to="/">Hjem</ScrollToTopLink></li>

            {/* Dropdown menu for Support */}
            <li className={`${styles.NavItem} ${styles.Dropdown}`}>
              <ScrollToTopLink to="/support">Support</ScrollToTopLink>
              <ul className={styles.DropdownMenu}>
                <li><ScrollToTopLink to="/support/axprisme">AX-Prisme</ScrollToTopLink></li>
                <li><ScrollToTopLink to="/support/mindkey">Mindkey</ScrollToTopLink></li>
                <li><ScrollToTopLink to="/support/go">Get Organized</ScrollToTopLink></li>
              </ul>
            </li>

            <li><ScrollToTopLink to="/om">Om Inussuk-IT</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/kontakt">Kontakt</ScrollToTopLink></li>
          </ul>
          <h2 className={styles.H2Right}>
            <span className={styles.Leo}>Inussuk</span>-IT
          </h2>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        {/* Individual routes for subpages */}
        <Route path="/support/axprisme" element={<Axprisme />} />
        <Route path="/support/mindkey" element={<Mindkey />} /> {/* Add Mindkey component */}
        <Route path="/support/go" element={<GetOrganized />} /> {/* Add GetOrganized component */}
        <Route path="/om" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
