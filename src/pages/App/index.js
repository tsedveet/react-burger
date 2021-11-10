import React, { useState, useEffect, Suspense } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import { Redirect, Route, Switch } from "react-router";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import * as signupActions from "../../redux/actions/signupActions";
import BurgerContext from "../../context/BurgerContext";

const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});

const App = (props) => {
  const [showSidebar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    // const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa n duusaagui token bn, auto Login hiine.
        props.autoLogin(token, userId);
        // Token huchingui bolohod uldej baigaa hugatsaaag tootsoolj
        // Ter hugatsaanii daraa auto Logout hiine.
        props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime
        );
      } else {
        // Token hugatsaa n duussan bn, auto Logout hiine.
        props.logout();
      }
    }
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
          {props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/">
                <BurgerContext.Provider value={"" + showSidebar}>
                  <BurgerPage />
                </BurgerContext.Provider>
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </Suspense>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: () =>
      dispatch(signupActions.autoLogoutAfterMillisec()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
