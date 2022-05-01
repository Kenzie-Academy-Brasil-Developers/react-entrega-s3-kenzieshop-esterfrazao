import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/thunks";

const Product = ({ product }) => {
  const { name, img, description, price } = product;
  const dispatch = useDispatch();

  return (
    <Box width="350px" bgColor="lightpink" borderRadius="30px" padding="10px">
      <Image borderRadius="30px" boxSize="200px" src={img} alt={name} />
      <Heading>{name}</Heading>
      <p>{description}</p>
      <Box>{price}</Box>
      <Button
        onClick={() => dispatch(addProductThunk(product))}
        variant="outline"
        colorScheme="whiteAlpha"
      >
        Adicionar ao Carrinho
      </Button>
    </Box>
  );
};

export default Product;
