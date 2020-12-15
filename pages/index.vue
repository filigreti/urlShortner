<template>
  <main
    class="w-screen h-screen flex flex-col justify-center items-center mx-auto max-w-xl"
  >
    <form @submit.prevent="copyLink" class="w-full">
      <h2 class="font-medium tracking-wide">Link</h2>
      <input
        required
        type="url"
        v-model="link"
        ref="input"
        class="w-full border-b-2 focus:outline-none mt-4 border-blue-500"
      />
      <div class="flex mt-3 items-center">
        <input
          required
          :disabled="link == ''"
          v-model="toggle"
          type="checkbox"
          class="w-5 h-5"
        />
        <p class="text-sm pl-2">Shorten URL</p>
      </div>
      <div class="flex justify-end items-center">
        <button @click.prevent="clear" class="text-sm mr-5 focus:outline-none">
          Cancel
        </button>
        <button
          type="submit"
          class="border border-gray-300 text-blue-700 leading-5 font-normal rounded-md text-sm py-2 px-6 focus:outline-none"
        >
          Copy
        </button>
      </div>
    </form>
    <div class="w-full mt-12">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <!-- Heroicon name: check -->
        <svg
          class="-ml-1 mr-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <NuxtLink to="/api/url">Links</NuxtLink>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      link: '',
      toggle: false,
      error: false,
    }
  },
  watch: {
    toggle(x) {
      if (x) {
        let valid = this.shortenUrl()
        if (!valid) {
          alert('Input a correct Url')
          this.$nextTick(() => {
            this.toggle = false
          })
          this.link = ''
        } else {
          this.link = valid
        }
      }
    }
  },

  methods: {
    copyLink() {
      if (!this.toggle && !this.links) {
        return
      }
      let copyText = this.$refs.input
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    },

    clear() {
      this.toggle = false;
      this.link = ''
    },

    getrandom() {
      return Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    },

    shortenUrl() {
      let existingLinks = []
      let url = this.link;
      let protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
      existingLinks = JSON.parse(localStorage.getItem("lists") || "[]");
      let currentIndex;
      if (!!existingLinks) {
        currentIndex = existingLinks.length
      } else {
        currentIndex = 0;
      }
      if (protocol_ok) {
        let newUrl = {
          initial: url,
          newShortUrl: this.getrandom(),
          currentIndex,
        }
        let genLink = "https://elegant-bartik-557acf.netlify.app/" + newUrl.newShortUrl;
        existingLinks.push(newUrl)
        localStorage.setItem("lists", JSON.stringify(existingLinks))
        return genLink;
      } else {
        return false
      }
    }
  },
}
</script>

<style>
* {
  font-family: "Noto Sans", sans-serif;
}
</style>