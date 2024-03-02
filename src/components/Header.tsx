import React from 'react';
import styles from './Header.module.css'; // make sure this path is correct for your CSS module

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
      textAlign: 'left',
      fontSize: '2rem',
      display: 'flex', 
      alignItems: 'center' 
    }}>
      <img src="/logo.png" alt="Logo" className={styles.logo} /> {/* Updated path and className */}
      Venture
    </header>
  );
};

export default Header;
