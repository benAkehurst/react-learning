import React from 'react';
import classes from './Loader.module.css';

import Aux from '../../../hoc/Aux';

const loader = (props) => {
  return (
    <Aux>
      <div className={classes.Loader}>Loader</div>
    </Aux>
  );
};

export default loader;
