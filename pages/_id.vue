<template>
  <main></main>
</template>

<script>
export default {
  beforeMount() {
    const existingLinks = JSON.parse(localStorage.getItem("lists"))
    const params = this.$route.params.id
    let value = existingLinks.find(links => links.newShortUrl === params)
    window.open(value.initial, '_blank')
  }
}
</script>

<style>
</style>