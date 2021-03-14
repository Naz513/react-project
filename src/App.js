import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';

class App extends Component {
  state = {
    Header: [
      { name: 'Mohd Nazmus Saquib' },
      { title: 'Cloud Solution Architect' },
      { location: 'Washington DC, USA' }
    ]
  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.Header[0].name} title={this.state.Header[1].title} location={this.state.Header[2].location} />
      </div>
    );
  }
}

export default App;
