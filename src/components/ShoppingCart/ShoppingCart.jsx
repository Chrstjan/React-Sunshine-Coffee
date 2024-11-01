import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "../Button/Button";
import s from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";

export const ShoppingCart = ({isCartShown, setIsCartShown}) => {
    const {shoppingCart, addToCart, subtractCartItem, removeFromCart, clearCart} = useContext(CartContext);

    //Bruger reducer til at regne priser sammen og gange det med antal af produkter
    const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const tax = totalPrice * 0.25;
    const totalWithTax = totalPrice + tax;
    const totalAmount = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
    <div onClick={() => setIsCartShown((prev) => !prev)} className={`${isCartShown ? s.overlayStyling : s.hideOverlay}`}></div>
    <div className={`${isCartShown ? s.cartStyling : s.hideCart}`}>
        <Button type="modalButton" action={() => setIsCartShown(prev => !prev)} text="X"/>
        <h2>Shopping Cart</h2>
        {shoppingCart.length > 0 ? shoppingCart.map((item) => {
            return (
            <span className={s.productStyling} key={item.id}>
                <div className={s.product}>
                 <span className={s.productInfo}>
                  <h5>{item.name}</h5>
                  <div className={s.amountContainer}>
                    <Button type="modalButton" action={() => subtractCartItem(item)} text="-"/>
                    <p>{item.quantity}</p>
                    <Button type="modalButton" text="+" action={() => addToCart(item)}/>
                  </div>
                 </span>
                 <p>{item.price * item.quantity} DKK</p>
                </div>
                <span className={s.productLine}></span>
            </span>
            )
        }) : <p>Your cart is empty</p>}
        {shoppingCart.length > 0 ? 
        <div className={s.priceContainer}>
         <span className={`${s.checkoutStyling} ${s.taxCheckout}`}>
            <p>Tax (25%)</p>
            <p>{tax} DKK</p>
         </span>
         <span className={s.checkoutStyling}>
            <p>Total:</p>
            <p>{totalWithTax} DKK</p>
         </span>
        </div> : null}
        <span className={s.checkoutContainer}>
          {shoppingCart.length > 0 ? <Button type="shopButton" action={() => clearCart()} text="Clear Cart"/> : null}
         <div>
          <p>Items in Cart: {totalAmount}</p>
          {shoppingCart.length > 0 ? <Link to="/checkout">
            <Button type="shopButton" text="Go to Checkout"/>
          </Link> : null}
         </div>
        </span>
    </div>
    </>
  )
}