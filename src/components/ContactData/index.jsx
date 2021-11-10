import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router";
import * as actions from "../../redux/actions/orderActions";

const ContactData = (props) => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const dunRef = useRef();

  useEffect(() => {
    console.log("contact data effect... ");
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      props.history.replace("/orders");
    }

    return () => {
      // Tseverlegch function : Zahialgiig butsaagaad hoosolno. Daraachiin zahialgad beltgene gesen ug.
      console.log("Order clearing...");
      props.clearOrder();
    };
  }, [props.newOrderStatus.finished]);

  const changeName = (e) => {
    if (dunRef.current.style.color === "red")
      dunRef.current.style.color = "green";
    else dunRef.current.style.color = "red";
    setName(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      userId: props.userId,
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        name: name,
        city: city,
        street: street,
      },
    };

    props.saveOrderAction(newOrder);

    // this.setState({ loading: true });
  };

  return (
    <div className={css.ContactData}>
      <div ref={dunRef}>
        <strong style={{ fontSize: "16px" }}>Дүн: {props.price}</strong>{" "}
      </div>
      <div>
        {props.newOrderStatus.error &&
          `Захиалгыг хадгалахад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            className="border-solid border-2 border-green-500 rounded-full py-3 px-6"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            className="border-solid border-2 border-green-500 rounded-full py-3 px-6"
            placeholder="Хот"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            className="border-solid border-2 border-green-500 rounded-full py-3 px-6"
            placeholder="Гудамж"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={saveOrder} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
    clearOrder: () => dispatch(actions.clearOrder()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
