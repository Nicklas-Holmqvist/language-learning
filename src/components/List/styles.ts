import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    active:{
        fontWeight:'bold'
    },
    container: {
        width: '100%',
        height: '90vh'
    },
    section: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    wordContainer: {
        display: 'flex',
        maxWidth:'100%',
        justifyContent: 'space-between',
        padding: '0 1rem',
        marginBottom: '2rem'
    },
    sectionTop: {
        width: '100%',
        justifyContent:'center',
        padding: '0 3rem 0 3rem'
    },
    sectionTopChoosed: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '25rem',
        padding: '1.5rem 3rem 0 3rem'
    },
    sectionBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20rem',
        padding: '1.5rem 3rem 0 3rem'
    },
    selector: {
        width: '7rem',
    },
    wordLeft: {
        display: 'flex',
        width: '15rem',
        justifyContent: 'space-between',
        padding: '0.2rem 0.2rem 0.2rem 0'
    },
    wordRight: {
        display: 'flex',
        width: '15rem',
        justifyContent: 'space-between',
        padding: '0.2rem 0 0.2rem 0.2rem'
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