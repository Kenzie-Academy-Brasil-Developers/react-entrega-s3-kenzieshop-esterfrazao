import {
  Flex,
  Heading,
  List,
  VStack,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CartProduct from "../../components/CartProduct";

import { useSelector } from "react-redux";
import formatter from "../../utils/formatter";
import { useDispatch } from "react-redux";
import { clearCartThunk } from "../../store/modules/cart/thunks";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalPrice = formatter.format(
    cart.reduce(
      (previous, current) => previous + current.price * current.quantity,
      0
    )
  );

  return (
    <Flex padding="15" overflowY="scroll" height="85.8vh">
      <List width="60%">
        {cart.length === 0 && (
          <Heading size="lg" color="pink.500">
            Você não possui produtos no seu carrinho!
          </Heading>
        )}
        {cart.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </List>
      <Spacer />
      <VStack
        borderRadius="25px"
        height="220px"
        padding="15px"
        spacing="20"
        bgColor="pink"
        width="35%"
      >
        <Flex align="center" width="70%">
          <Text fontSize="2xl">Total da compra:</Text>
          <Spacer />
          <Text fontSize="lg" fontWeight="bold">
            {totalPrice}
          </Text>
        </Flex>
        <Button
          size="lg"
          colorScheme="gray"
          onClick={() => dispatch(clearCartThunk())}
        >
          Limpar Carrinho
        </Button>
      </VStack>
    </Flex>
  );
};

export default Cart;
