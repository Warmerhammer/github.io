import React, { useState, useEffect } from 'react';
import {
  Card,
  Image,
  Button,
  Icon,
  Sticky,
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
  const [greenButtonColor, setGreenButtonColor] = useState('none');

  const [redIconName, setRedIconName] = useState('thumbs down outline');

  useEffect(() => {
    setVisible(true);
    if (
      (redIconName !== 'x' && vote > 4) ||
      (redIconName !== 'x' && vote < -4)
    ) {
      setGreenIconName('arrow alternate circle up');
      setRedIconName('x');
      setGreenButtonColor('green');
      setAnimation('horizontal flip');
      setCardVisible(false);
      setButtonVisible(false);
      setTimeout(() => {
        setButtonVisible(true);
      }, 500);
    }
  }, [visible, vote]);

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
      setGreenButtonColor('#222629');
      setCardVisible(true);
    } else if (vote < -4) {
      setVote(-3);
      setVisible(false);
      setRedIconName('thumbs down outline');
      setGreenIconName('thumbs up outline');
      setGreenButtonColor('#222629');
      setCardVisible(true);
    } else if (vote <= 4 || vote >= 4) {
      setVote(vote - 1);
      setTextColor('#9494FF');
    }
  };

  return (
    <Sticky>
      <Card raised floated="right" style={{ margin: '0 0 0 0' }}>
        <Card.Content>
          <Image
            avatar
            size="massive"
            style={{ margin: '-.25em 0 1em 0' }}
            src={Portrait}
            floated="right"
          />

          <Card.Header style={{ color: '#2e0a05' }}>
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
              <Button className="LinkedInButton" basic>
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
                    color="red"
                    style={{ color: `${greenButtonColor}` }}
                    name={greenIconName}
                  />
                </Button>
                <Button
                  onClick={() => thumbsDownMouseDown()}
                  className="thumbsDownButton"
                >
                  <Icon color="red" name={redIconName} />
                </Button>
              </Grid.Column>
            </Transition>
          </Grid>
        </Card.Content>
      </Card>
    </Sticky>
  );
}
