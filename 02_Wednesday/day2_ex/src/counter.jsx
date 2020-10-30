import React, {  } from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    
    componentDidMount() {    document.title = `You clicked ${this.state.count} times`;  }  componentDidUpdate() {    document.title = `You clicked ${this.state.count} times`;  }
    
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me to increment
          </button>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            Click me to decrement
          </button>
        </div>
      );
    }
  }

  export default Counter;