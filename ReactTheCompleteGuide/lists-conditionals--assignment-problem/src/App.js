import React, { Component } from 'react';
import './App.css';
import CharComponent from './components/CharComponent';
import TextLength from './components/TextLength';

class App extends Component {
  state = {
    text: '',
  };

  changeTextHandler = event => {
    this.setState({ text: event.target.value });
  };

  charDeleteHandler = index => {
    const characters = [...this.state.text];

    characters.splice(index, 1);
    this.setState({ text: characters });
    console.log(this.state.text);
  };

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
    };

    let character = null;

    if (this.state.text.length > 0) {
      const textToCharArray = [...this.state.text];
      character = (
        <div>
          <ul>
            {textToCharArray.map((C, index) => {
              return (
                <CharComponent
                  style={style}
                  click={() => this.charDeleteHandler(index)}
                  char={C}
                />
              );
            })}
          </ul>
        </div>
      );
    }

    return (
      <div className="App">
        <input
          onChange={this.changeTextHandler}
          textLength={this.state.text.length}
        />
        <p>{this.state.text} </p>
        <TextLength textLength={this.state.text.length} />
        {character}
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
