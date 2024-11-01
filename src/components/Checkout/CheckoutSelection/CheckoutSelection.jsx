import { useContext, useEffect } from "react";
import { Button } from "../../Button/Button"
import s from "./CheckoutSelection.module.scss";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const CheckoutSelection = ({isFormValid, isShippingSelected, setIsShippingSelected}) => {
  const {shoppingCart} = useContext(CartContext);

  useEffect(() => {
    console.log(isShippingSelected);
    
  }, [isShippingSelected])

  return (
    <>
    <div className={s.selectionStyling}>
      <header>
        <h4>Choose shipping</h4>
      </header>
      <label htmlFor="fakeEx">
        FakeEx
        <input 
          onClick={(e) => setIsShippingSelected(e.target.value)}
          type="radio"
          id="fakeEx"
          name="shipping"
          value="fakeEx" />
        <span className={`${s.checkmark} ${s.firstCheckmark}`}></span>
      </label>
      <label htmlFor="fakeExExpress">
        FakeEx Express
        <input
          onClick={(e) => setIsShippingSelected(e.target.value)}
          type="radio"
          id="fakeExExpress"
          name="shipping"
          value="fakeExExpress"
        />
        <span className={`${s.checkmark} ${s.secondCheckmark}`}></span>
      </label>
    </div>
    {shoppingCart.length > 0 && isFormValid && isShippingSelected != false ? <Link to="/payment"><Button type="payButton" text="Pay Now"/></Link> : <Button type="payButton" text="Fill out the form"/>}
    </>
  );
};
