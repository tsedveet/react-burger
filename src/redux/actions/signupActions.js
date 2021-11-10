import axios from "axios";

export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());
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

        dispatch(signupUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });
  };
};
export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId,
  };
};
export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};
export const autoLogoutAfterMillisec = (ms) => {
  return function (dispatch) {

    // auto Logout code
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
