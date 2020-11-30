import React from 'react';
import { Item } from 'semantic-ui-react';

const Save = () => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src="/images/wireframe/image.png" />

      <Item.Content>
        <Item.Header as="a">Cute Dog</Item.Header>
        <Item.Description>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="small" src="/images/wireframe/image.png" />

      <Item.Content>
        <Item.Header as="a">Cute Dog</Item.Header>
        <Item.Description>
          <p>
            I'm baby cloud bread forage fashion axe tilde ramps normcore.
            Stumptown lomo distillery woke. Kitsch messenger bag distillery,
            letterpress venmo DIY chicharrones tbh cloud bread coloring book
            health goth hell of. Ennui butcher meditation next level quinoa,
            mixtape pug fam aesthetic. Man bun etsy mixtape gluten-free pabst
            ennui stumptown roof party farm-to-table sartorial bitters cardigan
            offal lomo. Shaman bespoke man braid tacos, flexitarian vinyl
            hexagon.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="small" src="/images/wireframe/image.png" />
      <Item.Content header="Cute Dog" />
    </Item>
  </Item.Group>
);

export default Save;
