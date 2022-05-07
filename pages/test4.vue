<template>
    <div id="faqs" class="snap-center flex h-screen w-screen bg-center bg-[url('/faqsbg.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl py-20 z-10 text-gray-900 font-bold">Questions? Answers.</h1>
            <div id="faqs-accordion" class="text-left m-5 md:px-24">
                <div class="container relative py-3">
                  <h5 class="text-3xl font-bold py-2">
                    <span class="justify-left">What is Mood Music?</span>
                    <button class="absolute right-0 px-8 font-bold" @click="active = !active"> + </button>
                  </h5>
                  <p v-if="active">
                    Mood Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favourite tracks and play them offline, lyrics in real time, listening across all your favourite devices, new music personalised just for you, curated playlists from our editors and many more. All this in addition to exclusive and original content.
                  </p>
                </div>
                <div class="container relative py-3">
                  <h5 class="text-3xl font-bold py-2">
                    <span class="justify-left">How can I listen to Mood Music?</span>
                    <button class="absolute right-0 px-8 font-bold" @click="accordionFunction"> + </button>
                  </h5>
                  <div v-bind:style="{ 'h': containerHeight }" class="h-0 active:min-h-fit">
                    <p class="py-2">Apple Music is already on your iPhone, iPad, Apple Watch, Apple TV and Mac — and you can listen with CarPlay or online at music.apple.com/my. Apple Music is also available on Windows, Android and other devices.</p>
                  </div>
                </div>
                <div class="container relative py-3">
                  <h5 class="text-3xl font-bold py-2">
                    <span class="justify-left">What does it cost?</span>
                    <button class="absolute right-0 px-8 font-bold" @click="accordionFunction"> + </button>
                  </h5>
                  <div v-bind:style="{ 'h': containerHeight }" class="h-0 active:min-h-fit">
                    <p>That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.</p>
                  </div>
                </div>
                <div class="container relative py-3">
                  <h5 class="text-3xl font-bold py-2">
                    <span class="justify-left">What is Dolby Atmos music?</span>
                    <button class="absolute right-0 px-8 font-bold" @click="accordionFunction"> + </button>
                  </h5>
                  <div v-bind:style="{ 'h': containerHeight }" class="h-0 active:min-h-fit">
                    <p>Dolby Atmos is an innovative audio technology that envelops you in an immersive listening experience. While music mixed in stereo is limited to left and right channels, music created in Dolby Atmos is freed from channels, allowing artists to place individual sounds all around you. Artists can also decide the volume, size and vibrancy of each instrument to reveal nuanced details in the music.</p>
                  </div>
                </div>
              </div>
            </div>
          <p class="text-2xl font-bold text-blue-500 my-10"> > Search full FAQs page </p>
        </div>
      </div>
</template>

<script>
/*
export default ({
  data () {
    return {
      active = false,
    }
  },

  methods: {
    accordionFunction: () => {
      for ( i=0; i<; i++) {
       let containerHeight = '',
       if (this.active) {
          containerHeight = 'min-h-fit';
        } else {
          containerHeight = 'h-0';
        }
      }
    }
  }
})
*/
</script>
