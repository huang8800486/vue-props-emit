<template>
  <div id="app" class="container">
    <header-top></header-top>
    <transition enter-active-class="animated fadeIn">
        <router-view></router-view>
    </transition>
    <!-- <footer-bottom></footer-bottom> -->
  </div>
</template>


<script>
import HeaderTop from "./components/module/header";
import FooterBottom from "./components/module/footer";
export default {
  name: 'App',
  components: {
    HeaderTop,
    FooterBottom
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
