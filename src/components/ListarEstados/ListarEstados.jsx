import React from 'react'
import Card from '../Card';



const ListarEstados = ({estados}) => {
  return (
    <ul>
          {
           estados.length>0 && estados.map(est => (
             <Card key={est.codigoUF} estado={est} />
           ))
         }
    </ul>
  )
}

export default ListarEstados;

