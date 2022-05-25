import React from 'react'
import './Campo.css';
const Campo = ({changeCallbak,texto,tipo}) => {
  return (
    <input onChange={(e)=>changeCallbak(e)} type={tipo} placeholder={texto}/>
  )
}

export default Campo