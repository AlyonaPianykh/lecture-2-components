import React from 'react';
import { useTheme } from '@material-ui/core/styles';
// import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';

export const GEOS = [
  'Europe',
  'Asia',
  'US',
  'Canada'
];

const styles = {
    root: {
        background: 'red',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 36,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};

const Select = ({ selectedOption, onSelect, classes }) => {
     // const theme = useTheme();

  return (
    <select value={selectedOption} onChange={onSelect} className={classes.root}>
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



export default withStyles(styles)(Select);