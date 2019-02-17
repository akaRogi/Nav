<template>
  <div id="app">
    <TopBar></TopBar>
    <Nav></Nav>
    <Title></Title>
    <div
      class="Mark"
      @click="$store.commit('LeftNavFn')"
      :class="{show : $store.state.LeftNav}"
    ></div>
    <div id="main">
      <div class="Box">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
          <!-- 这里是不被缓存的视图组件，比如 page3 -->
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './store/Title'
import Nav from './store/nav'
import TopBar from './store/TopBar'
export default {
  name: 'App',
  components: {
    Title,
    Nav,
    TopBar
  }
}
</script>

<style>
.Mark{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.2);
  z-index: -100;
  opacity: 0;
  transition: .2s;
}
.Mark.show{
  display: block;
  opacity: 1;
  z-index: 30;
}
</style>
