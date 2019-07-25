import React, { Component } from 'react';


class About extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div style={{minHeight : "93vh"}}>
                <div style={{minHeight :"15vh"}}></div>
                <div style={{ marginLeft: "auto", marginRight: "auto", width: "50%", lineHeight : "2" }}>
                    <h3 style={{ textAlign: "center" }}>About US</h3>
                    <ul>
                        <li>We are newly starting our online business for providing herbs on yours doors step.</li>
                        <li>This website containing Herbs and Honeys yet.</li>
                        <li>Further we are still working on the other sections e.g Oils (Madni), Remedies, Arqiyaat (Tayyebi), Sharbat (Hamdard) and much more, which will be demanded by uesrs.</li>
                        <li>Premier Quality of items will be guaranteed.</li>
                        <li>All items are neat and clean packed.</li>
                    </ul>
                </div> <br /><br />
                <div style={{ marginLeft: "auto", marginRight: "auto", width: "50%", lineHeight : "2" }}>
                    <h3 style={{ textAlign: "center" }}>Terms And Conditions</h3>
                    <ul>
                        <li>For now, you are requested to place your orders by SMS or whatsapp with exact quantity and name. We will call you for your order confirmation.</li>
                        <li>When you ordering write your name, address (with near famous point), contact number, and your desired items with correct quantity.</li>
                        <li>You can place minimum of Rs. 500 order. (Rs. 200 delivery charges).</li>
                        <li>Home delivery will be free above Rs. 2500 orders.</li>
                        <li>Cash on delivery (give money to Rider).</li>
                        <li>Orders will be in your hands after 3 - 4 working days.</li>
                        <li>No return & exchange in case of your mistake.</li>
                        <li>We will replace your order if we did a mistake in any item.</li>
                        <li>Take your order on safe place, check bill & your items properly.</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default About;