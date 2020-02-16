<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="addBlog" exact="">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
    background-color: #ccc;
    padding: 30px;
    margin-bottom: 30px;
}
ul {
    list-style-type: none;
    text-align: center;
}
a {
    text-decoration: none;
    padding: 20px;
    color: #555;
}
.router-link-active {
    background-color: aqua;
    border-radius: 4px;
}
</style>