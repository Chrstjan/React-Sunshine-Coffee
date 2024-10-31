import { CheckoutForm } from "../components/Checkout/CheckoutForm/CheckoutForm";
import { CheckoutProducts } from "../components/Checkout/CheckoutProducts/CheckoutProducts";
import { CheckoutSelection } from "../components/Checkout/CheckoutSelection/CheckoutSelection";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const CheckoutPage = () => {
  return (
    <>
    <h2 style={{marginTop: "7rem", paddingRight: "1rem"}}>Checkout</h2>
    <Wrapper type="checkoutWrapper">
      <CheckoutForm />
      <div className="checkoutContainer">
        <CheckoutProducts />
        <CheckoutSelection />
      </div>
    </Wrapper>
    </>
  );
};
