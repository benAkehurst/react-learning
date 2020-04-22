import React from 'react';
import classes from './Image.module.css';

import Aux from '../../../hoc/Aux';

/**
 * Props:
 * imageLink - a url for the image
 * altText - alt text for the image
 */

const image = (props) => {
  return (
    <Aux>
      <img
        className={classes.Image}
        src={props.imageLink}
        alt={props.altText}
      />
    </Aux>
  );
};

export default image;
