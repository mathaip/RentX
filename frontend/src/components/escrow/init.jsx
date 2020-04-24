import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar'
import Box from '@material-ui/core/Box';


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  

export default function Init() {
    const classes = useStyles();


    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  return (
    <React.Fragment>
        <Navbar/>
     
     <Box m={40}/>
      <Typography variant="h6" justify='center' alignitems='center'>
          Initialize the Escrow by inserting your address and the landlords Ethereum Address
      </Typography>
      <Grid container spacing={13} justify='center'>
        <Grid item xs={12} md={7}>
          <TextField justify required id="cardName" label="Landlord Address" fullWidth />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField required id="cardNumber" label="Renter Address" fullWidth />
        </Grid>
        
        <Grid container justify="space-around">
                    <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="        Set Escrow Deadline
                    "
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form>
            </Grid>
            
                <Button
                alignitems='center'
                justify='center'
                color='primary'
                variant="contained" 
                
                >
                    Initialize Escrow
                </Button>
      
      </Grid>
    </React.Fragment>
  );
}