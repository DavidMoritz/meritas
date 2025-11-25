import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
}

// Mock authentication - replace with real API calls
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful login
        const user: User = {
          id: '1',
          name: 'John Patriot',
          email,
          phone: '(555) 123-4567',
        };

        set({ user, isAuthenticated: true });
      },

      register: async (name: string, email: string, password: string, phone: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful registration
        const user: User = {
          id: '1',
          name,
          email,
          phone,
        };

        set({ user, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: async (key) => {
          // This would use AsyncStorage in a real app
          return null;
        },
        setItem: async (key, value) => {
          // Save to AsyncStorage
        },
        removeItem: async (key) => {
          // Remove from AsyncStorage
        },
      })),
    }
  )
);
