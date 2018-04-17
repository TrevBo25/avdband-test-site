import React, {Component} from 'react';

import { Parallax } from 'react-scroll-parallax';

import logo from './assets/AVDHomeLogoBoom.png';
import group from './assets/avdalley.jpg';
import gif from './assets/avdgif.gif'

export default class Home extends Component {

  render(){
    return(
      <div style={styles.holder} >
        <div style={{"overflow":"hidden"}}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={120}
            offsetYMin={-120}
            slowerScrollRate
            tag="figure"
          >
            <img src={logo} alt='AVD Band logo' style={styles.logo}/>
          </Parallax>
        </div>
        <div style={{"height":"900px", "width":"100%", "backgroundColor": "#1a1a1a", "color": "white", "display":"flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"}} >
          <div style={{"height": "70%","width": "60%","display":"flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center", }}>
            <h1 style={{"fontSize": "80px", "textAlign": "center"}}>This is where some information could go</h1>
            <h3 style={{"fontSize": "40px", "textAlign": "center"}}>Right here I mean it</h3>
            <h3 style={{"fontSize": "40px", "textAlign": "center"}}>I'm not joking, here it can be here I promise</h3>
            <p style={{"fontSize": "20px", "textAlign": "center"}}>Imagine that this is some lyrics or some stuffs: <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div style={{"overflow":"hidden", }}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={120}
            offsetYMin={-120}
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
            <h1 style={{"fontSize": "80px", "textAlign": "center"}}>This is the footer</h1>
            <h3 style={{"fontSize": "40px", "textAlign": "center"}}>Here is where the contact information and such will go</h3>
            <h3 style={{"fontSize": "40px", "textAlign": "center"}}>Twitter, YoutTube, Facebook, Spotify, All the good stuff</h3>
            <h3 style={{"fontSize": "40px", "textAlign": "center"}}>Also we can put a email news letter sign up input here if you so choose</h3>
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
    "overflow": "hidden"
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