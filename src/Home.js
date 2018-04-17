import React, {Component} from 'react';

import { Parallax } from 'react-scroll-parallax';

import logo from './assets/AVDHomeLogoBoom.png';
import group from './assets/avdalley.jpg';
import gif from './assets/avdgif.gif'

export default class Home extends Component {

  render(){
    return(
      <div style={styles.holder} >
        <div style={{"position": "absolute", "top":"0", "right": "21", "zIndex": "1", "height":"40px", "width":"60%", "margin": "15px", "fontSize": "25px", "display": "flex", "justifyContent": "space-around", "alignItems": "center", "borderTop": " 3px black solid", "borderBottom": " 3px black solid", "fontFamily": "Quattrocento"}}>
          <span>Home</span>
          <span>The Band</span>
          <span>Tour</span>
          <span>Media</span>
          <span>Store</span>
          <span>Contact</span>
        </div>
        <div style={{"overflow":"hidden"}}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={100}
            offsetYMin={-100}
            slowerScrollRate
            tag="figure"
          >
            <img src={logo} alt='AVD Band logo' style={styles.logo}/>
          </Parallax>
        </div>
        <div style={{"height":"900px", "width":"100%", "backgroundColor": "#1a1a1a", "color": "white", "display":"flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"}} >
          <div style={{"height": "70%","width": "60%","display":"flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center", }}>
            <h1 style={{"fontSize": "50px", "textAlign": "center"}}>This is where some information about the new album could go</h1>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Spotify song/album links</h3>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Album Art</h3>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Purchase now spot</h3>
            <p style={{"fontSize": "15px", "textAlign": "center"}}>Some of you favorite lyrics from a few songs could carousel here: <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div style={{"overflow":"hidden", }}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={200}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <img src={group} alt='AVD Band picture' style={styles.logo}/>
          </Parallax>
        </div>
        <div style={styles.gifholder}>
        </div>
        <div style={{"height":"450px", "width":"100%", "backgroundColor": "#1a1a1a", "display":"flex", "justifyContent": "center", "alignItems": "center"}} >
          <div style={{"height": "80%","width": "90%","display":"flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center", "color": "white"}}>
            <h1 style={{"fontSize": "60px", "textAlign": "center"}}>This is the footer</h1>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Here is where the contact information and such will go</h3>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Twitter, YoutTube, Facebook, Spotify, All the good stuff</h3>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Also we can put a email news letter sign up input here if you so choose</h3>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  holder:{
    "maxWidth": "100vw",
    "height": "100%",
    "backgroundColor": "#eab980",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden",
    "fontFamily": "Roboto Mono"
  },
  hero: {
    "width": "100%",
    "minHeight": "100vh",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  logo:{
    "width": "100%",
    "height": "auto",
    "objectFit": "cover",
    "margin": "0 auto"
  },
  gifholder:{
    "height": "700px",
    "width": "100%",
    "backgroundImage": `url(${gif})`,
    "backgroundSize": "cover",
  }
}