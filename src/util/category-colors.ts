import type { EventCategory } from "@/types/event";

const CATEGORY_COLORS: Record<string, string> = {
  conference: "blue",
  workshop: "orange",
  meetup: "green",
  webinar: "purple",
};

const CATEGORIES: EventCategory[] = [
  "conference",
  "workshop",
  "meetup",
  "webinar",
];

export { CATEGORY_COLORS, CATEGORIES };
