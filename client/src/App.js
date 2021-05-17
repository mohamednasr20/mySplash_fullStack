import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import ImagesMasonry from './components/ImagesMasonry';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <ImagesMasonry />
    </GlobalProvider>
  );
}
export default App;
