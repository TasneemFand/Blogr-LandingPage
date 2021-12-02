import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    overlay: {
        height: '90vh',
    },

    container: {
        backgroundImage: 'linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
        height: '90vh',
        borderBottomLeftRadius: '10rem',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: '70vh',
            borderBottomLeftRadius: '7rem',
        },


    },

    Basetitle: {
        fontSize: '50px', letterSpacing: '5px', color: '#FFFEFA',
        fontWeight: '600', textAlign: 'center', marginTop: '7rem',

        [theme.breakpoints.down('sm')]: { fontSize: '30px', letterSpacing: '0px', 
        marginTop: '4rem',
     },
        // [theme.breakpoints.only('md')]: {
        //     fontSize: '40px',
        //     marginTop: '90px',
        // },
    },

    title: {
        fontSize: '16px', color: '#FFD3CF',
        textAlign: 'center', marginTop: '20px',
        [theme.breakpoints.down('sm')]: { padding: '0px 35px' },
        // [theme.breakpoints.only('md')]: {
        //     fontSize: '40px',
        //     marginTop: '90px',
        // },
    },

    Button: {
        textAlign: 'center', marginTop: '25px',

    },
    Start: {
        textTransform: 'unset', fontSize: '16px',
        color: 'hsl(356, 100%, 66%)',
        '&:hover': { backgroundColor: 'hsl(355, 100%, 74%)', color: '#FFFEFA' },
        backgroundColor: '#FFFEFA',
        borderRadius: '30px', padding: '5px 12px',
        fontWeight: 400,

    },
    learn: {
        textTransform: 'unset', fontSize: '16px',
        color: '#FFD3CF', marginLeft: '15px',
        fontWeight: 400,
        borderRadius: '30px', padding: '5px 12px',
        '&:hover': { backgroundColor: '#FFFEFA', color: 'hsl(356, 100%, 66%)' },
        border: '1px solid'

    },


}));
