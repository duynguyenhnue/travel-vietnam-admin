'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import type { User } from '@/types/user';
import { localStorageConfig } from '@/config';
import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession?: () => Promise<void>;
}

export const UserContext = React.createContext<UserContextValue | undefined>(undefined);

export interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps): React.JSX.Element {
  const [state, setState] = React.useState<{ user: User | null; error: string | null; isLoading: boolean }>({
    user: null,
    error: null,
    isLoading: true,
  });

  const router = useRouter();

  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      const accessToken = localStorage.getItem(localStorageConfig.accessToken);

      if (!accessToken) {
        router.push(paths.auth.signIn);
        setState((prev) => ({ ...prev, user: null, error: null, isLoading: false }));
        return;
      }

      const { data, error } = await authClient.getUser();

      if (error) {
        logger.error(error);
        setState((prev) => ({ ...prev, user: null, error: 'Something went wrong1', isLoading: false }));
        return;
      }

      setState((prev) => ({ ...prev, user: data ?? null, error: null, isLoading: false }));
    } catch (err) {
      router.push(paths.auth.signIn);
      logger.error(err);
      setState((prev) => ({ ...prev, user: null, error: 'Something went wrong2', isLoading: false }));
    }
  }, [router]);

  React.useEffect(() => {
    checkSession().catch((err: unknown) => {
      router.push(paths.auth.signIn);
      logger.error(err);
    });
  }, [checkSession, router]);

  return <UserContext.Provider value={{ ...state, checkSession }}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;
