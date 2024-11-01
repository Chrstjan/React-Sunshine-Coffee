import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../Button/Button"
import s from "./Product.module.scss";

export const Product = ({data, title, withDescription, type, cardType}) => {
    const navigate = useNavigate();

    const {shoppingCart, addToCart} = useContext(CartContext)

    console.log(shoppingCart);
    

    const handleViewProduct = (item) => {
        console.log(item);
        navigate(`/products/${item.id}`);
    }

    const notify = () => toast("Product added to cart");

    const handleAddProduct = (item) => {
        addToCart(item)
        notify();
    }

  return (
    <>
    {title ? <h2>{title}</h2> : null}
    <section className={s[type]}>
    {data?.map((item) => {
        return (
            <figure className={`${s.productStyling} ${s[cardType]}`} key={item.id}>
                <header onClick={() => handleViewProduct(item)}>
                    <h3>{item.name}</h3>
                </header>
                <div className={s.infoContainer}>
                <img src={item.image} alt={item.name}/>
                <span className={s.coffeeStyling}>
                    <p>Roast:</p>
                    <div className={s.roastContainer}>
                        {[1, 2, 3, 4, 5].map((roast) => {
                            return (
                                <span key={roast} className={`${s.roastStyling} ${item.roast >= roast ? s.fillStyling : ''}`}></span>
                            )
                        })}
                    </div>
                </span>
                </div>
                <figcaption>
                    {withDescription ? <p>{item.description}</p> : null}
                    <p>{item.price} DKK</p>
                    {withDescription ? <p>Stock: {item.stock}</p> : null}
                    <Button type="cartButton" action={() => handleAddProduct(item)} text="Add to cart"/>
                </figcaption>
            </figure>
        )
    })}
    <ToastContainer 
     position="bottom-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
    />
    </section>
    </>
  )
}