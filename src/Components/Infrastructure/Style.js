import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        borderBottomLeftRadius: '10rem',
        borderTopRightRadius: '10rem',
        background: 'linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
        height: '55vh',

        [theme.breakpoints.down('sm')]: {
        borderBottomLeftRadius: '7rem',
        borderTopRightRadius: '7rem',
        height: '100%',
     },

    },

    grid: {

        [theme.breakpoints.down('sm')]: {

            //position: 'relative',
            //bottom: '12rem'
        },
    },


    Basetitle: {
        fontSize: '35px', letterSpacing: '3px', color: '#FFFEFA',
        fontWeight: '600', textAlign: 'left',
        [theme.breakpoints.down('sm')]: { fontSize: '25px', textAlign: 'center' },

        // [theme.breakpoints.down('sm')]: { fontSize: '30px' },
        // [theme.breakpoints.only('md')]: {
        //     fontSize: '40px',
        //     marginTop: '90px',
        // },

    },

    p: {
        fontSize: '16px', color: '#DBDDE9', lineHeight: '1.7',
        letterSpacing: '1.2px',

        marginTop: '20px',
        [theme.breakpoints.down('sm')]: { fontSize: '14px' },

        // [theme.breakpoints.down('sm')]: { fontSize: '30px' },
        // [theme.breakpoints.only('md')]: {
        //     fontSize: '40px',
        //     marginTop: '90px',
        // },
    },

    divImage: {
        position: 'relative',
        top: '-5rem',
        left: '10rem',
        [theme.breakpoints.down('sm')]: {
            left: 'unset',
            top: '-10rem'
        },


    },

    gridImage: {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '260px'
        },


    },


    divInside: {

        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: '20%'
        },
    },


}));
