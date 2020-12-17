<template>
  <main>
    <div class="flex px-12 justify-between items-center mt-8">
      <button
        class="text-dsaNavy-200 focus:outline-none bg-white text-xs rounded px-3 leading-6 border shadow-xs"
        :class="{
          ' border-dsaBlue-300 border text-blue': menu === 'strategies',
        }"
        @click="menu = 'strategies'"
      >
        Strategies
      </button>
      <button
        :class="{ ' border-dsaBlue-300 border text-blue': menu === 'balance' }"
        class="text-dsaNavy-200 focus:outline-none bg-white text-xs rounded px-3 leading-6 border shadow-xs"
        @click="menu = 'balance'"
      >
        Balance
      </button>
    </div>
    <div class="mx-5 mt-10 space-y-4">
      <div
        v-for="i in 6"
        :key="i"
        class="bg-white rounded shadow-mainShadow px-4 py-3"
      >
        <h1 class="text-xs text-dsaNavy-200 font-medium">Leverage</h1>
        <h1 class="text-dsaMobileBrown mt-1 smallest">
          Go Long on collateral and earn benefits when collateral surges.
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      menu: 'strategies'
    }
  },
}
</script>

<style>
.text-blue {
  color: #3f75ff;
}
</style>