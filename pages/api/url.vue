<template>
  <main class="w-screen h-screen flex items-center justify-center">
    <div
      class="w-128 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        v-for="link in links"
        :key="link.currentIndex"
      >
        <NuxtLink
          :to="`/${link.newShortUrl}`"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >http://localhost:3000/{{ link.newShortUrl }}</NuxtLink
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      links: []
    }
  },
  beforeMount() {
    const existingLinks = JSON.parse(localStorage.getItem("lists"))
    this.links = existingLinks
  }
}
</script>

<style>
</style>