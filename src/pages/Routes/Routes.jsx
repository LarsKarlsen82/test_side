// Routes.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Home from '../Home/Home';
// import Support from '../Support/Support';
// import Axprisme from '../Support/Axprisme';
// import Mindkey from '../Support/Mindkey'; // Assuming you'll create this component later
// import GetOrganized from '../Support/GetOrganized'; // Assuming you'll create this component later
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
//                 <li><ScrollToTopLink to="/support/go">Get Organized</ScrollToTopLink></li>
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


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Axprisme from '../Support/Axprisme';
import Mindkey from '../Support/Mindkey';
import GetOrganized from '../Support/GetOrganized';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NoPage from '/src/pages/NoPage/NoPage';

import styles from './Routes.module.scss';

const ScrollToTopLink = ({ to, children, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    window.scrollTo(0, 0);
    if (onClick) onClick();
  };

  return (
    <Link to={to} onClick={handleClick} className={styles.NavLink}>
      {children}
    </Link>
  );
};

const AppRoutes = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <Router>
      <nav className={styles.NavBar}>
        <div className={styles.NavContainer}>
          {/* Logo */}
          <h2 className={styles.H2Right}>
            <span className={styles.Leo}>Inussuk</span>-IT
          </h2>

          {/* Hamburger Menu */}
          <div
            className={styles.Hamburger}
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${styles.NavList} ${
              menuActive ? styles.Active : ''
            }`}
          >
            <li><ScrollToTopLink to="/" onClick={closeMenu}>Hjem</ScrollToTopLink></li>
            <li className={styles.Dropdown}>
              <ScrollToTopLink to="/support" onClick={closeMenu}>Support</ScrollToTopLink>
              <ul className={styles.DropdownMenu}>
                <li><ScrollToTopLink to="/support/axprisme" onClick={closeMenu}>AX-Prisme</ScrollToTopLink></li>
                <li><ScrollToTopLink to="/support/mindkey" onClick={closeMenu}>Mindkey</ScrollToTopLink></li>
                <li><ScrollToTopLink to="/support/go" onClick={closeMenu}>Get Organized</ScrollToTopLink></li>
              </ul>
            </li>
            <li><ScrollToTopLink to="/om" onClick={closeMenu}>Om Inussuk-IT</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/kontakt" onClick={closeMenu}>Kontakt</ScrollToTopLink></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/axprisme" element={<Axprisme />} />
        <Route path="/support/mindkey" element={<Mindkey />} />
        <Route path="/support/go" element={<GetOrganized />} />
        <Route path="/om" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
