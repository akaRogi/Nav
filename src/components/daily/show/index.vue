<template>
  <div class="content">
    <div class="daily">
      <div class="daily-pic">
        <img :src="Data.one.image" alt="">
      </div>
      <div class="daily-info">
        <div class="titiel_top">
          <div class="title_header">
            <h2>vol.{{Data.one.vol}}</h2>
            <h1>{{Data.link.title_zh}}</h1>
          </div>
        </div>
        <div class="middle">
          <p>{{Data.one.desc_zh}}</p>
        </div>
        <div class="t_bottom">
          <div class="card">
            <div class="card-main">
              <div class="c_tx" :style="'background-image: url('+ Data.link.icon +')'"></div>
              <div class="card-info">
                <div class="card-name">{{Data.link.title_zh}}</div>
                <div class="card-main">{{Data.link.desc_zh}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      Data: {
        one: {
          image: '',
          vol: '',
          desc_zh: ''
        },
        link: {
          title_zh: '',
          icon: '',
          desc_zh: ''
        }
      }
    }
  },
  created () {
    let This = this
    this.axios.get(`https://api.seeseed.com/one/${this.$route.params.id}`, {
      headers: {
        'Content-Type': 'Access-Control-Allow-Origin'
      }})
      .then(function (res) {
        This.Data = res.data.data
      })
  }
}
</script>

<style scoped>
  .content{
    height: auto;
    min-height: 100%;
    padding: 1px 44px 70px;
  }
  .daily{
    position: relative;
    margin: 32px auto;
    background: #fff;
    text-align: center;
  }
  .daily-pic{
    position: relative;
    height: auto;
    background: #ccc;
    line-height: 0;
    overflow: hidden;
  }
  .daily-pic img{
    width: 100%;
    height: auto;
  }
  .titiel_top{
    position: relative;
    border-bottom: 1px solid #efefef;
  }
  .title_header{
    width: calc(100% - 60px);
    text-align: left;
    font-size: 20px;
    color: #232323;
    letter-spacing: .2px;
  }
  .title_header h1{
    font-size: inherit;
    line-height: 14px;
  }
  .title_header h2{
    margin-right: 10px;
    display: inline-block;
    font-size: inherit;
    font-weight: 300;
  }
  .middle p{
    margin: 14px 0;
    font-size: 14px;
    color: #686868;
    letter-spacing: .4px;
    line-height: 24px;
    text-align: justify;
    word-break: break-all;
  }
  .t_bottom{
    position: absolute;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
  }
  .card{
    position: relative;
    display: block;
    width: 100%;
    height: 88px;
    border-top: 1px solid #efefef;
  }
  .card-main{
    height: 40px;
  }
  .c_tx{
    width: 32px;
    height: 32px;
    margin: 4px 16px 0 0;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    background: #000;
    background-size: 100%;
    border-radius: 50%;
  }
  .card-info{
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 48px - 30px);
    height: 100%;
  }
  .card-name{
    margin-top: 0;
    font-size: 14px;
    font-weight: 500;
    color: #3d3d3d;
    letter-spacing: .2px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }
  .card-main{
    margin-top: 6px;
    font-size: 12px;
    color: #909090;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    transition: color .3s ease-out;
  }
  .pic-s{
    display: none;
    width: 116px;
    height: 72px;
    background-size: cover!important;
    background-position: 50%!important;
  }
  .daily-info{
    box-sizing: border-box;
  }
  @media (min-width: 1440px){
    .daily {
      width: 1128px;
    }
    .daily-pic{
      display: inline-block;
      vertical-align: top;
      width: 728px;
    }
    .daily-info{
      padding: 32px 32px 152px;
      display: inline-block;
      vertical-align: top;
      width: 330px;
    }
    .title_header{
      padding-bottom: 20px;
    }
    .title_header h1{
      margin-top: 14px;
      display: block;
    }
    .t_bottom{
      padding: 32px;
      width: 400px;
    }
  }
  @media (max-width: 1439px) and (min-width: 1272px){
    .daily {
      width: 960px;
    }
    .daily-pic{
      display: inline-block;
      vertical-align: top;
      width: 560px;
    }
    .daily-info{
      padding: 20px 20px 128px;
      display: inline-block;
      vertical-align: top;
      width: 395px;
    }
    .title_header{
      padding-bottom: 15px;
    }
    .t_bottom{
      padding: 20px;
      width: 400px;
    }
  }
  @media (max-width: 1271px) and (min-width: 648px){
    .daily {
      width: 560px;
    }
    .daily-pic{
      display: block;
      width: 560px;
    }
    .daily-info{
      padding: 20px 20px 128px;
      display: block;
      width: 100%;
    }
    .title_header{
      padding: 4px 0 16px;
    }
    .t_bottom{
      padding: 20px;
      width: 100%;
      height: 133px;
    }
  }
  @media (max-width: 647px){
    .daily {
      margin: 0 auto;
      width: 100%;
      background: transparent;
    }
    .daily-pic{
      display: block;
      width: 100%;
    }
    .daily-info{
      padding: 18px 0 110px;
      display: block;
      width: 100%;
    }
    .title_header{
      padding: 3px 0 16px;
      font-size: 18px;
    }
    .t_bottom{
      width: 100%;
      background: #fff;
      padding: 0px 15px;
      box-sizing: border-box;
    }
  }
  @media (min-width: 648px){
    .card{
      padding-top: 22px;
    }
  }
  @media (max-width: 631px){
    .block-wrapper a{
      margin: 0 0 16px;
      width: 100%;
    }
    .block-wrapper a .bg-img{
      display: none;
    }
    .pic-s{
      width: 116px;
      height: 72px;
      display: inline-block;
      vertical-align: top;
    }
    .block-wrapper a .main_show{
      display: inline-block;
      width: calc(100% - 116px - 16px);
    }
  }
</style>
