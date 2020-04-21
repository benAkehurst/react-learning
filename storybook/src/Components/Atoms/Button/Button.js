import React from 'react';
import classes from './Button.module.css';

import Aux from '../../../hoc/Aux';

const button = (props) => {
  return (
    <Aux>
      <div className={classes.Button}>Button</div>
    </Aux>
  );
};

export default button;
