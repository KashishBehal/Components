import React from "react";

class PureCount extends React.PureComponent {
  render() {
    return <h1>Count : {this.props.count}</h1>;
  }
}

export default PureCount;