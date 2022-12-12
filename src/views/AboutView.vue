<template>
  <div id="page">
    <Navbar />
    <div class="container-fluid">
      <div class="row ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="content" id="wrapper">
              <!-- Card 1 -->
              <div class="container">
                <div id="card">
                  <div id="front">
                    <img src="../assets/1.jpg" id="serv">
                  </div>
                  <div id="back">
                    <img src="../assets/clayton.jpg" id="me">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center animate__animated animate__fadeInDown">
      <div id="about">
        <h2>About me</h2>
      </div>
    </div>
    <div class="row animate__animated animate__fadeInDown">
      <div id="basicinfo">
        <p>Fullname : Clayton Charles Adonis</p>
        <br>
        <p>Date of Birth : May 2 2002</p>
        <br>
        <p>Gender : Male</p>
      </div>
      <div id="bio">
        <div id="morebio">
          <p>Bio</p>
        </div>
        <p>
          I'm caring guy who,once I've found something I'm passionate about,pursues it and my latest passion,coding.
          I've always enjoyed working with computers, and after a long journey of discovering myself, I realised that
          I'd enjoy a life of programming and development
        </p>
      </div>
    </div> 
    <div class="row animate__animated animate__fadeInDown">
      <div id="hobbies">
        <div id="morehobbies">
          <p>Hobbies</p>
        </div>
        <p>I enjoy reading,playing games and watching anything with an amazing story. If I'm not coding I'm usually
          getting into long and drawn out stories. This goes for Movies,Series,Anime,Manga,Books,Light Novels and
          Games. I especially enjoy League of Legends and Legends of Runeterra because they have expansive stories
          that take place in the same universe. Riot Games has made Comics,Short Stories,Videos and a Netflix series
          on their characters making it more enjoyable for me to continue my addiction even when I'm not playing games
        </p>
      </div>
    </div>
    <div class="row animate__animated animate__fadeInDown">
      <div id="softskills">
        <div id="moresoftskills">
          <p>Soft SKills</p>
        </div>
        <div id="softbox">
          <div class="container-fluid">
            <div class="row">
              <div class="col box">Decision-making</div>
              <div class="col box">Organisational</div>
              <div class="col box">Adaptability</div>
              <div class="col box">Opennes to Criticism</div>
              <div class="col box">Writing Skills</div>
              <div class="col box">Resourcefulness</div>
            </div>
            <div class="row animate__animated animate__fadeInDown">
              <div class="col box">Storytelling</div>
              <div class="col box">Listening</div>
              <div class="col box">Creativity</div>
              <div class="col box">Artistic Aptitude</div>
              <div class="col box">Critical Observation</div>
              <div class="col box">Public Speaking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="row animate__animated animate__fadeInDown">
    <div id="techskills">
      <div id="moretechskills">
        <p>Technical SKills</p>
      </div>
      <div id="techbox">
        <div class="container-fluid">
          <div class="row">
            <div class="col box">HTML</div>
            <div class="col box">CSS</div>
            <div class="col box">Bootstrap</div>
            <div class="col box">Javascript</div>
          </div>
          <div class="row">
            <div class="col box">Node.js</div>
            <div class="col box">Vue.js</div>
            <div class="col box">Vuetify</div>
            <div class="col box">Wireframing</div>
          </div>
          <div class="row">
            <div class="col box">Database Manegement</div>
            <div class="col box">Task Management</div>
            <div class="col box">Project Planning</div>
            <div class="col box">Time Management</div>
          </div>
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
  components: { Navbar, Footer, Up }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#page {
  background: linear-gradient(0deg, rgba(9,9,121,1) 0%, rgba(6,6,51,1) 100%);
  height: 120vh;
  font-family: 'PT Serif', serif;
}

#me {
  position: fixed;
  width: 348px;
  height: 500px;
   border: 5px solid RGB(181, 133, 34);
}

#serv {
  position: fixed;
  width: 348px;
  height: 500px;
}

.row {
  color: RGB(0, 0, 87);
}

#about {
  text-decoration: underline;
  color: RGB(181, 133, 34);
}

#basicinfo {
  text-align: center;
  margin-left: 90px;
  width: 260px;
  height: 120px;
  background-color: white;
  border: 2px solid RGB(181, 133, 34);
}

#bio {
  margin-left: 100px;
  background-color: white;
  text-align: center;
  width: 600px;
  height: 120px;
  border: 2px solid RGB(181, 133, 34);
}

#morebio {
  text-decoration: underline;
  color: RGB(181, 133, 34);
}

#hobbies {
  margin-top: 20px;
  margin-left: 90px;
  background-color: white;
  text-align: center;
  width: 960px;
  height: 150px;
  border: 2px solid RGB(181, 133, 34);
}

#morehobbies {
  text-decoration: underline;
  color: RGB(181, 133, 34);
}

#softskills {
  margin-top: 20px;
  margin-left: 90px;
  margin-bottom: 10px;
  text-align: center;
  width: 960px;
  height: 130px;
}

#moresoftskills {
  background-color: white;
  border: 2px solid RGB(181, 133, 34);
  color: RGB(181, 133, 34);
}

#softbox {
  display: flex;

}

.box {
  background-color: white;
  width: 20px;
  height: 50px;
  border: 1px solid RGB(181, 133, 34);
}

#techskills {
  margin-left: 90px;
  margin-bottom: 80px;
  text-align: center;
  width: 960px;
  height: 130px;
}

#moretechskills {
  background-color: white;
  border: 2px solid RGB(181, 133, 34);
  color: RGB(181, 133, 34);
}

#techbox {
  display: flex;
}

#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#card {
 width: 360px;
  height: 509px;
  position: fixed;
  transition: transform 2s;
  transform-style: preserve-3d;
  margin-left: 1100px;
  animation: rotation 5s infinite linear;
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
  position: fixed;
  width: 350px;
  height: 500px;
  border-radius: 2%;
  backface-visibility: hidden;
}

#back {
  transform: rotateY(180deg);
}


@media only screen and (min-width: 299px) and (max-width: 426px) {
  #page {
    background-image: url(../assets/uFfAIAt_426x1300.png);
    width: 100vw;
    height: 1300px;
  }

  #card{
    position: relative;
    margin-left: 25px;
    height: 300px;
  }

  #front, #back{
   position: absolute;
  }

  #basicinfo {
    margin: auto;
    margin-bottom: 10px;
  }

  #me {
    margin: auto;
    position: unset;
    width: 250px;
    height: 300px;
    margin-bottom: 10px;
  }

#serv{
    margin: auto;
    position: unset;
    width: 250px;
    height: 300px;
    margin-bottom: 10px;
}
  #about {
    margin: auto;
  }

  #bio {
    margin: auto;
    width: 275px;
    height: 220px;
    margin-bottom: 10px;
  }

  #hobbies {
    margin: auto;
    width: 275px;
    height: 280px;
    margin-bottom: 10px;
    font-size: 13px;
  }

  #softskills {
    margin: auto;
    width: 275px;
    height: 123px;
    margin-bottom: 10x;
    font-size: 6px;
  }

  #techskills {
    margin: auto;
    width: 275px;
    height: 280px;
    font-size: 6px;
  }
}
</style>

