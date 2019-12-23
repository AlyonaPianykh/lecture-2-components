import React, { Component } from 'react';
import { GeoContext } from '../../context';

export const Label = () => {
  const renderLabel = (value) => {
    const { selectedGeo } = value;

    return (
      <div>SelectedGeo: {selectedGeo}</div>
    );
  };

  return (
    <GeoContext.Consumer>
      {renderLabel}
    </GeoContext.Consumer>
  );
};
