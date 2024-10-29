import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addToCart = (product) => {
        const productArray = [...shoppingCart];

        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            //If the product exist then i uses the index of the product to select the product and updates the quantity key value
            productArray[foundIndex].quantity += 1;
            setShoppingCart(productArray);
        }

        else {
            //if the product does not exist then it creates a clone of the cart clone 
            //and then makes a clone of the product that gets pushed to the array and gives it the quantity key value
            setShoppingCart([...productArray, {...product, quantity: 1}])
        }
    }

    const removeFromCart = (product) => {
        const productsArray = [...shoppingCart]

        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);
        //Removes the product from the array with the index of the product
        productsArray.splice(foundIndex, 1);
        setShoppingCart(productsArray);
    }

    const subtractCartItem = (product) => {
        const productsArray = [...shoppingCart]

        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            //Uses the index of the product to subtract the quantity
            productsArray[foundIndex].quantity -= 1;

            //Checks if the quantity is equal or lower than 0 the i removes the product from the array
            if (productsArray[foundIndex].quantity <= 0) {
                removeFromCart(product)
            }
            else {
                //If the quantity is not qual or lower than 0 then it updates the array with the subtracted quantity
                setShoppingCart(productsArray);
            }
        }
    }

    const clearCart = () => {
        setShoppingCart([]);
    }

    return (
        <CartContext.Provider value={{shoppingCart, addToCart, subtractCartItem, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}