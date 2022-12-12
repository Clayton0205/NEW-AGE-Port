<template>
<div id="page">
  <Navbar/>
<div id="work">
  <div class="container-fluid animate__animated animate__fadeInDown">
<div v-for="work in works" :key="work" class="box">
<div class="p">
<p>{{work.title}}</p>
</div>
<p>{{work.time}}</p>
<p>{{work.details}}</p>
</div>
  </div>
  <div class="container-fluid animate__animated animate__fadeInDown">
    <div v-for="education in educations" :key="education" class="box">
<div class="p">
<p>{{education.title}}</p>
</div>
  <img :src="education.image">
        <p>{{education.time}}</p>
        <p>{{education.details}}</p>
    </div>
  </div>
</div>
</div>
<Footer/>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import Up from '../components/uptonav.vue';

export default {
  components : {Navbar,Footer,Up},
    computed: {
    works() {
      return this.$store.state.workex
    },
    educations() {
      return this.$store.state.education
    }

  }
}

</script>

<style scoped>
*{margin: 0;
padding: 0;}

#page {
  background: linear-gradient(0deg, rgba(9,9,121,1) 0%, rgba(6,6,51,1) 100%);
  font-family: 'PT Serif', serif;
  height: 100vh; 
}

.container-fluid {
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
  text-align: center;
  color: RGB(0,0,87);
  margin-bottom: 30px;
  justify-content: center;
}

.box{
  background-color: white;
  border: 2px solid RGB(181,133,34);
  width: 380px;
}

.p{
text-decoration: underline;
color: RGB(181,133,34);
}

img {
  width: 170px;
  height: 175px;
   border: 2px solid RGB(181,133,34);
}

@media only screen and (min-width: 299px) and (max-width: 426px) {
  .container{
    margin: auto;
  }

  .box{
    width: 200px;
  }

}
</style>