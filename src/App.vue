<template>
  <header class="header">
    <router-link to="/" class="active"><img src="@/assets/logo.png" alt="Logo" class="logo"></router-link>
    <nav class="nav">
      <!-- <router-link to="/about" class="active">About</router-link> -->
      <router-link to="/projects" class="active">Projects</router-link>
      <router-link to="/resume" class="active">Resume</router-link>
    </nav>
  </header>
  <router-view/>
  <!-- <header>
    <div class="header">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
      <ul class="nav">
          <li><a href="">About</a></li>
          <li><a href="">Resume</a></li>
      </ul>
    </div>
  </header> -->
</template>

<style>
/* *{
  background: #c0e4d4;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  /* background-color: red; */
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em;
  position: fixed;
  width: 100%;
}

.header .logo{
  width: 5em;
}

.header .nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border:2px solid #2c3e50;
  border-radius: 50em;
  color: rgb(182, 164, 145);
  padding: 15px 20px;
  margin: 0 1em;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 2em;
}

.header .nav a:hover, .header .nav a .active{
  background-color: #2c3e50;
}

.header .nav a.router-link-exact-active {
  color: #42b983;
}

</style>
