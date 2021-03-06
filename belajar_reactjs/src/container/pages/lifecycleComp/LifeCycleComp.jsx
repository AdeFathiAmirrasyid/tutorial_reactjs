import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { GlobalConsumer } from "../../../context/context";
// import { connect } from "react-redux";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log('nextProps', nextProps);
    console.log("nextState", nextState);
    console.log("this state", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>LifeCycle Component</h1>
        <hr />
        <Button variant="primary" onClick={this.changeCount}>
          {" "}
          Component {this.state.count}
        </Button>
        <hr />
        <p>Total Order: {this.props.state.totalOrder}</p>
      </Fragment>
    );
  }
}
export default GlobalConsumer(LifeCycleComp);
