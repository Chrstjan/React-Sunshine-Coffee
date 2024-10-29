import s from "./CheckoutSelection.module.scss";

export const CheckoutSelection = () => {
  return (
    <div className={s.selectionStyling}>
      <header>
        <h4>Choose shipping</h4>
      </header>
      <label htmlFor="fakeEx">
        FakeEx
        <input type="radio" id="fakeEx" name="shipping" value="fakeEx" />
        <span className={s.checkmark}></span>
      </label>
      <label htmlFor="fakeExExpress">
        fakeEx Express
        <input
          type="radio"
          id="fakeExExpress"
          name="shipping"
          value="fakeExExpress"
        />
        <span className={s.checkmark}></span>
      </label>
    </div>
  );
};
