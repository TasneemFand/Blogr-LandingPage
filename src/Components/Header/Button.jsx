import React, { useEffect } from 'react';
import { Button, Menu } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './Style';
import StyledMenu from './StyledMenu';

const BUtton = ({ id, name, classname, MenuItem }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // const [closed, setClosed] = React.useState(false);
    // const [clicked, setClicked] = React.useState(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // setClicked(true);
        // setClosed(false);
    };


    const classes = useStyles();

    // useEffect(() => {
    //     if (closed) {
    //         setClicked(false);
    //     }
    // }, [closed]);


    return (
        <div>
            <Button
                id={id}
                aria-controls={name}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={
                    open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                }
                className={classname}
            >
                {name}
            </Button>
            <StyledMenu
                id={name}
                MenuListProps={{
                    'aria-labelledby': id
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                names={MenuItem}
                click={handleClose}

            />
        </div>


    );
}

export default BUtton;
