import React from 'react';
import classes from './Label.module.css';

import Aux from '../../../hoc/Aux';

const label = (props) => {
  return (
    <Aux>
      <div className={classes.Label}>Label</div>
    </Aux>
  );
};

export default label;
