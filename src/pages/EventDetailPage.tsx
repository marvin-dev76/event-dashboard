import {
  Stack,
  Heading,
  Text,
  Badge,
  Flex,
  Box,
  Button,
  Separator,
  DataList,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "@/hooks/useEvent";
import { LuArrowLeft, LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";

const CATEGORY_COLORS: Record<string, string> = {
  conference: "blue",
  workshop: "orange",
  meetup: "green",
  webinar: "purple",
};

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { event, isLoading, error } = useEvent(id!);

  if (isLoading) {
    return (
      <Box textAlign="center" py={12}>
        <Text color="gray.400">Loading event...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box borderWidth="1px" borderColor="red.200" borderRadius="md" p={4}>
        <Text color="red.600" fontSize="sm">
          {error}
        </Text>
      </Box>
    );
  }

  if (!event) return null;

  const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Stack gap={6} maxW="2xl">
      <Button
        variant="surface"
        alignSelf="flex-start"
        onClick={() => navigate("/")}
      >
        <LuArrowLeft /> Back to Events
      </Button>

      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <Stack gap={5}>
          <Flex justify="space-between" align="flex-start" wrap="wrap" gap={2}>
            <Badge colorPalette={CATEGORY_COLORS[event.category] ?? "gray"}>
              {event.category}
            </Badge>
            <Text fontSize="xs" color="gray.300">
              ID: {event.id}
            </Text>
          </Flex>

          <Heading size="lg" color="gray.200">
            {event.title}
          </Heading>

          <Text color="gray.400" lineHeight="tall">
            {event.description}
          </Text>

          <Separator />

          {/* <Stack gap={3}>
            <DetailRow label="Date" value={formattedDate} />
            <DetailRow label="Location" value={event.location} />
            <DetailRow
              label="Capacity"
              value={`${event.capacity} attendees`}
            />
          </Stack> */}

          <DataList.Root orientation="horizontal">
            <DataList.Item>
              <DataList.ItemLabel>
                <LuCalendar />
                Date
              </DataList.ItemLabel>
              <DataList.ItemValue>{formattedDate}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>
                <LuMapPin />
                Location
              </DataList.ItemLabel>
              <DataList.ItemValue>{event.location}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>
                <LuUsers />
                Capacity
              </DataList.ItemLabel>
              <DataList.ItemValue>{event.capacity}</DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>

          <Separator />

          <Flex gap={3} pt={1}>
            <Button
              colorPalette="teal"
              size="sm"
              variant="surface"
              flex={1}
              onClick={() => navigate(`/events/${event.id}/edit`)}
            >
              Edit Event
            </Button>
            <Button
              variant="outline"
              colorPalette="gray"
              size="sm"
              flex={1}
              onClick={() => navigate("/")}
            >
              Back to List
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
};

export default EventDetailPage;
