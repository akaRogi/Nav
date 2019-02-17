<template>
  <div id="home">
    <div class="h_Fea">
      <ul>
        <router-link
          tag="li"
          v-for="(item, index) in list"
          :key="index"
          :to="item.url"
          exact
          :class="{is_show : navshow === index}"
        >
          <div @click.stop="routepush(item, index)"></div>
          {{item.name}}
        </router-link>
      </ul>
    </div>
    <div class="h_sef">
      <input
        type="text"
        name="keyword"
        id="keyword"
        value=""
        autocomplete="off"
        style="float:left;width:96%;"
        v-model="text"
        @keyup.enter="opss"
      >
      <div class="ent" @click="opss">
        <div class="sousuo">
          <span>搜索</span>
          <i>Enter</i>
        </div>
      </div>
      <div class="mao"></div>
    </div>
    <div class="h_sect">
      <transition :name="transition" out-in>
        <router-view v-if="hackReset" :list="sonNavList"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: this.$store.state.homeNav,
      navshow: 0,
      hackReset: true,
      transition: 'left',
      sonNavList: [],
      text: ''
    }
  },
  methods: {
    routepush (data, index) {
      this.$router.push({path: data.url, query: {id: data.id}})
      this.navshow = index
    },
    hackResetoff () {
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    },
    FindData () {
      let url = this.$route.path
      let Data = this.list.find(item => item.url === url)
      this.sonNavList = Data.list
    },
    opss () {
      open(this.url + this.text)
    }
  },
  computed: {
    url () {
      return this.$store.state.url
    }
  },
  watch: {
    $route (to, from) {
      this.hackResetoff()
      if (to.query.id > from.query.id) {
        this.transition = 'left'
      } else {
        this.transition = 'right'
      }
      this.FindData()
    }
  },
  created () {
    this.navshow = Number(this.$route.query.id)
    this.FindData()
  }
}
</script>

<style scoped>
#home .h_Fea {
  position: relative;
  width: 100%;
}
#home .h_Fea ul {
  width: 100%;
  overflow: hidden;
}
#home .h_Fea li {
  position: relative;
  float: left;
  display: inline-block;
  font-size: 26px;
  color: #000;
  text-align: center;
  opacity: .4;
  cursor: pointer;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  will-change: transform,opacity;
  padding: 16px 18px;
  margin: 0 10px;
  overflow: hidden;
}
#home .h_Fea li div{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#home .h_Fea li:before{
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
}
#home .h_sef {
  width: 100%;
  height: 48px;
  position: relative;
  margin: 16px 0 40px 0;
  background: #fff;
}
#home .h_sef input {
  width: 0;
  height: 100%;
  font-size: 20px;
  padding-left: 20px;
  border: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(0,0,0,0);
  -webkit-transition: width .5s;
  transition: width .5s;
  -moz-transition: width .5s;
}
#home .h_sef .ent {
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  text-align: center;
  cursor: pointer;
  background: #fcd133;
  padding: 0 20px;
  z-index: 2;
}
#home .h_sef .ent div {
  width: 100%;
  height: 100%;
  font-size: 26px;
  float: left;
  font-weight: 400;
  margin: 0 auto;
  line-height: 1.8;
}
#home .h_sef .ent div span {
  display: block;
  float: left;
  margin-right: 10px;
}
#home .h_sef .ent div i {
  display: block;
  line-height: 1.2;
  height: 48%;
  margin: 8.5% 0;
  width: 54px;
  float: left;
  background: #000;
  border-radius: 5px;
  color: #fff;
  font-weight: 100;
  padding: 0px 4px;
  font-style: normal;
  font-size: 20px;
}
#main .h_Fea li.is_show {
  font-weight: 600;
  color: #fcd133;
}
#main .h_Fea li.is_show:before, #main .h_Fea li:hover:before {
  background: #fcd133;
}
#main .h_sect {
  position: relative;
  width: 100%;
  height: 72px;
  padding-right: 40px;
}
@media (max-width: 631px){
  #main .h_sect {
    position: relative;
    width: 100%;
    height: 72px;
    padding-right: 0;
  }
  #home .h_Fea li{
    font-size: 16px;
    padding: 16px 4px;
  }
}
.left-enter{
  left:50px
}
.left-enter-active,.right-enter-active{
  transition: left .3s;
  -moz-transition: left .3s;
  transition-timing-function: cubic-bezier(0.12, 0.39, 0.3, 1.29);
  -moz-transition-timing-function: cubic-bezier(0.12, 0.39, 0.3, 1.29);
}
.left-enter-to,.right-enter-to{
  left:0px
}
.right-enter{
  left:-50px
}
</style>
