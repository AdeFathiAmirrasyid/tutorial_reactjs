import React, { Component } from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = async () => {
    const { email, password } = this.state;
    const resp = await this.props.registerAPI({ email, password }).catch((err) => err);
    if (resp) {
      this.setState({
        email: "",
        password: "",
      });
    }
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <input className="input" id="email" type="text" value={this.state.email} placeholder="Email" onChange={this.handleChangeText} />
          <input className="input" id="password" type="password" value={this.state.password} placeholder="password" onChange={this.handleChangeText} />
          <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
        </div>
        {/* <button>Dashboard</button> */}
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});
const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});
export default connect(reduxState, reduxDispatch)(Register);
