import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

const HeaderItem = props => {
  let butItem = <Menu.Item borderless position="right" color="black">{props.title}</Menu.Item>;

  if (props.pathName === props.history.location.pathname) {
    butItem = (
      <Button color="black">
        {props.title}
      </Button>
    );

    return butItem;
  }

  return (
    <NavLink exact to={props.pathName}>
      {butItem}
    </NavLink>
  );
};

export default withRouter(HeaderItem);
