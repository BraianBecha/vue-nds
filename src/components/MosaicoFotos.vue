<script>
import imagenConDescripcion from './imagenConDescripcion.vue';
export default{

  components: { imagenConDescripcion },
}
</script>
<template>
  
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
    <div class="mosaico">

    <div class="w3-row">
     <!-- <img src="/src/assets/fotos/NLF_0124_0677955190_226ECM_N0041712NCAM03124_07_195J01_1200.jpg" style="width:100%"> -->
     
    <div class="w3-half">
     
      <imagenConDescripcion pieDeFoto="Imagen del paracaídas del módulo que transportaba al rover Perseverance, momentos antes de aterrizar en el planeta rojo. Sol:1" :unLink = "'../assets/fotos/EBF_0001_0667022756_679ECV_N0010052EDLC00001_0010LUJ01_1200.jpg'" />
      <imagenConDescripcion pieDeFoto="Suelo marciano" :unLink = "'https://raw.githubusercontent.com/BraianBecha/vue-nds/refs/heads/main/src/assets/fotos/FRF_0688_0728025478_520ECM_N0321184FHAZ02418_01_295J01_1200.jpg'" />
      <imagenConDescripcion pieDeFoto="Paisaje Marciano" :unLink = "'src/assets/fotos/NRF_0688_0728028560_620ECM_N0321184NCAM02688_09_095J01_1200.jpg'" />
      <imagenConDescripcion pieDeFoto="El rover Perseverance capta la luna marciana Phobos eclipsando al Sol. Sol:1285" :unLink = "'../assets/fotos/ZL7_1056_0760664098_398EBY_N0501254ZCAM01538_1100LMJ01_1200.jpg'" />
      
    
       <!-- 
      <img src="/src/assets/fotos/EBF_0001_0667022756_679ECV_N0010052EDLC00001_0010LUJ01_1200.jpg" style="width:100%">
      <img src="/src/assets/fotos/FRF_0688_0728025478_520ECM_N0321184FHAZ02418_01_295J01_1200.jpg" style="width:100%">
      <img src="/src/assets/fotos/NRF_0688_0728028560_620ECM_N0321184NCAM02688_09_095J01_1200.jpg" style="width:100%">
      <img src="/src/assets/fotos/ZL7_1056_0760664098_398EBY_N0501254ZCAM01538_1100LMJ01_1200.jpg" style="width:100%"> 
         -->

      
    </div>

    <div class="w3-half">
      
      <imagenConDescripcion pieDeFoto="Suelo marciano" :unLink = "'/vue-nds/src/assets/ZL0_0789_0736981026_113EBY_N0390926ZCAM03648_1100LMJ01_1200.jpg'" />
      <imagenConDescripcion pieDeFoto="Suelo marciano" :unLink = "'../assets/fotos/ZL0_0789_0736981026_113EBY_N0390926ZCAM03648_1100LMJ01_1200.jpg'" /> <link rel="stylesheet" href="">
      <imagenConDescripcion pieDeFoto="Suelo marciano" :unLink = "'/vue-nds/src/assets/fotos/ZR0_0210_0685583506_348EBY_N0071836ZCAM03233_1100LMJ02_1200perseverance.jpg'" />
      <imagenConDescripcion pieDeFoto="Primer plano del dispositivo que usa el rover Perseverance para mecanizar las rocas del suelo marciano, para su posterior estudio." :unLink = "'/assets/ZL0_0291_0692781524_700EBY_N0090000ZCAM05066_0340LMJ01_1200perseverance.jpg'" />
      <imagenConDescripcion pieDeFoto="Suelo marciano" :unLink = "'src/assets/fotos/3383ML1014450101304346E01_DXXXcuriosity.jpg'" />
     
     <!-- 
      <img src="/src/assets/fotos/ZL0_0789_0736981026_113EBY_N0390926ZCAM03648_1100LMJ01_1200.jpg" style="width:100%">
      <img src="/src/assets/fotos/ZR0_0210_0685583506_348EBY_N0071836ZCAM03233_1100LMJ02_1200perseverance.jpg" style="width:100%">
      <img src="/src/assets/fotos/ZL0_0291_0692781524_700EBY_N0090000ZCAM05066_0340LMJ01_1200perseverance.jpg" style="width:100%">
      <img src="/src/assets/fotos/3383ML1014450101304346E01_DXXXcuriosity.jpg" style="width:100%">   -->


    </div>
  </div>
</div>
</template>

<style>
.mosaico{
    margin: 10%;
}
body {font-family: "Raleway", Arial, sans-serif}
.w3-row img {margin-bottom: -8px}
</style>