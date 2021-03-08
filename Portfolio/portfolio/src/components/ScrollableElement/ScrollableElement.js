import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import DynamicModule from '../DynamicModule';
import IntersectionObserver from '../IntersectionObserver';
import Home from '../Home';
import AboutMe from '../AboutMe/AboutMe';

import './ScrollableElement.css';

//styling container wrapper
const containerStyle = {
  maxWidth: '1280px',
  magin: ' 0 auto',
};

const App = () => {
  return (
    <div style={containerStyle}>
      <DynamicModule
        placeholder={<Home />}
        component={() => import('../Home')}
      />
      <IntersectionObserver
        onIntersection={() => console.log('intersection 1')}
      >
        <DynamicModule
          placeholder={<AboutMe />}
          component={() => import('../AboutMe/AboutMe')}
        />
      </IntersectionObserver>
    </div>
  );
};

export default App;
