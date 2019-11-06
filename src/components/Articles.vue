<template>
  <div>
    <div v-for="item in info.values" :key="item.id">
      <router-link :to="{name: 'Article', params: {id: item.id}}">
        <span id="titleAticlesId" class="titleClass">{{item.title}}</span>
      </router-link>
      <br />
      <span class="ArticlesTime">{{time(item.createTime)}}</span>
      <br />
      <div>
        <span class="ArticlesContent">{{text(item.content)}}</span>
      </div>
      <br />
    </div>
    <el-pagination
      :page-size="size"
      background
      @current-change="changePage"
      @prev-click="changePage"
      @next-click="changePage"
      layout="prev, pager, next"
      :current-page.sync="page"
      :total="total"
    ></el-pagination>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
      total: 0,
      page: 1,
      pageSize: 0,
      size: 7
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.$http
        .get(
          "https://localhost:44385/api/Article/Articles/" +
            this.page +
            "?size=" +
            this.size
        )
        .then(response => {
          this.info = response.data;
          this.total = response.data.total;
          this.pageSize = response.data.pageSize;
        });
    },
    changePage: function(val) {
      this.page = val;
      this.getData();
    }
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
  }
};
</script>

<style>
.titleClass {
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei";
}
.ArticlesTime {
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei";
}
.ArticlesContent {
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei";
}
</style>