import React, { Component } from 'react';
import classes from './SearchInput.module.css';

import Aux from '../../../hoc/Aux';

class SearchInput extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.SearchInput}>Search Input</div>
      </Aux>
    );
  }
}

export default SearchInput;
