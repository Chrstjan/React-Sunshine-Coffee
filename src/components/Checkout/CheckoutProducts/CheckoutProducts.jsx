import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import s from "./CheckoutProducts.module.scss";

export const CheckoutProducts = () => {
    const {shoppingCart} = useContext(CartContext);
  return (
    <div className={s.productContainer}>
        {shoppingCart.map((item) => {
            return (
                <div key={item.id} className={s.productStyling}>
                    <p>{item.name}</p>
                    <p>x {item.quantity}</p>
                    <p>{item.price * item.quantity} DKK</p>
                </div>
            )
        })}
        <p>Total: {shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)} DKK</p>
    </div>
  )
}