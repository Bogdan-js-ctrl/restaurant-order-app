<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="display-4 mb-4">Welcome to Our Restaurant</h1>
          <p class="lead mb-4">Experience the finest dining with our carefully crafted menu featuring the best ingredients from local suppliers.</p>
          <p>Our chefs prepare each dish with passion and attention to detail, ensuring an unforgettable culinary experience.</p>
          <router-link to="/menu" class="btn btn-primary btn-lg mt-3">
            View Our Menu
          </router-link>
        </div>
        <div class="col-lg-6">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Restaurant interior" class="img-fluid rounded shadow">
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>