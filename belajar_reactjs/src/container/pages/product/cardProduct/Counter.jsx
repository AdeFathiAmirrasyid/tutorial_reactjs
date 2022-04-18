import React, { Component } from "react";
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContext } from "../../../home/Home";

class Counter extends Component {
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  // handelPlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };
  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };
  render() {
    console.log(this.props);
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log('value',value)
          return (
            <div>
              <button onClick={() => value.dispatch({type: 'MINUS_ORDER'})}>-</button>
              <input type="text" value={value.state.totalOrder} />
              <button onClick={() => value.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
