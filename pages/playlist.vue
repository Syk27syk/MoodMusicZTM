<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/geovoronoiblue.jpg')] bg-cover align-middle text-white text-center">
      <div id="playlist-main" class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
        <div id="status bar" class="flex flex-row m-auto">
          <button id="back"><img src="" class="m-auto" alt="" /></button>
          <p class="font-['nunito_sans'] font-bold text-2xl text-center text-white py-5 m-auto">Playing Now</p>
          <button id="favourite"><img src="/fav.png" class="h-20 m-auto" alt="" /></button>
        </div>
      </div>
      <div id="playlist">
        <h5> Playlist Name </h5>
        <div>
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </div>
      </div>
      <div id="controls">
        <p> controls </p>
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
