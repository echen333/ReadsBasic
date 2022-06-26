import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';

import { addTest } from './actions/test';
import { getArticle } from './actions/article';
import './index.css';
import SideBar from './components/Sidebar'

//Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const [buttonVal, setButtonVal] = useState(1);
  const [curId, setCurId] = useState(-1);

  const addItem = () => {
    store.dispatch(getArticle(2));
    console.log(store.getState().article.articles);
    // store.dispatch(addTest(buttonVal));
    setButtonVal(buttonVal+1);
    setCurId(store.getState().test.testId);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <SideBar/>
        <h1 className="text-3xl font-bold underline">ReadsBasic</h1>
        <p className='text-green-400'>Read the articles you want all in one place</p> 
        <p>{curId}</p>
        <input type="button" onClick={addItem} value={buttonVal} className='testButton'/>
      </div>
    </Provider>
  );
}

export default App;
