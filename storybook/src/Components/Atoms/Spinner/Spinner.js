import React from 'react';
import classes from './Spinner.module.css';

import Aux from '../../../hoc/Aux';

const spinner = (props) => {
  return (
    <Aux>
      <div className={[classes.Spinner, classes[props.size]].join(' ')}>
        Loading...
      </div>
    </Aux>
  );
};

export default spinner;
