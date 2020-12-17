<template>
  <main class="w-full bg-white h-full">
    <div
      class="pt-8 pb-6 px-5 border-b border-dsaBorder-200 flex justify-between items-center"
    >
      <p class="font-medium text-dsaNavy-200">Trade</p>
      <button class="focus:outline-none">
        <svg
          class="w-4 h-4"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99007 0.990181C1.79114 0.990233 1.59674 1.04961 1.43173 1.16073C1.26672 1.27184 1.1386 1.42964 1.06374 1.61395C0.988886 1.79826 0.970697 2.00071 1.0115 2.19542C1.05231 2.39012 1.15025 2.56823 1.29281 2.70698L7.58578 8.99995L1.29281 15.2929C1.19684 15.3851 1.12021 15.4954 1.06743 15.6176C1.01464 15.7397 0.986757 15.8711 0.985403 16.0042C0.98405 16.1372 1.00926 16.2692 1.05954 16.3924C1.10983 16.5155 1.1842 16.6274 1.27827 16.7215C1.37235 16.8156 1.48426 16.89 1.60743 16.9402C1.73061 16.9905 1.86259 17.0157 1.99563 17.0144C2.12867 17.013 2.2601 16.9851 2.38223 16.9324C2.50436 16.8796 2.61473 16.803 2.70687 16.707L8.99984 10.414L15.2928 16.707C15.385 16.803 15.4953 16.8796 15.6175 16.9324C15.7396 16.9851 15.871 17.013 16.0041 17.0144C16.1371 17.0157 16.2691 16.9905 16.3922 16.9402C16.5154 16.89 16.6273 16.8156 16.7214 16.7215C16.8155 16.6274 16.8899 16.5155 16.9401 16.3924C16.9904 16.2692 17.0156 16.1372 17.0143 16.0042C17.0129 15.8711 16.985 15.7397 16.9323 15.6176C16.8795 15.4954 16.8028 15.3851 16.7069 15.2929L10.4139 8.99995L16.7069 2.70698C16.8514 2.56652 16.9501 2.38567 16.99 2.18815C17.03 1.99063 17.0093 1.78565 16.9308 1.60007C16.8523 1.41448 16.7195 1.25695 16.5499 1.14812C16.3803 1.03929 16.1817 0.98424 15.9803 0.990181C15.7205 0.997922 15.4739 1.1065 15.2928 1.29292L8.99984 7.58589L2.70687 1.29292C2.61368 1.19712 2.50224 1.12098 2.37912 1.06898C2.25601 1.01698 2.12372 0.990189 1.99007 0.990181Z"
            fill="#C0C5D7"
          />
        </svg>
      </button>
    </div>

    <div class="text-center pt-8">
      <h1 class="text-dsaBlue-300 text-3xl">1.05 ETH</h1>
      <p class="text-xs text-dsaMobileBrown">You Sell</p>
    </div>
    <div class="mt-6 rounded mr-3 border shadow-xs">
      <div class="px-3 py-3 flex items-center justify-between">
        <div class="flex items-center">
          <p class="text-xs text-dsaMobileBrown">Sell</p>
          <div class="flex items-center ml-5">
            <img class="w-8 h-8" src="@/assets/ethereum.svg" alt="" />
            <div class="ml-3">
              <h3 class="text-xs text-dsaNavy-200 font-medium">1.05 ETH</h3>
            </div>
          </div>
        </div>
        <svg
          class="w-3 h-3"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.67533 0C0.789333 0 0.260667 0.987333 0.752 1.72467L3.602 6L0.752 10.2753C0.260667 11.0127 0.789333 12 1.67533 12C2.046 12 2.39267 11.8147 2.59867 11.506L5.776 6.73933C6.07467 6.29133 6.07467 5.708 5.776 5.26L2.59867 0.493333C2.39267 0.185333 2.046 0 1.67533 0Z"
            fill="#9EA4B8"
          />
        </svg>
      </div>
      <svg
        class="absolute -mt-10 -ml-4 w-20 h-20"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="48" cy="48" r="16" fill="#FEFEFF" />
          <circle cx="48" cy="48" r="15.5" stroke="#E8E9EF" />
        </g>
        <path
          d="M42.003 44.0626C42.0091 44.1276 42.0255 44.1928 42.0511 44.2553C42.1545 44.5047 42.397 44.6668 42.667 44.6668H44.0004V54.6668H45.3337V44.6668H46.667C46.9364 44.6668 47.1796 44.5047 47.2829 44.2553C47.3169 44.1727 47.3337 44.0861 47.3337 44.0001C47.3337 43.8268 47.2657 43.6561 47.1384 43.5288L45.1384 41.5288C44.8777 41.2681 44.4557 41.2681 44.1957 41.5288L42.1957 43.5288C42.0527 43.6718 41.9845 43.8678 42.003 44.0626ZM48.6696 51.9376C48.6512 52.1325 48.7193 52.3285 48.8623 52.4715L50.8623 54.4715C51.1223 54.7322 51.5444 54.7322 51.805 54.4715L53.805 52.4715C53.9324 52.3442 54.0004 52.1735 54.0004 52.0001C54.0004 51.9141 53.9836 51.8276 53.9496 51.7449C53.8462 51.4956 53.603 51.3335 53.3337 51.3335H52.0004V41.3335H50.667V51.3335H49.3337C49.0644 51.3335 48.8211 51.4956 48.7178 51.7449C48.6921 51.8074 48.6758 51.8727 48.6696 51.9376Z"
          fill="#9EA4B8"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="96"
            height="96"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="16" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.894118 0 0 0 0 0.905882 0 0 0 0 0.909804 0 0 0 0.45 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div
        class="px-3 border-t border-dsaBorder-200 py-3 flex items-center justify-between"
      >
        <div class="flex items-center">
          <p class="text-xs text-dsaMobileBrown">Buy</p>
          <div class="flex items-center ml-5">
            <img class="w-8 h-8" src="@/assets/ethereum.svg" alt="" />
            <div class="ml-3">
              <h3 class="text-xs text-dsaNavy-200 font-medium">1.05 ETH</h3>
            </div>
          </div>
        </div>
        <svg
          class="w-3 h-3"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.67533 0C0.789333 0 0.260667 0.987333 0.752 1.72467L3.602 6L0.752 10.2753C0.260667 11.0127 0.789333 12 1.67533 12C2.046 12 2.39267 11.8147 2.59867 11.506L5.776 6.73933C6.07467 6.29133 6.07467 5.708 5.776 5.26L2.59867 0.493333C2.39267 0.185333 2.046 0 1.67533 0Z"
            fill="#9EA4B8"
          />
        </svg>
      </div>
    </div>
    <div class="w-full mt-5 pr-3">
      <button
        type="button"
        class="inline-flex w-full items-center px-8 py-2 justify-center border border-transparent rounded-md text-xs font-medium btn-shadow text-white all-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Buy 1.750 ADX
      </button>
      <div class="flex justify-between items-center pt-3">
        <h1 class="text-dsaBlue-300 text-xs font-medium">ETH Balance</h1>
        <p class="text-xs text-dsaNavy-200 font-medium">3.1300 ETH = $ 400</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
</style>