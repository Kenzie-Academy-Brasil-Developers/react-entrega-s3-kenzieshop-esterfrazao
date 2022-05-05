import {
  Text,
  Flex,
  Heading,
  HStack,
  VStack,
  Spacer,
  Tag,
} from "@chakra-ui/react";
import { BiCart, BiLogIn } from "react-icons/bi";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const list = useSelector((state) => state.cart);
  const totalProducts = list.reduce(
    (previous, current) => previous + current.quantity,
    0
  );

  return (
    <Flex
      align="center"
      height="20"
      bgColor="pink.300"
      color="pink.900"
      padding="0 10px"
    >
      <HStack
        height="100%"
        textAlign="center"
        cursor="pointer"
        onClick={() => history.push("/")}
      >
        <Heading height="70%" size="2xl" as="h1">
          Kenzie Shop
        </Heading>
        <Heading size="lg" as="h2" color="gray.50">
          Pelúcias
        </Heading>
      </HStack>
      <Spacer />
      <HStack spacing="4">
        <VStack
          align="end"
          cursor="pointer"
          onClick={() => history.push("/cart")}
          spacing="-10"
          marginBottom={list.length > 0 && "13%"}
        >
          <BiCart size="2.5rem" />
          {list.length > 0 && (
            <Tag
              size="sm"
              variant="solid"
              borderRadius="full"
              colorScheme="red"
            >
              {totalProducts}
            </Tag>
          )}
        </VStack>
        <HStack spacing="0">
          <Text fontSize="2xl">Entrar</Text>
          <BiLogIn size="2rem" />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
