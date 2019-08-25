import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} draggable={false} />
    </Router>
  );
}

export default App;
