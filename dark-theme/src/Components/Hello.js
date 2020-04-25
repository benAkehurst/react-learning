import React, { Component } from 'react';
import '../styles/Hello.scss';

class Hello extends Component {
  state = { status: false };

  handleDarkMode = () => {
    this.setState({ status: true });
    const hello = document.querySelector('.hello');
    const button = document.querySelector('.addDarkMode');
    hello.classList.add('dark');
    button.classList.add('dark');
  };

  handleLightMode = () => {
    this.setState({ status: false });
    const hello = document.querySelector('.hello');
    const button = document.querySelector('.addDarkMode');
    hello.classList.remove('dark');
    button.classList.remove('dark');
  };

  render() {
    return (
      <div className="hello">
        Hello World
        <button
          className="addDarkMode"
          type="button"
          onClick={
            this.state.status ? this.handleLightMode : this.handleDarkMode
          }
        >
          Switch to {this.state.status ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    );
  }
}

export default Hello;
