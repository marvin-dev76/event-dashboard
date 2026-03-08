import {
  Stack,
  Field,
  Input,
  Textarea,
  NativeSelect,
  Button,
  SimpleGrid,
  DatePicker,
  Portal,
  type DateValue,
  parseDate,
} from "@chakra-ui/react";
import { LuCalendar } from "react-icons/lu";
import type {
  EventFormData,
  EventFormErrors,
  EventCategory,
} from "@/types/event";

const CATEGORIES: EventCategory[] = [
  "conference",
  "workshop",
  "meetup",
  "webinar",
];

interface EventFormProps {
  formData: EventFormData;
  errors: EventFormErrors;
  isSubmitting: boolean;
  onChange: (
    field: keyof EventFormData,
    value: string | number | DateValue,
  ) => void;
  onSubmit: () => Promise<void>;
  onCancel: () => void;
}

const EventForm = ({
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
  onCancel,
}: EventFormProps) => {
  const dateValue = formData.date ? [parseDate(formData.date)] : undefined;

  return (
    <Stack gap={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <Field.Root invalid={!!errors.title} required>
          <Field.Label fontSize="sm">Title</Field.Label>
          <Input
            placeholder="Event title"
            value={formData.title}
            onChange={(e) => onChange("title", e.target.value)}
          />
          <Field.ErrorText>{errors.title}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.date} required>
          <DatePicker.Root
            value={dateValue}
            onValueChange={(e) => {
              const val = e.value[0];
              if (!val) return;
              const iso = `${val.year}-${String(val.month).padStart(2, "0")}-${String(val.day).padStart(2, "0")}`;
              onChange("date", iso);
            }}
          >
            <DatePicker.Label fontSize="sm">Date</DatePicker.Label>
            <DatePicker.Control>
              <DatePicker.Input />
              <DatePicker.IndicatorGroup>
                <DatePicker.Trigger>
                  <LuCalendar />
                </DatePicker.Trigger>
              </DatePicker.IndicatorGroup>
            </DatePicker.Control>
            <Portal>
              <DatePicker.Positioner>
                <DatePicker.Content>
                  <DatePicker.View view="day">
                    <DatePicker.Header />
                    <DatePicker.DayTable />
                  </DatePicker.View>
                  <DatePicker.View view="month">
                    <DatePicker.Header />
                    <DatePicker.MonthTable />
                  </DatePicker.View>
                  <DatePicker.View view="year">
                    <DatePicker.Header />
                    <DatePicker.YearTable />
                  </DatePicker.View>
                </DatePicker.Content>
              </DatePicker.Positioner>
            </Portal>
          </DatePicker.Root>
          <Field.ErrorText>{errors.date}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.location} required>
          <Field.Label fontSize="sm">Location</Field.Label>
          <Input
            placeholder="City or venue"
            value={formData.location}
            onChange={(e) => onChange("location", e.target.value)}
          />
          <Field.ErrorText>{errors.location}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.capacity} required>
          <Field.Label fontSize="sm">Capacity</Field.Label>
          <Input
            type="number"
            placeholder="Max attendees"
            value={formData.capacity === 0 ? "" : formData.capacity}
            onChange={(e) => onChange("capacity", Number(e.target.value))}
          />
          <Field.ErrorText>{errors.capacity}</Field.ErrorText>
        </Field.Root>
      </SimpleGrid>

      <Field.Root invalid={!!errors.category} required>
        <Field.Label fontSize="sm">Category</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            value={formData.category}
            onChange={(e) => onChange("category", e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <Field.ErrorText>{errors.category}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.description} required>
        <Field.Label fontSize="sm">Description</Field.Label>
        <Textarea
          placeholder="Describe your event..."
          value={formData.description}
          onChange={(e) => onChange("description", e.target.value)}
          rows={4}
          resize="vertical"
        />
        <Field.ErrorText>{errors.description}</Field.ErrorText>
      </Field.Root>

      <SimpleGrid columns={2} gap={3} pt={2}>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          colorPalette="teal"
          variant="surface"
          onClick={onSubmit}
          loading={isSubmitting}
          loadingText="Saving..."
        >
          Save Event
        </Button>
      </SimpleGrid>
    </Stack>
  );
};

export default EventForm;
