import React from 'react';
import { AppBar, Toolbar, Box, Button, MenuItem } from '@material-ui/core';
import useStyles from './Style';
import SideNav from './SideNav/SideNav';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/images/logo.svg';
import BUtton from './Button';


const Header = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let Drawer = null;

    const data = [
        {
            id: "demo-customized-button-product", name: "Product",
            MenuItem: ['Overview', 'Pricing', 'MarketPlace', 'Features', 'Integrations'],
        },

        {
            id: "demo-customized-button-Company", name: "Company",
            MenuItem: ['About', 'Team', 'Blog', 'Careers'],
        },

        {
            id: "demo-customized-button-Connect", name: "Connect",
            MenuItem: ['Contact', 'Newsletter', 'Linkedln',],

        }
    ];

    isMobile ? Drawer = (
        <SideNav data={data} />
    ) : Drawer = null;

    return (
        <AppBar position='static' className={classes.AppBar}>
            <Toolbar className={classes.Toolbar}>
                <img src={logo} alt="Logo" />
                <Box display='flex' alignItems='center' position="relative" right="15%">
                    {
                        data.map((button) => (
                            <BUtton
                                id={button.id} name={button.name} 
                                key={button.id}
                                classname={classes.buttonMenu}
                                MenuItem={button.MenuItem}
                            />
                        ))
                    }
                </Box>
                <Box display='flex' alignItems='center'>
                    <div className={classes.RightButtons}>
                        <div className={classes.Button} >
                            <Button className={classes.Login}>Login</Button>
                        </div>
                        <div className={classes.Button}>
                            <Button className={classes.Sign}>Sign Up</Button>
                        </div>
                    </div>
                    {Drawer}
                </Box>
            </Toolbar >
        </AppBar >
    );
}

export default Header;
