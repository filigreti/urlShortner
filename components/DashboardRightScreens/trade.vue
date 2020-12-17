<template>
  <main class="w-full bg-white h-full">
    <div class="pt-8 pb-6 pl-5 border-b border-dsaBorder-200 flex items-center">
      <button class="focus:outline-none">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 7.00004C18 6.44804 17.552 6.00004 17 6.00004L3.92969 6.00004L7.79297 2.13676C8.18397 1.74576 8.18397 1.11269 7.79297 0.722693L7.70703 0.636756C7.31603 0.245756 6.68297 0.245756 6.29297 0.636756L0.636719 6.29301C0.245718 6.68401 0.245718 7.31707 0.636719 7.70707L6.29297 13.3633C6.68397 13.7543 7.31703 13.7543 7.70703 13.3633L7.79297 13.2774C8.18397 12.8864 8.18397 12.2533 7.79297 11.8633L3.92969 8.00004H17C17.552 8.00004 18 7.55204 18 7.00004Z"
            fill="#C0C5D7"
          />
        </svg>
      </button>
      <p class="ml-5 font-medium text-dsaNavy-200">Trade</p>
    </div>
    <div class="mt-8 mx-5">
      <div class="flex items-center">
        <input
          type="text"
          class="w-full bg-dsaInput text-xs pl-10 leading-6 py-2 focus:outline-none"
          placeholder="Search Currency"
        />
        <svg
          class="w-4 h-4 absolute left-0 ml-8"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.7998 1.79993C4.4932 1.79993 1.7998 4.49332 1.7998 7.79993C1.7998 11.1065 4.4932 13.7999 7.7998 13.7999C9.23771 13.7999 10.5582 13.2893 11.5932 12.4417L15.1756 16.0241C15.2309 16.0817 15.2971 16.1277 15.3704 16.1594C15.4436 16.191 15.5225 16.2078 15.6023 16.2086C15.6822 16.2094 15.7613 16.1943 15.8352 16.1641C15.9092 16.1339 15.9763 16.0893 16.0327 16.0329C16.0892 15.9764 16.1338 15.9093 16.164 15.8354C16.1942 15.7615 16.2093 15.6823 16.2085 15.6025C16.2077 15.5226 16.1909 15.4438 16.1593 15.3705C16.1276 15.2972 16.0816 15.231 16.024 15.1757L12.4416 11.5933C13.2892 10.5584 13.7998 9.23783 13.7998 7.79993C13.7998 4.49332 11.1064 1.79993 7.7998 1.79993ZM7.7998 2.99993C10.4579 2.99993 12.5998 5.14185 12.5998 7.79993C12.5998 10.458 10.4579 12.5999 7.7998 12.5999C5.14173 12.5999 2.9998 10.458 2.9998 7.79993C2.9998 5.14185 5.14173 2.99993 7.7998 2.99993Z"
            fill="#9EA4B8"
          />
        </svg>
      </div>
    </div>
    <div class="mx-5 mt-6 space-y-4">
      <div
        v-for="i in 5"
        class="px-3 py-4 bg-white flex items-center justify-between rounded-md shadow-mainShadow"
        :key="i"
      >
        <div class="flex items-center">
          <img class="w-8 h-8" src="@/assets/ethereum.svg" alt="" />
          <div class="ml-3">
            <h3 class="text-xs text-dsaBlue-300">Ethereum</h3>
            <h4 class="text-xs leading-5 text-dsaMobileBrown">ETH</h4>
          </div>
        </div>
        <div>
          <h3 class="text-xs text-dsaBlue-300">0.89876 ETH</h3>
          <h4 class="text-xs leading-5 text-dsaMobileBrown text-right">
            $ 1,46.78
          </h4>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

