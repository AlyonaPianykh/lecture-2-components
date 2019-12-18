import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';

import './LikedPetsList.scss';
import {Button} from "../Button";

const CN = 'liked-pets-list';


function PetsListItem(props) {
  const { pet, onDelete } = props;

  return (
    <div className={`${CN}__item`} key={pet}>
      <img
        src={pet}
        alt="pet"
      />
      <DeleteIcon
        data-target={pet}
        className={`${CN}__btn--delete`}
        onClick={onDelete}
      />
    </div>
  );
}

export class LikedPetsList extends Component {

  delete = (id) => {
    const { remove } = this.props;

    return () => {
      remove && remove(id);
    }
  };

  onDeleteAllDoggos = () => {
    const { removeAll } = this.props;

    removeAll && removeAll()
  };

  render() {
    console.log('LikedPetsList render');

    const { list: urlList } = this.props;

    return (
      <div className={CN}>
        <Button
          label="Delete all"
          onClick={this.onDeleteAllDoggos}
          className={`${CN}__btn`}
        />
        {
          urlList.map(pet => {
            return (
              <PetsListItem
                key={pet}
                pet={pet}
                onDelete={this.delete(pet)}
              />
            );
          })
        }
      </div>
    );
  }
}
