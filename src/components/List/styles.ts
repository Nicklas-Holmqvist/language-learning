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
    word: {
        display: 'flex',
        width: '10rem',
        justifyContent: 'flex-end'
    },
    choiceLeft: {
        paddingRight: '2rem'
    },
    choiceRight: {
        paddingLeft: '2rem'
    },
}))