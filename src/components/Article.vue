<template>
  <div>
    <div class="titleClass">{{info.title}}</div>
    <div class="craeteTime">{{time(info.createTime)}}</div>
    <div v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: 0,
      id:0
    };
  },
  created() {
    this.setData();
  },
  computed: {
    text() {
      return function(index) {
        let reg = /<[^<>]+>/g;
        return index.slice(0, 100).replace(reg, "") + "...";
      };
    },
    time() {
      return function(time) {
        return this.$moment(time).format("YYYY-MM-DD  HH:mm:ss");
      };
    }
  },
  methods: {

    setData: function() {
      let id = this.$route.params.id;
      this.$http.get("https://localhost:44385/api/Article/Article/"+id).then(response => this.info = response.data)
    }
  }
};
</script>

<style src="../assets/css/markdown.css">

</style>