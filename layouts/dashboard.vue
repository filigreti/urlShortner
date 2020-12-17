<template>
  <div class="min-h-screen w-full bg-dsaBackground font-body">
    <topbar class="lg:hidden" />
    <div class="mt-16 lg:mt-0">
      <sidebar class="hidden lg:block fixed" />
      <rightbar class="hidden lg:block fixed" />

      <div class="pb-5 pt-6 lg:pt-4 lg:bg-white lg:ml-64 lg:mr-72 min-h-screen">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '@/components/DashboardComponents/topbar'
import sidebar from '@/components/DashboardComponents/sidebar';
import rightbar from '@/components/DashboardComponents/rightbar'
export default {
  components: {
    sidebar,
    topbar,
    rightbar
  }
}
</script>