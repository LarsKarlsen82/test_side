import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Adresse</h3>
        <p>Find os her:</p>
        <br/>
        <p>Aqqusinersuaq 4, 2. sal</p>
        <p>3900 Nuuk</p>
        <p>Grønland</p>
      </div>

      <div>
        <h3>Kontakt</h3>
        <p><b>Inussuk-IT</b> - Grønlands Fællesoffentlige IT</p>
        <br />
        <p>CVR: 42086231
        GLN: 5790001954246</p>
        <br />
        <p>support@inussuk-it.gl</p>
        <p>Tlf: +299 34 52 30</p>
      </div>

      <div>
        <h3>Politik</h3>
        <p>Vores politikker:</p>
        <br />
        <p>
        <a href="https://your-politik-link.com" target="_blank" rel="noopener noreferrer">
          Privatlivspolitik
          </a>
        </p>
        <p>
        <a href="https://your-cookie-link.com" target="_blank" rel="noopener noreferrer">
        Cookiepolitik
          </a>
        </p>
        <p>
        <a href="https://your-generelle-link.com" target="_blank" rel="noopener noreferrer">
        Generelle betingelser
          </a>
        </p>
      </div>

      <div className="social-media">
        <h3>Sociale medier</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ color: 'white', height: '30px', width: '30px', padding: '0px 20px 0 0' }} />


          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: 'white', height: '30px', width: '30px', padding: '10px 20px 0 0'  }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
