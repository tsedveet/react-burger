import React, { useEffect, useContext } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";

const OrderPage = (props) => {
  useEffect(() => {
    orderContext.loadOrders(userContext.state.userId, userContext.state.token);
  }, []);

  const userContext = useContext(UserContext);
  const orderContext = useContext(OrderContext);

  return (
    <div>
      {orderContext.state.loading ? (
        <Spinner />
      ) : (
        orderContext.state.orders.map((el) => (
          <Order key={el[0]} order={el[1]} />
        ))
      )}
    </div>
  );
};

export default OrderPage;
