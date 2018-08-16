import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from './reducers';

const API_KEY = 'AIzaSyDRE9L00l3eGyrZUld2sgnc_rj_bcz6WpA';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

const App = () => {
  return <div>
    <SearchBar />
  </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
