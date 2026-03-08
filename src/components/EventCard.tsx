// src/components/EventCard.tsx
import {
  Box,
  Badge,
  Text,
  Heading,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import type { Event } from "@/types/event";
import { LuMapPin, LuUsers } from "react-icons/lu";

interface EventCardProps {
  event: Event;
  onDelete: (id: string) => Promise<void>;
  isDeleting: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  conference: "blue",
  workshop: "orange",
  meetup: "green",
  webinar: "purple",
};

const EventCard = ({ event, onDelete, isDeleting }: EventCardProps) => {
  const navigate = useNavigate();

  const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      transition="all 0.2s"
      _hover={{ borderColor: "teal.700" }}
    >
      <Stack gap={3}>
        <Flex justify="space-between" align="flex-start">
          <Badge colorPalette={CATEGORY_COLORS[event.category] ?? "gray"}>
            {event.category}
          </Badge>
          <Text fontSize="xs" color="gray.400">
            {formattedDate}
          </Text>
        </Flex>

        <Heading
          size="sm"
          color="gray.300"
          cursor="pointer"
          _hover={{ color: "teal.300" }}
          onClick={() => navigate(`/events/${event.id}`)}
        >
          {event.title}
        </Heading>

        <Text fontSize="sm" color="gray.400">
          {event.description}
        </Text>

        <Text
          fontSize="sm"
          color="gray.400"
          display="flex"
          alignItems="center"
          gap="1"
        >
          <LuMapPin /> {event.location} · <LuUsers /> {event.capacity}
        </Text>

        <Flex gap={2} pt={1}>
          <Button
            size="xs"
            variant="surface"
            flex={1}
            onClick={() => navigate(`/events/${event.id}`)}
          >
            View
          </Button>
          <Button
            size="xs"
            variant="surface"
            flex={1}
            onClick={() => navigate(`/events/${event.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            size="xs"
            variant="surface"
            colorPalette="red"
            flex={1}
            onClick={() => onDelete(event.id)}
            loading={isDeleting}
            loadingText="Deleting"
          >
            Delete
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EventCard;
