
<template>

    <div class="contenedorDeFoto">
<img :src=unLink alt="pieDeFoto" > 
<p class="textoPieDeFoto">{{ pieDeFoto }} </p>   
</div>

<img src='../assets/fotos/EBF_0001_0667022756_679ECV_N0010052EDLC00001_0010LUJ01_1200.jpg' alt="foto de prueba">
</template>

<script>
export default {
    props :['pieDeFoto', 'unLink' ],
}
</script>


<style>

@import '../assets/base.css';
img{
    max-width: 100%;
}

.contenedorDeFoto{
    object-fit: contain;
    overflow: hidden;
}

.textoPieDeFoto{

    color: var(--claro);
    position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1em; 
}
</style>