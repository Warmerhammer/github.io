import React, { useState } from 'react';
import { Container, Transition, Icon } from 'semantic-ui-react';

import BlockJumpingGame from '../../components/BlockJumpingGame/app';

export default function VoteCount(props) {
  const [tallyTextColor, setTallyTextColor] = useState('#222929');
  const [tally, setTally] = useState(0);
  const [textAlign, setTextAlign] = useState('right');
  const [animation, setAnimation] = useState('scale');

  const handleStart = () => {
    if (props.currentCount === 0) {
      setTally(0);
    } else if (props.currentCount > 0 && props.currentCount <= 2) {
      setTally(`+${props.currentCount}`);
    } else if (props.currentCount < 0 && props.currentCount >= -2) {
      setTally(`${props.currentCount}`);
    } else if (props.currentCount === 3) {
      setTally(<Icon name="smile outline" />);
      setTextAlign('right');
      setAnimation('scale');
    } else if (props.currentCount === -3) {
      setTally(<Icon name="frown outline" />);
      setTextAlign('right');
      setAnimation('scale');
    } else if (props.currentCount === 4 || props.currentCount === -4) {
      setTally(<Icon name="meh outline" />);
      setTextAlign('right');
      setAnimation('scale');
    } else if (props.currentCount > 4 || props.currentCount < -4) {
      setTextAlign('left');
      setAnimation('null');
      setTally(<BlockJumpingGame noButton={props.noClick} greenButtonClick={props.greenButtonClick} />);
    }

    setTallyTextColor(props.tallyColor);
  };

  return (
    <Transition
      animation={animation}
      unmountOnHide={true}
      // onShow={() => console.log('show')}
      onComplete={() => setTallyTextColor('#394045')}
      onStart={() => handleStart()}
      mountOnShow={true}
      transitionOnMount={true}
      duration={500}
      visible={props.vis}
    >
      <Container
        style={{ color: `${tallyTextColor}`, fontWeight: 700 }}
        textAlign={textAlign}
      >
        {tally}
      </Container>
    </Transition>
  );
}
