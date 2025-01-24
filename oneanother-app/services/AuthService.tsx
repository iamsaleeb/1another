import {
  UsersClient,
  LoginRequest,
  AccessTokenResponse,
  RefreshRequest,
} from "@/services/api/web-api-client";

class AuthService {
  private usersClient: UsersClient;
  private refreshTimer: NodeJS.Timeout | null = null;
  private readonly REFRESH_INTERVAL = 1000 * 60 * 14; // 14 minutes

  constructor() {
    this.usersClient = new UsersClient("https://localhost:5001");
  }

  private startRefreshTimer() {
    if (this.refreshTimer) clearInterval(this.refreshTimer);

    this.refreshTimer = setInterval(async () => {
      if (this.isAuthenticated()) {
        try {
          await this.refreshToken();
        } catch {
          this.logout();
        }
      }
    }, this.REFRESH_INTERVAL);
  }

  async login(email: string, password: string): Promise<AccessTokenResponse> {
    try {
      const loginRequest = new LoginRequest({ email, password });
      const response = await this.usersClient.postApiUsersLogin(
        null,
        null,
        loginRequest
      );
      this.storeTokens(response.accessToken!, response.refreshToken!);
      this.startRefreshTimer();
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  private storeTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  getRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");
  }

  async refreshToken(): Promise<void> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token available");

    try {
      const refreshRequest = new RefreshRequest({ refreshToken });
      const response = await this.usersClient.postApiUsersRefresh(
        refreshRequest
      );
      this.storeTokens(response.accessToken!, response.refreshToken!);
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  }
}

export default new AuthService();
