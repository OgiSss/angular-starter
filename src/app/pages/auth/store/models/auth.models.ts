export interface AuthState {
  isAuthenticated: boolean;
  tokens: {
    refreshToken: string
  },
  name: string,
  email: string
}
