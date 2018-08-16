import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from './reducers';

const API_KEY = 'AIzaSyDRE9L00l3eGyrZUld2sgnc_rj_bcz6WpA';

const App = () => {
  return <div>
    <SearchBar />
  </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
