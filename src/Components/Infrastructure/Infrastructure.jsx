import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './Style';
import phones from '../../Assets/images/illustration-phones.svg';
import './inf.css';
import { useMediaQuery } from '@material-ui/core';


const Infrastructure = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');


    return (
        <section className={classes.container} >
            <div className="overlay">
                <Grid container style={{ width: '100%', height: '100%', }} >
                    <Grid item className={classes.gridImage} xs={12} md={5} >
                        <div className={classes.divImage}>
                            <div>
                                <img src={phones} alt="" />

                            </div>
                        </div>
                    </Grid>
                    <Grid  item xs={12} md={7} className={classes.grid}  style={{ height: "100%", alignItems: "center", justifyContent: "center", display: "flex" }} >
                        <div className={classes.divInside}>
                            <Typography variant='h5' className={classes.Basetitle}>
                                State of the Art Infrastructure
                            </Typography>

                            <Typography className={classes.p}>
                                With reliability and speed in mind, worldwide data centers provide the
                                <br /> backbone for ultra-fast connectivity. This ensures your site  will load
                                <br /> instantly, no matter where your readers are, keeping your site
                                <br /> competitive.
                            </Typography>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </section >
    );
}

export default Infrastructure;
