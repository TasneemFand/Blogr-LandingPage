import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './Style';
import image from '../../Assets/images/illustration-editor-desktop.svg';
import image2 from '../../Assets/images/illustration-editor-mobile.svg';
import { useMediaQuery } from '@material-ui/core';

const Future = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    let img = null;
    {
        isMobile ? img = image2 : img = image;
    }



    return (
        <section className={classes.container}>
            <Typography variant='h5' className={classes.Basetitle}>
                Designed for the future
            </Typography>
            <Grid container direction={isMobile ?
                "column-reverse" : "row"} columnspacing={{ xs: 1, sm: 2, md: 3 }}
                className={classes.grid}>
                <Grid item xs={12} md={7} style={{ width: '100%', height: '100%', padding: '20px' }}>
                    <div>
                        <div className={classes.divInside}>
                            <Typography variant="h6" className={classes.title}>Introducing an extensible editor</Typography>
                            <Typography className={classes.p}>
                                Blogr features an exceedingly intuitive interface which lets you focus
                                <br /> on one thing: creating content. The editor supports management of
                                <br /> multiple blogs and allows easy manipulation of embeds such as images,
                                <br /> videos, and Markdown. Extensibility with plugins and themes provide
                                <br /> easy ways to add functionality or change the looks of a blog.
                            </Typography>

                        </div>
                        <div className={classes.divInside}>
                            <Typography variant="h6" className={classes.title}>Robust content management</Typography>
                            <Typography className={classes.p}>
                                Flexible content management enables users to easily move through
                                <br /> posts. increase the usibility of your blog by adding customized
                                <br /> categories, sections, format, or flow. with this functionality, you're in
                                <br /> full control.

                            </Typography>

                        </div>

                    </div>

                </Grid>
                <Grid item xs={12} md={5} style={{ width: '100%', height: '100%', }}>
                    <div className={classes.divImage}>
                        <div className={classes.image}>
                            <img src={img} alt="" className={classes.image} />
                        </div>
                    </div>
                </Grid>
            </Grid >
        </section >
    );
}

export default Future;
