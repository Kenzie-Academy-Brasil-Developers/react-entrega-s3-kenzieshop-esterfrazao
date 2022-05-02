import products from "../../database";
import Product from "../../components/Product";
import { Wrap } from "@chakra-ui/react";

const Home = () => {
  return (
    <Wrap
      overflowY="scroll"
      spacing="50px"
      margin="10px"
      height="85.8vh"
      justify="center"
    >
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Wrap>
  );
};
export default Home;
