import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
