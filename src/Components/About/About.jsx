import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
// Images for Desktop
import image from '../../Assets/images/illustration-laptop-desktop.svg';
import image2 from '../../Assets/images/illustration-laptop-mobile.svg';

const About = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    let img = null;
    {
        isMobile ? img = image2 : img = image;
    }

    return (
        <section className={classes.container} >
            <Grid container columnspacing={{ xs: 1, sm: 2, md: 3 }} style={{ width: '100%', height: '100%', }} >
                <Grid item xs={12} md={5} style={{ width: '100%', height: '100%', }}>
                    <div className={classes.divImage}>
                        <div className={classes.image}>
                            <img src={img} alt="" className={classes.image} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} style={{ width: '100%', height: '100%', }} >
                    <div>
                        <div className={classes.divInside}>
                            <Typography variant="h6" className={classes.BaseTitle}>Free, open, simple</Typography>
                            <Typography className={classes.p}>
                                Blogr is a free and open source application backed by a large
                                <br /> community of helpful developers.It supports features such as code
                                <br /> syntax highlighting, RSS feeds, social media integration, third-party
                                <br /> commenting tools, and works seamlessly with Google Analytics.The
                                <br /> architecture is clean and is relatively easy to learn.
                            </Typography>
                        </div>
                        <div className={classes.divInside}>
                            <Typography variant="h6" className={classes.BaseTitle}>Powerful tooling</Typography>
                            <Typography className={classes.p}>
                                Batteries included.We built a simple and straightforward CLI tool that
                                <br /> makes customization and deployment a breeze, but capable of
                                <br /> producing even the most complicated sites.
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section >

    );
}

export default About;
