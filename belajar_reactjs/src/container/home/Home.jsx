//libraries
import React, { Component, Fragment } from "react";

//pages
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import BlogPost from "../pages/blogPost/BlogPost";
import Product from "../pages/product/Product";
import LifeCycleComp from "../pages/lifecycleComp/LifeCycleComp";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import YouTubeCompPage from "../pages/youTubeCompPage/YouTubeCompPage";
import DetailPost from "../pages/blogPost/detailPost/DetailPost";
import GlobalProvider from "../../context/context";
import Hooks from "../pages/hooks/Hooks";

class Home extends Component {
  render() {
    return (
      <Router>
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
                    <NavItem>
                      <NavLink to="/hooks" className="nav-link">
                       Hooks
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
                <Route exact path="/hooks" element={<Hooks />} />
              </Routes>
            </Container>
          </Fragment>
      </Router>
    );
  }
}
export default GlobalProvider(Home);
