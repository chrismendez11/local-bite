import { defineStore } from 'pinia'
import { initMap } from '../api/nearby-search.api'
import { useFiltersStore } from './filters.store'

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => ({
    restaurants: null,
    filteredRestaurants: null
  }),
  actions: {
    setupRestaurants(payload) {
      this.restaurants = payload
      this.filteredRestaurants = payload
    },
    async applyFilters(filters) {
      const useFilters = useFiltersStore()
      if (filters.radius !== useFilters.previousFilters.radius) {
        await initMap(filters.radius.toString())
        useFilters.setPreviousFilters()
      }
      this.filteredRestaurants = this.restaurants.filter((restaurant) => {
        if (filters.isOpen && !restaurant?.opening_hours?.isOpen()) {
          return false;
        } 
        if (filters.rating && !(restaurant?.rating >= filters.rating)) {
          return false;
        }
        return true;
      })
    },
    resetRestaurants() {
      this.filteredRestaurants = this.restaurants
    }
  },
})
