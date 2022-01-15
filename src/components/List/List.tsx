import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useStyles from './styles';

const List = () => {

    const classes = useStyles()

    const [loaded, setLoaded] = useState(true)
    const [corrected, setCorrected] = useState(false)

    const [list, setList] = useState([{i:1,w:'mun',b:false,n:'',c:undefined}, {i:2,w:'tand',b:false,n:'',c:false}, {i:3,w:'mage',b:false,n:'',c:false}, {i:4,w:'svans',b:false,n:'',c:false}, {i:5,w:'armbåge',b:false,n:'',c:false}, {i:6,w:'axel',b:false,n:'',c:false}])
    const [listTwo, setListTwo] = useState([{i:1,w:'mouth',b:false,n:'',c:false}, {i:2,w:'tooth',b:false,n:'',c:false}, {i:3,w:'stomach',b:false,n:'',c:false}, {i:4,w:'tail',b:false,n:'',c:false}, {i:5,w:'elbow',b:false,n:'',c:false}, {i:6,w:'shoulder',b:false,n:'',c:false}])

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
    <Grid key={word.i} container item direction='row' className={classes.word}>
        {word.n !== '' && <p className={classes.choiceLeft}>{word.n}</p>}
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
    </Grid>
    )

    const mapListTwo = listTwo.map((word) => 
        <Grid key={word.i} container item direction='row' className={classes.word}>
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
        {word.n !== '' && <p className={classes.choiceRight}>{word.n}</p>}
    </Grid>)

    return(
        <Grid container direction='column' className={classes.container}>
            <p>Hejdå!</p>
            <button onClick={correctAnswers}>Rätta</button> 
            <Grid container className={classes.wordContainer}>
                <Grid item>
                    <p>Svenska</p>
                    {mapListOne}
                </Grid>
                <Grid item>
                    <p>Engelska</p>
                    {mapListTwo}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default List

