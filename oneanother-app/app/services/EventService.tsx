import { EventsClient, EventDto } from "@/app/services/api/web-api-client";

class EventService {
  private eventsClient: EventsClient;

  constructor() {
    this.eventsClient = new EventsClient("https://localhost:5001");
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
}

export default new EventService();
