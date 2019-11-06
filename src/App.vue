<template>
  <div id="app">
    <div class="bb" id="header">
      <div class="header">
        <router-link to="/">
          <span class="title">Narojay's Blog</span>
        </router-link>
        <router-link to="/AboutMe">
          <span class="aboutMe">Aboutme</span>
        </router-link>
      </div>
    </div>
    <div class="aa" id="result">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style >
@media screen and (min-width: 768px) {
  #result {
    width: 748px;
    margin: 10px auto;
  }
}
.router-link-active {
  text-decoration: none;
}
.aa {
  padding-top: 60px;
}
a {
  text-decoration: none;
}
body {
  margin: 0px;
}
#app {
  padding-right: 0;
  padding-left: 0;
}
#header {
  background-color: #2a579a !important;
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei";
  position: fixed;
  top: 0px;
}
.title {
  font-size: 25px;
  color: azure;
  vertical-align: middle;
}
.aboutMe {
  width: 100px;
  text-align: right;
  float: right;
  margin-top: 10px;
  font-size: 25px;
  color: azure;
}
.header {
  padding: 0;
  margin: 0;
  margin: auto;
  height: 60px;
  width: 740px;
}
</style>
