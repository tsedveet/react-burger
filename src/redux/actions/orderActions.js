import axios from "../../axios-orders";
export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    // Zahialgiig tataj ehellee gedgiig medegdene..
    // Eniig huleej avaad Spinner ajillaj ehlene.
    dispatch(loadOrdersStart());

    const token = getState().signupReducer.token;

    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};
export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};

// Захиалгыг хадгалах
export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    // Spinner ergelduulne
    dispatch(saveOrderStart());

    const token = getState().signupReducer.token;

    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};

export const saveOrderStart = (newOrder) => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = (newOrder) => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    errorMessage: error,
  };
};
