import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Ncoc from '../imgs/NCOC.png';
import '../App.css';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          <img src={Ncoc}  className="App-logo" alt="NCOC" />
          </Typography>
          <h1 className="p">Covid-19</h1>
          <p className='p1'> [Statistics] </p>
          <h1 className="p3"> Pakistan </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
