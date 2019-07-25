import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class Honey extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div style={{ position: "absolute", top: "15%", display: "flex", width: "100%", marginTop: "5%" }}>
                <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", paddingLeft: "5%" }}>
                    <img src={this.props.location.state && this.props.location.state.honeyData.Image} style={{ height: "50vh", width: "40vw" }} />
                </div>

                <div style={{ textAlign: "center", width: "50%", paddingRight: "10%", paddingLeft: "10%" }}>
                    <Typography variant="h3" component="h2" gutterBottom align="left">
                        {this.props.location.state && this.props.location.state.honeyData.Roman_Name}
                    </Typography><br />
                    <Typography variant="h4" component="h2" gutterBottom align="left" >
                        Rs. {this.props.location.state && this.props.location.state.honeyData.Price * this.state.quantity}
                    </Typography><br /><br />
                    <Typography variant="h4" component="h2" gutterBottom align="left" >
                        Form:
                    </Typography>
                    <Button variant="outlined" size="medium" style={{ textTransform: "capitalize", float: "left", fontSize: "15px" }}>Whole</Button><br /><br /><br /><br />
                    <Typography variant="h4" component="h2" gutterBottom align="left" >
                        Honey Pack Size:
                    </Typography>
                    <Button variant="outlined" size="medium" style={{ textTransform: "lowercase", float: "left", fontSize: "15px" }}>
                        {this.props.location.state && this.props.location.state.honeyData.MOQ * this.state.quantity} gm
                    </Button><br /><br /><br /><br />
                    <FormControl required style={{ minWidth: 120, float: "left" }}>
                        <InputLabel style={{ fontSize: "15px", marginTop: "-4px" }} >Quantity</InputLabel>
                        <Select
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'quantity',
                                id: 'quantity-simple',
                            }}
                            style={{ fontSize: "15px" }}
                        >
                            <MenuItem style={{ fontSize: "15px" }} value={1}>1</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={2}>2</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={3}>3</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={4}>4</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={5}>5</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={6}>6</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={7}>7</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={8}>8</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={9}>9</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={10}>10</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={11}>11</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={12}>12</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={13}>13</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={14}>14</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={15}>15</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={16}>16</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={17}>17</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={18}>18</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={19}>19</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={20}>20</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={21}>21</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={22}>22</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={23}>23</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={24}>24</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={25}>25</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={26}>26</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={27}>27</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={28}>28</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={29}>29</MenuItem>
                            <MenuItem style={{ fontSize: "15px" }} value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        )
    }
}
export default Honey;