import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia, CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'


class Home extends Component {
    constructor() {
        super();
        this.state = {
        };
    }



    render() {
        return (
            <div>
                <Carousel style={{ width: "100%", alignItems: "center", display: "flex", marginTop: "8%" }}>
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/001.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item >
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/002.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/003.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/004.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/005.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img alt="900x500" src={require('../../assets/homeImages/006.jpg')} style={{ width: "100vw", height: "86vh" }} />
                    </Carousel.Item>
                </Carousel>
                <div className="secondLastDiv" style={{height : "25vh", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                    <div style={{textAlign:"center", borderWidth: "0px 1px", borderStyle : "dashed", borderColor: "green",padding: "0px 50px"}}>
                        <img style={{ width: "10vw", height: "10vh" }} src={require('../../assets/logo/car.png')} />
                        <p style={{fontSize : "18px"}}>Cash On Delivery</p>
                        <p style={{fontSize : "12px"}}>Payment for goods when <br/> they are delivered.</p>
                    </div>
                    <div style={{textAlign:"center", borderWidth: "0px 1px", borderStyle : "dashed", borderColor: "green",padding: "0px 50px"}}>
                        <img style={{ width: "10vw", height: "10vh" }} src={require('../../assets/logo/100.png')} />
                        <p style={{fontSize : "18px"}}>Premium Quality</p>
                        <p style={{fontSize : "12px"}}>Quality Is Our Business Plan</p><br/>
                    </div>
                    <div style={{textAlign:"center", borderWidth: "0px 1px", borderStyle : "dashed", borderColor: "green",padding: "0px 50px"}}>
                        <img style={{ width: "10vw", height: "10vh" }} src={require('../../assets/logo/center.png')} />
                        <p style={{ fontSize : "18px"}}>Help Center</p>
                        <p style={{ fontSize : "12px"}}>We’ll Get You Through It.</p><br/>
                    </div>
                </div>
                <div className="lastDiv" style={{ backgroundColor: "#546d5c", height: "25vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div><p style={{ color: "#ffffff", fontSize: "15px", fontWeight : "bold" }}>Location</p>
                        {/* <img style={{ width: "1.5vw", height: "3vh" }} src={require('../../assets/homeImages/pin.png')} /> */}
                        <a style={{ color: "rgb(208,204,204)"}} href="https://www.google.com/maps/place/MAKKI+UNANI+DAWAKHANA/@24.9142544,67.0253043,20z/data=!4m5!3m4!1s0x3eb33fbfb2d900cf:0x584a0c528050631d!8m2!3d24.914268!4d67.0255497" target="_blank">
                            Makki Unani Dawakhana, Gole Market, Nazimabad no.3, Karachi</a><br/>
                        {/* <img style={{ width: "1.5vw", height: "2vh" }} src={require('../../assets/logo/phone.png')} /> <span style={{color: "#ffffff"}}>+923-42-2680683</span> */}
                    </div>

                    <div><p style={{ color: "#ffffff", fontSize: "15px", fontWeight : "bold" }}>Call Us</p>
                        {/* <img style={{ width: "1.5vw", height: "2vh" }} src={require('../../assets/logo/phone.png')} />  */}
                        <span style={{color: "rgb(208,204,204)"}}>+923-42-2680683</span>
                    </div>

                    <div><p style={{ color: "#ffffff", fontSize: "15px", fontWeight : "bold" }}>Email Us</p>
                        {/* <img style={{ width: "1.5vw", height: "2vh" }} src={require('../../assets/logo/phone.png')} />  */}
                        <span><a style={{color: "rgb(208,204,204)"}} href="mailto:herbsonline786@gmail.com">herbsonline786@gmail.com</a></span>
                    </div>
                    
                    <div><p style={{ color: "#ffffff", fontSize: "15px", fontWeight : "bold" }}>Connect with us </p>
                        <a href="https://www.facebook.com/www.herbsonline.com.pk/" target="_blank">
                        <img style={{ width: "1.7vw", height: "3vh" }} src={require('../../assets/logo/fb_logo.png')} /></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;