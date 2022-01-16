import React, { useEffect, useState } from 'react'
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';


import { weeks } from '../../db/wordLists';

import { IWordItem } from "../../type/wordItem";
import useStyles from './styles';

const List = () => {

    const classes = useStyles()

    const [loaded, setLoaded] = useState(true)
    const [corrected, setCorrected] = useState(false)

    const [listOne, setListOne] = useState<IWordItem[]>([])
    const [listTwo, setListTwo] = useState<IWordItem[]>([])

    const [listOfWeeks, setListOfWeeks] = useState<string[]>([])
    const [selectorValue, setSelectorValue] = useState<any>(0)

    const [correctListOne, setCorrectedListOne] = useState<{id:any, word: any}[]>([])
    const [correctListTwo, setCorrectedListTwo] = useState<{id:any, word: any}[]>([])

    const changeWeek = (e: SelectChangeEvent) => {
        const choice:number = parseInt(e.target.value)
        const id:number = choice-3
        setListOne([])
        setListTwo([])
        setCorrectedListOne([])
        setCorrectedListTwo([])
        setSelectorValue(choice)
        setLoaded(false)

        if(choice === undefined) return
        if(weeks[id][choice] !== undefined)setListOne(weeks[id][choice][0])
        else setListOne([])
        if(weeks[id][choice] !== undefined)setListTwo(weeks[id][choice][1])
        else setListTwo([])
        setLoaded(false)

    }

    const runRandomList = () => {
        if(!loaded) {
            resetWeek()
            let randomListOne = listOne.sort((a, b) => Math.random() - 0.5)
            let randomListTwo = listTwo.sort((a, b) => Math.random() - 0.5)
            setListOne(randomListOne)
            setListTwo(randomListTwo)
            setLoaded(true)
        }
    }

    useEffect(() => {
        runRandomList()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loaded])

    useEffect(() => {
        const newWeekList:any = []
        for(let i = 0; i < weeks.length; i++) {
            const week = (weeks[i])
            newWeekList.push(Object.keys(week)[0])
        }
        setListOfWeeks(newWeekList)
    },[])


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

        if((correctListOne.length === listOne.length && correctListTwo.length === listOne.length) === false) return

        for(let i = 0; i < correctListOne.length; i++) {
            const setCorrect = correctListOne[i].id === correctListTwo[i].id
            if(setCorrect) {
                const index = listOne.findIndex((li) => li.id === Number(correctListOne[i].id))
                listOne[index].correct = true
                setListOne(listOne)
            }else {
                const index = listOne.findIndex((li) => li.id === Number(correctListOne[i].id))
                listOne[index].correct = false
                setListOne(listOne)
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
        let rightOrderListOne = listOne.sort((a, b) => {return a.id - b.id})
        let rightOrderListTwo = listTwo.sort((a, b) => {return a.id - b.id})
        setListOne(rightOrderListOne)
        setListTwo(rightOrderListTwo)
        setCorrected(true)
    }

    const resetWeek = () => {
        for(let i = 0; i < listOne.length; i++) {    
            setCorrected(false)
            setCorrectedListOne([])        
            setCorrectedListTwo([])        
            listOne[i].boolean = false
            listTwo[i].boolean = false
            listOne[i].number = ''
            listTwo[i].number = ''
            setListOne(listOne)            
            setListTwo(listTwo)                  
        }
    }

    const setActive = (id:number, isListOne:boolean) => {
        if(isListOne){
            const index = listOne.findIndex((i) => i.id === Number(id)) 
            listOne[index].boolean = true
            listOne[index].number = (correctListOne.length+1).toString()
            setListOne(listOne)
        } else {
            const index = listTwo.findIndex((i) => i.id === Number(id)) 
            listTwo[index].boolean = true
            listTwo[index].number = (correctListTwo.length+1).toString()
            setListTwo(listTwo)
        }
    }

    const mapListOne = listOne.map((word) => 
    <Grid key={word.id} container item direction='row' className={classes.wordLeft}>
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
        <Grid key={word.id} container item direction='row' className={classes.wordRight}>
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

    const weekSelectorItem = listOfWeeks.map((week) => <MenuItem value={week}>{week}</MenuItem>)

    return(
        <Grid container className={classes.container}>
            <Grid container className={classes.section}>
                <Grid item className={selectorValue !== 0 ? classes.sectionTopChoosed : classes.sectionTop}>
                    <Typography className={classes.header} variant='h3'>Glosan</Typography>
                    {selectorValue !== 0 && 
                        <FormControl className={classes.selector}>
                        <InputLabel id="weekSelect">Vecka</InputLabel>
                        <Select
                            labelId="weekSelect"
                            id="demo-simple-select"
                            label="Vecka"
                            value={selectorValue}
                            onChange={(e)=>changeWeek(e)}
                        >
                            {weekSelectorItem}
                        </Select>
                        </FormControl>
                    }
                </Grid>
                    {selectorValue === 0 && 
                        <Grid item>
                            <Typography variant='h5' className={classes.title}>Välj vecka</Typography>
                            <FormControl className={classes.selector}>
                            <InputLabel id="weekSelect">Vecka</InputLabel>
                            <Select
                                labelId="weekSelect"
                                id="demo-simple-select"
                                label="Vecka"
                                value={selectorValue}
                                onChange={(e)=>changeWeek(e)}
                            >
                                {weekSelectorItem}
                            </Select>
                            </FormControl>                        
                        </Grid>
                    }
                <Grid container className={classes.wordContainer}>
                    <Grid item direction='column' className={classes.left}>
                        {selectorValue !== 0 && <Typography variant='h6' className={classes.title}>Svenska</Typography>}
                        {mapListOne}
                    </Grid>
                    <Grid item direction='column' className={classes.right}>
                    {selectorValue !== 0 && <Typography variant='h6' className={classes.title}>English</Typography>}
                        {mapListTwo}
                    </Grid>
                </Grid>
                <Grid item className={classes.sectionBottom}>
                    {selectorValue !== 0 && 
                    <>
                        <Button className={classes.btn} variant='outlined' color="info" onClick={correctAnswers}>Rätta</Button>
                        <IconButton color="primary" onClick={()=>setLoaded(false)} aria-label="reload" component="span">
                            <ReplayIcon />
                        </IconButton>
                    </>    
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default List

