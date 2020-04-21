import React from 'react';
import classes from './Input.module.css';

import Aux from '../../../hoc/Aux';

const input = (props) => {
  return (
    <Aux>
      <div className={classes.Input}>Input</div>
    </Aux>
  );
};

export default input;
