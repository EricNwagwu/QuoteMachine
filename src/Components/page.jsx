import React, { Component } from "react";
import Lyric from "./lyric";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        background: `rgba(${[
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ]})`,
        width: "100vw",
        height: "100vh"
      }
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    this.setState({
      styles: {
        background: `rgb(${rgb})`,
        width: "100vw",
        height: "100vh"
      }
    });
  }
  render() {
    return (
      <div style={this.state.styles}>
        <Lyric
          colorChange={this.handleData}
          colorNote={this.state.styles.background}
        />
      </div>
    );
  }
}

export default Page;
