import { Box, Image, Text, Flex } from "@chakra-ui/react";

const CategoryCard = ({ category }) => {
  return (
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
        bg="rgba(0, 0, 0, 0.5)" // Ajustando a cor de fundo do texto para que seja semi-transparente
        position="absolute" // Posicionando o Flex absolutamente dentro do Box
        bottom="0" // Alinhando o Flex na parte inferior do Box
        left="0" // Alinhando o Flex à esquerda do Box
        right="0" // Alinhando o Flex à direita do Box
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          {category.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default CategoryCard;
