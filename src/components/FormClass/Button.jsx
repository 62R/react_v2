import { Component, createRef } from 'react';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.myRef = createRef();
    console.log(props);
  }

  componentDidMount() {
    console.log('button did mount');
    this.interval = setInterval(() => {
      console.log(1);
    }, 1000);
    console.log(this.myRef);
  }

  componentDidUpdate() {
    console.log('button did update');
  }

  componentWillUnmount() {
    console.log('button will unmount');
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
        <p ref={this.myRef}>{this.props.count}</p>
        <button onClick={this.props.changeCount}>+1</button>
      </>
    );
  }
}
