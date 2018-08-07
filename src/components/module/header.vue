<template>
  <div class="header">
    <div v-for="(item, index) in navList" :key="index">
      <router-link :to="item">{{item}}</router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navList: ["index", "home", "login"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
