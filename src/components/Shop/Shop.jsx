import { Link } from "react-router-dom";
import { Button } from "../Button/Button"
import s from "./Shop.module.scss";

export const Shop = () => {
  return (
    <section className={s.shopStyling}>
        <h2>Shop now</h2>
        <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
        <Link to="/products">
            <Button type="shopButton" text="Go to products"/>
        </Link>
    </section>
  )
}