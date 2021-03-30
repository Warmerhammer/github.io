import React from 'react';
import { Button, Container, Transition } from 'semantic-ui-react';

import './style.css';
import Dinosaur from './Chromium_T-Rex-error-offline.png';
import Cactus from './TransparentBlackCactus.png';

export default class BlockJumpingGame extends React.Component {
  constructor(props) {
    super(props);

    this.counterRef = React.createRef();
    this.characterRef = React.createRef();
    this.blockRef = React.createRef();

    this.counter = this.counterRef.current;

    this.state = {
      yesButtonColor: null,
      score: 0,
      animation: 'none',
      jumping: false,
      display: null,
      seconds: 3,
      margin: '0',
      started: false,
      visible: false,
    };
  }

  componentDidMount() {
    let block = this.blockRef.current;

    block.style.animation = 'none';
    this.setState({ display: 'Start game?' });
    setTimeout(() => {
      this.setState({ visible: true });
    }, 500)
  }

  componentDidUpdate() {
    if (this.props.greenButtonClick !== this.state.jumping) {
      this.jump();
      this.setState({ jumping: !this.state.jumping });
    } 

    if (this.blockRef.current.style.animation === 'none') {
      this.setState({ display: 'Start game?', jumping: false });
    }
  }

  startingGame() {
    this.setState({ seconds: 3, score: 0 });

    let startingGameInterval = setInterval(() => {
      this.setState({ display: this.state.seconds });
      if (this.state.seconds > 0) {
        let currentTime = this.state.seconds - 1;
        this.setState({ seconds: currentTime });
      } else {
        clearInterval(startingGameInterval);
        this.startGame();
      }
    }, 1000);
  }

  startGame() {
    let character = this.characterRef.current;
    let block = this.blockRef.current;

    this.setState({
      margin: '0',
      display: this.state.score,
      animation: 'block 2s linear infinite',
      started: true,
    });

    setInterval(() => {
      block.style.animation = this.state.animation;
      const blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue('left')
      );

      const characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue('bottom')
      );

      if ( blockLeft < 37 && blockLeft > 1 && characterTop <= 2) {
        this.setState({
          display: 'You lost...',
          started: false,
          animation: 'none',
        });
        setTimeout(() => {
          this.setState({ display: 'Restart game?' });
        }, 1000);
      }
    }, 10);
  }

  jump = () => {
    let character = this.characterRef.current;

    if (this.state.started) {
      character.style.animation = 'jump 700ms ease';

      this.setState({ score: this.state.score + 1, display: this.state.score });

      setTimeout(function () {
        character.style.animation = 'none';
      }, 500);
    }
  };

  handleYesClick() {
    this.startingGame();
  }

  handleNoClick() {
    console.log(this.props);
    this.props.noButton();
  }

  render() {
    return (
      <Transition
        animation="horizontal flip"
        duration={600}
        visible={this.state.visible}
        mountOnShow={false}
      >
        <div className="game">
          <div
            style={{ margin: `${this.state.margin}` }}
            ref={this.counterRef}
            className="counter"
          >
            {this.state.display}
          </div>
          <Container style={{ postion: 'absolute' }}>
            <br />
            {this.state.display === 'Restart game?' ||
            this.state.display === 'Start game?' ? (
              <Container>
                {' '}
                <Button
                  onClick={() => this.handleYesClick()}
                  style={{ position: 'relative' }}
                  basic
                >
                  Yes
                </Button>{' '}
                <Button
                  onClick={() => this.handleNoClick()}
                  style={{ position: 'relative' }}
                  basic
                >
                  No
                </Button>{' '}
              </Container>
            ) : null}
          </Container>
          <img
            ref={this.characterRef}
            className="character"
            src={Dinosaur}
            alt="Dino"
          />
          <img
            src={Cactus}
            ref={this.blockRef}
            className="block"
            alt="Cactus"
          />
        </div>
      </Transition>
    );
  }
}
