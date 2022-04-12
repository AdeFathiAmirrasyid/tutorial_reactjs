import React, { createContext, useReducer, Redirect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComp from "./component/HomeComp";
import LoginComp from "./component/LoginComp";
import NavbarComp from "./component/NavbarComp";
import RegisterComp from "./component/RegisterComp";

//Context
export const AuthContext = createContext();

// Inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
          <NavbarComp />
      <Routes>
        <AuthContext.Provider value={{ state,dispatch}}>
          {!state.isAuthenticated ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <Redirect to={{pathname: "/homepage",}}/>
          )}

          <Route exact path="/" element={<LoginComp />} />
          <Route exact path="/homepage" element={<HomeComp />} />
          <Route exact path="/register" element={<RegisterComp />} />
        </AuthContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
