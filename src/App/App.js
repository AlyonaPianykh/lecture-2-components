import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';

import './App.scss';
import PetPreview from '../PetPreview/PetPreview';

const CN = 'App';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: 'https://dog.ceo/api/breeds/image/random',
      doggoUrl: ''
    };

    console.log('App constructor');
  }

  componentDidMount() {
    console.log('App componentDidMount');
    this.loadDoggo();
  }

  loadDoggo = async () => {
    const { url } = this.state;
    let response = await fetch(url);

    console.log('App load doggo');

    if (response.ok) {
      let {message = ''} = await response.json();
      this.setState({
        doggoUrl: message
      });
    } else {
      alert("Error HTTP: " + response.status);
    }
  };

  onLoadDoggoClick = () => {
    this.loadDoggo();
  };

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('App getDerivedStateFromProps');
    return null;
  }

  render() {
    const { doggoUrl } = this.state;

    console.log('App render');
    return (
      <div className={`${CN}`}>
        <Header
          className="App-header"
          showLogo
          greeting="Doggo app"
        />

        <PetPreview imageUrl={doggoUrl}/>
        <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
      </div>
    );
  }
}

export default App;
