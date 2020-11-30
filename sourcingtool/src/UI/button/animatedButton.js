import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  generateButton,
  buttonClick,
} from '../../store/actions/animatedButton';

const AnimatedButton = props => {
  const [btnClass, setButtonClass] = useState(props.class);
  const [iconImage, setIconImage] = useState(null);

  useEffect(() => {
    props.generateButton(props.title, props.segmentIndex);
  }, []);

  const onButtonHoverHandler = title => {
    console.log(props.btnArray);
    setIconImage(props.icon[props.title]);

    // let currentArray = props.btnArray[props.id - 1];

    // let newArray = _.filter(
    //   currentArray,
    //   _.matches({
    //     [props.id]: props.title,
    //   })
    // );

    // let arrayKey = _.toString(_.valuesIn(newArray[props.id - 1]));

   
  };

  const onMouseLeaveHandler = btnClass => {
    setButtonClass(btnClass);
  };

  const onButtonClickHandler = (title, segmentIndex) => {
    console.log(props.content);
    props.buttonClick(title, segmentIndex);
    onMouseLeaveHandler(props.class);
  };

  return (
    <Button
      animated="fade"
      className={btnClass}
      onMouseEnter={() => onButtonHoverHandler(props.title)}
      onMouseLeave={() => onMouseLeaveHandler(props.class)}
      floated={props.position}
      onClick={() => onButtonClickHandler(props.title, props.segmentIndex)}
    >
      <Button.Content visible>{props.title}</Button.Content>
      <Button.Content hidden>{<Icon name={iconImage} fitted />}</Button.Content>
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    icon: state.buttons.iconName,
    btnArray: state.buttons.buttons,
  };
};

export default connect(mapStateToProps, { generateButton, buttonClick })(
  AnimatedButton
);
