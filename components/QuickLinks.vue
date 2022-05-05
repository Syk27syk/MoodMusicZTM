<template>
    <div id="quick links" class=" text-white p-10 absolute top-0 right-0 m-3">
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
