<template>
  <header id="header">
    <nav>
      <nuxt-link to="/select/">Select</nuxt-link>
      <nuxt-link to="/review/">Review</nuxt-link>
      <nuxt-link to="/news/">News</nuxt-link>
      <nuxt-link to="/feature/">Feature</nuxt-link>
    </nav>
  </header>
</template>

<style lang='scss' scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #EBEBEB;
}

nav {
  font-family: times;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 1em;
  }
}
</style>
