import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Container extends Component {
  render() {
    const style={
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

//why is this being export here?
export default GoogleApiComponent({
  apiKey: AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
})(Container)
