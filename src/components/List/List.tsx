import React from 'react'

const List = () => {

    const list = [{i:1,w:'Ett'}, {i:2,w:'2'}, {i:3,w:'3'}, {i:4,w:'4'}, {i:5,w:'5'}, {i:6,w:'6'}, {i:7,w:'7'}, {i:8,w:'8'}, {i:9,w:'9'}, {i:10,w:'10'}]
    const listTwo = [{i:1,w:'One'}, {i:2,w:'2'}, {i:3,w:'3'}, {i:4,w:'4'}, {i:5,w:'5'}, {i:6,w:'6'}, {i:7,w:'7'}, {i:8,w:'8'}, {i:9,w:'9'}, {i:10,w:'10'}]

    let randomListOne = list.sort((a, b) => Math.random() - 0.5)
    let randomListTwo = listTwo.sort((a, b) => Math.random() - 0.5)

    const correctListOne = []
    const correctListTwo = []

    const handleChoice = (e:any) => {
        const listOne = e.target.outerHTML.includes('listOne') 
        const word = e.target.outerText
        const id = e.target.id

        if(listOne){
            console.log({One: word, id: id})
        } else console.log({Two: word, id: id})

    }

    const mapListOne = randomListOne.map((word) => 
    <li onClick={handleChoice} value='listOne' id={word.i.toString()} key={word.i}>{word.w}</li> )

    const mapListTwo = randomListTwo.map((word) => 
    <li onClick={handleChoice} value='listTwo' id={word.i.toString()} key={word.i}>{word.w}</li> )

    return(
        <div>
            <p>Hejdå!</p>
            {mapListOne}
            {mapListTwo}
        </div>
    )
}

export default List

