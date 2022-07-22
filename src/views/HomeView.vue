<template>
<body>
  <div id="sitewrap">

    <!-- <div class ="intro">
      Welcome to my website! Here's where I showcase everything!
    </div> -->
    <div class="bg">
      <div class="bouncing-text">
        <div class="s">s</div>
        <div class="h">h</div>
        <div class="a">a</div>
        <div class="u">u</div>
        <div class="n">n</div>
        <div>&nbsp; </div>
        <div class="c">c</div>
        <div class="hh">h</div>
        <div class="e">e</div>
        <div class="nn">n</div>
      </div>
      <!-- <img src="@/assets/name.png" alt="Name" class="name"> -->

      <!-- <div class="image">
        <img src="@/assets/smiley.png" alt="Smiley Face" width="300">
      </div> -->
    </div>
    

    <div class="about">
      <img src="@/assets/grad.jpg" alt="Graduation Photo" class="grad" style="margin: 1em">
      <div style="margin-bottom: 3em">
        <strong>Hello, I'm Shaun! I just finished my Bachelor's degree in Electrical Engineering at University of California, Santa Barbara.</strong>
        <br>
        <strong>I plan to further pursue a Master's in Electrical and Computer Engineering with an Emphasis in Signal Processing.</strong>  
      </div>
    </div>

    <div class="footer">
      <div><strong>Connect with me!</strong> </div>
      <a href="mailto:shaunchen@ucsb.edu"><img src="@/assets/email.png" alt="Email Logo" class = "icons"></a>
      <a href="https://www.linkedin.com/in/shaunchen8/"><img src="@/assets/linkedin.png" alt="LinkedIn Logo" class = "icons"></a>
      <a href="https://github.com/shaunchenucsb"><img src="@/assets/github.png" alt="Github Logo" class = "icons"></a>
      <a href="https://www.instagram.com/croishaunt/"><img src="@/assets/instagram.png" alt="Instagram Logo" class = "icons"></a>
    </div>

  </div>
</body>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#sitewrap{
  /* background: pink; */
  /* background-image: url("@/assets/background2.png"); */
  height: 100vh;
  display: grid;
  grid-template-columns: 
    1fr 100% 1fr 
  ;
  grid-gap: 0px;
  grid-template-rows: 
    1080px
    min-content
    1fr
  ;
  grid-template-areas: 
    "bg      bg      bg     "
    ".      about   .     "
    "footer footer  footer"
  ;
}

body{
  margin: 0;
}

.bg{
  grid-area: bg;
  display: flex;
  background-image: url("@/assets/background2.png");
  align-items: center;
  justify-content: center;
}

@media screen and (max-width:468) {
  .bg {
    width: 42vw;
  }
}

.bouncing-text {
  position: relative;
  display: flex;
  font-size: 70px;
  font-family: arial black;  
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap');
.s, .h, .a, .u, .n, .c, .hh, .e, .nn {
  font-family: "Poppins";
}

@keyframes bounce {
        0%   { transform: scale(1,1) translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-55px);}
        50%  { transform: scale(1.05,.95) translateY(0); }
        58%  { transform: scale(1,1) translateY(-7px); }
        65%  { transform: scale(1,1) translateY(0);}
        100% { transform: scale(1,1) translateY(0);}
    }

.s {
  animation: bounce 1s ease ;
}

.h {
  animation: bounce 1s ease .1s;
}

.a {
  animation: bounce 1s ease .2s;
}

.u {
  animation: bounce 1s ease .3s;
}

.n {
  animation: bounce 1s ease .4s;
}

.c {
  animation: bounce 1s ease .5s;
}

.hh {
  animation: bounce 1s ease .6s;
}

.e {
  animation: bounce 1s ease .7s;
}

.nn {
  animation: bounce 1s ease .8s;
}

.image{
  /* background: yellow; */
  grid-area: image;
  align-self: flex-end;
}

.about{
  background: white;
  grid-area: about;
  align-self: center;
  min-height: auto;
}

.grad{
  width: 30em;
}

.footer{
  background: grey;
  grid-area: footer;
  padding: 30px;
}

.icons{
  width: 25px;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-top: 1em;
}
</style>