<template>
  <main>
    <ul
      class="h-16 bg-white shadow-cardShadow fixed inset-x-0 top-0 z-10 flex justify-between items-center px-3"
    >
      <li>
        <nuxt-link to="/dashboard">
          <img class="w-32 h-28" src="@/assets/instadapp-logo.svg" alt="" />
        </nuxt-link>
      </li>
      <li>
        <img src="@/assets/handburger.svg" alt="" />
      </li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style>
</style>