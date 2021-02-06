import React from 'react';

// Style
import "./style.css";

const Footer = () => {
 return (
  <div>
     <div className="py-2 text-center footer-style">
      © Alvin Kariuki &nbsp; { new Date().getFullYear() }
     </div>
  </div>
 )
}

export default Footer;