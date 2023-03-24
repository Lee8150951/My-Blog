import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router';

import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <RouterView/>
    </HashRouter>
  );
}

export default App;
