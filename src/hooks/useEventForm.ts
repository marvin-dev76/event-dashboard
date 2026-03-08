import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent, updateEvent } from "@/api/eventsApi";
import type { Event, EventFormData, EventFormErrors } from "@/types/event";

const EMPTY_FORM: EventFormData = {
  title: "",
  description: "",
  date: "",
  category: "meetup",
  location: "",
  capacity: 0,
};

const validate = (data: EventFormData): EventFormErrors => {
  const errors: EventFormErrors = {};
  const today = new Date().toISOString().split("T")[0];

  if (!data.title || data.title.trim().length < 3)
    errors.title = "Title must be at least 3 characters";
  if (!data.description || data.description.trim().length === 0)
    errors.description = "Description is required";
  if (!data.date) errors.date = "Date is required";
  else if (data.date < today) errors.date = "Date cannot be in the past";
  if (!data.location || data.location.trim().length === 0)
    errors.location = "Location is required";
  if (!data.capacity || data.capacity <= 0)
    errors.capacity = "Capacity must be a positive number";

  return errors;
};

interface UseEventFormReturn {
  formData: EventFormData;
  errors: EventFormErrors;
  isSubmitting: boolean;
  handleChange: (field: keyof EventFormData, value: string | number) => void;
  handleSubmit: () => Promise<void>;
  initializeForm: (event: Event) => void;
}

const useEventForm = (eventId?: string): UseEventFormReturn => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<EventFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initializeForm = (event: Event) => {
    const { id: _, ...rest } = event;
    setFormData(rest);
  };

  const handleChange = (
    field: keyof EventFormData,
    value: string | number | null,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      if (eventId) {
        await updateEvent(eventId, formData);
      } else {
        await createEvent(formData);
      }
      navigate("/");
    } catch (err) {
      setErrors({
        title: err instanceof Error ? err.message : "Unexpected error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    initializeForm,
  };
};

export { useEventForm };
