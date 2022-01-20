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
        width:'100%',
        justifyContent: 'space-between',
        padding: '0 0.5rem 0 0.5rem',
    },
    sectionTop: {
        width: '100%',
        justifyContent:'center',
        padding: '0 1rem 0 1rem'
    },
    sectionTopChoosed: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '1.5rem 2rem 0 2rem'
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
        width: '100%',
        justifyContent: 'space-between',
        padding: '0.2rem 0.2rem 0.2rem 0'
    },
    wordRight: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '0.2rem 0 0.2rem 0.2rem'
    },
    choiceLeft: {
        // paddingLeft: '2rem'
    },
    choiceRight: {
        // paddingRight: '2rem'
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    right: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
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
    word:{
        height: '2rem'
    }
}))