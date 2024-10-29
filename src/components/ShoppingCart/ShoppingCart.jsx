import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button";
import s from "./ShoppingCart.module.scss";

export const ShoppingCart = ({isCartShown, setIsCartShown}) => {
    const {shoppingCart, addToCart, subtractCartItem, removeFromCart, clearCart} = useContext(CartContext);

  return (
    <>
    <div className={`${isCartShown ? s.overlayStyling : s.hideOverlay}`}></div>
    <div className={`${isCartShown ? s.cartStyling : s.hideCart}`}>
        <Button action={() => setIsCartShown(prev => !prev)} text="X"/>
        <h2>Shopping Cart</h2>
        {shoppingCart.map((item) => {
        return (
            <span key={item.id}>
                <h5>{item.name}</h5>
                <div className={s.amountContainer}>
                    <Button action={() => subtractCartItem(item)} text="-"/>
                    <p>{item.quantity}</p>
                    <Button text="+" action={() => addToCart(item)}/>
                </div>
                <p>{item.price * item.quantity} DKK</p>
            </span>
        )
    })}
    <div>
        <span>
            <p>Tax (25%)</p>
        </span>
        <span className={s.checkoutStyling}>
            <p>Total:</p>
            <p>{shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)} DKK</p>
        </span>
        <Button type="" action={() => clearCart()} text="Clear Cart"/>
    </div>
    <span className={s.checkoutContainer}>
        <p>Items in Cart: {shoppingCart.length}</p>
        <Button text="Go to Checkout"/>
    </span>
    </div>
    </>
  )
}