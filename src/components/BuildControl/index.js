import React, { useContext } from "react";
import css from "./style.module.css"; 
import BurgerContext from "../../context/BurgerContext";

const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  console.log("===========", BurgerContext);
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}:</div>

      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          disabled={props.disabled[props.type]}
          onClick={() => burgerContext.removeIngredient(props.type)}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
        >
          <span>Хасах</span>
        </button>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          onClick={() => burgerContext.addIngredient(props.type)}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
        >
          <span>Нэмэх </span>

        </button>
      </div>
    </div>
  );
};

export default BuildControl;
