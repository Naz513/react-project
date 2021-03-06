import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';

class App extends Component {
  state = {
    Header: [
      { name: 'Mohd Nazmus Saquib' },
      { title: 'Cloud Solution Architect' },
      { location: 'Washington DC, USA' },
      { image: 'profile' },
      {
        content: '๐ Hello there! My name is Mohd Saquib and I have a passion for Cloud Computing โ๏ธ, Data Analytics ๐๏ธ and all the Developer stuff ๐! I am currently pursuing a Masters Degree in Information Technology ๐ from George Mason University ๐ซ. <br> <br> I am constantly learning new cloud and container technologies to become a better cloud developer โ๏ธ. I was recently endored by Forrest Brazzel (AWS Serverless Hero) for AWS on LinkedIn for my cloud projects. I am also actively learning JAVA and Serverless Framwork to work on my next big porject! I enjoy playing FPS games ๐ฎ mainly CS:GO and Call of Duty ๐น๏ธ, so if you are interested in competing against me, feel free to hit me up ๐! <br><br> I speak four languages fluently ๐บ๐ธ ๐ง๐ฉ ๐ฎ๐ณ ๐ต๐ฐ and know a little bit of Spanish ๐ช๐ธ. Iโm interested in just about any topic and very much open to thoughtful conversations. ๐บ Hit me up at <a href="mailto:nsaquib96@gmail.com" style="text-decoration: dotted underline; color: white;">nsaquib96@gmail.com</a> and letโs chat about stuff!'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Header
          name={this.state.Header[0].name}
          title={this.state.Header[1].title}
          location={this.state.Header[2].location}
          image={this.state.Header[3].image}
          content={this.state.Header[4].content} />
      </div>
    );
  }
}

export default App;
