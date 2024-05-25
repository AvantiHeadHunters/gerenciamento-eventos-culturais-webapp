import { Box, Image, Text, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LocationCard = ({ location }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      width={{ base: "250px", md: "300px", lg: "350px" }}
      height={{ base: "157px", md: "200px", lg: "234px" }}
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      position="relative"
      margin="10px"
    >
      <Link
        to={`/locations/${location.name}`}
        style={{ textDecoration: "none" }}
      >
        <Image
          src={location.image}
          alt={location.name}
          boxSize="100%"
          overflow="hidden"
          objectFit="cover"
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          p="4"
          bg="rgba(0, 0, 0, 0.5)"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="20%"
        >
          <Text fontSize="xl" fontWeight="bold" color="white">
            {location.name}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
