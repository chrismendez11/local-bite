import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    location: null
  }),
  actions: {
    setLocation(payload) {
      this.location = payload
    },
  },
})