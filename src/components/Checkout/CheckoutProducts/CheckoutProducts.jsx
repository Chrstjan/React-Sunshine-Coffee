import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import s from "./CheckoutProducts.module.scss";

export const CheckoutProducts = () => {
    const {shoppingCart} = useContext(CartContext);
  return (
    <div className={s.productContainer}>
        {shoppingCart.length > 0 ? shoppingCart.map((item) => {
            return (
                <div key={item.id} className={s.productStyling}>
                    <span>
                     <p>{item.name}</p>
                     <p>x {item.quantity}</p>
                    </span>
                    <p>{item.price * item.quantity} DKK</p>
                </div>
            )
        }) : <p>Cart empty</p>}
        {shoppingCart.length > 0 ? <p className={s.totalPrice}>Total: {shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)} DKK</p> : null}
    </div>
  )
}