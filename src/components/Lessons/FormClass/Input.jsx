import { PureComponent } from 'react';

export class Input extends PureComponent {
  componentDidUpdate() {
    console.log('Input did update');
  }
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.change}
      />
    );
  }
}
