import React from "react";

//Higher Order Component definition

function WithHoc(OriginalComponent) {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };
    HandleCount() {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          HandleCount={this.HandleCount.bind(this)}
        />
      );
    }
  }
  return NewComponent;
}

export default WithHoc;
