import React, { useState, useEffect } from 'react';
import {
  Card,
  Image,
  Button,
  Icon,
  Container,
  Grid,
  Transition,
} from 'semantic-ui-react';

import VoteCount from './VoteCount';
import './Card.css';
import Portrait from '../BitMojiProfile.png';

export default function CardComponent(props) {
  const [vote, setVote] = useState(0);
  const [visible, setVisible] = useState(true);
  const [textColor, setTextColor] = useState(null);
  const [animation, setAnimation] = useState(null);
  const [cardVisible, setCardVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);

  const [greenIconName, setGreenIconName] = useState('thumbs up outline');
  const [greenButton, setGreenButton] = useState(true);

  const [redIconName, setRedIconName] = useState('thumbs down outline');

  useEffect(() => {
    setVisible(true);
    if (
      (redIconName !== 'x' && vote > 4) ||
      (redIconName !== 'x' && vote < -4)
    ) {
      setGreenIconName('arrow alternate circle up');
      setRedIconName('x');
      setAnimation('horizontal flip');
      setCardVisible(false);
      setButtonVisible(false);
      setTimeout(() => {
        setButtonVisible(true);
      }, 500);
    }
  }, [visible, vote, redIconName]);

  const thumbsUpMouseDown = () => {
    if (vote <= 4 && vote >= -4) {
      setVisible(false);
      setTextColor('#1d0503');
      setVote(vote + 1);
    } else {
      setGreenButton(!greenButton);
      setVisible(false);
    }
  };

  const thumbsDownMouseDown = () => {
    setVisible(false);

    if (vote > 4) {
      setVote(3);
      setVisible(false);
      setRedIconName('thumbs down outline');
      setGreenIconName('thumbs up outline');
      setCardVisible(true);
    } else if (vote < -4) {
      setVote(-3);
      setVisible(false);
      setRedIconName('thumbs down outline');
      setGreenIconName('thumbs up outline');
      setCardVisible(true);
    } else if (vote <= 4 || vote >= 4) {
      setVote(vote - 1);
      setTextColor('#9494FF');
    }
  };

  return (
    <Container className="cardContainer">
      <Card raised floated="right" style={{ margin: '0 0 0 0' }} className="Card">
        <Card.Content>
          <Image
            avatar
            size="massive"
            style={{ margin: '-.25em 0 1em 0' }}
            src={Portrait}
            floated="right"
          />

          <Card.Header style={{ color: '#222629' }}>
            Richard O'Donnell
          </Card.Header>
          <Card.Meta>Software Engineer</Card.Meta>
          <Transition
            animation={animation}
            visible={cardVisible}
            duration={500}
          >
            <Card.Description>
              Richard is a software engineer living in the Bay Area who enjoys
              being with family and playing soccer.
            </Card.Description>
          </Transition>
          <VoteCount
            greenButtonClick={greenButton}
            currentCount={vote}
            tallyColor={textColor}
            vis={visible}
            noClick={() => thumbsDownMouseDown()}
          />
        </Card.Content>
        <Card.Content extra>
          <Grid columns={2}>
            <Grid.Column verticalAlign="bottom">
              <Button className="LinkedInButton" basic onClick={() => window.open('https://www.linkedin.com/in/richardo510/', '_blank')}>
                Connect on{' '}
                <Icon
                  style={{
                    margin: '.4em 0 0 0',
                    color: '#2867B2',
                    border: 'none',
                  }}
                  name="linkedin"
                />
              </Button>
            </Grid.Column>
            <Transition visible={buttonVisible} duration={500} animation="fade">
              <Grid.Column verticalAlign={'bottom'} className="ui two buttons">
                <Button
                  onMouseDown={() => thumbsUpMouseDown()}
                  className="thumbsUpButton"
                >
                  <Icon
                    color="green"
                    
                    name={greenIconName}
                  />
                </Button>
                <Button
                  onClick={() => thumbsDownMouseDown()}
                  className="thumbsDownButton"
                >
                  <Icon name={redIconName} style={{ color: '#FF0000', }} />
                </Button>
              </Grid.Column>
            </Transition>
          </Grid>
        </Card.Content>
      </Card>
    </Container>
  );
}
