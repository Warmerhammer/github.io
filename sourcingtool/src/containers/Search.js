import React, { useState } from 'react';
import { Input, Container, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Segment from '../components/search/segment';
import { deleteButton } from '../store/actions/animatedButton';

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const enterSearchHandler = e => {
    setSearchTerm(e.target.value);
  };

  const clearSearchHandler = () => {
    setSearchTerm('');
    props.deleteButton(props.segmentIndex-1);
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

export default connect(mapStateToProps, { deleteButton })(Search);
