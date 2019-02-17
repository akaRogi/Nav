<template>
  <div id="header">
    <div class="header">
      <div class="row">
        <div class="header_title">
          <span class="iconfont icon-sheji"></span>
          <h1>{{$store.state.title}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  methods: {
    titleFn () {
      let name = this.$route.meta.name
      this.$store.commit('titleFn', name)
    }
  },
  created () {
    this.titleFn()
  },
  watch: {
    $route () {
      this.titleFn()
    }
  }
}
</script>

<style scoped>
  #header .header {
    position: relative;
    padding-top: 24px;
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #d9e3ea;
    background: rgba(218,227,234,.24);
  }
  #header .header .row {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #header .header .row .header_title {
    height: 28px;
    color: #3d3d3d;
    font-size: 20px;
    padding-left: 24px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
</style>
