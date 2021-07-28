<template>
  <div id="contaienr">
      <Header/>
      <main>
        <Nuxt id="nuxt" />
      </main>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
