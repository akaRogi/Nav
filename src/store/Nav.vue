<template>
  <div id="left_content" :class="{show : $store.state.LeftNav}">
    <div class="logo_box">
      <h1>
        <a href="">
          <img src="../assets/imgs/logo.png" alt="">
          <span>设计导航</span>
        </a>
      </h1>
    </div>
    <div class="menu">
      <router-link
        tag="div"
        v-for="(item, index) in nav"
        :key="index"
        :to="item.url"
      >
        <div @click="Showw(item, index)">
          <a href="" class="nav_a">
            <span :class="item.Class"></span>
            <span>{{item.name}}</span>
          </a>
          <div class="S_nav" v-if="twoNav(item.children)">
            <ul :class="{show : index === p}">
              <li
                v-for="(two, j) in item.children"
                :key="j"
                @click="isShow(j)"
                :class="{nav_is_show : j === $store.state.leftsonNav}"
              >
                <span :class="{show : j === $store.state.leftsonNav}">
                  <a href="Javasrcipt:;">{{two.name}}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      nav: this.$store.state.Nav,
      off: false,
      p: 0,
      MainListmap: this.$store.state.designList
    }
  },
  methods: {
    twoNav (data) {
      let off
      data.length ? off = true : off = false
      return off
    },
    Showw (data, index) {
      if (this.off) {
        if (data.name !== '设计观赏') {
          this.$store.commit('LeftNavFn')
        }
      }
      this.p = index
    },
    isShow (index) {
      let time = null
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > this.MainListmap[index]) {
        time = setInterval(() => {
          if (scrollTop > this.MainListmap[index]) {
            scrollTop -= this.$store.state.scroll
            window.scrollTo(scrollTop, scrollTop)
            console.log(scrollTop)
          } else {
            window.scrollTo(this.MainListmap[index], this.MainListmap[index])
            clearInterval(time)
          }
        }, 20)
      } else {
        time = setInterval(() => {
          if (scrollTop < this.MainListmap[index]) {
            scrollTop += this.$store.state.scroll
            window.scrollTo(scrollTop, scrollTop)
            console.log(scrollTop)
          } else {
            window.scrollTo(this.MainListmap[index], this.MainListmap[index])
            clearInterval(time)
          }
        }, 20)
      }
      console.log(scrollTop)
      this.$store.commit('LeftNavFn')
    }
  },
  created () {
    function IsPC () {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
    var flag = IsPC()
    if (!flag) {
      this.off = true
      this.$store.commit('scrollFn', 250)
    }
  }
}
</script>

<style scoped>
.is_show a span{
  color: rgb(252, 209, 51);
}
.mark{
  position: fixed;
  top: 0;
  left: 0;
}
</style>
