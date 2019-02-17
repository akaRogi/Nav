<template>
  <div id="daily" ref="wrapper" :style="HeightStyle">
    <div class="block-wrapper">
      <router-link
        :to="'/daily/'+item.one.one_id"
        v-for="(item, index) in list"
        :key="item.one.vol"
        v-if="p > index"
      >
        <div class="bg-img" :style="'background-image: url('+ item.one.thumbnail +')'"></div>
        <div class="w_main">
          <div class="w_title">
            <div class="w_tx"></div>
            <div class="w_bt">
              <div>vol.{{item.one.vol}}</div>
              <div>{{item.link.title_zh}}</div>
            </div>
          </div>
          <div style="position: relative;padding-top: 16px;">
            <div class="main_show">{{item.one.title_zh}}</div>
            <div class="pic-s" :style="'background-image: url('+ item.one.thumbnail +')'"></div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="loadBox" v-show="loadOff">
      <loadin></loadin>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import loadin from './loading/loading'
export default {
  name: 'index',
  components: {
    loadin
  },
  data () {
    return {
      list: [],
      HeightStyle: '',
      p: 0,
      bscollOff: false,
      loadOff: true
    }
  },
  methods: {
    requestheight () {
      let top = document.getElementById('daily').offsetTop
      let hei = document.documentElement.clientHeight - top - 1
      this.HeightStyle = 'height:' + hei + 'px'
    },
    bscrollFn () {
      this.$nextTick(() => {
        // $refs绑定元素
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            // 开启点击事件 默认为false
            click: true,
            pullUpLoad: {
              threshold: -180 // 当上拉距离超过30px时触发 pullingUp 事件
            }
          })

          this.scroll.on('pullingUp', () => {
            this.p += 20
            this.scroll.finishPullUp()
          })
          // console.log(this.scroll)
        } else if (!this.$refs.wrapper) {
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
  created () {
    let This = this
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

    this.axios.get('https://api.seeseed.com/one/history', {
      headers: {
        'Content-Type': 'Access-Control-Allow-Origin'
      }})
      .then(function (res) {
        This.list = res.data.data.list
        This.loadOff = false
        if (flag) {
          This.bscollOff = false
          This.p += 99999999
        } else {
          This.bscollOff = true
          This.p += 20
        }
      })
  },
  watch: {
    p () {
      if (this.bscollOff) {
        this.requestheight()
        this.bscrollFn()
      }
    }
  }
}
</script>

<style scoped>
#daily{
  overflow: hidden;
}
.loadBox{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 20;
}
.block-wrapper {
  margin-top: 30px;
  width: calc(100% + 24px);
}
.block-wrapper a {
  margin: 0 20px 48px 0;
  display: inline-block;
  vertical-align: top;
  width: 260px;
  height: auto;
  border-radius: 2px;
  background: #fff;
  overflow: hidden;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
  font-size: 16px;
}
.block-wrapper a .bg-img {
  width: 260px;
  height: 163px;
  background-size: cover !important;
  background-position: 50% center !important;
}
.block-wrapper a .w_main {
  padding: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.block-wrapper a .w_title {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(239, 239, 239);
}
.block-wrapper a .w_title .w_tx {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url("../../assets/imgs/tx.png");
  background-size: 100% 100%;
}
.block-wrapper a .w_title .w_bt {
  margin-left: 8px;
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 45px);
  font-size: 14px;
  color: rgb(35, 35, 35);
  line-height: 16px;
}
.block-wrapper a .main_show {
  height: 44px;
  font-size: 14px;
  color: #686868;
  white-space: normal;
  line-height: 22px;
  overflow: hidden;
}

.pic-s {
  display: none;
  width: 116px;
  height: 72px;
  background-size: cover!important;
  background-position: 50%!important;
}
@media (max-width: 631px){
  .block-wrapper a {
    margin: 0 0 16px;
    width: 100%;
  }
  .block-wrapper a .bg-img {
    display: none;
  }
  .block-wrapper a .main_show {
    display: inline-block;
    width: calc(100% - 116px - 26px);
  }
  .pic-s {
    width: 116px;
    height: 72px;
    display: inline-block;
    vertical-align: top;
  }
  .block-wrapper{
    margin-top: 10px;
    width: calc(100% + 24px);
  }
}
</style>
