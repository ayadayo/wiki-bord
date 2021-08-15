<template>
  <header>
    <ul class="header-nav">
      <li>投稿する</li>
      <li>ログアウト</li>
    </ul>
  </header>
</template>
<script>
export default {
  name:"Header",
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
.header-nav {
  display: flex;
}
</style>