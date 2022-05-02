import {
  Box,
  Flex,
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
  const { name, img, quantity, id } = product;
  const dispatch = useDispatch();

  return (
    <Flex
      justify="space-between"
      align="center"
      height="300px"
      width="90%"
      padding="15px"
    >
      <Image
        borderRadius="30px"
        boxSize="80%"
        maxWidth="300px"
        src={img}
        alt={name}
      />
      <Heading size="2xl" textAlign="center">
        {name}
      </Heading>
      <VStack>
        <Text fontSize="2em" fontWeight="bold">
          {quantity}
        </Text>
        <HStack>
          <IconButton
            onClick={() => dispatch(addProductThunk(product))}
            colorScheme="pink"
            aria-label="Add Product Button"
            size="md"
            icon={<AddIcon />}
          />
          <IconButton
            onClick={() => dispatch(removeProductThunk(id))}
            colorScheme="pink"
            aria-label="Remove Product Button"
            size="md"
            icon={<MinusIcon />}
          />
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CartProduct;
