import React, { useEffect } from 'react'
import './Estado.css';
import axios from 'axios';
import Campo from '../../components/Campo';

import Formulario from '../../components/Forulario/Formulario';
import Botao from '../../components/Botao';
import Card from '../../components/Card';
import ListarEstados from '../../components/ListarEstados';





const Estados = () => {

  const [estados, setEstados]= React.useState([]);
  const[estado, setEstado]= React.useState('');
  const [sigla,setSigla]= React.useState('');
  const [codigo,setCodigo]= React.useState('');



  const handleSubmit =(e)=>{
   e.preventDefault();
   alert('clicou')
  }

  const tratarMudancaEstado=(e)=>{
    setEstado(e.target.value);
  }
  const tratarMudancaSigla=(e)=>{
    setSigla(e.target.value);
  }
  const tratarMudancaCodigo=(e)=>{
    setCodigo(e.target.value);
  }


 useEffect(()=>{
   axios.get('http://localhost:3333/uf')
    .then(response=>{
      console.log(response.data)
      setEstados(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
 },[])

  
  return (
    <main>

    <h2>Cadastrar um Estado</h2>
    <Formulario >
      <Campo changeCallbak={tratarMudancaEstado} value={estado} tipo='text' texto='Nome do Estado'/>

      <Campo changeCallbak={tratarMudancaSigla} value={sigla} tipo='text' texto='Sigla do Estado'/>
      <Campo changeCallbak={tratarMudancaCodigo} value={codigo}  tipo='text' texto='Código do Estado'/>
       <Botao  nome='salvar' clickCallbak={handleSubmit} />

    </Formulario>
     

       <ListarEstados estados={estados} />

    </main>
  )
}

export default Estados























/*
//https://jsonplaceholder.typicode.com/users

const Estados = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
  }, []);
           

  return (
    <main>
     <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))}
     </ul>
    </main>
  )
}

export default Estados
*/