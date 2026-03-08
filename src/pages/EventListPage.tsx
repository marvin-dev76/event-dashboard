import { SimpleGrid, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { useEvents } from "@/hooks/useEvents";
import EventCard from "@/components/EventCard";
import SearchBar from "@/components/SearchBar";

const EventListPage = () => {
  const {
    filteredEvents,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    removeEvent,
    deletingId,
  } = useEvents();

  return (
    <Stack gap={6}>
      <Stack gap={1}>
        <Heading size="lg">
          Events
        </Heading>
        <Text color="gray.400" fontSize="sm">
          {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}{" "}
          found
        </Text>
      </Stack>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {isLoading && (
        <Box textAlign="center" py={12}>
          <Text color="gray.400">Loading events...</Text>
        </Box>
      )}

      {error && (
        <Box
          bg="red.50"
          borderWidth="1px"
          borderColor="red.200"
          borderRadius="md"
          p={4}
        >
          <Text color="red.600" fontSize="sm">
            {error}
          </Text>
        </Box>
      )}

      {!isLoading && !error && filteredEvents.length === 0 && (
        <Box textAlign="center" py={12}>
          <Text color="gray.400">
            {searchTerm ? "No events match your search." : "No events yet."}
          </Text>
        </Box>
      )}

      {!isLoading && !error && filteredEvents.length > 0 && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={removeEvent}
              isDeleting={deletingId === event.id}
            />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default EventListPage;
