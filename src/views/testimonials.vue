<template>
  <div id="page">
    <Navbar />
    <div class="container-fluid">
      <div v-for="testimonial in testimonials" :key="testimonial" id="box">
        <div class="animate__animated animate__fadeInDown">
          <div id="p">
            <p>{{ testimonial.name }}</p>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="content" id="wrapper">
                <!-- Card 1 -->
                <div class="container">
                  <div id="card">
                    <div id="front">
                      <img :src="testimonial.class" id="serv">
                    </div>
                    <div id="back">
                      <img :src="testimonial.image" id="me">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="words">
            <p>{{ testimonial.title }}</p>
            <p>{{ testimonial.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import Up from '../components/uptonav.vue';

export default {
  components: { Navbar, Footer, Up },
  computed: {
    testimonials() {
      return this.$store.state.testimonials
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
  background: linear-gradient(0deg, rgba(9, 9, 121, 1) 0%, rgba(6, 6, 51, 1) 100%);
  font-family: 'PT Serif', serif;
}

.container-fluid {
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
  margin-bottom: 30px;
  text-align: center;
  color: RGB(0, 0, 87);
  justify-content: center;
}

img {
  width: 170px;
  height: 230px;
  border: 2px solid RGB(181, 133, 34);
}

#box {
  background-color: white;
  border: 2px solid RGB(181, 133, 34);
  width: 380px;
  height: 500px;
}

#p {
  text-decoration: underline;
  color: RGB(181, 133, 34);
}

#wrapper {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}

#card {

  width: 360px;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  transition: transform 2s;
  transform-style: preserve-3d;
  animation: rotation 5s infinite linear;
  margin-right: 120px;
}

.words {
  padding-top: 5vh;
}

.container:hover #card {
  transform: rotateY(180deg);
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(359deg);
  }
}

#front,
#back {
  position: absolute;
  width: 350px;
  height: 500px;
  border-radius: 2%;
  backface-visibility: hidden;
}

#back {
  transform: rotateY(180deg);
}

@media only screen and (min-width: 299px) and (max-width: 426px) {
  .container {
    margin: auto;
  }

  #box {
    margin: auto;
    width: 275px;
  }

  img {
    width: 245px;
    height: 220px;
    margin-bottom: 20px;
  }

  #card {
    margin: auto;
    position: relative;
    height: 250px;
  }

  #front,
  #back {
    position: absolute;
  }
}
</style>