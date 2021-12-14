import React from 'react'

const Bands = ({ bands }) => {
  debugger;
  const renderBands = bands.map((band, id) => {
    return <li key={id}>{band.name}</li>
  })
  return (
    <div>{renderBands}</div>
  );
};

export default Bands;