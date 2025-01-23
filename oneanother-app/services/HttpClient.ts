import AuthService from "@/services/AuthService";

class HttpClient {
    async fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
        const token = AuthService.getToken();
        if (!token) {
            throw new Error("No token available");
        }

        const headers = new Headers(init?.headers || {});
        headers.append("Authorization", `Bearer ${token}`);

        const response = await fetch(url, {
            ...init,
            headers,
        });

        if (response.status === 401) {
            // Token might be expired, try to refresh it
            await AuthService.refreshToken();
            const newToken = AuthService.getToken();
            headers.set("Authorization", `Bearer ${newToken}`);

            return fetch(url, {
                ...init,
                headers,
            });
        }

        return response;
    }
}

export default new HttpClient();