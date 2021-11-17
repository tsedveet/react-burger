import React, { useContext } from "react";
import { Route } from "react-router";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const ShippingPage = (props) => {
  const context = useContext(BurgerContext);
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
        <strong>Дүн: {context.burger.totalPrice}₮</strong>
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

export default ShippingPage;
