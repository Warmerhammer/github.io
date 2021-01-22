import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

import HeaderItem from './headerItems';

const Header = () => {
  return (
    <Container>
      <Menu color="black">
        <HeaderItem title="Home" pathName="/" />
        <HeaderItem title="Projects" pathName="/Projects" />
        <HeaderItem title="Saved Searches" pathName="/SavedSearches" />
      </Menu>
    </Container>
  );
};

export default Header;
