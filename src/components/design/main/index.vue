<template>
  <div class="main_show">
    <div class="title">
      <span class="iconfont" :class="item[1].className"></span><h2>{{item[1].title_zh}}</h2>
    </div>
    <div class="list">
      <ul>
        <li v-for="icon in item[0]" :key="icon.title_zh">
          <a :href="icon.url" target="_blank">
            <div class="bg_img_box">
              <div class="bg_img" :style="'background-image: url('+ icon.icon +')'">
              </div>
              <div class="card_main">
                <div class="card_name">{{icon.title_zh}}</div>
                <div class="card_des">{{icon.desc_zh}}</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['item', 'index'],
  mounted () {
    var components = document.getElementsByClassName('main_show')[this.index]
    this.$emit('pushTop', components.offsetTop)
  }
}
</script>

<style scoped>
  .main .block_list {
    margin: 0 auto;
  }
  .main_show {
    padding-top: 20px;
    overflow: hidden;
  }
  .main_show .title {
    margin-bottom: 24px;
    height: 28px;
    font-size: 20px;
    color: #777;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .main_show .title span {
    font-size: inherit;
    margin-right: 10px;
  }
  .main_show .title h2 {
    height: 100%;
    letter-spacing: 1.2px;
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }
  .main_show .list ul {
    width: calc(100% + 40px);
  }
  .main_show .list li {
    margin: 0 24px 24px 0;
    width: 260px;
    height: 88px;
    display: inline-block;
    vertical-align: top;
    background: #fff;
  }
  .main_show .list li a {
    width: 100%;
    height: 88px;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px;
    display: block;
    transition: all .2s ease-out;
  }
  .main_show .list li a .bg_img_box {
    margin-top: 10px;
  }
  .main_show .list li a .bg_img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    float: left;
  }
  .main_show .list li a .card_name {
    width: 100%;
    position: relative;
    color: #3d3d3d;
  }
  .main_show .list li a .card_des {
    font-size: 12px;
    color: #909090;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color .3s ease-out;
  }
  @media (max-width: 631px){
    .main_show .list li {
      width: 100%;
    }
  }
</style>
