<script setup>
import BotonV from './botonV.vue';
</script>

<template>
  <!--    
    <div class="tarjetaFoto">
   <img :src="imgSrc">
   <div class="listaDescriptiva">
   <ol>
       <li> Id : {{ idPhoto }} </li>
       <li>Earth date: {{ earthDate }} </li>
       <li>Rover name: {{ roverName }}</li>
       <li>Camera: {{ cameraName }}   </li>
   </ol>
   </div> 
   
<boton-v textoBoton="View"  @click="verEnDetalle()">  </boton-v>    
   
</div>

-->
<div class="fondoCard">
<div class="w3-display-container w3-text-white w3-container" style="margin: 2rem;">
    <img :src="imgSrc" :alt=idPhoto  style="width:100%">
       <div class="w3-display-bottomleft w3-container w3-row datosFoto">        
        
        <div class="w3-container opaco">
        <div class="w3-row">  Id : {{ idPhoto }}  </div> 
        <div class="w3-row">Earth date: {{ earthDate }} </div> 
        <div class="w3-row">Rover name: {{ roverName }}</div> 
        <div class="w3-row"> Camera: {{ cameraName }}  </div>  
      </div>
       </div>
       
       
  <!--<boton-v textoBoton="Download" >  </boton-v> -->   
  </div>
  <div class="w3-row"> <boton-v textoBoton="View"  @click="verEnDetalle()">  </boton-v>  </div>
</div>

  


</template>

<script>


     
  export default {
    props: ['idPhoto','imgSrc', 'earthDate', 'roverName', 'cameraName'],
    methods: {
        verEnDetalle() {
            this.$emit('ver-en-detalle', this.idPhoto);
        }
    }
  }

      
</script>

<style>
/*.datosFoto{
  font-size: calc();
}*/
.fondoCard{
  /*background-color: var(--vt-c-white-soft);*/
  padding: 1rem;
  border: solid var(--gris);
}
.opaco{
  opacity: 0.5;
  background-color: var(--claro);
  color: var(--vt-c-black);
}

.tarjetaFoto img {
  width:100%; height:100%;
  object-fit: contain;
  z-index: 2;

}
.tarjetaFoto{  
   display:flex;
  flex-direction: column;
    border-width : 2px;
    border: solid var(--gris);
    border-radius : 10px;
    background-color: var(--claro);

}
.listaDescriptiva{  
  margin: 1rem;
  position: relative;
    display: flex;
    justify-content: center;
   max-width: 700px;
   object-fit: contain; 
    
}
</style>
