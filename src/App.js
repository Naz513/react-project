import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';

class App extends Component {
  state = {
    Header: {
      name: 'Mohd Nazmus Saquib',
      title: 'Cloud Solution Architect',
      location: 'Washington DC, USA',
      image: 'profile',
      content: ["👋 Hello there! My name is Mohd Saquib and I have a passion for Cloud Computing ☁️, Data Analytics 🗄️ and all the Developer stuff 📟! I am currently pursuing a Masters Degree in Information Technology 🚀 from George Mason University 🏫.", <br></br>, <br></br>, "I am constantly learning new cloud and container technologies to become a better cloud developer ☁️. I was recently endored by Forrest Brazzel (AWS Serverless Hero) for AWS on LinkedIn for my cloud projects. I am also actively learning JAVA and Serverless Framwork to work on my next big porject! I enjoy playing FPS games 🎮 mainly CS:GO and Call of Duty 🕹️, so if you are interested in competing against me, feel free to hit me up 👍!", <br></br>, <br></br>, "I speak four languages fluently 🇺🇸 🇧🇩 🇮🇳 🇵🇰 and know a little bit of Spanish 🇪🇸. I’m interested in just about any topic and very much open to thoughtful conversations. 🍺 Hit me up at ", <a href='mailto: nsaquib96@gmail.com'>nsaquib96@gmail.com</a>, " and let’s chat about stuff!"]
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          name={this.state.Header.name}
          title={this.state.Header.title}
          location={this.state.Header.location}
          image={this.state.Header.image}
          content={this.state.Header.content}
        />
      </div>
    );
  }
}

export default App;
