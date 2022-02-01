import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
//import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
  },
});

export default function Footer({screenconfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenconfig[0]}
      
      onChange={(event, newValue) => {
          console.log(newValue);
          screenconfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Status" icon={<PublicIcon />} />
      <BottomNavigationAction label="Country Status" icon={<HomeIcon />} />
    </BottomNavigation>
  );
}

//   <BottomNavigationAction label="Graph" icon={<LocationOnIcon />} />
