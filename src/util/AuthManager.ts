export function getAuthToken(): string {
  return localStorage.getItem('authToken') as string;
}
