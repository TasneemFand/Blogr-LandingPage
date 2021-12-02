import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Header from '../Header/Header';
import useStyles from './Style';
// import cover from '../../Assets/images/bg-pattern-intro.svg';
import './intro.css';

const Intro = () => {

    const classes = useStyles();

    return (
        <section className={classes.container}>
            <div className="bg_svg">
                <Header />
                <Typography variant='h5' className={classes.Basetitle}>
                    A modern publishing platform
                </Typography>

                <Typography variant='h6' className={classes.title}>
                    Grow your audience and build your online brand
                </Typography>
                <div className={classes.Button} >
                    <Button className={classes.Start}>Start for Free</Button>
                    <Button className={classes.learn}>Learn More</Button>
                </div>
            </div>
        </section>
    );
}

export default Intro;
