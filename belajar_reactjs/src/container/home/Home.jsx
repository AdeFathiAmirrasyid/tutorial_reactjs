//libraries
import React, { Component, Fragment, createContext } from "react";

//pages
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import BlogPost from "../pages/blogPost/BlogPost";
import Product from "../pages/product/Product";
import LifeCycleComp from "../pages/lifecycleComp/LifeCycleComp";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import YouTubeCompPage from "../pages/youTubeCompPage/YouTubeCompPage";
import DetailPost from "../pages/blogPost/detailPost/DetailPost";

export const RootContext = createContext();
const Provider = RootContext.Provider;

export default class Home extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  constructor(props) {
    super(props);

    this.state = {
      showComponent: true,
      totalOrder: 0,
    };
  }

  dispatch = (action) => {
    if (action.type === "PLUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }
    if (action.type === "MINUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder - 1,
      });
    }
  };
  render() {
    return (
      <Router>
        <Provider value={{
          state: this.state,
          dispatch: this.dispatch
        }}>
          <Fragment>
            <div>
              <Navbar color="dark" expand="md" className="bg-info">
                <Container>
                  <Nav className="me-auto" navbar>
                    <NavItem>
                      <NavLink to="/" className="nav-link">
                        Blog Post
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/product" className="nav-link">
                        Product
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/lifecycle" className="nav-link">
                        LifeCycleComp
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/youtube-component" className="nav-link">
                        Youtube
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Container>
              </Navbar>
            </div>
            <Container>
              <Routes>
                <Route exact path="/" element={<BlogPost />} />
                <Route exact path="/detail-post/:id" element={<DetailPost />} />
                <Route exact path="/product" element={<Product />} />
                <Route exact path="/lifecycle" element={<LifeCycleComp />} />
                <Route exact path="/youtube-component" element={<YouTubeCompPage />} />
              </Routes>
            </Container>
          </Fragment>
        </Provider>
      </Router>
    );
  }
}
