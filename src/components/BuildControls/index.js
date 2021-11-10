import React from "react";
import { connect } from "react-redux";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.burgeriinOrts };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.niitUne}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          orts={props.ingredientNames[el]}
          ingredientsPrices={props.ingredientsPrices}
        />
      ))}
      <div className="inline-flex rounded-md shadow mt-4">
        <button
          onClick={props.showConfirmModal}
          disabled={!props.purchasing}
          className={css.OrderButton}
        >
          <span>ЗАХИАЛАХ</span>
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    niitUne: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};


export default connect(mapStateToProps)(BuildControls);
