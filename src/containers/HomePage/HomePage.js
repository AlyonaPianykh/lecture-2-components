import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';
import { LikedPetsList } from '../../components/LikedPetsList/LikedPetsList';
import PetPreview from '../../components/PetPreview/PetPreview';
import StyledButton from '../../components/StyledButton/StyledButton';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomButton from '../../components/CustomButton/CustomButton'

import './HomePage.scss';
import { Modal } from '../../components/Modal';
import { Label } from '../../components/Label';

const CN = 'HomePage';


const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // spacing: '20px',
    // margin: '20px',
    // palette: {
    //     type: 'light',
    //     background: {
    //         paper: {
    //             borderRadius: 0,
    //             overflow: 'visible',
    //             marginTop: -10,
    //             marginLeft: 10,
    //         }
    //     }
    // },

    dropDown: {
        background: '#a3c2c2',
        padding: '5px 10px',
        margin: '20px',

        formControl: {
            margin: '10px',
            minWidth: 120,
        },
        subCategory: {
            'margin-left': '20px',
            background: '#ececec'
        }
    },
    button: {
        root: {
            width: '200px',
            height: '50px',
        },
        label: {
            color: 'blue',
            'font-size': '16px'
        }
    },
    input: {
        padding: '10px',
        outline: 'hidden'
    }
};

class HomePage extends Component {
    loadDoggo = async () => {
        const { url } = this.state;
        let response = await fetch(url);

        if (response.ok) {
            let { message = '' } = await response.json();
            this.setState({
                doggoUrl: message
            });
        } else {
            alert('Error HTTP: ' + response.status);
        }
    };


    // todo: pay attention - this functionality is changed
    onLikeDoggo = () => {
        const { doggoUrl } = this.state;
        const { likeDoggo, likedDoggos } = this.props; // this props are from redux

        if (doggoUrl && !likedDoggos.includes(doggoUrl)) {

            likeDoggo && likeDoggo(doggoUrl);
        }
    };


    onLoadDoggoClick = () => {
        this.loadDoggo();
    };

    toggleModal = () => {
        const { isModalOpened } = this.state;

        this.setState({
            isModalOpened: !isModalOpened
        });
    };
    // todo: this functionality should be moved to redux action/reducer. not working now
    deleteDoggo = (pet) => {
        const { removeDoggo } = this.props;


        // console.log(removeDoggo);
        removeDoggo && removeDoggo(pet, 'sdadas');
    };
    removeAll = () => {
        const { removeAll } = this.props;

        removeAll();
    };

    constructor() {
        super();

        this.state = {
            url: 'https://dog.ceo/api/breeds/image/random',
            doggoUrl: '',
            likedDoggos: [], // todo: remove! this is not needed anymore
            isModalOpened: false
        };

    }

    componentDidMount() {
        const { getFilters, getMovies } = this.props;
        this.loadDoggo();
        getFilters();
        getMovies();
    }

    render() {
        const { doggoUrl, isModalOpened } = this.state;
        const { likedDoggos } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <div className={`${CN}`}>
                    <div className={`${CN}__container`}>
                        <CustomButton />
                        <StyledButton/>
                        <Modal isOpen={isModalOpened} handleModalToggle={this.toggleModal}>
                            <img src={doggoUrl} alt="liked-doggo"/>
                        </Modal>
                        <Label/>
                        <div className={`${CN}__left-side`}>
                            <PetPreview imageUrl={doggoUrl}/>
                            <div>
                                <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
                                <Button label="Show doggo in modal" onClick={this.toggleModal}/>
                                <Button label="Like doggo" onClick={this.onLikeDoggo}/>
                                <Button label="Remove all doggos" onClick={this.removeAll}/>
                            </div>
                        </div>
                        <LikedPetsList list={likedDoggos} remove={this.deleteDoggo}/>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default HomePage;
