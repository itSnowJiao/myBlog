<template>
  <div class="sing-blog">
    <h4>{{blog.title}}</h4>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{category}}</li>
    </ul>
    <div class="btn">
      <button @click="deleteBlog" class="deleteBtn">删除</button>
      <router-link :to="'/edit/' + this.id">编辑</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    // vue-resource方法
    // this.$http
    //   .get("https://vuedemo-b1233.firebaseio.com/posts/" + this.id + ".json")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     this.blog = data;
    //   });
    // axios方法
    this.$axios
      .get("https://vuedemo-b1233.firebaseio.com/posts/" + this.id + ".json")
      .then(res => {
        this.blog = res.data;
      });
  },
  methods: {
    // vue-resource方法
    // deleteBlog() {
    //   this.$http
    //     .delete(
    //       "https://vuedemo-b1233.firebaseio.com/posts/" + this.id + ".json"
    //     )
    //     .then(res => {
    //       this.$router.push({ path: "/" }); // 删除后跳转到博客页面
    //     });
    // }
    // axios方法
    deleteBlog() {
      this.$axios
        .delete(
          "https://vuedemo-b1233.firebaseio.com/posts/" + this.id + ".json"
        )
        .then(res => {
          this.$router.push({ path: "/" }); // 删除后跳转到博客页面
        });
    }
  }
};
</script>
<style scoped>
.sing-blog {
  padding: 20px;
  width: 70%;
  margin: auto;
  background-color: #17abe3;
  border-radius: 6px;
}
.deleteBtn {
  padding: 10px 30px;
  background: red;
  color: #fff;
  border: 1px solid #17abe3;
  border-radius: 4px;
  cursor: pointer;
}
.btn a {
  text-decoration: none;
  padding: 10px 30px;
  background: #999;
  color: #fff;
  border-radius: 4px;
}
</style>