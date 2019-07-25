import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/home';
import AllHerbs from './containers/Herbs/allHerbs';
import Herb from './containers/Herbs/herb';
import AllOils from './containers/Oils/allOils';
import Oil from './containers/Oils/oil';
import AllHoneys from './containers/Honeys/allHoneys';
import Honey from './containers/Honeys/honey';
import About from './containers/About_Us/about_us';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Logo from "./config/logo";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutPopup: false,
      logoutPopupOpen : false,
      anchorEl: null,
    };
  }

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      logoutPopup: !state.logoutPopup,
      logoutPopupOpen: this.state.logoutPopupOpen ? false : true,
      anchorEl : currentTarget,
    }));
  };

  popperClose() {
    this.setState({
      logoutPopup: false
    })
  }

  render() {
    const { anchorEl, logoutPopup } = this.state;
    return (
      <Router>
        <div className="App">
          <div style={{overflow : "auto"}}>
            <AppBar style={{position : "absolute"}}>
              <Toolbar style={{ justifyContent: "space-between", backgroundColor: "white" }}>
                <Link to="/"><Typography style={{ cursor: "pointer" }}>
                  <img src={Logo.webLogo} style={{ width: "30%" }} />
                </Typography></Link>
                <Link to="/herbs/all" style={{ textDecoration: "none" }}  className='nameButton'>
                  <Typography style={{ color : "#28680D",fontSize: "large", fontWeight: "bold" }}> Herbs </Typography>
                </Link>
                {/* <Link to="/oils/all" style={{ textDecoration: "none" }} className='nameButton'>
                  <Typography style={{ color : "#28680D",fontSize: "large", fontWeight: "bold" }}> Oils </Typography>
                </Link> */}
                <Link to="/honeys/all" style={{ textDecoration: "none" }} className='nameButton'>
                  <Typography style={{ color : "#28680D",fontSize: "large", fontWeight: "bold" }}> Honeys </Typography>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }} className='nameButton'>
                  <Typography style={{ color : "#28680D",fontSize: "large", fontWeight: "bold" }}> About Us</Typography>
                </Link>
                <IconButton className='menuButton' aria-label="Menu" onClick={this.handleClick} style={{color:"#287A24"}}>
                      <MenuIcon />
                </IconButton>
                <Popper open={logoutPopup} anchorEl={anchorEl} style={{ zIndex: 1101 }} transition placement={"bottom-end"}>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                      <MenuItem onClick={() => this.popperClose()}><Link to="/herbs/all" style={{ textDecoration: "none", color : "black" }}>Herbs</Link></MenuItem>
                      {/* <MenuItem onClick={() => this.popperClose()}><Link to="/oils/all" style={{ textDecoration: "none", color : "black" }}>Oils</Link></MenuItem> */}
                      <MenuItem onClick={() => this.popperClose()}><Link to="/honeys/all" style={{ textDecoration: "none", color : "black" }}>Honeys</Link></MenuItem>
                      <MenuItem onClick={() => this.popperClose()}><Link to="/about" style={{ textDecoration: "none", color : "black" }}>About Us</Link></MenuItem>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Toolbar>
            </AppBar>
            
            <Route exact path="/" component={Home} />
            <Route path="/herbs/all" component={AllHerbs} />
            <Route path="/herbs/product/:name" component={Herb} />
            <Route path="/oils/all" component={AllOils} />
            <Route path="/oils/product/:name" component={Oil} />
            <Route path="/honeys/all" component={AllHoneys} />
            <Route path="/honeys/product/:name" component={Honey} />
            <Route path="/about" component={About} />
            
            <div style={{width : "100%", backgroundColor : "#35563c", color: "white",  height : "50px", display : "flex", justifyContent : "center", alignItems : "center"}}>
              <p style={{fontSize : "14px", fontWeight : "600", fontStretch : "normal", fontStyle : "normal"}}>© 2019 HerbsOnline, All rights reserved.</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
