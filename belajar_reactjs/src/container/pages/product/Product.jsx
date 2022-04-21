import React, { Component, Fragment } from "react";
import CardProduct from "./cardProduct/CardProduct";
import {GlobalConsumer} from "../../../context/context";
// import { connect } from "react-redux";

class Product extends Component {
  render() {
    console.log(this);
    return (
      <Fragment>
        <h1>Product</h1>
        <hr />
        <div>
          <div>{this.props.state.totalOrder}</div>
        </div>
        <p>Rp. 410.000</p>
        <CardProduct />
      </Fragment>
    );
  }
}
export default GlobalConsumer(Product);
