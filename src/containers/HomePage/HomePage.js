import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';
import { LikedPetsList } from '../../components/LikedPetsList/LikedPetsList';
import PetPreview from '../../components/PetPreview/PetPreview';

import './HomePage.scss';

const CN = 'HomePage';

class HomePage extends Component {

  loadDoggo = async () => {
    const { url } = this.state;
    let response = await fetch(url);

    console.log('HomePage load doggo');

    if (response.ok) {
      let { message = '' } = await response.json();
      this.setState({
        doggoUrl: message
      });
    } else {
      alert('Error HTTP: ' + response.status);
    }
  };

  onLikeDoggo = () => {
    const { doggoUrl, likedDoggos } = this.state;

    if (doggoUrl && !likedDoggos.includes(doggoUrl)) {
      const doggos = [...likedDoggos];

      doggos.push(doggoUrl);

      this.setState({
        likedDoggos: doggos
      });
    }
  };

  onLoadDoggoClick = () => {
    this.loadDoggo();
  };

  constructor() {
    super();

    this.state = {
      url: 'https://dog.ceo/api/breeds/image/random',
      doggoUrl: '',
      likedDoggos: []
    };

    console.log('HomePage constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('HomePage getDerivedStateFromProps');

    return null;
  }

  componentDidMount() {
    console.log('HomePage componentDidMount');
    this.loadDoggo();
  }

  deleteDoggo = (pet) => {
    const {likedDoggos} = this.state;

    const doggos = likedDoggos.filter(dogs => dogs !== pet);

    this.setState({
      likedDoggos: doggos
    })
  }

  render() {
    const { doggoUrl, likedDoggos } = this.state;

    console.log('HomePage render');
    return (
      <div className={`${CN}`}>
        <div className={`${CN}__container`}>
          <div className={`${CN}__left-side`}>
            <PetPreview imageUrl={doggoUrl}/>
            <div>
              <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
              <Button label="Like doggo" onClick={this.onLikeDoggo}/>
            </div>
          </div>
          <LikedPetsList list={likedDoggos} remove={this.deleteDoggo}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
