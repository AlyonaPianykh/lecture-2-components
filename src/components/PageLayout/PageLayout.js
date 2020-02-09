import React, { Component } from 'react';
import { ThemeContext, GeoContext } from '../../context';
import clsx from 'clsx';
import './PageLayout.scss';

const CN = 'awesome-app-page-layout';

class PageLayout extends Component {
  state = {
    isDarkTheme: false,
    selectedGeo: 'Asia'
  };

  switchDarkTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    });
  };

  selectGeo = (event) => {
    debugger;
    const newGeo = event.target.value;

    this.setState({
      selectedGeo: newGeo
    })
  };

  render() {
    const { isDarkTheme, selectedGeo } = this.state;
    const { children } = this.props;

    return (
      <GeoContext.Provider
        value={{
          selectedGeo,
          selectGeo: this.selectGeo
        }}
      >
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            switchDarkTheme: this.switchDarkTheme
          }}
        >
          <div className={
            clsx(CN, {
              [`${CN}--dark`]: isDarkTheme
            })}>
            {children}
          </div>
        </ThemeContext.Provider>
      </GeoContext.Provider>
    );
  }
}


export default PageLayout;