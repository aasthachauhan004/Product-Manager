import {
  Box,
  Button,
  Container,
  Input,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/Product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message: ", message);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"2xl"}
          textAlign={"center"}
          mb={8}
          color={useColorModeValue("#5D4037", "orange.200")}
        >
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("gray.100", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            ></Input>
            <Input
              placeholder='Price'
              name='price'
              value={newProduct.price}
              type='number'
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            ></Input>
            <Input
              placeholder='Product Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            ></Input>
            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
              {" "}
              Add a Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;
