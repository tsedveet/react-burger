import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  errorCode: null,
  token: null,
  userId: null,
  expireDate: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSuccess = (token, userId, expireDate, refreshToken) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expireDate", expireDate);
    localStorage.setItem("refreshToken", refreshToken);

    setState({
      ...state,
      logginIn: false,
      error: null,
      errorCode: null,
      token,
      userId,
      expireDate,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresDate");
    localStorage.removeItem("refreshToken");
    setState({ initialState });
  };

  const autoRenewTokenAfterMillisec = (milliSec) => {
    // token shinechleh code
    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",
        {
          grant_type: "refresh_token",
          refresh_token: localStorage.getItem("refreshToken"),
        }
      )
      .then((result) => {
        const token = result.data.id_token;
        const userId = result.data.user_id;

        const expiresIn = result.data.expires_in;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refresh_token;

        loginUserSuccess(token, userId, expireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
          expireDate: null,
        });
      });
    // auto Logout code
    setTimeout(() => {
      // logout();
      autoRenewTokenAfterMillisec(3600000);
    }, milliSec);
  };

  const loginUser = (email, password) => {
    setState({ ...state, logginIn: true });
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",
        data
      )
      .then((result) => {
        // localStorage ruu hadgalana.
        console.log("Logged in =======>", result.data);
        console.log(new Date());
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        loginUserSuccess(token, userId, expireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
          expireDate: null,
        });
      });
  };

  const signupUser = (email, password) => {
    setState({ ...state, saving: true });
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",
        data
      )
      .then((result) => {
        // localStorage ruu hadgalana.
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          token,
          userId,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          faving: false,
          token: null,
          userId: null,
          error: err.message,
          errorCode: err.code,
        });
      });
  };
  return (
    <UserContext.Provider
      value={{
        state,
        signupUser,
        loginUser,
        logout,
        loginUserSuccess,
        autoRenewTokenAfterMillisec,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
