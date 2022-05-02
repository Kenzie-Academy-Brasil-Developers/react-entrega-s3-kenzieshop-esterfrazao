import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  addProductThunk,
  removeProductThunk,
} from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

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
      <IconButton
        onClick={() => dispatch(addProductThunk(product))}
        colorScheme="pink"
        aria-label="Add Product Button"
        size="lg"
        icon={<AddIcon />}
      />
      <IconButton
        onClick={() => dispatch(removeProductThunk(id))}
        colorScheme="pink"
        aria-label="Remove Product Button"
        size="lg"
        icon={<MinusIcon />}
      />
    </HStack>
  );
};

export default CartProduct;
