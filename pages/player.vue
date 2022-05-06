<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/geohexagonbeige.jpg')] bg-cover align-middle text-white text-center">
      <div id="player" class="m-auto h-250 w-250">
        <div id="status bar" class="flex flex-row m-auto">
          <button id="back"><img src="" class="m-auto" alt="" /></button>
          <p class="font-['nunito_sans'] font-bold text-2xl text-center text-white py-5 m-auto">Playing Now</p>
          <button id="favourite"><img src="/fav.png" class="h-20 m-auto" alt="" /></button>
        </div>
        <div id="visualizer" class="h-full w-full p-3 m-auto">
          <img src="/fogvisualizer.png" class="drop-shadow-2xl shadow-black" alt="" />
        </div>
        <div class="py-5 flex flex-col gap-y-2 font-bold font-['nunito_sans']">
          <p class="text-3xl text-gray-100">song name</p>
          <p class="text-xl text-gray-300">artist name</p>
          <p class="text-xl text-gray-500">playlist name</p>
        </div>
        <div id="controls" class="flex flex-col mx-auto py-10 px-10 bg-gray-100 bg-opacity-20 backdrop-blur-sm rounded-2xl  border-8 border-opacity-60 border-l-white border-t-white border-b-gray-500 border-r-gray-500">
          <div id="controls1" class="grid grid-cols-3 gap-x-5 mx-auto my-3">
            <button class="w-20 h-20 bg-gray-300 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500"><img src="" alt="back button" /></button>
            <button class="w-20 h-20 bg-gray-300 rounded-full border-8 border-opacity-60 border-l-white border-t-white border-b-gray-500 border-r-gray-500"><img src="/play.png" alt="play button" /></button>
            <button class="w-20 h-20 bg-gray-200 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500"><img src="" alt="next button" /></button>
          </div>
          <div id="controls2" class="flex flex-row gap-x-3 mx-auto my-3">
            <p>progress bar</p>
            <p class="w-20 h-20 bg-gray-200 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500"> volume </p>
          </div>
          <div id="controls3" class="grid grid-cols-3 gap-x-5 mx-auto my-3">
            <div id="shuffle">
                <img src="" class="w-20 h-20 bg-gray-200 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500" alt="shuffle" />
            </div>
            <div id="download">
                <img src="" class="w-20 h-20 bg-gray-200 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500" alt="download" />
            </div>
            <div id="more options">
                <img src="" class="w-20 h-20 bg-gray-200 rounded-full border border-5 border-opacity-80 border-l-white border-t-white border-b-gray-500 border-r-gray-500" alt="more options" />
            </div>
          </div>
        </div>
        <div class="my-5 border border-t border-b border-x-0 border-gray-500">
          <button class="px-8 py-5 text-lg font-bold"> Go to Playlist</button>
        </div>
        <div>
          <button class="px-8 py-5 text-lg font-bold">Recommendations</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },
}
</script>
