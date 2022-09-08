<script>
import {mapGetters} from 'vuex'
export default {
  data: function() {
    return {
      id: this.$store.state.some,

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['certRequest', 'getNfts']),
  }
}
</script>

<template>
  <main>
    <input type="text" :placeholder="$store.state.placeH" v-model="id">
    <a @click="certReq">Submit</a>
        <p>{{this.id}}</p>
    <p>Chứng chỉ của bạn: {{certRequest(this.id).title}}</p>

  </main>
</template>

<style scoped>
  a{
    padding: 0 1em;
  }
</style>