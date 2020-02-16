<template>
  <div class="show-blog">
    <h4>博客总览</h4>
    <input type="text" v-model="search" placeholder="输入标题" class="searchInput" />
    <div class="blog-card" v-for="item in filterBlogs" :key="item.id" v-theme:bg="'wide'">
      <router-link :to="'/blog/' + item.id">
        <h3 v-rainbow>{{item.title | to-uppercase}}</h3>
        <article>{{item.content | snippet}}</article>
      </router-link>
    </div>
    <!-- 当没有内容或没有搜索内容时显示 -->
    <div class="noBlog" v-if="filterBlogs.length == 0">暂无内容</div>
  </div>
</template>
<script>
export default {
  name: "showBlog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // 请求网络数据vue-resource方法
    // this.$http
    //   .get("https://vuedemo-b1233.firebaseio.com/posts.json")
    //   // 请求本地数据（需把数据存在static中）
    //   // this.$http.get('../../static/blog.json')
    //   .then(data => {
    //     return data.json();
    //   })
    //   .then(res => {
    //     let blogArr = [];
    //     for (let key in res) {
    //       // 生成一个id对象
    //       res[key].id = key;
    //       // 将数据push到新数组中
    //       blogArr.push(res[key]);
    //     };
    //     // 将blogArr赋值给blogs
    //     this.blogs = blogArr;
    //   });
    // axios方法
    this.$axios
      .get("https://vuedemo-b1233.firebaseio.com/posts.json")
      // 请求本地数据（需把数据存在static中）
      // this.$http.get('../../static/blog.json')
      .then(data => {
        return data.data;
      })
      .then(res => {
        let blogArr = [];
        for (let key in res) {
          // 生成一个id对象
          res[key].id = key;
          // 将数据push到新数组中
          blogArr.push(res[key]);
        }
        // 将blogArr赋值给blogs
        this.blogs = blogArr;
      });
  },
  // computed属性用于计算搜索框的内容（这样之后，遍历的数组就是computed里的计算的数组）
  computed: {
    filterBlogs() {
      return this.blogs.filter(blog => {
        // filter方法中，表示过滤获取到的blogs数据
        return blog.title.match(this.search); // match方法中，表示用blog.title来匹配搜索的内容
      });
    }
  },
  // 自定义过滤器
  filters: {
    "to-uppercase": value => {
      return value.toUpperCase();
    }
  },
  // 自定义指令
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>
<style scoped>
.show-blog {
  width: 100%;
}
.blog-card {
  width: 100%;
  background-color: #ccc;
  border-radius: 6px;
  margin-bottom: 20px;
}
.blog-card h3 {
  padding: 10px 0 0 10px;
}
.blog-card article {
  padding: 10px;
}
.searchInput {
  width: 50%;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid #ccc;
}
.noBlog {
  margin-top: 20px;
}
.blog-card a {
  text-decoration: none;
}
</style>