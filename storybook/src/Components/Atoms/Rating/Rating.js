import React from 'react';
import classes from './Rating.module.css';

import Aux from '../../../hoc/Aux';

const rating = (props) => {
  return (
    <Aux>
      <div className={classes.Rating}>Rating</div>
    </Aux>
  );
};

export default rating;
