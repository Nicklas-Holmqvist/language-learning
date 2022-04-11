# Veckans glosor

Link to weapplication [Veckans glosor](https://veckans-glosor.netlify.app/).

## What it is

Veckans glosor is a homework webapplication that I made for my son. Every week they have english words in homework. 
And to make it easier to do the homework on his terms I made this webapplication.

## How it works

It can be used on any device of choice and the startscreen is to choose the week.
After a week is choosen a list on the words is displyed so you can read the swedish and english words.
When you are done reading the words you go forward to the actual homework.
You've got two lists of words and you are going to match the words.
When a word is being pressed a number will be displyed beside that word. This is the matching between the lists.
After all words is pressed you can correct the answers. If you have some errors they will be marked in red and right answers in green.
The words that was getting a wrong answer is going to get the matching number for what the correct word is.
When you are done reading the wrong words you can refresh the list and it will be sorted all random for a new try.

## What is behind

This is a ReactJS application build with MUI. All the words is manual written in a tsx-file.
I wanted to map out the lists and do all the functionality in that mapped components instead to have a static list.
It isn't very dynamic thinking.

### List component (very potential for refactoring to use for both lists)

    const mapListOne = listOne.map((word) => 
        <Grid key={word.id} container item direction='row' className={classes.wordLeft}>
            <Button 
                onClick={handleChoice} 
                variant={word.boolean ? 'contained' : 'outlined'} 
                className={`${classes.wordBtn} ${word.boolean ? classes.active : ''}`} 
                value='listOne' 
                color={word.correct && corrected ? 'success' : corrected ? 'error' : 'primary'}
                id={word.id.toString()}            
                >
                    {word.word}
            </Button> 
            <Typography className={classes.choiceLeft}>{word.number !== '' && word.number}</Typography>
    </Grid>
    )

### List example

    
    3: [
      [
        { id: 1, word: 'mun', boolean: false, number: '', correct: false },
        { id: 2, word: 'tand', boolean: false, number: '', correct: false },
        { id: 3, word: 'mage', boolean: false, number: '', correct: false },
        { id: 4, word: 'svans', boolean: false, number: '', correct: false },
        { id: 5, word: 'armbåge', boolean: false, number: '', correct: false },
        { id: 6, word: 'axel', boolean: false, number: '', correct: false },
      ],
      [
        { id: 1, word: 'mouth', boolean: false, number: '', correct: false },
        { id: 2, word: 'tooth', boolean: false, number: '', correct: false },
        { id: 3, word: 'stomach', boolean: false, number: '', correct: false },
        { id: 4, word: 'tail', boolean: false, number: '', correct: false },
        { id: 5, word: 'elbow', boolean: false, number: '', correct: false },
        { id: 6, word: 'shoulder', boolean: false, number: '', correct: false },
      ],
    ],

## Future
  
I wanna add some functions like write the words or simply have one word with more chooises.
Nicer UI/UX
