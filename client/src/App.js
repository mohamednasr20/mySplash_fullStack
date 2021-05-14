import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import ImagesList from './components/ImagesList';

function App() {
  return (
    <GlobalProvider>
      <ImagesList />
    </GlobalProvider>
  );
}
export default App;
