import React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import {MenuItem } from '@material-ui/core';

const StyledMenu = styled((props) => (
  <Menu

    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    style={{ top: '6%', left: '5%' }}
    {...props}
  >
    {
      props.names.map((name) => (
        <MenuItem key={name} onClick={props.click}>{name}</MenuItem>
      ))
    }

  </Menu>
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '6px',
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '10px 4px',
    },
    '& .MuiMenuItem-root': {
      color: '#38383A',
      '&:hover': {
        color: '#161616', backgroundColor: 'unset',
        fontWeight: '700'
      },

      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export default StyledMenu;