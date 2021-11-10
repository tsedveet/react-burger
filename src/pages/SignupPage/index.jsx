import React, { useState, useEffect } from "react";
import * as actions from "../../redux/actions/signupActions";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassowrd1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   setPassword2(email);
  // }, [email]);

  const signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("Нууц үг хоорондоо таарахгүй байна.");
    }
  };
  return (
    <div className={css.Signup}>
      {props.userId && <Redirect to="/" />}
      <div>
        <p>Та өөрийн мэдээллээ оруулна уу.</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email хаяг"
        />
        <input
          onChange={(e) => setPassowrd1(e.target.value)}
          type="password"
          placeholder="Нууц үг"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Нууц үгээ давт"
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        {props.saving && <Spinner />}
        {props.firebaseError && (
          <div style={{ color: "red" }}>{props.firebaseError}</div>
        )}
        <Button text="Бүртгүүлэх" btnType="Success" daragdsan={signup} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
