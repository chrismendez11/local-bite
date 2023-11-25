<script setup>
import FilterButton from '../components/FilterButton.vue'
import FilterOptionSelect from '../components/FilterOptionSelect.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import SwitchSelect from '../components/SwitchSelect.vue'
import Navbar from '../components/shared/navbar.vue'
import { filterOptions } from '../utils/filter-options'
import '../api/nearby-search.api'
import { useRestaurantsStore } from '../stores/restaurants.store'
import { useLocationStore } from '../stores/location.store'
import { storeToRefs } from 'pinia'
import { useFiltersStore } from '../stores/filters.store'

function loadGoogleMapsScript(res) {
  const position = {
    lat: res.coords.latitude,
    lon: res.coords.longitude
  }
  const useLocation = useLocationStore()
  useLocation.setLocation(position)
  if (!window.google) {
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA6BWFHKgQVjaKdERv93RJMMbR2dOVj6_A&callback=initMap&libraries=places&v=weekly'

    script.defer = true
    document.body.appendChild(script)
    script.onload = () => {}
  }
}
navigator.geolocation.getCurrentPosition(loadGoogleMapsScript)

const useRestaurants = useRestaurantsStore()
const { filteredRestaurants } = storeToRefs(useRestaurants)

const useFilters = useFiltersStore()

const handleFilters = (object) => {
  useFilters.setFilters(object)
}

const setFilters = () => {
  useRestaurants.applyFilters(useFilters.filters)
}

const removeFilters = () => {
  useFilters.$reset()
  useRestaurants.resetRestaurants()
}
</script>

<template>
  <Navbar />
  <main class="restaurants-content">
    <header class="restaurants-header">
      <p>Encuentra restaurantes cercanos a tu localidad</p>
      <div class="restaurants-header-filters">
        <FilterOptionSelect v-for="option in filterOptions" :key="option.title" :option="option" :callback="handleFilters" :filterProperty="option.filterProperty" />
        <SwitchSelect title="Abierto ahora" :callback="handleFilters" filterProperty="isOpen" />
        <FilterButton title="Filtrar" type="primary" :callback="setFilters" />
        <FilterButton type="danger" :callback="removeFilters" />
      </div>
    </header>
    <main class="restaurants-main">
      <RestaurantCard
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.place_id"
        :restaurant="restaurant"
      />
    </main>
  </main>
</template>

<style lang="scss" scoped></style>
