import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useStyles from './styles';

const List = () => {

    const classes = useStyles()

    const [loaded, setLoaded] = useState(true)

    const [list, setList] = useState([{i:1,w:'Ett',b:false,n:''}, {i:2,w:'2',b:false,n:''}, {i:3,w:'3',b:false,n:''}, {i:4,w:'4',b:false,n:''}, {i:5,w:'5',b:false,n:''}, {i:6,w:'6',b:false,n:''}, {i:7,w:'7',b:false,n:''}, {i:8,w:'8',b:false,n:''}, {i:9,w:'9',b:false,n:''}, {i:10,w:'10',b:false,n:''}])
    const [listTwo, setListTwo] = useState([{i:1,w:'One',b:false,n:''}, {i:2,w:'2',b:false,n:''}, {i:3,w:'3',b:false,n:''}, {i:4,w:'4',b:false,n:''}, {i:5,w:'5',b:false,n:''}, {i:6,w:'6',b:false,n:''}, {i:7,w:'7',b:false,n:''}, {i:8,w:'8',b:false,n:''}, {i:9,w:'9',b:false,n:''}, {i:10,w:'10',b:false,n:''}])

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
            console.log(correctListOne[i].id === correctListTwo[i].id)
        }
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
    <Grid container item direction='row' className={classes.word}>
        {word.n !== '' && <p className={classes.choiceLeft}>{word.n}</p>}
        <Button 
            onClick={handleChoice} 
            variant={word.b ? 'contained' : 'outlined'} 
            className={word.b ? classes.active : ''} 
            value='listOne' 
            id={word.i.toString()} 
            key={word.i}
            >
                {word.w}
        </Button> 
    </Grid>
    )

    const mapListTwo = listTwo.map((word) => 
        <Grid container item direction='row' className={classes.word}>
        <Button 
            onClick={handleChoice} 
            variant={word.b ? 'contained' : 'outlined'} 
            className={word.b ? classes.active : ''} 
            value='listTwo' 
            id={word.i.toString()} 
            key={word.i}
            >
                {word.w}
        </Button> 
        {word.n !== '' && <p className={classes.choiceRight}>{word.n}</p>}
    </Grid>)

    return(
        <Grid container direction='column' className={classes.container}>
            <p>Hejdå!</p>
            <button onClick={correctAnswers}>Rätta</button> 
            <Grid container>
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

