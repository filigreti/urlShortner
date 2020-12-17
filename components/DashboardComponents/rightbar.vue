<template>
  <main class="text-xs w-72 right-0 top-0 h-screen overflow-y-auto">
    <balance v-if="getCounter == 1" />
    <information v-if="getCounter == 2" />
    <trade v-if="getCounter == 3" />
    <tradecurrency v-if="getCounter == 4" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import balance from '@/components/DashboardRightScreens/balance'
import information from '@/components/DashboardRightScreens/information'
import trade from '@/components/DashboardRightScreens/trade'
import tradecurrency from '@/components/DashboardRightScreens/tradecurrency'

export default {
  components: {
    balance,
    information,
    trade,
    tradecurrency
  },
  computed: {
    ...mapGetters("local", [
      "getCounter",
    ])
  }

}
</script>

<style>
</style>