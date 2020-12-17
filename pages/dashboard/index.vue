<template>
  <main>Index</main>
</template>

<script>
export default {
  layout: 'dashboard',
  fetch({ redirect }) {
    redirect("/dashboard/compound")
  }
}
</script>

<style>
</style>