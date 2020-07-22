<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" @close="closeSide" v-if="!sideClosed"/>
    <div class="main-container" :style="{'margin-left': sideClosed ? '0' : '256px'}">
      <nav-bar />
      <app-main />
    </div>
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
    closeSide(){
      
    }
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
  background-color: #f0f2f5;
}
</style>
