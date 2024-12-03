import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as { id: number; email: string } | null,
    token: null as string | null,
  }),
  persist: true,
  actions: {
    setUser(user: { id: number; email: string }, token: string) {
      this.user = user;
      this.token = token;
    },
    clearUser() {
      this.user = null;
      this.token = null;
    },
  },
});
