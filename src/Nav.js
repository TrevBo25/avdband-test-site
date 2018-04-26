import React, {Component} from 'react';

const Nav = () => {
  return (
    <div style={{"position": "absolute", "top":"0", "right": "21", "zIndex": "1", "height":"40px", "width":"60%", "margin": "15px", "fontSize": "25px", "display": "flex", "justifyContent": "space-around", "alignItems": "center", "borderTop": " 3px black solid", "borderBottom": " 3px black solid", "fontFamily": "Quattrocento"}}>
      <span>Home</span>
      <a href="/band"><span style={{"textDecoration": "none", "color": "black"}}>The Band</span></a>
      <span>Tour</span>
      <span>Media</span>
      <span>Store</span>
      <span>Contact</span>
    </div>
  )
}

export default Nav;