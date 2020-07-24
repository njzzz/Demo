<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" v-if="!sideClosed"/>
    <div class="main-container" :style="{'margin-left': sideClosed ? '0' : '256px'}">
      <nav-bar />
      <app-main />
    </div>
    <div 
    :style="{
      left: sideClosed ? '-5px' : '253px'
    }" 
    class="menu-toggle" 
    @click="sideClosed=!sideClosed">{{ sideClosed ? '>' : '<' }}</div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
  data(){
    return {
      sideClosed: false
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
}
.menu-toggle{
  width: 15px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  background: rgb(0, 20, 42);
  position: fixed;
  top: 50%;
  z-index: 1;
  cursor: pointer;
  color: #ffffff;
  transition: left 0.28s;
}
</style>
