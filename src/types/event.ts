export type EventCategory = "conference" | "workshop" | "meetup" | "webinar";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: EventCategory;
  capacity: number;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  location: string;
  category: EventCategory;
  capacity: number;
}

export interface EventFormErrors {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  category?: string;
  capacity?: string;
}
