import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    previousFilters: {
      radius: null,
      rating: null,
      isOpen: false
    },
    filters: {
      radius: null,
      rating: null,
      isOpen: false
    }
  }),
  actions: {
    setFilters(payload) {
      this.filters = {
        ...this.filters,
        ...payload
      }
    },
    setPreviousFilters() {
      this.previousFilters = {
        ...this.filters
      }
    }
  }
})
