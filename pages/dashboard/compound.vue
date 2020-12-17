<template>
  <main>
    <div
      class="flex justify-between items-center px-3 lg:px-6 border-b border-dsaBorder pb-4"
    >
      <div class="flex items-center">
        <img class="w-32" src="@/assets/compound-logo.svg" alt="" />
        <div class="hidden lg:block">
          <button
            class="text-dsaGreen-200 bg-dsaGreen-100 rounded-md px-2 leading-5 hover:bg-gray-300 text-xs duration-700 ml-1"
          >
            Connected
          </button>
        </div>
      </div>
      <div>
        <h3 class="text-dsaMobileBrown text-sm font-medium">Contract Wallet</h3>
        <p class="text-dsaOcean-200 text-xs text-right leading-5">
          0xFb...b5F7
        </p>
      </div>
    </div>
    <div class="overflow-x-auto px-3 block lg:px-6 scrollbar-hidden">
      <div
        class="inline-flex lg:flex space-x-5 lg:col-gap-5 lg:space-x-0 lg:justify-between"
      >
        <div
          class="shadow-cardShadow lg:shadow-mainShadow flex py-6 mb-3 mt-6 px-4 justify-between bg-white w-56 lg:w-full whitespace-nowrap rounded-lg"
        >
          <div>
            <h1 class="text-dsaNavy-200 text-lg">$480.98</h1>
            <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
              Lend
            </p>
          </div>
          <div>
            <img src="@/assets/money-out.svg" alt="" />
          </div>
        </div>
        <div
          class="shadow-cardShadow lg:shadow-mainShadow lg:w-full flex py-6 px-4 mb-3 mt-6 justify-between bg-white w-56 whitespace-nowrap rounded-lg"
        >
          <div>
            <h1 class="text-dsaNavy-200 text-lg">$480.98</h1>
            <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
              Borrowed
            </p>
          </div>
          <div>
            <img src="@/assets/money-in.svg" alt="" />
          </div>
        </div>
        <div
          class="shadow-cardShadow lg:shadow-mainShadow lg:w-full flex py-6 mb-3 mt-6 px-4 justify-between bg-white w-56 whitespace-nowrap rounded-lg"
        >
          <div>
            <h1 class="text-dsaNavy-200 text-lg">$480.98</h1>
            <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
              Borrowing power
            </p>
          </div>
          <div>
            <img src="@/assets/money-balance.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex hidden w-full px-6">
      <div
        class="shadow-mainShadow w-full flex py-6 mb-3 mt-3 px-4 justify-between bg-white whitespace-nowrap rounded-lg"
      >
        <div>
          <h1 class="text-dsaNavy-200 text-lg">35%</h1>
          <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
            Debt/ Collateral Ratio (%)
          </p>
        </div>
        <div>
          <button
            class="bg-dsaGreen-200 text-white rounded-md px-4 leading-6 hover:bg-gray-300 text-xs duration-700"
          >
            Safe
          </button>
          <p class="text-dsaMobileBrown text-xs mt-2 font-medium">Max - 75%</p>
        </div>
      </div>
      <div
        class="shadow-mainShadow w-full ml-5 flex py-6 mb-3 mt-3 px-4 justify-between bg-white whitespace-nowrap rounded-lg"
      >
        <div>
          <h1 class="text-dsaNavy-200 text-lg">$5.065</h1>
          <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
            Your Earnings
          </p>
        </div>
        <div>
          <img src="@/assets/collect.svg" alt="" />
        </div>
      </div>
    </div>
    <div
      class="mx-3 shadow-cardShadow rounded-lg mt-3 lg:hidden px-3 lg:mx-6 py-4 flex items-center justify-between bg-white"
    >
      <div class="pl-1">
        <h1 class="text-dsaNavy-200 font-medium text-lg">$480.98</h1>
        <p class="text-dsaMobileBrown-200 text-xs leading-6 font-medium">
          Balance
        </p>
      </div>
      <div class="flex items-center">
        <p class="text-dsaOcean-200 text-xs font-medium mr-3">Trade now</p>
        <svg
          class="w-4 h-4"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0.341797C10.7441 0.341797 10.488 0.441219 10.293 0.636719L10.207 0.722656C9.81603 1.11366 9.81603 1.74672 10.207 2.13672L14.0703 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H14.0703L10.207 11.8633C9.81603 12.2543 9.81603 12.8873 10.207 13.2773L10.293 13.3633C10.684 13.7543 11.317 13.7543 11.707 13.3633L17.3633 7.70703C17.7543 7.31603 17.7543 6.68297 17.3633 6.29297L11.707 0.636719C11.5115 0.441219 11.2559 0.341797 11 0.341797Z"
            fill="#5484FF"
          />
        </svg>
      </div>
    </div>
    <h1 class="text-lg ml-6 mt-6 hidden lg:block">Your Positions</h1>
    <div class="mt-5 flex flex-col space-y-5">
      <div
        v-for="i in 4"
        :key="i"
        class="mx-3 lg:mx-6 px-3 shadow-cardShadow bg-white rounded-lg"
      >
        <div
          class="flex items-center justify-between border-b lg:border-b-0 border-dsaBorder py-5 mx-1"
        >
          <div class="flex items-center">
            <div class="flex">
              <img src="@/assets/ethereum.svg" alt="" />
            </div>
            <h1 class="text-dsaNavy-200 ml-3 text-lg">$23.50</h1>
          </div>
          <div class="lg:flex space-x-4 col-gap-5 px-2 hidden">
            <div>
              <h2 class="text-dsaMobileBrown-200 text-xs font-medium">0.04</h2>
              <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Supplied</h2>
            </div>
            <div>
              <h2 class="text-dsaMobileBrown-200 text-xs font-medium">0.01%</h2>
              <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Suplied APR</h2>
            </div>
            <div class="ml-1">
              <h2 class="text-dsaMobileBrown-200 text-xs font-medium">2.11%</h2>
              <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Borrow APR</h2>
            </div>
          </div>
          <div>
            <button
              class="text-dsaGreen-200 bg-dsaGreen-100 rounded-md px-4 py-1 hover:bg-gray-300 font-medium text-xs duration-700 mr-3"
            >
              Supply
            </button>
            <button
              class="text-dsaGreen-200 bg-dsaGreen-100 rounded-md px-4 py-1 hover:bg-gray-300 font-medium text-xs duration-700"
            >
              Withdraw
            </button>
          </div>
        </div>
        <div class="grid grid-cols-3 col-gap-5 py-5 px-2 lg:hidden">
          <div>
            <h2 class="text-dsaMobileBrown-200 text-xs font-medium">0.04</h2>
            <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Supplied</h2>
          </div>
          <div>
            <h2 class="text-dsaMobileBrown-200 text-xs font-medium">0.01%</h2>
            <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Suplied APR</h2>
          </div>
          <div>
            <h2 class="text-dsaMobileBrown-200 text-xs font-medium">2.11%</h2>
            <h2 class="text-dsaMobileLightBrown mt-2 text-xs">Borrow APR</h2>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>