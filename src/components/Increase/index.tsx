import React from 'react';
import { useDispatch } from 'react-redux';

const Increase = () => {

  const dispatch = useDispatch()

  return(
    <button onClick={()=>dispatch({type:'AUMENTAR_QUANTIDADE' })}>Adicionar ao Carrinho</button>
  )  
}

export default Increase;