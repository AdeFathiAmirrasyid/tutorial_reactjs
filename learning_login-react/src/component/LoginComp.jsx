import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import {
  Col,
  Container,
  Row,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  CardImg,
} from "reactstrap";

const query_st = require("querystring");

export default function LoginComp() {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    const requestBody = {
      email: data.email,
      password: data.password,
    };

    const config = {
      headers: {
        "Content-Type": "aplication/x-www-form-urlencoded",
      },
    };

    axios.post("http://localhost:3001" + "/auth/api/v1/login",query_st.stringify(requestBody),config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        } else {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: res.data.Message,
          });
        }
        throw res;
      });
  };
  return (
    <Fragment>
      <Container>
        <br />
        <Row>
          <Col>
            <CardImg
              alt="Card image cap"
              src="https://placeimg.com/640/380/tech"
              top
              width="100%"
            />
          </Col>
          <Col>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  value={data.email}
                  onClick={handleInputChange}
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  value={data.password}
                  onClick={handleInputChange}
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>

              {data.errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {data.errorMessage}
                </div>
              )}
              <Button disabled={data.isSubmitting}>
                {" "}
                {data.isSubmitting ? "...Loading" : "Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
