<template>
  <nav id="nav">
    <div class="container-fluid">
      <div class="row">
        <div class="col animate__animated animate__fadeInUp"><router-link to="/" class="hover">Home</router-link></div>
        <div class="col animate__animated animate__fadeInUp"><router-link to="/about" class="hover">About</router-link></div>
        <div class="col animate__animated animate__fadeInUp"><router-link to="/resume" class="hover">Resume</router-link></div>
        <div class="col animate__animated animate__fadeInUp"><router-link to="/projects" class="hover">Projects</router-link></div>
        <div class="col animate__animated animate__fadeInUp"><router-link to="/testimonials" class="hover">Testimonials</router-link></div>
        <div class="col animate__animated animate__fadeInUp"><router-link to="/contact" class="hover">Contact</router-link></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}


#nav {
  padding-top: 10px;
  width: 99.82%;
  height: 100px;
  text-align: start;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  font-family: 'PT Serif', serif;

}

a {
  color: RGB(181, 133, 34);
  font-weight: bold;
}

a:hover {
  color: RGB(181, 133, 34);
}

.hover {
  margin-left: 100px;
}

@media only screen and (min-width: 299px) and (max-width: 426px) {
  * {
    margin: 0;
    padding: 0;
  }

  #nav {
    padding-top: 10px;
    width: 100vw;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: row wrap;
    flex-wrap: wrap;
    margin: auto;
  }

  a {
    font-size: 10px;
    padding-left: 3vw;
    text-align: center;
  }

  a:hover {
    font-size: 10px;
    text-align: center;
  }

  .hover {
    margin-left: 0px;
    text-align: center;
  }
}
</style>