import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";

const Logout = (props) => {
  const ctx = useContext(UserContext);
  useEffect(() => {
    ctx.logout();
  }, [ctx]);

  return <Redirect to="/" />;
};

export default Logout;
