import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Product } from "../components/Product/Product";

export const ProductPage = () => {
  const {productID} = useParams();

  const {data, isLoading, error} = useFetch(`http://localhost:8081/products/${productID}`);

  console.log(data);

  if (error) {
    return <h2>Error in fetch: {error.message}</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
    
  return <Wrapper type="productWrapper">
    <Product data={[data]} withDescription={true}/>
  </Wrapper>;
};
