import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/images/logo.svg';

const Footer = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    return (
        <div className={classes.container} >
            <div className={classes.overlay} >
                <img className={classes.image} src={logo} alt="logo" />
                <Box className={classes.box} >
                    <div className={classes.div}   >
                        <Typography variant='h6' className={classes.title}>
                            Product
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                Overview
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Pricing
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                MarketPlace
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Features
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Integrations
                            </Typography>
                        </div>

                    </div>
                    <div className={classes.div} >
                        <Typography variant='h6' className={classes.title}>
                            Company
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                About
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Team
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Blog
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Careers
                            </Typography>
                        </div>


                    </div>
                    <div className={classes.div} >
                        <Typography variant='h6' className={classes.title}>
                            Connect
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                Contact
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Newsletter
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Linkedln
                            </Typography>
                        </div>
                    </div>
                </Box>
            </div>
            <div className={classes.attribution}>
                <span>Challenge by</span> <a className={classes.a} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
                <span>Coded by</span> <a className={classes.a} href="#">Tasnim Fandakli.</a>
            </div>

        </div>
    );
}

export default Footer;
