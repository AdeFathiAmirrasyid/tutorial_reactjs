import React, { Component, Fragment } from "react";
import CardProduct from "./cardProduct/CardProduct";
// import { connect } from "react-redux";
import { RootContext } from "../../home/Home";

class Product extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <h1>Product</h1>
              <hr />
              <div>
                <div>{value.state.totalOrder}</div>
              </div>
              <p>Rp. 410.000</p>
              <CardProduct />
            </Fragment>
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

// export default connect(mapStateToProps)(Product);
export default Product;
