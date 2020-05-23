import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif';
import SearchBar from './searchbar';

class App extends Component {
  render() {
    return(
      <div>
        <div className="left-side">
          <SearchBar />
          <div className="gif">
            <Gif />
          </div>
        </div>
        <div className="right-side">
          <Gif />
        </div>
      </div>
    );
  }
}

export default App;