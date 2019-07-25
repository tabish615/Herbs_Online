import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class Oil extends Component {
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
                    <img src={this.props.location.state && this.props.location.state.oilData.Image} style={{ height: "50vh", width: "40vw" }} />
                </div>

                <div style={{ textAlign: "center", width: "50%", paddingRight: "10%", paddingLeft: "10%" }}>
                    <Typography variant="h4" component="h2" gutterBottom align="left">
                        {this.props.location.state && this.props.location.state.oilData.Roman_Name}
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom align="left" >
                        Rs. {this.props.location.state && this.props.location.state.oilData.Price * this.state.quantity}
                    </Typography><br /><br />
                    <Typography variant="h6" component="h2" gutterBottom align="left" >
                        Form:
                    </Typography>
                    <Button variant="outlined" size="medium" style={{ textTransform: "capitalize", float: "left" }}>Whole</Button><br /><br /><br /><br />
                    <Typography variant="h6" component="h2" gutterBottom align="left" >
                        Oil Pack Size:
                    </Typography>
                    <Button variant="outlined" size="small" style={{ textTransform: "lowercase", float: "left" }}>
                        {this.props.location.state && this.props.location.state.oilData.MOQ} ml
                    </Button><br /><br /><br /><br />
                    <FormControl required style={{minWidth : 120, float:"left"}}>
                        <InputLabel>Quantity</InputLabel>
                        <Select
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'quantity',
                                id: 'quantity-simple',
                            }}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={21}>21</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={23}>23</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={26}>26</MenuItem>
                            <MenuItem value={27}>27</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={29}>29</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        )
    }
}
export default Oil;