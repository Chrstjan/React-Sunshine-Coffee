import s from "./Testimonies.module.scss";

export const Testimonies = () => {
  return <section className={s.TestimonyStyling}>
    <header>
      <h2>Testimonies</h2>
    </header>
    <div className={s.testimoniesStyling}>
     <span>
      <h3>John</h3>
      <p>
        “Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”
      </p>
     </span>
     <span>
      <h3>Eva</h3>
      <p>
        “Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”
      </p>
     </span>
     <span>
      <h3>Peter</h3>
      <p>
        “Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”
      </p>
     </span>
     <span>
      <h3>Michelle</h3>
      <p>
        “Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”
      </p>
     </span>
    </div>
  </section>;
};
