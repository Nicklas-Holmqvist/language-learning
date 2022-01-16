import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import { weekThree } from '../../db/wordLists';

const List = () => {

    const classes = useStyles()

    const [loaded, setLoaded] = useState(true)
    const [corrected, setCorrected] = useState(false)

    const [list, setList] = useState(weekThree[0])
    const [listTwo, setListTwo] = useState(weekThree[1])

    useEffect(() => {
        if(loaded === true) {
            let randomListOne = list.sort((a, b) => Math.random() - 0.5)
            let randomListTwo = listTwo.sort((a, b) => Math.random() - 0.5)
            setLoaded(false)
        }        
    },[loaded])

    const [correctListOne, setCorrectedListOne] = useState<{id:any, word: any}[]>([])
    const [correctListTwo, setCorrectedListTwo] = useState<{id:any, word: any}[]>([])

    const handleChoice = (e:any) => {
        const isListOne = e.target.outerHTML.includes('listOne') 
        const word = e.target.outerText
        const id = e.target.id

        const newItem: {id:any, word: any} = {
            id:id,
            word:word
        }
        if(isListOne && !correctListOne.find(i => i.id === id)){   
            setActive(id, isListOne)         
            setCorrectedListOne(item => item.concat(newItem))
        } else if (!isListOne && !correctListTwo.find(i => i.id === id)){
            setActive(id, isListOne)         
            setCorrectedListTwo(item => item.concat(newItem))
        } else return
    }

    const correctAnswers = () => {
        for(let i = 0; i < correctListOne.length; i++) {
            const setCorrect = correctListOne[i].id === correctListTwo[i].id
            if(setCorrect) {
                const index = list.findIndex((li) => li.i === Number(correctListOne[i].id))
                list[index].c = true
                setList(list)
            }else {
                const index = list.findIndex((li) => li.i === Number(correctListOne[i].id))
                list[index].c = false
                setList(list)
            }
        }
        for(let i = 0; i < correctListTwo.length; i++) {
            const setCorrect = correctListOne[i].id === correctListTwo[i].id
            if(setCorrect) {
                const index = listTwo.findIndex((li) => li.i === Number(correctListTwo[i].id))
                listTwo[index].c = true
                setListTwo(listTwo)
            }else {
                const index = listTwo.findIndex((li) => li.i === Number(correctListTwo[i].id))
                listTwo[index].c = false
                setListTwo(listTwo)
            }
        }
        let rightOrderListOne = list.sort((a, b) => {return a.i - b.i})
        let rightOrderListTwo = listTwo.sort((a, b) => {return a.i - b.i})
        setCorrected(true)
    }

    const setActive = (id:number, isListOne:boolean) => {
        if(isListOne){
            const index = list.findIndex((i) => i.i === Number(id)) 
            list[index].b = true
            list[index].n = (correctListOne.length+1).toString()
            setList(list)
        } else {
            const index = listTwo.findIndex((i) => i.i === Number(id)) 
            listTwo[index].b = true
            listTwo[index].n = (correctListTwo.length+1).toString()
            setListTwo(listTwo)
        }
    }

    const mapListOne = list.map((word) => 
    <Grid key={word.i} item direction='row' className={classes.wordLeft}>
        <Button 
            onClick={handleChoice} 
            variant={word.b ? 'contained' : 'outlined'} 
            className={word.b ? classes.active : ''} 
            value='listOne' 
            color={word.c && corrected ? 'success' : corrected ? 'error' : 'primary'}
            id={word.i.toString()}            
            >
                {word.w}
        </Button> 
        <Typography className={classes.choiceLeft}>{word.n !== '' && word.n}</Typography>
    </Grid>
    )

    const mapListTwo = listTwo.map((word) => 
        <Grid key={word.i} item direction='row' className={classes.wordRight}>
       <Typography className={classes.choiceRight}>{word.n !== '' && word.n}</Typography>
        <Button 
            onClick={handleChoice} 
            variant={word.b ? 'contained' : 'outlined'} 
            className={word.b ? classes.active : ''} 
            value='listTwo' 
            color={word.c && corrected ? 'success' : corrected ? 'error' : 'primary'}
            id={word.i.toString()}
            >
                {word.w}
        </Button> 
    </Grid>)

    return(
        <Grid container className={classes.container}>
            <Grid container className={classes.section}>
                <Typography className={classes.header} variant='h3'>Glosan</Typography>
                <Grid container className={classes.wordContainer}>
                    <Grid item direction='column' className={classes.left}>
                        <Typography className={classes.title}>Svenska</Typography>
                        {mapListOne}
                    </Grid>
                    <Grid item direction='column' className={classes.right}>
                        <Typography className={classes.title}>Engelska</Typography>
                        {mapListTwo}
                    </Grid>
                </Grid>
                <Button className={classes.btn} variant='contained' onClick={correctAnswers}>Rätta</Button> 
            </Grid>
        </Grid>
    )
}

export default List

