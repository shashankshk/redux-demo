import React from 'react';
import Home from './components/Home'
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createStore from "./state/store";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
