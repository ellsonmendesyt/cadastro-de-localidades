




function ListarUf(props){

    const {listaUfs}=props;
    const {eventoAlterarStatus}=props;

    return(
        <>
         <div className={estilo}>
            <div onClick={()=>{eventoAlterarStatus(ufAtual.codigoUF)}}>
            {ufAtual.nomeUF} - {ufAtual.siglaUF}
            </div>
         </div>
        </>
    )
}










































