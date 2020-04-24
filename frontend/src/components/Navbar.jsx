import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/RentXLogo.svg';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Navlogo from '../assets/iconfinder_menu-alt_134216.png';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex-end',
  },
  toolbar: {
    paddingRight:0,
    // keep right padding when drawer closed
  },
  logo:{
    width:100,
    height:100,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 0,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));




function Navbar(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }
    return(
      <div className={classes.root}>
      <CssBaseline />
            <AppBar  color='inherit' position="absolute" className={clsx(classes.appBar, classes.appBarShift)}>
              <Toolbar  color='inherit' className={classes.toolbar}>
              <img src={Logo} alt="logo" className={classes.logo} />

                <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                </IconButton>
                <Typography spacing={10} component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                <Link to="/">Home</Link>
                </Typography>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                <Link to="/Listings">Listings</Link>
                </Typography>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                <Link to="/Sellpage">Lease</Link>
                </Typography>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                  <Link to="/Sellpage">KYC</Link>
                  </Typography>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                <Link to="/contact">Contact Us</Link>
                </Typography>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                <Link to="/sign">Profile</Link>
                </Typography>
                
              </Toolbar>
            </AppBar>

        </div>
    )};
    

export default Navbar;
