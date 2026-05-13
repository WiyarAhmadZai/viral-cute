interface AuthGuardState {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

export function useAuthGuard(): AuthGuardState {
  return {
    isAuthenticated: true,
    isInitialized: true,
  };
}
