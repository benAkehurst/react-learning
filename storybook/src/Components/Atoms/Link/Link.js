import React from 'react';
import classes from './Link.module.css';

import Aux from '../../../hoc/Aux';

const link = (props) => {
  return (
    <Aux>
      <a
        className={[classes.Link, classes[props.noStyles]].join(' ')}
        href={props.link}
      >
        {props.linkText}
      </a>
    </Aux>
  );
};

export default link;
