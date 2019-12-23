import React from 'react';

export const GEOS = [
  'Europe',
  'Asia',
  'US',
  'Canada'
];

export const Select = ({ selectedOption, onSelect }) => {

  return (
    <select value={selectedOption} onChange={onSelect}>
      <option disabled>Choose your geo</option>
      {
        GEOS.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )
      }
    </select>
  );
};