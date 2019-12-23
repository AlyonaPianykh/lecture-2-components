import React from 'react';
import logo from '../../logo.svg';
import { Select } from '../Select';
import { GeoContext } from '../../context';

import {
  Link
} from 'react-router-dom';

import { Toggle } from '../Toggle';
import './Header.scss';

const CN = 'default-header';

export const Header = ({ className, greeting = 'test', showLogo, children, likedDoggos }) => {
  const renderHeader = (themeProps) => {
    const { selectedGeo, selectGeo } = themeProps;

    console.log('selectedGeo', selectedGeo);
    return (
      <header className={`${CN} ${className}`}>
        {showLogo && (
          <img src={logo} className={`${CN}-logo`} alt="logo"/>
        )
        }

        {greeting}
        {children}

        <Link to="/" className={`${CN}__link`}>Home</Link>
        <Link to="/doggos" className={`${CN}__link`}>Doggos</Link>

        <div className="left-block">
          <Select selectedOption={selectedGeo} onSelect={selectGeo}/>
          <Toggle/>
          <div className={`${CN}__likes`}>liked count:
            <div className={`${CN}__counter`}>
              {likedDoggos.length}
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <GeoContext.Consumer>
      {renderHeader}
    </GeoContext.Consumer>
  );
};