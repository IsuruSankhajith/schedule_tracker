import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ff0000, #0000ff)',
    color: 'white',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const h1Style = {
    fontSize: '2rem',
  };

  // Define a function to be called when the button is clicked
  const handleButtonClick = () => {
    alert('Button clicked!'); // You can replace this with your own logic
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Task Tracker</h1>
      <button className="btn" onClick={handleButtonClick}>Click Me</button>
    </header>
  );
}

export default Header;
