import { useState, useEffect, useCallback } from "react";
import { getEvents, deleteEvent } from "@/api/eventsApi";
import type { Event } from "@/types/event";

interface UseEventsReturn {
  events: Event[];
  filteredEvents: Event[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  removeEvent: (id: string) => Promise<void>;
  deletingId: string | null;
}

const useEvents = (): UseEventsReturn => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to fetch events",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeEvent = useCallback(async (id: string) => {
    setDeletingId(id);
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to delete event",
      );
    } finally {
      setDeletingId(null);
    }
  }, []);

  const filteredEvents = events.filter((event) => {
    const term = searchTerm.toLowerCase();
    return (
      event.title.toLowerCase().includes(term) ||
      event.location.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return {
    events,
    filteredEvents,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    removeEvent,
    deletingId,
  };
};

export { useEvents };
