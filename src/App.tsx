import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Cart from './components/Cart';
import Decrease from './components/Decrease';
import Increase from './components/Increase'; 

import {Store} from './types/store';

const initialState: Store = {
  quantity: 0
}

function reducer(state = initialState, action: any) {
  switch(action.type) {
    case 'AUMENTAR_QUANTIDADE':
      return {
        quantity: state.quantity + 1
      };
    case 'DIMINUIR_QUANTIDADE':
      return {
        quantity: state.quantity > 0 ? state.quantity - 1 : state.quantity,
      };
    default: 
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cart/>
        <Decrease/>
        <Increase/>
      </Provider>
    </div>
  );
}

export default App;
