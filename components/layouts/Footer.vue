<template>
  <footer id="footer">
    <nav>
      <nuxt-link to="/select/">Select</nuxt-link>
      <nuxt-link to="/review/">Review</nuxt-link>
      <nuxt-link to="/news/">News</nuxt-link>
      <nuxt-link to="/feature/">Feature</nuxt-link>
    </nav>
  </footer>
</template>

<style lang='scss' scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

nav {
  font-family: 'Helvetica';
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 1em;
  }
}
</style>
