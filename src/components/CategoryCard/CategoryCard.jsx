import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/categories/${category.name}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        minWidth="200px"
        minHeight="100px"
        maxWidth="500px"
        maxHeight="250px"
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        position="relative"
        margin="10px"
      >
        <Image
          src={category.image}
          alt={category.name}
          boxSize="100%"
          overflow="hidden"
          objectFit="cover"
        />
        <Flex
          justifyContent="center"
          p="4"
          bg="rgba(0, 0, 0, 0.5)"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
        >
          <Text fontSize="xl" fontWeight="bold" color="white">
            {category.name}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default CategoryCard;
