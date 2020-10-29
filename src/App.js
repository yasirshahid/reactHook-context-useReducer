import React, { useState } from 'react';
import './App.css';
import counterContext from './counterContext';
import Parent from './Parent';

function App() {


  let counterState = useState(0); 
  return (
    <div className="App">
      <counterContext.Provider value={counterState}>
      <Parent counter={25} />
      </counterContext.Provider>
    </div>
  );
}

export default App;
