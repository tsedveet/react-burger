import React, { useState, useEffect, useRef, useContext } from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import { useHistory } from "react-router";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const ContactData = (props) => {
  const userCtx = useContext(UserContext);
  const history = useHistory();
  const ctx = useContext(BurgerContext);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const dunRef = useRef();

  useEffect(() => {
    if (ctx.burger.finished && !ctx.burger.error) {
      history.replace("/orders");
    }

    return () => {
      // Tseverlegch function : Zahialgiig butsaagaad hoosolno. Daraachiin zahialgad beltgene gesen ug.
      ctx.clearBurger();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.burger.finished]);

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
      userId: userCtx.state.userId,
      orts: ctx.burger.ingredients,
      dun: ctx.burger.totalPrice,
      hayag: {
        name: name,
        city: city,
        street: street,
      },
    };

    ctx.saveBurger(newOrder, userCtx.state.token);

    // this.setState({ loading: true });
  };
  console.log("Contact Data rendered......");
  return (
    <div className={css.ContactData}>
      <div ref={dunRef}>
        <strong style={{ fontSize: "16px" }}>
          Дүн: {ctx.burger.totalPrice}
        </strong>{" "}
      </div>
      <div>
        {ctx.burger.error &&
          `Захиалгыг хадгалахад алдаа гарлаа : ${ctx.burger.error}`}
      </div>
      {ctx.burger.saving ? (
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
      <Button text="Toggle" btnType="Success" daragdsan={ctx.toggle} />
    </div>
  );
};

export default ContactData;
