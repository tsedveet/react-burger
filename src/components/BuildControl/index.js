import React, { useContext } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import * as actions from "../../redux/actions/burgerActions";
import BurgerContext from "../../context/BurgerContext";

const BuildControl = (props) => {
  const appData = useContext(BurgerContext);
  console.log("===========", BurgerContext);
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}:</div>

      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          disabled={props.disabled[props.type]}
          onClick={() => props.ortsHasah(props.type)}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
        >
          <span>Хасах</span>
        </button>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          onClick={() => props.ortsNemeh(props.type)}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
        >
          <span>Нэмэх </span>
          {appData}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(null, mapDispatchToProps)(BuildControl);
