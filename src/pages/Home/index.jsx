import products from "../../database";
import Product from "../../components/Product";
import { Wrap } from "@chakra-ui/react";

const Home = () => {
  return (
    <Wrap spacing="30px" margin="10px" width="95%" justify="center">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Wrap>
  );
};
export default Home;
