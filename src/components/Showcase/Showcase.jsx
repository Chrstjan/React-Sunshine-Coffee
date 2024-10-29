import { showcase } from "../../assets/showcase"
import s from "./Showcase.module.scss"

export const Showcase = () => {
  return (
    <section className={s.showcaseStyling}>
        {showcase?.map((item) => {
            return (
                <figure key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <img src={item.image} alt={item.title}/>
                </figure>
            )
        })}
    </section>
  )
}