<template>
  <div class="add-blog">
    <h4>添加博客</h4>
    <div v-if="!submited" class="edit-blog">
      <form action>
        <div class="title">
          <label for>博客标题</label>
          <input type="text" placeholder="添加博客标题" v-model="blog.title" required />
        </div>
        <div class="content">
          <label for>博客内容</label>
          <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
        </div>
        <div class="checkbox">
          <label for class="name">博客分类</label>
          <label for>Vue.js</label>
          <input type="checkbox" value="Vue.js" v-model="blog.categories" />
          <label for>Node.js</label>
          <input type="checkbox" value="Node.js" v-model="blog.categories" />
          <label for>Angular.js</label>
          <input type="checkbox" value="Angular.js" v-model="blog.categories" />
          <label for>React.js</label>
          <input type="checkbox" value="React.js" v-model="blog.categories" />
        </div>
        <div class="author">
          <label for>作者</label>
          <div class="selectbox">
            <select name id v-model="blog.author">
              <option v-for="author in authorArr" :key="author">{{author}}</option>
            </select>
          </div>
        </div>
        <div class="btn">
          <button @click.prevent="postBlog">添加博客</button>
        </div>
      </form>
    </div>
    <div class="text" v-if="submited">
      <h5>博客发布成功！</h5>
    </div>
    <div class="show-blog">
      <h4>博客总览</h4>
      <div class="show-title">
        <p>博客标题: {{blog.title}}</p>
      </div>
      <div class="show-content">
        <p>博客内容：</p>
        <p class="content-box">{{blog.content}}</p>
      </div>
      <div class="show-category">
        <p>
          博客分类：
          <span v-for="category in blog.categories" :key="category">{{category}}</span>
        </p>
      </div>
      <div class="show-author">
        <p>作者：{{blog.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authorArr: ["Henry", "Army", "Susan"],
      submited: false // 判断是否提交
    };
  },
  methods: {
    postBlog() {
      // vue-resource方法
      // this.$http
      //   .post("https://vuedemo-b1233.firebaseio.com/posts.json", this.blog) // 传入需要post的数据
      //   .then(data => {
      //     // console.log(data);
      //     // return data.json()
      //     // 点击后修改submited状态为true
      //     this.submited = !this.submited;
      //   });
      // axios方法
      this.$axios
        .post("https://vuedemo-b1233.firebaseio.com/posts.json", this.blog) // 传入需要post的数据
        .then(data => {
          // console.log(data);
          // return data.json()
          // 点击后修改submited状态为true
          this.submited = !this.submited;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.edit-blog {
  width: 100%;
}
.edit-blog .title,
.edit-blog .content,
.edit-blog .checkbox,
.edit-blog .author {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}
.edit-blog .title label,
.edit-blog .content label,
.edit-blog .checkbox .name,
.edit-blog .author label {
  width: 20%;
}
.edit-blog .title input,
.edit-blog .content textarea {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 4px 4px 20px #ccc;
  border: none;
}
.edit-blog .checkbox label,
.edit-blog .checkbox input {
  margin: 5px;
}
.edit-blog .selectbox {
  width: 80%;
}
.edit-blog .selectbox select {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 4px 4px 20px #ccc;
  border: none;
}
.edit-blog .btn {
  width: 120px;
  height: 50px;
}
.edit-blog .btn button {
  width: 100%;
  height: 100%;
  background-color: #17abe3;
  color: #fff;
  border: none;
  box-shadow: 4px 4px 6px #ccc;
  border-radius: 10px;
  cursor: pointer;
}
.show-blog {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px dotted #ccc;
  margin-top: 20px;
}
.content-box {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.show-category span {
  display: inline;
  margin: 0 10px;
}
</style>
