import React from 'react';

import { ThemeContext } from '../../context';

import './Toggle.scss';

export const Toggle = (props) => {
  const { type = 'checkbox' } = props;

  const renderToggle = (value) => {
    const { isDarkTheme, switchDarkTheme } = value;

    return (
      <label className="toggle-wrap">
        <input type={type}
               checked={isDarkTheme}
               onChange={switchDarkTheme}
        />
        <div className="toggle-el">
          <div className="text">{isDarkTheme ? 'on' : 'off'}</div>
        </div>
      </label>
    );
  };

  return (
    <ThemeContext.Consumer>
      {renderToggle}
    </ThemeContext.Consumer>
  );
};