<template>
    <div id="library" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-gray-800 text-center">
        <div class="m-auto flex-col">
            <div class="m-auto">
                <h1 class="text-5xl pt-20 z-10 text-gray-900 font-['open_sans'] font-bold opacity-100">Unbeatable Music Library</h1>
                <div class="mx-auto py-16">
                    <button id="gold-button"><img src="/goldpearl.png" class="w-[48px] h-[48px]" alt="" @click="selectTab" /></button>
                    <button id="pink-button"><img src="/pinkpearl.png" class="w-[48px] h-[48px]" alt="" @click="selectTab" /></button>
                    <button id="gray-button"><img src="/graypearl.png" class="w-[48px] h-[48px]" alt="" @click="selectTab" /></button>
                     <button id="green-button"><img src="/greenpearl.png" class="w-[48px] h-[48px]" alt="" @click="selectTab" /></button>
                </div>
                <div>
                    <div v-if="activeIndex === 'gold-button'" class="mx-auto my-5 py-10 px-20">
                    <h5 class="text-2xl mt-5 py-5 z-10 text-gray-900 font-bold opacity-100">Play over 90 million songs and 30,000 playlists. </h5>
                    <img src="" alt="" />
                    <p class="text-lg text-left mx-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                        <div v-if="activeIndex === 'pink-button'" class="mx-auto my-5 p-10">
                        <h5 class="text-2xl mt-5 py-5 z-10 text-gray-900 font-bold opacity-100">Download your favourite tracks, play them offline.</h5>
                        <img src="" alt="" />
                        <p class="text-lg text-left mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div v-if="activeIndex === 'gray-button'" class="mx-auto my-5 p-10">
                        <h5 class="text-2xl mt-5 py-5 z-10 text-gray-900 font-bold opacity-100">Get curated playlists and live radio.</h5>
                        <img src="" alt="" />
                        <p class="text-lg text-left mx-20">>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div v-if="activeIndex === 'green-button'" class="mx-auto my-5 p-10">
                        <h5 class="text-2xl mt-5 py-20 z-10 text-gray-900 font-boldopacity-100">Listen across your devices.</h5>
                        <img src="" alt="" />
                        <p class="text-lg text-left mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
  data () {
    return {
    }
  },

  methods: {
    selectTab() {
      const tabIndex = this.element.id;
      let activeIndex = '';
      if (activeIndex === tabIndex) {
        return activeIndex;
      } else {
        switch (tabIndex) {
          case 'gold-button':
            activeIndex = 'gold-button';
            return activeIndex;
          case 'pink-button':
            activeIndex = 'pink-button';
            return activeIndex;
          case 'gray-button':
            activeIndex = 'gray-button';
            return activeIndex;
          case 'green-button':
            activeIndex = 'green-button';
            return activeIndex;
          default:
            activeIndex = 'gold-button';
            return activeIndex;
        }
      }
    }
  }
})
</script>
