import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Loader from '../../assets/loader.gif';
import { Typography } from '@material-ui/core';
import web3 from '../../web3';
import {factoryAbiArray,factoryAddress} from '../../abi';

const testContract = new web3.eth.Contract(factoryAbiArray,factoryAddress)


function Contract(){
   
   let history = useHistory();

    


   const onClickInit = (e) =>{
    e.preventDefault()
    history.push('/init')
    

   }

    return (
      <Fragment>
        <Navbar />
            
            <Box m={20}/>
            <Grid container  spacing={2}>
                <Grid container justify="center" >

                <Typography justify='center' padding='40px'>
                    <b>Decentralised Escrow Platform</b>
                    </Typography>
                    <Box m={4}/>
                    </Grid>
                    </Grid>

                     <Grid container  spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" >
                            {[0].map((value) => (
                                <Grid key={value} item>
                                    <Box m={7}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickInit}
                                            >
                                                Init Escrow </Button>

                                        <Box m={7}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickInit}
                                            >
                                                Approve Escrow</Button>

                                                <Box m={7}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickInit}
                                            >
                                               Renter Deposit</Button>
                                                <Box m={7}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickInit}
                                            >
                                                Renter Cancel</Button>
                                                <Box m={7}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickInit}
                                            >
                                               End Escrow</Button>



                                 <Paper  />


                                 

                                <Paper  />
                                </Grid>
                            ))}
                        </Grid>
                        </Grid>
                        </Grid>

                        
                        <Box m={13}/>

                           
                           

       <Footer />
      </Fragment>
    );
  }


export default Contract;