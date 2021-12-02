import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        backgroundColor: 'hsl(240, 10%, 16%)', borderTopRightRadius: '10rem',
        [theme.breakpoints.down('sm')]: { borderTopRightRadius: '7rem', textAlign: 'center' },


    },
    box: {
        display: 'flex', padding: '20px', width: '100%',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: { display: 'block', },
        marginRight: '10%'

    },

    div: {

        [theme.breakpoints.down('sm')]: { marginBottom: '35%' },
        marginLeft: '20%', //marginTop: '30px', 
        [theme.breakpoints.down('sm')]: { marginLeft: '0px' },



    },

    image: {

        [theme.breakpoints.down('sm')]: { marginTop: '20%', marginBottom: '30%' }

    },


    overlay: {

        padding: '40px', display: 'flex', alignItems: 'baseline',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            padding: '40px 12px',
            justifyContent: 'center', justifyItems: 'center',
        },
    },

    div2: {
        // marginLeft: '20%', //marginTop: '30px', 
        // [theme.breakpoints.down('sm')]: { marginLeft: '0px'},

    },

    title: {
        color: '#FFFEFA', marginBottom: '30px'

    },



    title2: {
        color: 'hsl(240, 2%, 79%)', cursor: 'pointer', '&:hover': { textDecorationLine: 'underline' },
        fontSize: '16px', marginBottom: '7px'

    },

    attribution: {
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
        },
        display: 'flex',
        justifyContent: 'center',
        '& span': {
            color: '#FFFEFA',
            marginBottom: '7px',
            marginRight: '6px'
        },
        padding: '20px'

    },


    a: {

        color: 'hsl(356, 100%, 66%)'

    }

}));
