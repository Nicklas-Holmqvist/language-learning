import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    active:{
        fontWeight:'bold'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '20rm',
        width: '100%',
        height: '90vh'
    },
    section: {
        height: '100%',
        width: '30rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    wordContainer: {
        display: 'flex',
        width: '30rem',
        justifyContent: 'center',
        marginBottom: '2rem'
    },
    sectionTop: {
        display: 'flex',
        justifyContent: 'center',
        width: '30rem',
        padding: '0 3rem 0 3rem'
    },
    sectionTopChoosed: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '30rem',
        padding: '0 3rem 0 3rem'
    },
    sectionBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20rem',
        padding: '0 3rem 0 3rem'
    },
    selector: {
        width: '7rem',
    },
    wordLeft: {
        display: 'flex',
        width: '15rem',
        justifyContent: 'space-between',
        paddingRight: '2rem'
    },
    wordRight: {
        display: 'flex',
        width: '15rem',
        justifyContent: 'space-between',
        paddingLeft: '2rem'
    },
    choiceLeft: {
        paddingLeft: '2rem'
    },
    choiceRight: {
        paddingRight: '2rem'
    },
    left: {
        display: 'flex',
        justifyContent: 'center'
    },
    right: {
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        width: '7rem',
    },
    title: {
        paddingBottom: '1rem'
    },
    header: {
        paddingBottom: '1rem',
    },
}))