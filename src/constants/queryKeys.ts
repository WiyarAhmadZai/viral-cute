export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    me: ['auth', 'me'] as const,
  },
  projects: {
    all: ['projects'] as const,
    list: (filters?: Record<string, unknown>) => ['projects', 'list', filters] as const,
    detail: (id: string) => ['projects', 'detail', id] as const,
  },
  feed: {
    all: ['feed'] as const,
    list: (filters?: Record<string, unknown>) => ['feed', 'list', filters] as const,
  },
  uploads: {
    all: ['uploads'] as const,
    status: (id: string) => ['uploads', 'status', id] as const,
  },
} as const;
