import React from 'react'

const Botao = ({envio,nome, clickCallbak}) => {
  const tipo= envio ? 'submit' : 'button';
  return (
    <button type='' onClick={(e)=>clickCallbak(e)}>{nome}</button>
  )
}

export default Botao