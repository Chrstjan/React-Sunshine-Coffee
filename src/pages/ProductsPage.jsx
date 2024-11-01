import { useFetch } from "../hooks/useFetch"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Product } from "../components/Product/Product";
import { Hero } from "../components/Hero/Hero";
import { Divider } from "../components/Divider/Divider"

export const ProductsPage = () => {
  const {data, isLoading, error} = useFetch("http://localhost:8081/products")

  console.log(data);

  if (error) {
    return <h2>Error in fetch: {error.message}</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  
  return <>
    <Hero />
    <Divider />
    <Wrapper type="productWrapper">
      <Product data={data} title="Our picks for you" type="productContainer"/>
    </Wrapper>;
  </>
};
