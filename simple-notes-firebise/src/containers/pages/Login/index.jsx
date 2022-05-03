import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserAPI } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";
import { createBrowserHistory } from "history";

class Login extends Component {
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

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const history = createBrowserHistory();
    const resp = await this.props.loginAPI({ email, password }).catch((err) => err);
    if (resp) {
      console.log("login success", resp);
      localStorage.setItem("userData", JSON.stringify(resp));
      this.setState({
        email: "",
        password: "",
      });
      history.push("/");
      // window.location.reload(true);
    } else {
      console.log("login failed");
    }
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login Page</p>
          <input className="input" id="email" type="text" value={this.state.email} placeholder="Email" onChange={this.handleChangeText} />
          <input className="input" id="password" type="password" value={this.state.password} placeholder="password" onChange={this.handleChangeText} />
          <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});
const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});
export default connect(reduxState, reduxDispatch)(Login);
