
<template>

    <div class="contenedorDeFoto">
            <img :src = unLink alt=pieDeFoto > 
            <p class="textoPieDeFoto">{{ pieDeFoto }} </p>   
    </div>
    
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