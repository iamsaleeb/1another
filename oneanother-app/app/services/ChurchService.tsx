import {
  ChurchesClient,
  ChurchDto,
  PaginatedListOfChurchDto,
} from "@/app/services/api/web-api-client";
import HttpClient from "./HttpClient";

class ChurchService {
  private churchesClient: ChurchesClient;

  constructor() {
    this.churchesClient = new ChurchesClient("https://localhost:5001", HttpClient);
  }

  async getChurchById(id: number): Promise<ChurchDto> {
    try {
      const church = await this.churchesClient.getChurch(id);
      return church;
    } catch (error) {
      console.error("Error fetching church:", error);
      throw error;
    }
  }

  async getPaginatedChurches(
    pageNumber: number,
    pageSize: number
  ): Promise<PaginatedListOfChurchDto> {
    try {
      const paginatedChurches =
        await this.churchesClient.getChurchesWithPagination(
          pageNumber,
          pageSize
        );
      return paginatedChurches;
    } catch (error) {
      console.error("Error fetching paginated churches:", error);
      throw error;
    }
  }

  async followChurch(id: number): Promise<void> {
    try {
      await this.churchesClient.followChurch(id);
    } catch (error) {
      console.error("Error following church:", error);
      throw error;
    }
  }

  async unfollowChurch(id: number): Promise<void> {
    try {
      await this.churchesClient.unFollowChurch(id);
    } catch (error) {
      console.error("Error unfollowing church:", error);
      throw error;
    }
  }

}

export default new ChurchService();
