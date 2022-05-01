import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { removeProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

const CartProduct = ({ product }) => {
  const { name, img, description, price, id } = product;
  const dispatch = useDispatch();

  return (
    <HStack height="300px" width="90%" padding="15px">
      <Image
        borderRadius="30px"
        boxSize="80%"
        maxWidth="300px"
        src={img}
        alt={name}
      />
      <VStack spacing="10">
        <Heading size="2xl">{name}</Heading>
        <Text fontSize="1.5rem">{description}</Text>
      </VStack>
      <Box as="span" color="pink.500">
        {price}
      </Box>
      <Button
        onClick={() => dispatch(removeProductThunk(id))}
        variant="outline"
        colorScheme="pink"
      >
        Remover do Carrinho
      </Button>
    </HStack>
  );
};

export default CartProduct;
