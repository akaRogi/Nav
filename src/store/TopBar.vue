<template>
<div id="nav">
  <div class="Box">
    <div class="btn_menu" @click="$store.commit('LeftNavFn')"></div>
    <div class="nav_logo">
      <h1>
        <a href="">
          <img src="../assets/imgs/logo.png">
        </a>
      </h1>
    </div>
    <div style="width: 16px; height: 16px;"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
  #nav .Box {
    position: fixed;
    display: none;
    top: -50px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    background: #fff;
    -webkit-box-shadow: 0 6px 16px 0 rgba(211,222,230,.8);
    box-shadow: 0 6px 16px 0 rgba(211,222,230,.8);
    padding: 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    transition: top .3s;
  }
  #nav .btn_menu {
    width: 16px;
    height: 2px;
    background: #303030;
    background-clip: content-box;
    padding: 5px 0px;
    border-top: 2px #303030 solid;
    border-bottom: 2px #303030 solid;
  }
  @media (max-width: 631px){
    #nav{
      padding-top: 50px;
    }
    #nav .Box{
      top: 0px;
    }
  }
</style>
