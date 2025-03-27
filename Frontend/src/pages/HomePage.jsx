import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={"linear(90deg, #4A4A4A, #D4AF91)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        <Text
          fontSize={"xl"}
          textAlign={"center"}
          font-Weight={"bold"}
          color={"gray.500"}
        >
          No Products found,{" "}
          <Link to={"/create"}>
            <Text
              as={"span"}
              color={"blue.300"}
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product 📦
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};
export default HomePage;
