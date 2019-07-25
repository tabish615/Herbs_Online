import React, { Component } from 'react';
import { oilItems } from './items';
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


class AllOils extends Component {
    constructor() {
        super();
        this.state = {
            rows : oilItems,
        }
    }
    detail(data) {
        var name = data.Roman_Name.toLowerCase().replace(/\s/g, "_")
        this.props.history.push(`/oils/product/${name}`, {oilData : data})
    }

    onSearchHandler = (e) => {
        this.setState({ rows: oilItems.filter(str => str.Roman_Name.toLowerCase().includes(e.target.value.toLowerCase()))})
      }

    render() {
        return (
            <Grid container style={{ padding: "0", margin: "0", display: "flex", justifyContent: "space-around", marginTop : "10%", minHeight : "77vh"  }}>
                <Table style={{backgroundColor : "white", position : "absolute", zIndex : "1"}}>
                    <TableHead>
                        <TableRow>
                    <div className="search" style={{position : "relative", width : "17%", float : "right",  borderRadius : "5px", border : "2px solid #287A24" , marginRight : "2%", marginTop : "4%",marginBottom : "2%", paddingLeft : "2%"}}>
                        <div style={{
                            height: '100%',
                            position: 'absolute',
                            pointerEvents: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color : "#287A24"
                        }}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            style={{color : "#287A24", paddingLeft : "15%", fontSize : "15px"}}
                            onChange={(e) => this.onSearchHandler(e)}
                        />
                    </div></TableRow></TableHead>
                </Table>
                {this.state.rows.map((data, index) => {
                    return <ItemGrid key={index}>
                        <Card className='card'>
                            <CardActionArea onClick={() => this.detail(data)}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    style={{ objectFit: "cover" }}
                                    height="250"
                                    image={data.Image}
                                    title={data.Roman_Name}
                                />
                                <CardContent>
                                    <Typography gutterBottom component='h2' variant="h4" style={{ wordBreak: "break-word" }}>
                                        {data.Roman_Name}
                                    </Typography>
                                
                                    <Typography gutterBottom component='h3' variant="h5">
                                        Rs. {data.Price}
                                    </Typography>
                                    <Typography gutterBottom component='h3' variant="h5">
                                        MOQ. in ml {data.MOQ}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ justifyContent: "center" }}>
                                <Button variant="contained" size="small" color="primary" style={{ backgroundColor: "green", fontSize : "15px" }} onClick={() => this.detail(data)}>
                                    Choose Options
                                </Button>
                            </CardActions>
                        </Card>
                    </ItemGrid>
                })
                }
            </Grid>
        );
    }
}

function ItemGrid({ ...props }) {
    const { classes, children, ...rest } = props;
    return (
        <Grid item {...rest} style={{ padding: "10px 15px 10px 5px",  marginLeft : "1%", marginRight : "1%", marginTop : "7%" }} className="grid">
            {children}
        </Grid>
    );
}


export default AllOils;