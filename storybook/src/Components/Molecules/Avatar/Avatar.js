import React, { Component } from 'react';
import classes from './Avatar.module.css';

import Aux from '../../../hoc/Aux';

class Avatar extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Avatar}>Avatar</div>
      </Aux>
    );
  }
}

export default Avatar;
