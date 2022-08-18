import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { appStore } from './redux/store';
import { Provider } from 'react-redux';
import './assets/style.css';
import './_next/static/css/346b7eacf5f167bf.css';
import { BrowserRouter } from "react-router-dom";


// import './_next/static/chunks/webpack-dc13a6d4d019931c.js';
// import './_next/static/chunks/framework-568b840ecff66744.js';
// import './_next/static/chunks/main-25882b43321bae6d.js';
// import './_next/static/chunks/pages/_app-b4d1f0ca6e971421.js';
// import './_next/static/chunks/6024-38e7fd4f1c6f9a31.js';
// import './_next/static/chunks/9431-5abff1ceb7823bad.js';
// import './_next/static/chunks/7219-92660ac5b14503fc.js';
// import './_next/static/chunks/7353-b8859903fae43ffc.js';


// import './_next/static/chunks/pages/index-69eb3a25ff452984.js';
// import './_next/static/b9yEIlq3_1kdZPPb8ItNq/_buildManifest.js';
// import './_next/static/b9yEIlq3_1kdZPPb8ItNq/_ssgManifest.js';
// import './_next/static/b9yEIlq3_1kdZPPb8ItNq/_middlewareManifest.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
