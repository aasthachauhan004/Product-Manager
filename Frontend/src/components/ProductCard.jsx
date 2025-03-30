import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useProductStore } from "../store/Product";
import { useToast } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const toast = useToast();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit='cover'
      ></Image>
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ₹{product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme='blue'></IconButton>
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
          ></IconButton>
        </HStack>
      </Box>
    </Box>
  );
};
export default ProductCard;
