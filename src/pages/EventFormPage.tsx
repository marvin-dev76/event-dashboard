import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EventForm from "@/components/EventForm";
import { useEventForm } from "@/hooks/useEventForm";
import { useEvent } from "@/hooks/useEvent";

const EventFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const { event, isLoading, error } = useEvent(id ?? "");
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    initializeForm,
  } = useEventForm(id);

  useEffect(() => {
    if (event) initializeForm(event);
  }, [event]);

  if (isEditMode && isLoading) {
    return (
      <Box textAlign="center" py={12}>
        <Text color="gray.300">Loading event...</Text>
      </Box>
    );
  }

  if (isEditMode && error) {
    return (
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
    );
  }

  return (
    <Stack gap={6} maxW="2xl">
      <Stack gap={1}>
        <Heading size="lg" color="gray.300">
          {isEditMode ? "Edit Event" : "New Event"}
        </Heading>
        <Text color="gray.400" fontSize="sm">
          {isEditMode
            ? "Update the details of your event."
            : "Fill in the details to create a new event."}
        </Text>
      </Stack>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
      >
        <EventForm
          formData={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => navigate(isEditMode ? `/events/${id}` : "/")}
        />
      </Box>
    </Stack>
  );
};

export default EventFormPage;
