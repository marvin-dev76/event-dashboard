import { useEffect, useState, useCallback } from "react";
import { getEventById } from "@/api/eventsApi";
import type { Event } from "@/types/event";

interface UseEventReturn {
  event: Event | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const useEvent = (id: string): UseEventReturn => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvent = useCallback(async () => {
    if (!id) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await getEventById(id);
      setEvent(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to fetch event",
      );
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  return { event, isLoading, error, refetch: fetchEvent };
};

export { useEvent };
