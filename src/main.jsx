import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"; // Import Provider from react-redux
import Store from './redux/Store';
import App from './App';

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  
);
