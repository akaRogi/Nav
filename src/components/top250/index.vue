<template>
  <div class="top_250_box" ref="wrapper" :style="HeightStyle">
    <ul id="top250box">
      <li v-for="(item, index) in list" :key="item.name" v-if="End > index">
        <div class="t_250_img"><img :src="item.img"></div>
        <div class="t_250_txt">
          <h4>{{item.name}}</h4>
          <p class="director">导演: {{item.director}}   主演:{{item.Starring}}</p>
          <p class="theme">{{item.date}} / {{item.Plot}} </p>
          <p class="top_pj">{{item.fraction}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index',
  data () {
    return {
      list: this.$store.state.top250,
      End: 0,
      HeightStyle: '',
      off: true
    }
  },
  methods: {
    requestheight () {
      let top = document.getElementById('top250box').offsetTop
      let hei = document.documentElement.clientHeight - top - 164 - 1
      this.HeightStyle = 'height:' + hei + 'px'
    }
  },
  mounted () {
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
    if (flag) {
      this.End += 250
      this.off = false
    } else {
      this.End += 25
    }
  },
  watch: {
    End () {
      if (this.off) {
        this.requestheight()
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
              this.End += 25
              this.scroll.finishPullUp()
            })
            // console.log(this.scroll)
          } else if (!this.$refs.wrapper) {
          } else {
            this.scroll.refresh()
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .top_250_box {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    overflow-y: hidden;
  }
  .top_250_box ul li {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px dashed rgba(0,0,0,0.4);
  }
  .top_250_box ul li .t_250_img {
    width: 100px;
    float: left;
    margin-right: 10px;
  }
  .top_250_box ul li .t_250_txt {
    width: 59%;
    float: left;
    line-height: 1.4;
  }
  .top_250_box ul li .t_250_img img {
    width: 100%;
  }
  .top_250_box ul li .t_250_txt h4 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
  }
  .top_250_box ul li .t_250_txt .director {
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .top_250_box ul li .t_250_txt .theme {
    line-height: 1;
    margin-bottom: 24px;
  }

</style>
