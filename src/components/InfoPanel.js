import React  from 'react'
import Countryinfo from './Countryinfo';
import Globalinfo from './Globalinfo';

export default function InfoPanel({currentscreen}) {
  

  if(currentscreen===1)
  return <Countryinfo/>

  else if(currentscreen===0)
  return <Globalinfo/>
  else return <Countryinfo/>

}
