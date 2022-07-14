<script setup>

</script>

<template>
  <div>
    <div>
       <router-link to="/add">add</router-link>|
        <router-link to="/list">list</router-link>
    </div>
    <router-view />
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
