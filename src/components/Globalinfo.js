import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 Auto',
    marginTop: 50,
    color: '#f44336',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#002884',
    backgroundColor:'#e0e0e0',

 

  },
  title:{
    color: '#f44336',

  }

}))

export default function Globalinfo() {
  const classes = useStyles()

  // API UPDATES
  const [update, setupdate] = useState({});
  useEffect(() => {
    async function statusUpdate() {
      const response = await fetch('https://api.covid19api.com/summary')
      const data = await response.json();
      /*delete data.Countries[129].Country;
      delete data.Countries[129].CountryCode;
      delete data.Countries[129].Slug;
      delete data.Countries[129].Premium;
      delete data.Countries[129].ID;*/
      delete data.Global.Date;
      
      setupdate(data.Global);


      
    }
    statusUpdate();
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(update).map((key, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper}>
                <h3 className={classes.title}>{key}</h3>
                <h2>{update[key]}</h2>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
