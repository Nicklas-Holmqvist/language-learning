import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    active:{
        fontWeight:'bold'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '48rem',
        width: '100%',
    },
    wordContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    word: {
        display: 'flex',
        width: '15rem',
        justifyContent: 'flex-end'
    },
    choiceLeft: {
        paddingRight: '2rem'
    },
    choiceRight: {
        paddingLeft: '2rem'
    },
}))