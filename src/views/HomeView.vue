<script setup lang="ts">
import MosaicoFotos from '../components/MosaicoFotos.vue';


</script>

<template>
 
<div class="textInicio w3-center">

  <section class="w3-center">
    <h3>Have you ever dreamed of stepping on extraterrestrial soil?</h3>
    <p>This project allows you to explore thousands of images of Mars captured  by <a class="linkANasa" href="https://science.nasa.gov/mars/"> NASA rovers</a>.</p>
   
  </section>
  </div>
   <mosaico-fotos />
   
</template>
<style>
@import '/src/assets/base.css';
.linkANasa{
  color: var(--azul);
}
.textInicio{
 align-content: center;
}
</style>