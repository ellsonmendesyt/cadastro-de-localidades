import React from 'react'
import './Card.css';

import {SlideBtn, SwitchBtn, VerticalDotsBtn} from '../../components/CustomButton/CustomBtns'
import DropDown from '../DropDown';

const Card = ({estado}) => {
    let color;
    const ativo = estado.status === 1 ? color='#24203b' : color='#24203b';
  return (
    <div className='card'>
        <div className="card_header">
         
         <h3 className='card_title'>{estado.nome}</h3>            
            <DropDown />
        </div>
       
        <div className="card_footer" >
           
           <div className="info"><span> {estado.sigla}</span><span>sigla </span></div>
           <div className="info"><span> {estado.codigoUF}</span><span>código </span></div>
           <div className="info"><span> <SwitchBtn /></span><span>status </span></div>
          
        </div>
    </div>
  )
}

export default Card