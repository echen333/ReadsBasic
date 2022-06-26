import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { addTest } from './actions/test';

//Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const [buttonVal, setButtonVal] = useState(1);
  const [curId, setCurId] = useState(-1);

  const addItem = () => {
    store.dispatch(addTest(buttonVal));
    setButtonVal(buttonVal+1);
    setCurId(store.getState().test.testId);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <h1>ReadsBasic</h1>
        <p>Read all the articles you want all in one place</p> 
        <p>{curId}</p>
        <input type="button" onClick={addItem} value={buttonVal} className='testButton'/>
      </div>
    </Provider>
  );
}

export default App;
