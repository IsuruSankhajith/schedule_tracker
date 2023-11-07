import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Your Company</p>
    </footer>
  );
}

export default Footer;
