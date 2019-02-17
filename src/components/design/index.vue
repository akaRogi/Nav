<template>
  <div class="block_list">
    <Main
      v-for="(item,index) in list"
      :item="item"
      :key="index"
      :index="index"
      @pushTop="pushTopList"
    ></Main>
  </div>
</template>

<script>
import Main from './main'
export default {
  name: 'index',
  components: {
    Main
  },
  data () {
    return {
      list: this.$store.state.design,
      addTop: [],
      showDiv: []
    }
  },
  mounted () {
    this.$store.commit('leftsongNavFn', 0)
    let list = this.$store.state.designList
    let This = this
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      console.log(t)
      for (var i = 0; i < list.length; i++) {
        if (list[i] <= t + 100 && list[i + 1] >= t) {
          This.$store.commit('leftsongNavFn', i)
          console.log(This.$store.state.leftsonNav)
        }
      }
    }
  },
  watch: {
    $route (to, from, next) {
      // console.log(to)
      this.$emit('TopBj')
    }
  },
  methods: {
    TopBjfn () {
      alert(2)
    },
    pushTopList (offsetTop) {
      this.$store.commit('designfn', offsetTop)
    }
  },
  destroyed () {
    this.$store.commit('nullList')
  }
}
</script>

<style scoped>

</style>
