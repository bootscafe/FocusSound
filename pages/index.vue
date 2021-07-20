<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'select',
      queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
    });
    return data;
  }
}
</script>

<style lang='scss' scoped>
  ul {
    li {
      font-size: 1.5rem;
    }
  }
</style>
