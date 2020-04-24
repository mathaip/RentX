import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Loader from '../../assets/loader.gif';
import { Typography } from '@material-ui/core';
import web3 from '../../web3';
import {factoryAbiArray,factoryAddress} from '../../abi';


const testContract = new web3.eth.Contract(factoryAbiArray,factoryAddress)


function Escrow(){
    let history = useHistory();
   const [escrowAddress, setEscrowAddress] = React.useState()
   const [successMessage, setSuccessMessage]= React.useState(false)
   const [input,setInput] = React.useState();
    
   async function createContract() {
        const accounts = await web3.eth.getAccounts();
        await testContract.methods
          .createContract()
          .send({ from: accounts[0],
            gas:900000,
         })
          .then(res => setEscrowAddress(res.contractAddress));
      }

    async function getAllContracts(){
        const accounts = await web3.eth.getAccounts();
        await testContract.methods
            .getAllContracts()
            .send({
                from:accounts[0],
                gas:2100000
            })
            .then(res => console.log(res));
    }
    
   const onClickGet = (e) =>{
       e.preventDefault()
       getAllContracts()
       console.log('fetched contracts');
   }

   const onClickCreate = (e) =>{
    e.preventDefault()
    createContract();
    console.log('Contract Successfully Created')
    return(
        <div>Successfully createContract</div>
    )

   }
   const onClickLoad = (e)=>{
       e.preventDefault()
       history.push('/channel')
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
                <Card spacing={3} maxWidth='275' variant='outlined' >
                <CardContent>
                <Typography justify='left' padding='400px'>   
                The address which creates the new Escrow contract is the owner of the contract. This address is responsible for correctly initializing the Renter and landlord addresses as well as resolve disputes. 
               <br/> The renter can independently deposit ethers into the escrow <b>any number of times</b>.   
                <br/> Both the renter and the landlord need to press the <b>Approve button</b> to get the deal approved. Once both have approved, the escrow will pay out the decided percentage of the contract deposits to the fee and the remaining to the landlord <b>automatically</b>  
                <br/> In case both the renter and landlord decide not to go ahead with the escrow, both need to press the <b>Cancel button</b> to cancel the escrow. <b>No fee will be charged by the owner</b> in this case and the <b>entire renter deposit</b> will be transferred back to the renter.   
                <br/> <b> Neither the creators of the escrow platform nor the owner will have any authority to launder with the money deposited into the smart contract</b>. But they are <b>no way accountable for any monetary losses incurred</b>    
                    </Typography>
                    </CardContent>  
                    </Card>
                    <Box m={4}/>
           
                     <Grid container  spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" >
                            {[0].map((value) => (
                                <Grid key={value} item>
                                    <Typography>
                                        Start a new Escrow Contract
                                        </Typography>
                                        <Box m={4}/>
                                            <Button
                                            justify="center"
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickCreate}
                                            >
                                                Create New Contract</Button>

                                          <Box m={7}/>
                                          <Button
                                            variant="contained" 
                                            color="primary"
                                            onClick={onClickGet}
                                            >
                                 Get Escrow Address</Button>
                                 <Paper  />


                                 <Box m={7}/>
                                 <h3>Load an existing Escrow Contract</h3>
                                <Typography>
                                Load Escrow Contract

                                </Typography>

                                <Input
                                onChange={e => setInput(e.target.value)}
                                >
                           
                                </Input>
                               

                                    <Button
                                    onClick={onClickLoad}
                                     variant="contained" color="primary">Load Escrow</Button>

                            

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


export default Escrow;