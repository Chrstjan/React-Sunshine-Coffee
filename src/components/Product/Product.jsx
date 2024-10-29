import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button"
import s from "./Product.module.scss";

export const Product = ({data, title, withDescription}) => {
    const navigate = useNavigate();

    const handleViewProduct = (item) => {
        console.log(item);
        navigate(`/products/${item.id}`);
    }

  return (
    <>
    {title ? <h2>{title}</h2> : null}
    {data?.map((item) => {
        return (
            <figure onClick={() => handleViewProduct(item)} className={s.productStyling} key={item.id}>
                <header>
                    <h3>{item.name}</h3>
                </header>
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
                <figcaption>
                    {withDescription ? <p>{item.description}</p> : null}
                    <p>{item.price} DKK</p>
                    {withDescription ? <p>Stock: {item.stock}</p> : null}
                    <Button type="cartButton" text="Add to cart"/>
                </figcaption>
            </figure>
        )
    })}</>
  )
}