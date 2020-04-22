import React from 'react';
import classes from './Label.module.css';

import Aux from '../../../hoc/Aux';

const label = (props) => {
  return (
    <Aux>
      <label className={classes.Label}>Label</label>
    </Aux>
  );
};

export default label;
