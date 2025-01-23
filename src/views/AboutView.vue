<template>
   
     <div class="w3-white  w3-container w3-left" style="padding: 0.5rem;border-radius:10px;">   
    
    <img class="w3-circle" style="height:106px;width:106px;margin:0.5rem;"  src="/public/fotos/1732216554920.jpg" ><br><br>
    <h4><b>Braian Becha Dev</b></h4>  
  
  <div class="w3-large">
        <a href="https://www.linkedin.com/in/braian-becharouch-790953a6/"> <i class="fa fa-linkedin w3-hover-opacity w3-right"></i></a>
        <a href="https://github.com/BraianBecha"> <i class="fa fa-github w3-hover-opacity w3-right"> </i></a>

  </div>
</div>

  
  
<main>
  <div id="contenedorAbout">



  <section id="about">
  <header>
    <h2>What is this?</h2>
  </header>
  <article>
    <p>
        A web application that allows you to explore the vast collection of images from Mars captured by NASA's rovers.
    </p>
    
    <p>
        There have been numerous missions to that planet aimed at weather measurements, image capturing, and even collecting rock samples, studying them, and preparing them in capsules to bring them back to Earth!
    </p>

    <h2>Why did I create it?</h2>

    <p>
        
Beyond the fascination with space, I challenged myself to build an efficient and user-friendly application capable of providing an intuitive user experience. I wanted to create something useful and visually appealing using cutting-edge tools like Vue.js and Vite.
    </p>

    <p>
        It was an opportunity to explore new technologies.
    </p>
</article>
</section>
  
<section id="contact"></section>
<aside>
    

    
  <div class="contact">


    <div class="w3-container container">
  <h2>Contact</h2>
  

<form class="w3-container"  action="https://formspree.io/f/mjkvvkaj" method="POST" >
  <p>
    <label for="nombre">Name:</label></p>
    <input class="w3-input w3-border" type="text" name="nombre">

  <p>
    <label for="email">Email:</label></p>
    <input class="w3-input w3-border" type="text" name="email">

  <p>
    <label for="mensaje">Message:</label></p>
    <textarea class="w3-input w3-border"  id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
    <button type="submit" >Send</button>
</form>

</div>   

 

   </div>


  </aside>

</div>
</main>
</template>

<style>

#profileContainer{
  max-height: 130px;
  max-width: 130px;
  position: relative;
  float: left;
}
.contact{
  padding-bottom: 10rem;
}
#about{
  
  padding: 7rem;
  
}
#contenedorAbout{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  #about{
    align-content: center;
    max-width: 80vw;
  }
  .contact{
    max-width: 60vw;
  }
}
</style>
