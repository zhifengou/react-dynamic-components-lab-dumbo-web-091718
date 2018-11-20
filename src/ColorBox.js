import React, { Component } from 'react';

export default class ColorBox extends Component {
  
<<<<<<< HEAD
   render() {
=======
  render() {
      render() {
>>>>>>> 8a4247a7c087fc233fdd050366b2132b432a6a8c
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox className="color-box" opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
    )
  }
  
}
