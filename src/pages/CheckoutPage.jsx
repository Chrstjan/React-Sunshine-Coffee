import { useState } from "react";
import { CheckoutForm } from "../components/Checkout/CheckoutForm/CheckoutForm";
import { CheckoutProducts } from "../components/Checkout/CheckoutProducts/CheckoutProducts";
import { CheckoutSelection } from "../components/Checkout/CheckoutSelection/CheckoutSelection";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const CheckoutPage = () => {

  const [isFormValid, setIsFormValid] = useState(false);
  const [isShippingSelected, setIsShippingSelected] = useState(false);
  return (
    <>
    <h2 style={{marginTop: "7rem", paddingRight: "1rem"}}>Checkout</h2>
    <Wrapper type="checkoutWrapper">
      <CheckoutForm setIsFormValid={setIsFormValid}/>
      <div className="checkoutContainer">
        <CheckoutProducts />
        <CheckoutSelection isFormValid={isFormValid} isShippingSelected={isShippingSelected} setIsShippingSelected={setIsShippingSelected}/>
      </div>
    </Wrapper>
    </>
  );
};
