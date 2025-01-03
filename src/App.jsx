// App.jsx
import React from 'react';
import './App.scss';
import AppRoutes from './pages/Routes/Routes';
import Header from './components/Header/Header';
import FourCards from './components/FourCards/FourCards';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AppRoutes />
      <Header />
      <FourCards />
      <Main />
      <Footer />
    </>
  );
}

export default App;
