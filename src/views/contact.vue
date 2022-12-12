<template>
  <div id="page">
    <Navbar />
    <div id="contact1">
      <div class="cardforcontact animate__animated animate__fadeInDown">
        <div class="headings">GitHub</div>
        <br>
        <div class="icons">
          <a href="https://github.com/Clayton0205" target="blank"><i class="bi bi-github"></i></a>
        </div>
           <div class="username">
          <p>username: </p>
        </div>
          <div class="words">
          <p>Clayton0205</p>
        </div>
      </div>
      <div class="cardforcontact animate__animated animate__fadeInDown">
        <div class="headings">Linkedin</div>
        <br>
        <div class="icons">
          <a href="https://www.linkedin.com/in/clayton-adonis-798612238/" target="blank"><i class="bi bi-linkedin"></i></a>
        </div>
        <div class="username">
          <p>username: </p>
        </div>
          <div class="words">
          <p>Clayton Adonis</p>
        </div>
      </div>
      <div class="cardforcontact animate__animated animate__fadeInDown">
        <div class="headings">Twitter</div>
        <br>
        <div class="icons">
          <a href="https://twitter.com/Clayton_x_Terra" target="blank"><i class="bi bi-twitter"></i></a>
        </div>
           <div class="username">
          <p>username: </p>
        </div>
          <div class="words">
          <p>@Clayton_x_Terra</p>
        </div>
      </div>
      <div class="cardforcontact animate__animated animate__fadeInDown">
        <div class="headings">Phone</div>
        <br>
         <div class="icons">
          <i class="bi bi-phone"></i>
         </div>
            <div class="username">
          <p>Number: </p>
        </div>
          <div class="words">
          <p>066 258 8744</p>
        </div>
      </div>
         <div class="cardforcontact animate__animated animate__fadeInDown">
        <div class="headings">Email</div>
        <br>
         <div class="icons">
          <i class="bi bi-envelope-heart"></i>
         </div>
            <div class="username">
          <p>Address: </p>
        </div>
        <div class="words" id="emailid">
          <p>claytonxxclayton@gmail.com</p>
        </div>
      </div>
    </div>
    <div id="contact2" class="animate__animated animate__fadeInDown">
      <form action="https://formspree.io/f/xvoleayg" method="post">
        <div id="contact3">
          or Contact me directly
        </div>
        <div id="contact4">
          <input type="text" name="Name" class="bar" placeholder="Fullname">
          <br>
          <input type="text" name="Email" class="bar" placeholder="Email">
          <br>
          <textarea name="message" id="message" placeholder="Message"></textarea>
          <br>
          <input type="submit" value="Submit" id="submit">
        </div>
      </form>

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

a {
 color: RGB(0,0,87);
  text-decoration: none;
}

#page {
  background: linear-gradient(0deg, rgba(9,9,121,1) 0%, rgba(6,6,51,1) 100%);
  font-family: 'PT Serif', serif;
}

#contact1 {
  display: flex;
  color: RGB(0,0,87);
}

.cardforcontact {
  background-color: white;
  width: 400px;
  height: 250px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  border: 2px solid RGB(181,133,34);
  font-weight: bolder;
}

.headings {
  background-color: white;
  text-decoration: underline;
  color: RGB(181,133,34);
}

#email {
  margin-top: 88px;
  border-top: 2px solid RGB(181,133,34);
}

#footer {
  margin-top: 100px;
}

#contact2 {
  margin: auto;
  width: 60%;
  height: 230px;
  margin-top: 100px;
  text-align: center;
  color: RGB(0,0,87);
}

#contact3 {
  font-size: 30px;
   color: RGB(181,133,34);
  border: 2px solid RGB(181,133,34);
  background-color: white;
}

#arrowup {
  text-align: center;
  margin-left: 900px;
  color: RGB(0,0,87);
}

.bar {
  width: 95%;
  border: 2px solid RGB(181,133,34);
  text-align: center;
  color: RGB(0,0,87);
  margin-bottom: 4px;
}

#contact4 {
  margin-top: 20px;
}

#message {
  text-align: center;
  width: 95%;
  height: 100px;
  border: 2px solid RGB(181,133,34);
  text-align: center;
  color: RGB(0,0,87);
}

.username{
  font-size: 40px;
}

.icons {
  font-size: 50px;
}

.words{
  font-size: 20px;
}

#submit{
  background: white;
  border: 2px solid RGB(181,133,34);
  color: RGB(0,0,87);
}

@media only screen and (min-width: 299px) and (max-width: 426px) {
  #contact1{
    display: flex;
    flex-direction: column;
  }

  .cardforcontact{
    margin:auto;
    width: 245px;
  height: 220px;
  margin-bottom: 10px;
  }

  #emailid{
    font-size: 14px;
  }
}
</style>