import React, { useState, Suspense, useContext, useEffect } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import { Redirect, Route, Switch } from "react-router";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Logout from "../../components/Logout";
import { BurgerStore } from "../../context/BurgerContext";
import { OrderStore } from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";

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
  const userCtx = useContext(UserContext);
  const [showSidebar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa n duusaagui token bn, auto Login hiine.
        userCtx.loginUserSuccess(token, userId, expireDate, refreshToken);
        // Token huchingui bolohod uldej baigaa hugatsaaag tootsoolj
        // Ter hugatsaanii daraa auto Logout hiine.

        userCtx.autoRenewTokenAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        // Token hugatsaa n duussan bn, auto Logout hiine.
        // userCtx.logout();
        userCtx.autoRenewTokenAfterMillisec(3600000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <BurgerStore>
          <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
            {userCtx.state.userId ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders">
                  <OrderStore>
                    <OrderPage />
                  </OrderStore>
                </Route>

                <Route path="/ship" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Redirect to="/login" />
              </Switch>
            )}
          </Suspense>
        </BurgerStore>
      </main>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: (token, userId) =>
//       dispatch(actions.loginUserSuccess(token, userId)),
//     logout: () => dispatch(signupActions.logout()),
//     autoLogoutAfterMillisec: () =>
//       dispatch(signupActions.autoLogoutAfterMillisec()),
//   };
// };

export default App;
