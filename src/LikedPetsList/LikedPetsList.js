import React from 'react';
import './LikedPetsList.scss';

const CN = 'liked-pets-list';

export const LikedPetsList = (props) => {
  const { list } = props;
  return (
    <div className={CN}>
      {
        list.map(pet => {
          return (
            <img
              key={pet}
              src={pet}
              alt="pet"
            />
          )
        })
      }
    </div>
  );
};