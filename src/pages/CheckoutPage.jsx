import { CheckoutForm } from "../components/Checkout/CheckoutForm/CheckoutForm";
import { CheckoutProducts } from "../components/Checkout/CheckoutProducts/CheckoutProducts";
import { CheckoutSelection } from "../components/Checkout/CheckoutSelection/CheckoutSelection";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const CheckoutPage = () => {
  return (
    <Wrapper type="checkoutStyling">
      <CheckoutForm />
      <CheckoutProducts />
      <CheckoutSelection />
    </Wrapper>
  );
};
