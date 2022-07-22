<template>
  <!-- <div>
    <h1 padding-top="1000">Projects</h1>
  </div> -->
  <p padding="100">&nbsp;</p>
  <p padding="100">&nbsp;</p>
  <p padding="100">&nbsp;</p>
  <router-link to="/ECE157A">
  <div class="card">
    <img src="@/assets/logo.png" alt="Avatar" style="width:120px">
    <div class="container">
        <h4>Machine Learning Analytical Website</h4>
    <p>ECE157A</p>
    </div>
  </div>
  </router-link>

  <router-link to="/">
  <div class="card">
    <img src="@/assets/logo.png" alt="Avatar" style="width:120px">
    <div class="container">
        <h4><b>DeepDream Art</b></h4>
    <p>ECE157B</p>
    </div>
  </div>

  </router-link>
</template>

    

<style>

body{
  background-image: url("@/assets/background2.png");
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap');
strong{
  font-family: "Poppins";
  text-align: left;
}

.card {
  /* Add shadows to create the "card" effect */
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 1em;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}

</style>