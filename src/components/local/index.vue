<template>
  <div id="local">
    <div
      class="card_box"
      v-for="(item, index) in list"
      :key="index"
    >
      <a :href="item.url" target="_blank">
        <div>
          <div class="ca_iconw">{{item.title.charAt(0)}}</div>
          <div class="ctxt">
            <div class="ca_txt">{{item.title}}</div>
            <div class="ca_txt2">{{item.description}}</div>
          </div>
        </div>
        <div class="c_gn"></div>
      </a>
      <span class="dle" @click.stop="remove(index)">删除</span>
    </div>
    <div class="web_box">
      <div class="card_add" style="display: flex;" v-if="!pushOff" @click="pushShow()">
        <div class="add">+</div>
        <span>添加网站</span>
      </div>
      <div class="card_input" v-if="pushOff">
        <div class="ic"><span @click="pushShow()">×</span></div>
        <div class="txt1"><input type="text" placeholder="网站名称" v-model="pushData.title"></div>
        <div class="txt2"><input type="text" placeholder="网站地址" v-model="pushData.url"></div>
        <div class="txt3"><input type="text" placeholder="网站描述" v-model="pushData.description" @keyup.enter="addData"></div>
        <div class="tj"><span @click="addData">√</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pushOff: false,
      pushData: {
        title: '',
        url: '',
        description: ''
      },
      list: []
    }
  },
  methods: {
    pushShow () {
      this.pushOff = !this.pushOff
    },
    user (data) {
      let user = JSON.parse(localStorage.getItem('NavData'))
      if (!user) {
        user = []
      }
      user.push(data)
      localStorage.setItem('NavData', JSON.stringify(user))
      this.locaList()
      this.pushData = {title: '', url: '', description: ''}
      this.pushShow()
    },
    locaList () {
      let user = JSON.parse(localStorage.getItem('NavData'))
      this.list = user
    },
    addData () {
      if (this.pushData.title !== '' && this.pushData.url !== '' && this.pushData.description !== '') {
        if (this.pushData.url.substring(0, 8) !== 'https://' || this.pushData.url.substring(0, 7) !== 'http://') {
          this.pushData.url = 'http://' + this.pushData.url // 如果不带http或者不带https则添加http
        }
        this.user(this.pushData)
      } else {
        alert('有空白项')
      }
      console.log(this.pushData)
    },
    remove (index) {
      this.list.splice(index, 1)
      localStorage.setItem('NavData', JSON.stringify(this.list))
    }
  },
  created () {
    this.locaList()
  }
}
</script>

<style scoped>
  #local {
    width: calc(100% + 40px);
  }
  .card_box {
    position: relative;
    margin: 0 24px 24px 0;
    width: 260px;
    height: auto;
    display: inline-block;
    vertical-align: top;
  }
  .card_box a {
    width: 260px;
    height: 88px;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    padding: 16px;
    display: block;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .card_box .dle {
    position: absolute;
    margin-left: 10px;
    color: #909090;
    font-size: 12px;
    bottom: 0px;
    right: 0px;
    z-index: 111111111;
    padding: 0 8px 8px;
    cursor: pointer;
  }
  .card_box a .c_gn {
    position: relative;
    margin-top: 5px;
    padding-left: 40px;
    height: 16px;
    float: right;
  }
  .card_box a .ca_iconw {
    position: relative;
    top: 2px;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 18px;
    border: 1px solid #686868;
    overflow: hidden;
    color: #686868;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    line-height: 32px;
  }
  .card_box a .ctxt {
    display: inline-block;
  }
  .card_box a .ca_txt {
    font-size: 14px;
    color: #3d3d3d;
  }
  .card_box a .ca_txt2 {
    font-size: 12px;
    color: #909090;
  }
  .web_box {
    margin: 0 24px 24px 0;
    width: 260px;
    height: 88px;
    display: inline-block;
    vertical-align: top;
  }
  .card_add {
    display: -webkit-box;
    display: flex;
    width: 100%;
    height: 100%;
    border: 2px dashed #a7bed1;
    border-radius: 4px;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    color: #a7bed1;
    letter-spacing: .4px;
  }
  .card_input {
    width: 100%;
    height: auto;
    border-radius: 4px;
    background: #fff;
    padding: 16px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .card_input .ic {
    overflow: hidden;
  }
  .card_input .tj {
    overflow: hidden;
    margin-top: 10px;
  }
  .card_input .ic span {
    float: right;
    font-size: 20px;
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
  .card_input input {
    width: 100%;
    padding: 10px 0;
    height: 40px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #efefef;
    outline: none;
    -webkit-appearance: none;
    font-size: 14px;
    line-height: 20px;
    color: #3d3d3d;
    letter-spacing: .2px;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
  }
  .card_input .tj span {
    display: block;
    width: 30px;
    height: 30px;
    background: #fcd133;
    border-radius: 50%;
    float: right;
    font-size: 16px;
    text-align: center;
    line-height: 2;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 631px){
    #local{
      width: 100%;
    }
    .web_box{
      width: 100%;
    }
    .card_box{
      width: 100%;
    }
    .card_box a{
      width: 100%;
    }
  }
</style>
