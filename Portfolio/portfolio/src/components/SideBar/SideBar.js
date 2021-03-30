import React, { useState } from 'react';
import {
  Icon,
  Menu,
  Sidebar,
  Ref,
  Grid,
  Segment,
  Button,
} from 'semantic-ui-react';

import './SideBar.css';

export default function SideBar(props) {
  const [visible, setVisible] = useState(false);
  const [iconDisplay, setIconDisplay] = useState('inline');
  const [sideBarGridZIndex, setSideBarGridZIndex] = useState(-1);

  const segmentRef = React.useRef();

  function handleClick() {
    setVisible(prevVisible => !prevVisible);
    setSideBarGridZIndex(14000);
  }

  function handleHidden() {
    setIconDisplay('inline-block');
  }

  function handleVisible() {
    setIconDisplay('none');
  }

  function handleMenuClick (route) {
    props.aSetActiveItem(route);
    props.aMenuClick(route);

    handleClick();
  };

  return (
    <Grid stretched doubling container relaxed columns={1}>
      <Grid.Column
        className="IconGrid"
        style={{
          zIndex: '1',
          display: 'flex !important',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '2vh',
        }}
      >
        <Icon
          onClick={() => handleClick()}
          name="bars"
          style={{ display: `${iconDisplay}` }}
        />
      </Grid.Column>

      <Grid.Column
        className="SideBarGrid"
        style={{
          zIndex: `${sideBarGridZIndex}`,
          display: 'none',
          position: 'absolute',
          top: '0',
        }}
      >
        <Sidebar.Pushable
          className="MobileSideBar"
          style={{
            zIndex: '0',
            display: 'flex',
            position: 'relative',
            top: '0',
            left: '-4.5rem',
            width: '130%',
          }}
        >
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHidden={() => handleHidden()}
            onVisible={() => handleVisible()}
            onHide={() => setVisible(false)}
            target={segmentRef}
            vertical
            visible={visible}
            width="thin"
            style={{
              display: 'flex',
              width: '300px',
              zIndex: '12000',
              height: '100%',
              right: '0',
              left: '0',
              position: 'absolute',
            }}
          >
            {props.routes.map((route, index) => (
              // <Scroll.Link key={index}>
                <Menu.Item
                  className="SideBarMenuItem"
                  name={route.name}
                  key={index}
                  // to={route.name}
                  link={false}
                  onClick={() => handleMenuClick(route)}
                >
                  {route.name}
                </Menu.Item>
              /* </Scroll.Link> */
            ))}

            <Button
              className="ResumeButton"
              basic
              inverted
              style={{ bottom: '0', alignSelf: 'center', margin: '70vh 0 0 0', zIndex: '500000000' }}
              onClick={() =>
                window.open(
                  'https://na123.salesforce.com/sfc/p/3t000002kK7m/a/3t000000Dpi9/1MxOfMaCUpF.10cc4Dpyutl7_RJTxhO7PMYwH6lwleA',
                  '_top'
                )
              }
            >
              {'Resum\xE9'}
            </Button>
          </Sidebar>

          <Ref innerRef={segmentRef}>
            <Segment
              className="SideBarHiddenSegment"
              onClick={() => setSideBarGridZIndex(-1)}
              style={{
                position: 'absolute',
                width: '130%',
                height: '100%',
                left: '2rem',
                right: '-2rem',
                top: '0',
                bottom: '0',
                zIndex: `1100`,
                border: '1px solid red',
                padding: '0',
                margin: '0',
                opacity: '0',
              }}
            />
          </Ref>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
