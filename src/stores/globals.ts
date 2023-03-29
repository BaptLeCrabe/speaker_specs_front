import { defineStore } from 'pinia'

export const useGlobalsStore = defineStore('globals', {
  state: () => ({
    serverUrl: import.meta.env.VITE_BACKEND_HOST,
    clientUrl: 'http://localhost:5173',
  }),
  getters: {
    getUrl(state) {
      return state.serverUrl
    }
  },
  actions: {

  },
})
