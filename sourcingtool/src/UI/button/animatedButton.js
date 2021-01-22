import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import {
  generateButton,
  buttonClick,
} from '../../store/actions/animatedButton';

import { segmentSave, segmentDelete } from '../../store/actions/segment';

const AnimatedButton = props => {
  const [btnClass, setButtonClass] = useState(props.class);
  const [iconImage, setIconImage] = useState(null);

  useEffect(() => {
    props.generateButton(props.title, props.segmentIndex);
  }, []);

  const onButtonHoverHandler = title => {
    // console.log(props.btnArray);
    // console.log(props.savedSegments);
    setIconImage(props.icon[props.title]);
  };

  const onMouseLeaveHandler = btnClass => {
    setButtonClass(btnClass);
  };

  const onButtonClickHandler = (
    e,
    btnClicked,
    segmentIndex,
    content,
    segmentKey,
    pathName
  ) => {
    e.preventDefault();
    if (btnClicked === 'Save') {
      props.segmentSave(
        segmentIndex,
        props.btnArray[segmentIndex],
        btnClicked,
        content
      );
    } else if (btnClicked === 'Delete') {
      props.segmentDelete(segmentKey, pathName);
    }
  };

  return (
    <Button
      animated="fade"
      className={btnClass}
      onMouseEnter={() => onButtonHoverHandler(props.title)}
      onMouseLeave={() => onMouseLeaveHandler(props.class)}
      floated={props.position}
      onClick={e =>
        onButtonClickHandler(
          e,
          props.title,
          props.segmentIndex,
          props.content,
          props.segmentKey,
          props.pathName
        )
      }
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
    savedSegments: state.segments.savedSegments,
  };
};

export default connect(mapStateToProps, {
  segmentSave,
  segmentDelete,
  generateButton,
  buttonClick,
})(AnimatedButton);
