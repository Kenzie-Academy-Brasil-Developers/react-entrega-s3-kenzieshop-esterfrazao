import { Box, Button, Heading, VStack, Image, Text } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/thunks";
import formatter from "../../utils/formatter";

const Product = ({ product }) => {
  const { name, img, description, price } = product;
  const dispatch = useDispatch();

  return (
    <VStack
      align="center"
      justify="space-between"
      width="300px"
      bgColor="lightpink"
      borderRadius="30px"
      padding="10px"
    >
      <Image borderRadius="30px" boxSize="200px" src={img} alt={name} />
      <Heading textAlign="center" color="pink.900">
        {name}
      </Heading>
      <Text textAlign="justify">{description}</Text>
      <Text fontSize="2xl" color="pink.800">
        {formatter.format(price)}
      </Text>
      <Button
        onClick={() => dispatch(addProductThunk(product))}
        size="lg"
        color="pink.500"
        colorScheme="gray"
      >
        Adicionar ao Carrinho
      </Button>
    </VStack>
  );
};

export default Product;
