import { EventsClient, EventDto, PaginatedListOfEventDto } from "@/app/services/api/web-api-client";
import HttpClient from "@/app/services/HttpClient";

class EventService {
  private eventsClient: EventsClient;

  constructor() {
    this.eventsClient = new EventsClient("https://localhost:5001", HttpClient);
  }

  async getEventById(id: number): Promise<EventDto> {
    try {
      const event = await this.eventsClient.getEvent(id);
      return event;
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  }

  async getPaginatedEvents(pageNumber: number, pageSize: number): Promise<PaginatedListOfEventDto> {
    try {
      const paginatedEvents = await this.eventsClient.getEventsWithPagination(pageNumber, pageSize);
      return paginatedEvents;
    } catch (error) {
      console.error("Error fetching paginated events:", error);
      throw error;
    }
  }

  async followEvent(eventId: number): Promise<void> {
    try {
      await this.eventsClient.followEvent(eventId);
    } catch (error) {
      console.error("Error following event:", error);
      throw error;
    }
  }

  async unfollowEvent(eventId: number): Promise<void> {
    try {
      await this.eventsClient.unFollowEvent(eventId);
    } catch (error) {
      console.error("Error unfollowing event:", error);
      throw error;
    }
  }
}

export default new EventService();
