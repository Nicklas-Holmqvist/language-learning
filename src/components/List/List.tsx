import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import { weekThree } from '../../db/wordLists';

import { IWordItem } from "../../type/wordItem";

const List = () => {

    const classes = useStyles()

    const [loaded, setLoaded] = useState(true)
    const [corrected, setCorrected] = useState(false)

    const [list, setList] = useState<IWordItem[]>(weekThree[0])
    const [listTwo, setListTwo] = useState<IWordItem[]>(weekThree[1])

    useEffect(() => {
        if(loaded === true) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let randomListOne = list.sort((a, b) => Math.random() - 0.5)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let randomListTwo = listTwo.sort((a, b) => Math.random() - 0.5)
            setLoaded(false)
        }        
    },[list, listTwo, loaded])

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
                const index = list.findIndex((li) => li.id === Number(correctListOne[i].id))
                list[index].correct = true
                setList(list)
            }else {
                const index = list.findIndex((li) => li.id === Number(correctListOne[i].id))
                list[index].correct = false
                setList(list)
            }
        }
        for(let i = 0; i < correctListTwo.length; i++) {
            const setCorrect = correctListOne[i].id === correctListTwo[i].id
            if(setCorrect) {
                const index = listTwo.findIndex((li) => li.id === Number(correctListTwo[i].id))
                listTwo[index].correct = true
                setListTwo(listTwo)
            }else {
                const index = listTwo.findIndex((li) => li.id === Number(correctListTwo[i].id))
                listTwo[index].correct = false
                setListTwo(listTwo)
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let rightOrderListOne = list.sort((a, b) => {return a.id - b.id})
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let rightOrderListTwo = listTwo.sort((a, b) => {return a.id - b.id})
        setCorrected(true)
    }

    const setActive = (id:number, isListOne:boolean) => {
        if(isListOne){
            const index = list.findIndex((i) => i.id === Number(id)) 
            list[index].boolean = true
            list[index].number = (correctListOne.length+1).toString()
            setList(list)
        } else {
            const index = listTwo.findIndex((i) => i.id === Number(id)) 
            listTwo[index].boolean = true
            listTwo[index].number = (correctListTwo.length+1).toString()
            setListTwo(listTwo)
        }
    }

    const mapListOne = list.map((word) => 
    <Grid key={word.id} item direction='row' className={classes.wordLeft}>
        <Button 
            onClick={handleChoice} 
            variant={word.boolean ? 'contained' : 'outlined'} 
            className={word.boolean ? classes.active : ''} 
            value='listOne' 
            color={word.correct && corrected ? 'success' : corrected ? 'error' : 'primary'}
            id={word.id.toString()}            
            >
                {word.word}
        </Button> 
        <Typography className={classes.choiceLeft}>{word.number !== '' && word.number}</Typography>
    </Grid>
    )

    const mapListTwo = listTwo.map((word) => 
        <Grid key={word.id} item direction='row' className={classes.wordRight}>
       <Typography className={classes.choiceRight}>{word.number !== '' && word.number}</Typography>
        <Button 
            onClick={handleChoice} 
            variant={word.boolean ? 'contained' : 'outlined'} 
            className={word.boolean ? classes.active : ''} 
            value='listTwo' 
            color={word.correct && corrected ? 'success' : corrected ? 'error' : 'primary'}
            id={word.id.toString()}
            >
                {word.word}
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

