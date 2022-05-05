<template>
  <div id="head" class="relative flex mx-auto min-h-[175px] flex-row w-screen align-center pb-5 bg-gray-800">
    <div id="menu-left" class="px-2 md:px-6 flex flex-none flex-0 my-auto">
      <a href="https://mood-music-syk.netlify.app/"><img src="/mmlogo.png" class="h-[150px] w-[150px] p-5" alt="logo" /></a>
    </div>
    <div id="menu" class="flex flex-grow flex-col lg:flex-row gap-x-16 gap-y-10 py-5 mx-auto font-['open_sans'] font-bold text-lg text-gray-100 uppercase">
      <button class="mx-auto px-5">
        <NuxtLink to="/browse">
          Browse Our Library
        </NuxtLink>
      </button>
      <button class="mx-auto px-5">
        <NuxtLink to="/artist">
          Artist
        </NuxtLink>
      </button>
      <button class="mx-auto px-5">
        <NuxtLink to="/corporateInformation">
        Corporate Information
        </NuxtLink>
      </button>
      <button class="mx-auto px-5">
        <NuxtLink to="/support">
          Support
        </NuxtLink>
      </button>
      <button class="mx-auto px-5">
        <NuxtLink to="/giftCards">
          More
        </NuxtLink>
      </button>
    </div>
    <div id="dark-light" class="text-white invisible">
      <p> dark-light toggle with tailwind transform, v-if and on-click </p>
    </div>
    <div id="language-selection" class="text-white invisible">
        <p> dropdown menu with 3 languages </p>
    </div>
    <div id="quick links" class="flex flex-none text-white p-2 md:p-10 absolute top-0 right-0 mt-3 mx-3 md:mr-15">
      <button
          type="button"
          class="text-lg font-bold font-['nunito_sans'] text-gray-500 text-opacity-100 text-center align-center mx-auto py-2 flex flex-col relative z-10 hover:border-yellow-300 border-opacity-30"
          @click="isOpen = !isOpen"
          >
          <img src="/goldsphere.png" class="h-8 w-8 m-auto" alt="" />
          Quick Links
        </button>
        <button v-if="isOpen" class="fixed inset-0 h-full w-full text-transparent cursor-default tabindex=-1 z-0" @click="isOpen = false">text</button>
        <div v-if="isOpen" class="flex flex-col relative z-10">
        <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
          <NuxtLink to="/login"><img src="/quaverheart.png" alt="account"></NuxtLink>
          <p>Account</p>
        </button>
        <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
        <NuxtLink to="/playlist"><img src="/musichead.png" alt="playlist"></NuxtLink>
          <p>Playlist</p>
        </button>
        <button class="rounded-full bg-transparent h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
            <NuxtLink to="/cart"><img src="/semiquaver.png" alt="cart"></NuxtLink>
            <p>Cart</p>
        </button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },

/*
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('keydown', handleEscape)

    this.$once('hook:bfeforeDestroy', () => {
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.removeEventListener('keydown', handleEscape)
    })
  }
*/
}
</script>
