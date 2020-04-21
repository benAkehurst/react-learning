import React from 'react';
import classes from './Image.module.css';

import Aux from '../../../hoc/Aux';

const image = (props) => {
  return (
    <Aux>
      <div className={classes.Image}>Image</div>
    </Aux>
  );
};

export default image;
