import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";

const Login = (props) => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    ctx.loginUser(email, password);
  };

  return (
    <div className={css.Login}>
      {ctx.state.userId && <Redirect to="/orders" />}

      <input onChange={changeEmail} type="text" placeholder="Email хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {ctx.state.logginIn && <Spinner />}
      {ctx.state.error && (
        <div style={{ color: "red" }}>
          {ctx.state.error ? "Email эсвэл нууц үг буруу байна!!!" : null}
        </div>
      )}
      <Button text="Нэвтрэх" btnType="Success" daragdsan={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    firebaseErrorCode: state.signupReducer.firebaseErrorCode,
    userId: state.signupReducer.userId,
  };
};


export default Login;
