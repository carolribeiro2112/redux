import React from 'react';
import { useSelector } from 'react-redux';
import {Store} from '../../types/store';

const Cart = () => {
  const quantidadeDeProduto = useSelector((state:Store) => state.quantity)

  return (
    <p>Quantidade: {quantidadeDeProduto}</p>
  );
}

export default Cart;