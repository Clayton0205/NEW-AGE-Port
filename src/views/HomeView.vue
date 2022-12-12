<template>
  <div class="container-fluid" id="landing">
    <Navbar/>
   <div id="landingtitle">
   <p class="animate__animated animate__fadeInDown">- Welcome to Clayton Adonis' Portfolio -</p>
   </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
  components : {Navbar}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

#landing{
  background-image: url(../assets/dh1vX4g.jpg);
  width: 100%;
  height: 793px;
  font-family: 'PT Serif', serif;
}

#landingtitle{
  text-align: center;
  color: RGB(181,133,34);
  padding-top: 35vh;
  font-size: 50px;
  font-weight: 900;

}

@media only screen and (min-width: 299px) and (max-width: 426px) {

#landing{
  width: 100vw;
}

#landingtitle{
font-size: 25px;
}

}
</style>
