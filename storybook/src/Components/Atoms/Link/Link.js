import React from 'react';
import classes from './Link.module.css';

import Aux from '../../../hoc/Aux';

const link = (props) => {
  return (
    <Aux>
      <div className={classes.Link}>Link</div>
    </Aux>
  );
};

export default link;
