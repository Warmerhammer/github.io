import React from 'react';
import { useState, useEffect } from 'react';
import './HomePage.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container } from 'semantic-ui-react';

import Home from '../Home';
import AboutMe from '../AboutMe/AboutMe';

const pages = [<Home />, <AboutMe />];

class HomePage extends React.Component {
  state = {
    items: Array.from({ length: 1 }),
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 1 })),
      });
    });
  };

  render() {
    return (
      <Container>
        <InfiniteScroll
          className="infiniteScroll"
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
        >
          {this.state.items.map(
            (i, index) => (
              (
                <Container key={index}>
                  {pages[index]}
                </Container>
              )
            )
          )}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default HomePage;
