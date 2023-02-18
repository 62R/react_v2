import { Component } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export class Form extends Component {
  state = {
    visible: true,
    name: 'geekbrains',
    count: 0,
  };

  componentDidMount() {
    console.log('form did mount');
  }

  componentDidUpdate() {
    console.log('form did update');
  }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  handleChangeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h2>Class component</h2>
        <button onClick={this.handleVisible}>
          {this.state.visible ? 'hide' : 'show'}
        </button>
        {this.state.visible && (
          <Button
            count={this.state.count}
            changeCount={this.handleChangeCount}
          />
        )}
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handleChangeName} />
      </>
    );
  }
}
