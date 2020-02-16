<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <blog-header></blog-header>
    <router-view />
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlog from "./components/showBlog";
import blogHeader from "./components/blogHeader";
export default {
  name: "App",
  components: {
    addBlog,
    showBlog,
    blogHeader
  }
};
</script>

<style>
.switchBtn {
  width: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.switchBtn button {
  width: 20%;
  margin: 30px;
  background-color: #17abe3;
  padding: 20px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 24px;
  color: #fff;
}
</style>
