import { defineStore } from 'pinia'

export const useGlobalsStore = defineStore('globals', {
  state: () => ({
    serverUrl: 'http://localhost:3000',
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
