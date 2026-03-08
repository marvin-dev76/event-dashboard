import axiosInstance from "@/api/axiosInstance";
import type { Event, EventFormData } from "@/types/event";

const getEvents = async (): Promise<Event[]> => {
  const { data } = await axiosInstance.get<Event[]>("/events");
  return data;
};

const getEventById = async (id: string): Promise<Event> => {
  const { data } = await axiosInstance.get<Event>(`/events/${id}`);
  return data;
};

const createEvent = async (payload: EventFormData): Promise<Event> => {
  const { data } = await axiosInstance.post<Event>("/events", payload);
  return data;
};

const updateEvent = async (
  id: string,
  payload: EventFormData,
): Promise<Event> => {
  const { data } = await axiosInstance.put<Event>(`/events/${id}`, payload);
  return data;
};

const deleteEvent = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/events/${id}`);
};

export { getEvents, getEventById, createEvent, updateEvent, deleteEvent };
