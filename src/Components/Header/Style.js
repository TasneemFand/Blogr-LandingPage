import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    RightButtons: {
        display: 'flex', alignItems: 'center',
        [theme.breakpoints.down('sm')]: { display: 'none' },
        // [theme.breakpoints.only('md')]: { display: 'flex' },
    },
    buttonMenu: {
        backgroundColor: 'unset', fontSize: '16px',
        '&:hover': { backgroundColor: 'unset' },
        textTransform: 'unset', fontWeight: 400,
        color: '#FFD3CF',
        [theme.breakpoints.down('sm')]: { display: 'none' },

    },

    buttonMenuNav: {
        backgroundColor: 'unset', fontSize: '16px',
        '&:hover': { backgroundColor: 'unset' },
        textTransform: 'unset', fontWeight: 400,
        color: '#38383A',
    },

    Button: {
        height: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',

    },
    Login: {
        color: '#FFD3CF', textTransform: 'unset', fontSize: '16px',

        '&:hover': { backgroundColor: 'unset' }, fontWeight: 400,

    },


    Sign: {
        color: 'hsl(356, 100%, 66%)', textTransform: 'unset', fontSize: '16px',
        marginLeft: '15px',
        '&:hover': { backgroundColor: 'hsl(355, 100%, 74%)', color: '#FFFEFA' },
        borderRadius: '30px', padding: '5px 18px',
        backgroundColor: '#FFFEFA',

    },



    Toolbar: {
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
    },
    AppBar: {
        background: 'unset', padding: '40px 90px', color: '#FFFEFA', boxShadow: 'none',
        [theme.breakpoints.down('sm')]: { padding: '25px 20px' },
        // [theme.breakpoints.only('md')]: { padding: '25px 70px' },


    }
}));
