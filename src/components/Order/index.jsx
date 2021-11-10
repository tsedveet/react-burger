import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
      
      <div className={css.Chat_notification}>
     <div className={css.Chat_notification_content}>
       <h4 className={css.Chat_notification_title}>Үнийн дүн: {props.order.dun}₮</h4>
       <p className={css.Chat_notification_message}>Хаяг: {props.order.hayag.name} | {props.order.hayag.street} | {props.order.hayag.city}</p>
        <p className={css.Chat_notification_message}>Орц - Гахайн мах: {props.order.orts.bacon}, Бяслаг:
        {props.order.orts.cheese}, Үхрийн мах: {props.order.orts.meat}, Салад:
        {props.order.orts.salad}</p>
     </div>
    </div>
    
  );
 
};

export default Order;
