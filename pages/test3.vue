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
      let tabIndex = () => {
      
      }
      let activeIndex = () => {
      }
      if (activeIndex === tabIndex) {
        return activeIndex;
      } else {
        switch (tabIndex) {
          case 'gold':
            activeIndex = 'gold-button';
            return activeIndex;
          case 'pink':
            activeIndex = 'pink-button';
            return activeIndex;
          case 'gray':
            activeIndex = 'gray-button';
            return activeIndex;
          case 'green':
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

/*      var vm = new Vue({
        el: '#tab-content',
        addActiveTab () {
          let tab =  [
            []
          ];
          tabs.forEach(tab => {
              tab.classList.remove('active');
          });
          event.target.classList.add('active');
        },
        changeTab () {
          let tabContent = document.getElementById('tab-content');
          tabs.forEach(tab => {
            let tabValue = tab.dataset['value'];
            const appendText = (id) => {
              tabContent.innerText  = `${id} Content`;
            }
            if () {
              switch (tabValue) {
                case 'gold':
                  appendTitle('Play over 90 million songs and 30,000 playlists.');
                  appendText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
                  break;
                case 'pink':
                  appendTitle('Download your favourite tracks, play them offline.');
                  appendText('Commodo viverra maecenas accumsan lacus vel facilisis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Eget mi proin sed libero enim. Amet consectetur adipiscing elit duis. Sapien pellentesque habitant morbi tristique senectus et. Quis hendrerit dolor magna eget est lorem.');
                  break;
                case 'gray':
                  appendTitle('Listen across your devices.');
                  appendText('Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque id. Libero enim sed faucibus turpis in eu mi. At quis risus sed vulputate odio. Aliquam ultrices sagittis orci a. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.');
                  break;
                case 'green':
                  appendTitle('Get curated playlists and live radio.');
                  appendText('Quis hendrerit dolor magna eget est lorem ipsum. Et ligula ullamcorper malesuada proin libero nunc consequat. In aliquam sem fringilla ut. Vitae tempus quam pellentesque nec nam aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Dictum at tempor commodo ullamcorper. Fames ac turpis egestas sed tempus.');
                  break;
                default:
                  appendTitle('Play over 90 million songs and 30,000 playlists.');
                  appendText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
                  break;
              }
            }
          }
        }
        displayContent () {
*/
</script>
