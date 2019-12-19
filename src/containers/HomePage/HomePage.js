import React, {Component} from 'react';
import {Button} from '../../components/Button/Button';
import {LikedPetsList} from '../../components/LikedPetsList/LikedPetsList';
import PetPreview from '../../components/PetPreview/PetPreview';

import './HomePage.scss';
import {Modal} from '../../components/Modal';
import {likeDoggo} from '../../actions/doggos';

const CN = 'HomePage';

class HomePage extends Component {
    loadDoggo = async () => {
        const {url} = this.state;
        let response = await fetch(url);

        if (response.ok) {
            let {message = ''} = await response.json();
            this.setState({
                doggoUrl: message
            });
        } else {
            alert('Error HTTP: ' + response.status);
        }
    };


    // todo: pay attention - this functionality is changed
    onLikeDoggo = () => {
        const {doggoUrl} = this.state;
        const {likeDoggo, likedDoggos} = this.props; // this props are from redux

        if (doggoUrl && !likedDoggos.includes(doggoUrl)) {

            likeDoggo && likeDoggo(doggoUrl);
        }
    };


    onLoadDoggoClick = () => {
        this.loadDoggo();
    };

    toggleModal = () => {
        const {isModalOpened} = this.state;

        this.setState({
            isModalOpened: !isModalOpened
        });
    };

    constructor() {
        super();

        this.state = {
            url: 'https://dog.ceo/api/breeds/image/random',
            doggoUrl: '',
            likedDoggos: [], // todo: remove! this is not needed anymore
            isModalOpened: false
        };

        console.log('HomePage constructor');
    }


    componentDidMount() {
        this.loadDoggo();
    }

    // todo: this functionality should be moved to redux action/reducer. not working now
    deleteDoggo = (pet) => {
        const {delDoggo} = this.props;

        delDoggo(pet);
    };

    delAllDoggos = () => {
      const {delAllDoggo} = this.props;
      delAllDoggo();
    }

    render() {
        const {doggoUrl, isModalOpened} = this.state;
        const {likedDoggos} = this.props;

        console.log('HomePage render');
        return (
            <div className={`${CN}`}>
                <div className={`${CN}__container`}>
                    <Modal isOpen={isModalOpened} handleModalToggle={this.toggleModal}>
                        <img src={doggoUrl} alt="liked-doggo"/>
                    </Modal>
                    <div className={`${CN}__left-side`}>
                        <PetPreview imageUrl={doggoUrl}/>
                        <div>
                            <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
                            <Button label="Show doggo in modal" onClick={this.toggleModal}/>
                            <Button label="Like doggo" onClick={this.onLikeDoggo}/>
                            <Button label="Delete all doggo" onClick={this.delAllDoggos}/>
                        </div>
                    </div>
                    <LikedPetsList list={likedDoggos} remove={this.deleteDoggo}/>
                </div>
            </div>
        );
    }
}

export default HomePage;
