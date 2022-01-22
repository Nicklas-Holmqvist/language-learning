import { Button, Grid, Modal, Typography } from '@mui/material'
import React from 'react'

import { IWordItem } from "../../type/wordItem";

import useStyles from './styles';

const ModalList = (props:any) => {

    const classes = useStyles()

    const lists = props.lists

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: '0.5px solid #000',
        boxShadow: 16,     
        borderRadius: 1,   
        p: 4,
      };
      
      const listOne = lists[0].sort((a:any, b:any) => {return a.id - b.id}).map((word:IWordItem) => (
        <Typography align='left'  className={classes.wordLeft}>{word.word}</Typography>
      ))
      
      const listTwo = lists[1].sort((a:any, b:any) => {return a.id - b.id}).map((word:IWordItem) => (
        <Typography  align='right'  className={classes.wordRight}>{word.word}</Typography>
      ))    
      const listLine = lists[0].sort((a:any, b:any) => {return a.id - b.id}).map((word:IWordItem) => (
        <Typography align='right'  className={classes.line}>-</Typography>
      ))    

    return(
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container display='flex' justifyContent='center' sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            Veckans ord
          </Typography>
          <Typography pt={1} variant="h6">
            Öva på orden sen fortsätt
          </Typography>
          <Grid container display='flex' justifyContent='space-between' direction='row' className={classes.words}>
            <Typography>
              {listOne} 
            </Typography>
            <Typography>
              {listLine} 
            </Typography>
            <Typography>
              {listTwo}
            </Typography>
          </Grid>
          <Button variant='contained' onClick={props.handleClose}>Fortsätt</Button>
        </Grid>
      </Modal>
    )
};

export default ModalList