import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { addTest } from './actions/test';

function App() {

  const [buttonVal, setButtonVal] = useState(1);

  const addItem = () => {
    addTest(buttonVal);
    setButtonVal(buttonVal+1);
  }

  return (
    <div className="App">
      <h1>ReadsBasic</h1>
      <p>Read all the articles you want all in one place</p> 
      <input type="button" onClick={addItem} value={buttonVal} className='testButton'/>
    </div>
  );
}

export default App;
