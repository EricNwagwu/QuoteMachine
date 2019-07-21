import React, { Component } from "react";

class Lyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: [
        {
          lyric: "She's a rockstar everybody said don't date her",
          artist: "-Lil uzi vert"
        },
        { lyric: "Play with you like nintendo", artist: "-Young Nudy" },
        { lyric: "When I die put my money in the grave", artist: "-Drake" },
        { lyric: "Shoot your shot like ammunition", artist: "-Pierre Bourne" },
        { lyric: "Money sitting tall Yao Ming", artist: "-Playboi Carti" }
      ],
      currentLyric: {}
    };
    this.changeLyric = this.changeLyric.bind(this);
  }
  componentWillMount() {
    this.changeLyric();
  }

  changeLyric() {
    let ranLyric = Math.floor(Math.random() * this.state.lyrics.length);
    while (this.state.lyrics[ranLyric] === this.state.currentLyric) {
      ranLyric = Math.floor(Math.random() * this.state.lyrics.length);
    }
    this.setState({
      currentLyric: this.state.lyrics[ranLyric]
    });
  }

  render() {
    return (
      <div
        id="quote-box"
        style={{
          position: "relative",
          top: "40vh",
          width: "30vw",
          margin: "auto",
          background: "white",
          borderRadius: "10px"
        }}
        className="container-fluid"
      >
        <p
          id="text"
          className="text-center"
          style={{ fontSize: "2vw", fontFamily: "Patua One" }}
        >
          <i className="fa fa-music" style={{ color: this.props.colorNote }} />
          {this.state.currentLyric.lyric}
        </p>
        <p
          id="author"
          className="text-center"
          style={{
            fontSize: "1.5vw",
            position: "relative",
            left: "6vw",
            fontFamily: "Patua One Bold"
          }}
        >
          {this.state.currentLyric.artist}
        </p>
        <button
          id="new-quote"
          className="btn btn-primary"
          onClick={this.props.colorChange}
          onMouseUp={this.changeLyric}
        >
          New Lyric
        </button>
        <a
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          style={{ float: "right" }}
        >
          <i className="fa fa-twitter" />
          Post Lyric on Twitter
        </a>
        <p style={{ fontFamily: "Bangers" }}>By Ciren</p>
      </div>
    );
  }
}

export default Lyric;
