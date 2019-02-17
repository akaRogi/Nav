<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      @click="Update(item, index)"
    >
      <div>
        <div :class="{show : show === index}"></div>
        {{item.name}}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'songNav',
  props: ['list'],
  data () {
    return {
      show: 0
    }
  },
  methods: {
    Update (data, index) {
      this.UpdateUrl(data.open)
      this.show = index
    },
    UpdateUrl (url) {
      this.$store.commit('updateUrl', url)
      setTimeout(() => {
        let keyword = document.getElementById('keyword')
        keyword.focus()
      }, 200)
    }
  },
  created () {
    this.UpdateUrl(this.list[this.show].open)
  }
}
</script>

<style scoped>
ul {
  position: absolute;
}
li{
  float: left;
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;
}
li div div {
  width: 10px;
  height: 10px;
  float: left;
  border-radius: 50%;
  margin-top: 4px;
  margin-right: 6px;
  border: 4px solid transparent;
  background-color: #aaa;
}
li div div.show {
  border: 4px solid #fcd133;
  background: #ff9800;
}
</style>
