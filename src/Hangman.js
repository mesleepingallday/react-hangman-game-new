import React, { Component } from "react";
import { randomWord } from "./RandomWord.js";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/5.jpg";
import image4 from "./image/6.jpg";
import image5 from "./image/7.jpg";
import image6 from "./image/8.jpg";
import image7 from "./image/9.jpg";
import image8 from "./image/10.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
  };

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "  _  "));
  }

  handleGuess(event) {
    let letter = event.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  generateKeypad() {
    return "abcdefghiklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Congrats, You have won the game";
    if (gameOver) gameState = "Better Luck Next Time";
    let restart = gameOver || isWinner;
    return (
      <div className="Hangman">
        <h2>Hangman</h2>
        <img src={this.props.images[this.state.noOfWrong + 1]} alt="Hangman" />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the Programming Language</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>

        <p className="Hangman-btns">{gameState}</p>

        {restart && (
          <button id="reset" onClick={this.reset}>
            Restart?
          </button>
        )}
      </div>
    );
  }
}

export default Hangman;
