import { create } from 'zustand';

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
export const useAuthStore = create<AuthState>()((set) => ({
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
}));
