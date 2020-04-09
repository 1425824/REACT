import React from 'react';
import { GithubPicker } from 'react-color';
import Canvas from './Canvas';

export default class ColorPicker extends React.Component {
  state = {
    background: '#b80000',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    console.warn(this.state.background);
  };


  render() {
    return (
      <div>
      <GithubPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
      <Canvas color={this.state.background}/>
      </div>
    );
    
  }
}