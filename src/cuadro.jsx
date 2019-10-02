/* eslint-disable no-unused-vars */
/* eslint-disable  class-methods-use-this */
import React from 'react';
import Title from './title/index.jsx';
import Robot from './Robot.jsx';
import DataInfo from './DataInfo.jsx';
import DiscButton from './button-dist/index.jsx';

require('./cuadro.css');

export default class Cuadro extends React.Component {
  render() {
    return (
      <div class='cuadro'>
        <div class='imagen'>
            <Robot />
            <Title />
            <DataInfo />
            <DiscButton />

        </div>
    </div>
    );
  }
}
