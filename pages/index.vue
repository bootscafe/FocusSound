<template>
  <div class="card-container">
    <div class="card" v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        <picture v-if="content.thumbnail">
          <source
            type="image/webp"
            :data-srcset="content.thumbnail.url + '?w=670&fm=webp'"
          />
          <img
            :src="content.thumbnail.url + '?w=670'"
            class="ogimage lazyload"
            alt
          />
        </picture>
        <picture v-else>
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" />
        </picture>
        <h2>{{ content.title }}</h2>
        <p v-if="content.description">{{ content.description }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'select',
      queries: { limit: 100, filters: 'createdAt[greater_than]2021' },
    });
    return data;
  }
}
</script>

<style lang='scss' scoped>
  .card-container {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-right: -30px;
  }
  .card {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 55px;
    background-color: #fff;
    flex-basis: 200px;
    picture {
      display: block;
      margin-bottom: 15px;
    }
    img {
      max-width: 100%;
    }
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  p {
    font-size: 1.2rem;
  }
</style>
