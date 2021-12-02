import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        padding: '40px', display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: { 
        padding: '40px 12px',
    },    
    },



    BaseTitle: {
        fontSize: '25px', fontWeight: '600', color: '#1F3D55',
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: { fontSize: '20px' },



    },
    p: {
        fontSize: '16px', color: 'hsl(207, 13%, 34%)',
        lineHeight: '1.7', letterSpacing: '1.2px',
        [theme.breakpoints.down('sm')]: { fontSize: '14px' },


    },

    divInside: {
        margin: '7rem 7rem',
        width: '700px',
        [theme.breakpoints.down('sm')]: { 
            margin: '3rem 1rem',
            textAlign: 'center',
            width: 'unset'
        },
    },

    image: {
        width: "150%", display: "flex", justifyContent: "center",
        [theme.breakpoints.down('sm')]: { width: "100%" },


    },




    divImage: {
        position: 'relative',
        left: '-50%',
        [theme.breakpoints.down('sm')]: {
            left: 'unset'
        },

    },




}));
