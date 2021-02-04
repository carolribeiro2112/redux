import React from 'react';
import { useDispatch } from 'react-redux';


const Decrease = () => {

  const dispatch = useDispatch()

  return(
    <button onClick={()=>dispatch({type:'DIMINUIR_QUANTIDADE' })}>Remover do Carrinho</button>
  )  
}

export default Decrease;