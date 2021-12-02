import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        // padding: '5% 0', //overflow: 'hidden', 
        padding: '40px', display: 'grid',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: { display: 'block', 
        padding: '40px 12px',
        marginBottom: '10rem'
    },

    },

    Basetitle: {
        fontSize: '35px',
        // [theme.breakpoints.down('sm')]: { fontSize: '30px' },
        textAlign: 'center', marginTop: '3rem',
        fontWeight: '600', color: '#1F3D55',
        [theme.breakpoints.down('sm')]: { fontSize: '25px' },
    },

    title: {
        fontSize: '25px', fontWeight: '600', color: '#1F3D55',
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: { fontSize: '20px' },


    },
    p: {
        fontSize: '16px', color: 'hsl(207, 13%, 34%)',
        lineHeight: '1.7', letterSpacing: '1.2px',
        [theme.breakpoints.down('sm')]: { fontSize: '14px' },

    },

    grid: {

        width: '100%', height: '100%', justifyContent: "center" , alignItems: "center",
        [theme.breakpoints.down('sm')]: { marginTop: '40px' },



    },

    image: {
        width: "150%" , display: "flex" , justifyContent: "center" ,
        [theme.breakpoints.down('sm')]: { width: "100%" },


    },


    divImage: {
        position: 'relative',
        top: '-3rem',
        right: '-3%',
        [theme.breakpoints.down('sm')]: { position: 'relative',
        top: 'unset',
        right: 'unset',
 },

    },

    divInside: {
        margin: '7rem 7rem',
        width: '700px',
        // marginBottom: '7rem',
        // marginLeft: '10rem' 

        [theme.breakpoints.down('sm')]: { 
            margin: '3rem 0rem',
            textAlign: 'center',
            width: 'unset'

 },

    },



}));
