import { Box, Image, Text, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const EventCard = ({ event }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="270px"
      height="380px"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        src={event.image}
        alt={event.name}
        height="200px"
        objectFit="cover"
      />
      <Box p="6">
        <Stack spacing="3">
          <Text fontWeight="bold" fontSize="xl">
            {event.name}
          </Text>
          <Text>{event.description}</Text>
          <Text color="gray.500" fontSize="sm">
            {event.date}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
