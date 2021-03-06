import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';

import { addTest } from './actions/test';
import { loadUser } from './actions/auth';
import { getArticle } from './actions/article';
import './index.css';
import SideBar from './components/Sidebar'
import Liked from './components/Liked'

//Redux
import { Provider } from 'react-redux'
import store from './store'
import Article from './components/Article';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [buttonVal, setButtonVal] = useState(1);
  const [curId, setCurId] = useState(-1);

  useEffect( ()=> {
    console.log("SE EFFECT");
    store.dispatch(loadUser());
    console.log("DONE");
    if(store.getState().auth.user)
      console.log(store.getState().auth.user.email)
  },[])

  const addItem = () => {
    store.dispatch(getArticle(2));
    console.log(store.getState().article.articles);
    // store.dispatch(addTest(buttonVal));
    setButtonVal(buttonVal+1);
    setCurId(store.getState().test.testId);
  }

  return (
    <Provider store={store}>
      <Router>
          <SideBar/>
          <Routes>
            <Route path='/' element={<Article/>}/>
            <Route path='/liked' element={<Liked/>}/>
          </Routes>
          {/* <h1 className="text-3xl font-bold underline">ReadsBasic</h1>
          <p className='text-green-400'>Read the articles you want all in one place</p> 
          <p>{curId}</p>
          <input type="button" onClick={addItem} value={buttonVal} className='testButton'/> */}
      </Router>
    </Provider>
  );
}

export default App;
