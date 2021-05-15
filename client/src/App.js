import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import ImagesMasonry from './components/ImagesMasonry';

function App() {
  return (
    <GlobalProvider>
      <ImagesMasonry />
    </GlobalProvider>
  );
}
export default App;
