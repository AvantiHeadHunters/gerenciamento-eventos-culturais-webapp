import { Box, Image, Text, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {
  const date = event?.date.slice(0, 10);

  const convertDateToBrazilianFormat = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const formatedDate = convertDateToBrazilianFormat(date);

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
      <Link style={{ textDecoration: "none" }} to={`/event/${event.id}`}>
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
              {formatedDate}
            </Text>
          </Stack>
        </Box>
      </Link>
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
