import React, { useState, useEffect } from 'react';
import { Input, Container, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Segment from './segment';
import { deleteButton } from '../store/actions/animatedButton';
import { savedSegmentsInit } from '../store/actions/segment';
import { segmentGenerate } from '../store/actions/segment';

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    props.savedSegmentsInit();
  }, [props]);

  const enterSearchHandler = e => {
    props.segmentGenerate(props.segmentIndex);
    setSearchTerm(e.target.value);
  };

  const clearSearchHandler = () => {
    setSearchTerm('');
    props.deleteButton(props.segmentIndex - 1);
  };

  return (
    <Container>
      <Input
        fluid
        type="text"
        placeholder="Enter search..."
        value={searchTerm}
        icon={
          <Icon
            color="black"
            inverted
            onClick={() => clearSearchHandler()}
            type="text"
            name="ban"
            link
          />
        }
        onChange={e => enterSearchHandler(e)}
      />
      <Segment search={searchTerm} />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    segmentIndex: state.buttons.currentSegmentIndex,
  };
};

export default connect(mapStateToProps, {
  deleteButton,
  savedSegmentsInit,
  segmentGenerate,
})(Search);
