<script setup >

import FormComponent from './FormComponent.vue';
import CardPhoto from './CardPhoto.vue';
import BarraEstado from './BarraEstado.vue';
import Detalle from './detalle.vue';
import imagenConDescripcion from './imagenConDescripcion.vue';
import '../assets/base.css';
import '../assets/main.css';
</script>

<script>
export default {
  components: { CardPhoto, Detalle, imagenConDescripcion },
  data() {
    return {
      sol : 0,
      message: ' ',
      linkServicio : "https://api.nasa.gov/mars-photos/api/v1/rovers/",
      linkConsulta : "",
      arrayPresentacionPhotos : [],      
      presentacionFoto : {id:0 , imgSrc:"" , earth_date:"" , rover:"" , camera :"" },
      mostrarBarraEstado : false,
      lookState: 'contenedorDeFotos',
      detalleFoto : {id:0 , imgSrc:"" , earth_date:"" , rover:"" , camera :"" },
      
    };
  },
  methods:{
    receiveValues(x, y, z)
    {
      if (y === undefined || y === null) {
    console.error('El valor de sol es inválido');
    return;
  }
      this.sol=y;
    //console.log(`los valores escuchados en appVue son ${x} , ${y} , ${z}`)
    let elLink=this.crearLinkConsulta(x,y,z)
    //console.log(`el link creado es ${this.linkConsulta}`)

  },
    
    crearLinkConsulta(x,y,z){    
    this.linkConsulta=this.linkServicio.concat(`${x}/photos?sol=${y}&api_key=${z}`)
    //console.log(`en crearLinkConsulta() link es ${this.linkConsulta}`)
    this.buscarFotos(this.linkConsulta)
    
    
},
 buscarFotos(x){
  this.arrayPresentacionPhotos=[];
  fetch(x)
.then(z=>z.json())
        .then((y)=> {
          
          if (!y.photos) {
        alert('La respuesta no contiene fotos');
        return;
      }
          
          
          console.log(`y es ${y} la cantidad de fotos es ${y.photos.length}`)  
        y.photos.forEach(element => { 
          let unaPresentacion=Object.create(this.presentacionFoto)
                        unaPresentacion.id=element.id
                        unaPresentacion.imgSrc=element.img_src
                        unaPresentacion.earth_date=element.earth_date
                        unaPresentacion.rover=element.rover.name
                        unaPresentacion.camera=element.camera.name                        
                    this.arrayPresentacionPhotos.push(unaPresentacion)})
                    if (this.arrayPresentacionPhotos.length!=0){
                      this.mostrarBarraEstado=true
                    }
                   // imprimirPhotos(arrayPresentacionPhotos) 
        })
        
},

verEnDetalle(x){

  console.log(`se llama a verEnDetalle con los valores ${x}`)

  this.detalleFoto = this.arrayPresentacionPhotos.find((element => element.id == x))
   this.lookState= 'detalleFoto'

},
volverAGrid(){
  this.lookState='contenedorDeFotos'
}

}
};

</script>

 
<template> 
        
      
           
          <form-component v-if = "lookState !== 'detalleFoto' " @send-values="receiveValues" /> 
          
            <Transition mode="out-in">        
            <div>
                  <div v-if = "lookState === 'detalleFoto' "  key="detalleFoto"> 
                 <detalle :id-photo="detalleFoto.id" 
                          :imgSrc="detalleFoto.imgSrc"
                          :earth-date="detalleFoto.earth_date"
                          :rover-name="detalleFoto.rover"
                          :camera-name="detalleFoto.camera"
                      textoBtn='Back'
                     @pedirVolver="volverAGrid" >
            </detalle>
            
          </div>
    
    
        <div v-if = "lookState === 'contenedorDeFotos'" key="contenedorDeFotos" class="contenedorDeFotos">
      <card-photo v-for="x in arrayPresentacionPhotos" :key="x.id"
          :id-photo="x.id"
          :img-src="x.imgSrc"
          :rover-name="x.rover"
          :earth-date="x.earth_date"
          @verEnDetalle="verEnDetalle(x.id)"
          :camera-name="x.camera"
      />  
         </div></div>
       </Transition>
    
    
    
     <barra-estado :n-sol='sol' :n-photos='arrayPresentacionPhotos.length' v-show='mostrarBarraEstado' /> 
    
    
    
    
    </template>
    
    <style scoped>

    @media (min-width: 1024px) {
      header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
      }
    
      .logo {
        margin: 0 2rem 0 0;
      }
      .fade-enter-active, .fade-leave-active {
      transition: opacity 5s;
    }
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }
    .fade-enter-to, .fade-leave-from {
      opacity: 1;
    } 
    }
    
    </style>
    
    <style>
      .v-enter-active {
        animation: slideIn 2s;
      }
      @keyframes slideIn {
        from {
          translate: -200px 0;
          opacity: 0;
        }
        to {
          translate: 0 0;
          opacity: 1;
        }
      }
      .v-leave-active {
        animation: slideOut 0.5s;
      }
      @keyframes slideOut {
        from {
          translate: 0 0;
          opacity: 1;
        }
        to {
          translate: 200px 0;
          opacity: 0;
        }
      }
     
    </style>  