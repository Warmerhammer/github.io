import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../history';

import AnimatedButton from '../UI/button/animatedButton';
import { savedSegmentsInit } from '../store/actions/segment';

const Save = props => {

  const btnArraySeg = _.map(props.savedSegments, e => {
    return (
      <Segment key={e.key}>
        <Segment tertiary compact>{e.content}</Segment>
        <AnimatedButton
          segmentKey={e.key}
          segmentIndex={e.index}
          position="right"
          class="ui button black"
          title="Search"
        />
        <AnimatedButton
          segmentKey={e.key}
          segmentIndex={e.index}
          class="ui button black basic"
          position="left"
          title="Edit"
        />
        <AnimatedButton
          segmentKey={e.key}
          segmentIndex={e.index}
          position="left"
          class="ui button black basic"
          title="Delete"
          pathName={history.location.pathname}
        />
        <br /> <br />
      </Segment>
    );
  });

  return <Container>{btnArraySeg}</Container>;
};

const mapStateToProps = state => {
  return {
    savedSegments: state.segments.savedSegments,
    currentSegmentIndex: state.segments.currentSegmentIndex,
  };
};

export default connect(mapStateToProps, { savedSegmentsInit })(Save);
