import React from 'react';
import '../styles.css'; // Import CSS file for styling

const NavBar = () => {
  return (
    <div>
    <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062014/logo_helloworld_centered_cmyk.jpg?itok=SPHjf6Zb" alt="logo" />
    
    <nav className="navbar">
      <ul className="nav-menu">
        <NavItem />
        
      </ul>
    </nav>
    </div>
  );
}

const NavItem = () => {
  return (
    <div>
       
            <li className="nav-item">
            <a href="#" className="nav-link">Hello</a>
            <a href="#" className="nav-link">Hello</a>
            <a href="#" className="nav-link">Hello</a>
            <a href="#" className="nav-link">Hello</a>

            </li>
    </div>
  );
}

export default NavBar;
