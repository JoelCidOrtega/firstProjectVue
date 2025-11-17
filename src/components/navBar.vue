<template>
  <nav>
    <img src="/src/images/favicon.ico" alt="logo" />
    <router-link to="/">Inicio</router-link>
    <router-link to="/jugar">Jugar</router-link>
    <router-link to="/ranking">Ranking</router-link>
  </nav>
</template>
<script></script>
<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
nav {
  display: flex;
  align-items: center;
  background-color: #35495e;
  padding: 10px;
  position: sticky;
}
nav img {
  height: 40px;
  margin-right: 20px;
}
nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
}
</style>
