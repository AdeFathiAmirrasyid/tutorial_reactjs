import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";
import { Fragment } from "react";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div>
            <Navbar color="dark" expand="md" className="bg-info">
              <Container>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink to="/" className="nav-link">
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </NavItem>
                </Nav>
              </Container>
            </Navbar>
          </div>
          <Container>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
