import React, { useEffect, useState } from 'react'
import useStyles from './styles';

const List = () => {

    const classes = useStyles()

    const list = [{i:1,w:'Ett',b:false}, {i:2,w:'2',b:false}, {i:3,w:'3',b:false}, {i:4,w:'4',b:false}, {i:5,w:'5',b:false}, {i:6,w:'6',b:false}, {i:7,w:'7',b:false}, {i:8,w:'8',b:false}, {i:9,w:'9',b:false}, {i:10,w:'10',b:false}]
    const listTwo = [{i:1,w:'One'}, {i:2,w:'2'}, {i:3,w:'3'}, {i:4,w:'4'}, {i:5,w:'5'}, {i:6,w:'6'}, {i:7,w:'7'}, {i:8,w:'8'}, {i:9,w:'9'}, {i:10,w:'10'}]

    useEffect(() => {
        let randomListOne = list.sort((a, b) => Math.random() - 0.5)
        let randomListTwo = listTwo.sort((a, b) => Math.random() - 0.5)
    }, [])

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
            setActive(id)         
            setCorrectedListOne(item => item.concat(newItem))
        } else if (!isListOne && !correctListTwo.find(i => i.id === id)){
            setCorrectedListTwo(item => item.concat(newItem))
        } else return
    }

    const correctAnswers = () => {
        for(let i = 0; i < correctListOne.length; i++) {
            console.log(correctListOne[i].id === correctListTwo[i].id)
        }
    }

    const setActive = (id:number) => {
       console.log(id)
       const index = list.findIndex((i) => i.i === Number(id)) 
       list[index].b = true 
       console.log(list)
    }

    const mapListOne = list.map((word) => 
    <li onClick={handleChoice} className={word.b ? classes.active : ''} value='listOne' id={word.i.toString()} key={word.i}>{word.w}</li> )

    const mapListTwo = listTwo.map((word) => 
    <li onClick={handleChoice} value='listTwo' id={word.i.toString()} key={word.i}>{word.w}</li> )

    const mapUserOne = correctListOne.map((word) => 
    <li onClick={handleChoice} value='listOne' id={word.id} key={word.id}>{word.word}</li> )

    const mapUserTwo = correctListTwo.map((word) => 
    <li onClick={handleChoice} value='listTwo' id={word.id} key={word.id}>{word.word}</li> )

    return(
        <div>
            <p>Hejdå!</p>
            <button onClick={correctAnswers}>Rätta</button> 
            <p>Svenska</p>
            {mapListOne}
            <p>Engelska</p>
            {mapListTwo}
            <h1>Listan</h1>
            <p>Lista 1</p>
            {mapUserOne}
            <p>Lista 2</p>
            {mapUserTwo}
        </div>
    )
}

export default List

