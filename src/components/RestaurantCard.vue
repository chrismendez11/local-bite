<script setup>
import { defaultCardImg } from '../utils/defaultVariables'

const props = defineProps({
  restaurant: Object,
  cardHeader: String
})

const setRestaurantName = (name) => {
  if (name.length > 15) {
    return `${name.slice(0, 16).trim()}...`
  } else {
    return name
  }
}

const setRestaurantLocation = (location) => {
  if (location.length > 25) {
    return `${location.slice(0, 26).trim()}...`
  } else {
    return location
  }
}

const restaurantStatus = (opening_hours) => {
  const isRestaurantOpen = opening_hours?.isOpen()
  if (isRestaurantOpen === true) {
    return 'Abierto'
  } else if (isRestaurantOpen === false) {
    return 'Cerrado'
  } else {
    return 'Información no disponible'
  }
}

</script>

<template>
  <article class="card">
    <header>
      <img :src="restaurant.photoUrl ? restaurant.photoUrl : defaultCardImg" alt="" />
    </header>
    <main class="card__main">
      <div class="card__title">
        <h2>{{ setRestaurantName(restaurant.name) }}</h2>
        <div class="card__rating">
          <span>{{ restaurant.rating }}</span>
          <div class="card__starts">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
      <div class="card__info">
        <div class="card__info-row">
          <i class="fa-solid fa-map-pin"></i>
          <p>{{ setRestaurantLocation(restaurant.vicinity) }}</p>
        </div>
        <div class="card__info-row">
          <i class="fa-solid fa-clock"></i>
          <p>{{ restaurantStatus(restaurant.opening_hours) }}</p>
        </div>
        <div class="card__info-row">
          <i class="fa-solid fa-phone"></i>
          <p>Contacto: {{ props.restaurant.formatted_phone_number ? props.restaurant.formatted_phone_number : 'No disponible' }}</p>
        </div>
      </div>
      <!-- <div class="card__button">
        <button>Información</button>
      </div> -->
    </main>
  </article>
</template>

<style lang="scss" scoped></style>
