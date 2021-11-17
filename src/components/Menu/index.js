import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { Fragment, useContext } from "react";
import UserContext from "../../context/UserContext";

const Menu = (props) => {
  const ctx = useContext(UserContext);
  return (
    <div>
      <ul className={css.Menu}>
        {ctx.state.userId ? (
          <>
            <MenuItem exact link="/">
              ШИНЭ ЗАХИАЛГА
            </MenuItem>
            <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
            <MenuItem link="/logout">ГАРАХ</MenuItem>
          </>
        ) : (
          <Fragment>
            <MenuItem link="/login">НЭВТРЭХ</MenuItem>
            <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
          </Fragment>
        )}
      </ul>
    </div>
  );
};


export default Menu;
