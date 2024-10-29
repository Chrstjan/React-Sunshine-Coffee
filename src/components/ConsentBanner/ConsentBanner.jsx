import { useState } from "react";
import reactGA from "react-ga4";
import s from "./ConsentBanner.module.scss";
import { Button } from "../Button/Button";

export const ConsentBanner = () => {
  const [withAnalytics, setWithAnalytics] = useState(false);
  const [hasUserCookie, setHasUserCookie] = useState();

  if (withAnalytics === true) {
    //Initialize google analytics with GTag ID
    reactGA.initialize("G-9CHNZWE1B1");
  }

  const enableGa = () => {
    setWithAnalytics(true);
    setHasUserCookie(true);
    localStorage.setItem("userAccept", true);
  };

  const disableGa = () => {
    setWithAnalytics(false);
    setHasUserCookie(false);
    localStorage.setItem("userAccept", false);
  };

  const hasUserAccepted = localStorage.getItem("userAccept");

  return (
    !hasUserCookie &&
    hasUserAccepted === null && (
      <div className={s.consentBanner}>
        <section>
          <p>This site uses cookies for tracking purposes</p>
        </section>
        <section className={s.buttonContainer}>
          <Button type="cookieButton" action={() => disableGa()} text="Deny" />
          <Button type="cookieButton" action={() => enableGa()} text="Accept" />
        </section>
      </div>
    )
  );
};
