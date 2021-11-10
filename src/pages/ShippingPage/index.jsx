import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";

const ShippingPage = (props) => {
  const cancelOrder = () => {
    props.history.goBack();
  };

  const showContactData = () => {
    props.history.replace("/ship/contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p className="font-mono text-yellow-700">
        Таны захиалга амттай байна гэж найдаж байна...
      </p>
      <p className="font-mono text-yellow-700">
        <strong>Дүн: {props.price}₮</strong>
      </p>
      <Burger />
      <Button
        daragdsan={cancelOrder}
        btnType="Danger"
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
      />
      <Button
        daragdsan={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />
      <Route path="/ship/contact">
        <ContactData />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
