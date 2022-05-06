<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/application">Application</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
  list-style-type: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  background-color: rgb(0, 255, 128);
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav router-link:hover:not(.active){
  background-color:#111 ;
}
nav a.router-link-exact-active {
  color: #42b983;
  font-size: 20px
}
</style>
