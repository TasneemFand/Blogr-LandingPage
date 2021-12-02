import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, Button } from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/CloseRounded';
import React, { useState } from 'react';
import './SideNav.css';
import ListNav from './ListNav/ListNav.jsx';

const SideNav = ({ data }) => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [icon, setIcon] = useState(<ReorderIcon />);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const toggleDrawerStatus = () => {
        setIsDrawerOpened(true);
        setIcon(<CloseIcon />);
    }
    const closeDrawer = () => {
        setIsDrawerOpened(false);
        setIcon(<ReorderIcon />);
    }

    return (
        <div>
            <div>
                <IconButton onClick={toggleDrawerStatus}>
                    {icon}
                </IconButton>
            </div>
            <Divider />
            <Drawer

                variant="temporary"
                open={isDrawerOpened}
                onClose={closeDrawer}
                anchor="right"
            >

                {
                    data.map((button) => (
                        <ListNav key={button.id} id={button.id} name={button.name} names={button.MenuItem} />

                    ))
                }

                <Divider />

                <List>
                    <Button className='LoginNav'>Login</Button>

                    <Button className='SignNav'>Sign Up</Button>

                </List>

            </Drawer>
        </div>
    );
}

export default SideNav;