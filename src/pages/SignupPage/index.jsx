import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";

const Signup = (props) => {
  const ctx = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password1, setPassowrd1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   setPassword2(email);
  // }, [email]);

  const signup = () => {
    if (password1 === password2) {
      ctx.signupUser(email, password1);
    } else {
      setError("Нууц үг хоорондоо таарахгүй байна.");
    }
  };
  return (
    <div className={css.Signup}>
      {ctx.state.userId && <Redirect to="/" />}
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
        {ctx.state.saving && <Spinner />}
        {ctx.state.error && (
          <div style={{ color: "red" }}>{ctx.state.error}</div>
        )}
        <Button text="Бүртгүүлэх" btnType="Success" daragdsan={signup} />
      </div>
    </div>
  );
};

export default Signup;
