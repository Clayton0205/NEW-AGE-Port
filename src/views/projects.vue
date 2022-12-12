<template>
  <div id="page">
    <Navbar />
    <div class="wrapper container-fluid">
      <div v-for="project in projects" :key="project" id="box">
        <div  class="animate__animated animate__fadeInDown">
          <div id="p">
          <p>{{ project.name }}</p>
        </div>
        <img :src="project.image">
        <div id="desc">
          <p>{{ project.desc }}</p>
        </div>
        <div id="buttons">
          <button type="button" class="link"><a :href="project.github" target="blank">GitHub</a></button>
          <br>
          <button type="button" class="link"><a :href="project.live" target="blank">Live Link</a></button>
        </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import Up from '../components/uptonav.vue';

export default {
  components: { Navbar, Footer, Up },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#page {
  background: linear-gradient(0deg, rgba(9,9,121,1) 0%, rgba(6,6,51,1) 100%);
  font-family: 'PT Serif', serif;
  overflow-x: hidden;
}

.container-fluid {
  display: flex;
  flex-flow: row wrap;
  margin-left: 120px;
  gap: 50px;
  text-align: center;
  color: RGB(0, 0, 87);
  margin-bottom: 30px;
}

img {
  width: 370px;
  height: 220px;
  margin-bottom: 10px;
}

#box {
  background-color: white;
  border: 2px solid RGB(181, 133, 34);
  width: 380px;
}

#p {
  text-decoration: underline;
  color: RGB(181, 133, 34);
}

#buttons {
  bottom: 0%;
  margin-top: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.link {
  background: white;
  border: 2px solid RGB(181, 133, 34);
  color: RGB(0, 0, 87);
}

a {
  color: RGB(0, 0, 87);
  text-decoration: none;
}

a:hover {
  color: RGB(0, 0, 87);
}

#desc{
  height: 1px;
}

@media only screen and (min-width: 299px) and (max-width: 426px) {

  .container {
    margin: auto;
  }

  #box {
    margin: auto;
    width: 275px;
    height: 500px;
  }

  img {
    width: 245px;
    height: 220px;
  }

  #buttons{
    margin-top: 150px;
  }
}
</style>