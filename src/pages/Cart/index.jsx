import { Heading } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      {cart.length === 0 && (
        <Heading size="2xl" color="pink.300">
          Você não possui produtos no seu carrinho!
        </Heading>
      )}
      {cart.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </>
  );
};

export default Cart;
