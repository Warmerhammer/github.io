import React from 'react';
import { Container, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import history from '../history';
import AnimatedButton from '../UI/button/animatedButton';

const SearchSegment = props => {
  // const [buttonIdNumber, setButtonIdNumber] = useState(0);

  // useEffect(() => {
  //   console.log('[Segment Index] ', props.currentSegmentIndex);
  // }, [props])

  return (
    <Container>
      <br />
      {props.search ? (
        <Segment>
          <Segment raised>
            <strong>{props.search}</strong>
          </Segment>
          <AnimatedButton
            segmentIndex={props.currentSegmentIndex}
            position="right"
            class="ui button black"
            title="Search"
          />
          <AnimatedButton
            segmentIndex={props.currentSegmentIndex}
            class="ui button black basic"
            position="left"
            title="Save"
            content={props.search}
          />
          <AnimatedButton
            segmentIndex={props.currentSegmentIndex}
            position="left"
            class="ui button black basic"
            title="Delete"
          />
          <br /> <br />
        </Segment>
      ) : null}
      <Divider />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentSegmentIndex: state.segments.currentSegmentIndex,
  };
};

export default connect(mapStateToProps)(SearchSegment);
