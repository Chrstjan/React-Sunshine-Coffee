import { useContext } from "react";
import { Button } from "../../Button/Button"
import s from "./CheckoutSelection.module.scss";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const CheckoutSelection = ({isFormValid}) => {
  return (
    <>
    <div className={s.selectionStyling}>
      <header>
        <h4>Choose shipping</h4>
      </header>
      <label htmlFor="fakeEx">
        FakeEx
        <input type="radio" id="fakeEx" name="shipping" value="fakeEx" />
        <span className={`${s.checkmark} ${s.firstCheckmark}`}></span>
      </label>
      <label htmlFor="fakeExExpress">
        FakeEx Express
        <input
          type="radio"
          id="fakeExExpress"
          name="shipping"
          value="fakeExExpress"
        />
        <span className={`${s.checkmark} ${s.secondCheckmark}`}></span>
      </label>
    </div>
    {isFormValid ? <Link to="/payment">
      <Button type="payButton" text="Pay Now"/>
    </Link> : <p>No lol</p>}
    </>
  );
};
