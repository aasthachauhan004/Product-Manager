import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";

// The default icon size is 1em (16px)

const Navbar = () => {
  return (
    <>
      <Container maxW={"1140px"} bgGradient='linear(90deg, #0F2027,  #203A43)'>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient='linear(to-l, #B0BEC5,  #FFFFFF)'
            bgClip={"text"}
          >
            <Link to={"/"}>Product Store 🛒</Link>
          </Text>
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};
export default Navbar;
