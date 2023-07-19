import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/store";
import { Provider } from 'react-redux';
import Add from './pages/users/add';
import ListUsers from './pages/users/listUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Add />
      <ListUsers />
    </Provider>
  </React.StrictMode>
  )
