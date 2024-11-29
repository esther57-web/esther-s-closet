import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import ArticleContextProvider from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  </React.StrictMode>,
)
