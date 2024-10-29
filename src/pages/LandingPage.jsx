import { Hero } from "../components/Hero/Hero";
import { Divider } from "../components/Divider/Divider";
import { Showcase } from "../components/Showcase/Showcase";
import { Shop } from "../components/Shop/Shop";
import { Testimonies } from "../components/Testimonies/Testimonies";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Showcase />
      <Divider />
      <Shop />
      <Divider />
      <Testimonies />
    </>
  );
};
