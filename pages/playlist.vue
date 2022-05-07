<template>
    <div>
        <Header />
        <MoodBot />
        <BrowseSidebar />
        <div id="background" class="flex flex-col bg-white text-black text-center font-['nunito_sans']">
            <div id="welcome">
                <h5 class="uppercase"> playlists </h5>
                <p> You are logged in. </p>
                <button> Log out </button>
                <button> Open Player </button>
            </div>
            <div id="playlist-main" class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
                <div id="status bar" class="flex flex-row m-auto">
                    <button id="back"><img src="" class="m-auto" alt="" /></button>
                    <p class="font-['nunito_sans'] font-bold text-2xl text-center text-black py-5 m-auto">Playing Now</p>
                    <button id="favourite"><img src="/fav.png" class="h-20 m-auto" alt="" /></button>
                </div>
            </div>
            <div id="playlists" class="mx-auto my-auto text-left text-black">
                <div id="playlist 1">
                    <h6>Playlist 1 Name </h6>
                    <p> tags </p>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Resonate </p>
                        <p> Album: be am, 2021 </p>
                        <p> Artist: Bugge Wesseltoft</p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Distorted Light Beam </p>
                        <p> Album: Give Me The Future </p>
                        <p> Artist: Bastille </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> All Farewells are Sudden </p>
                        <p> Album: A Winged Victory for the Sullen </p>
                        <p> Artist: A Winged Victory for the Sullen </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    </svg>
                </div>
                <div>
                    <h6>Most Frequently Played</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Brahms Piano Concerto No. 1 in D Minor</p>
                        <p> Artist:  </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Ocean </p>
                        <p> Album: John Butler </p>
                        <p> Artist: John Butler Trio </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p>  La fille aux cheveux de lin </p>
                        <p> Album: Debussy Preludes, Book 1 </p>
                        <p> Artist: Maurizio Pollini </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    </svg>
                </div>
                <div id="recommended">
                    <h6>Recommended For You</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> 36 Greek Dances, AK 11, Series 1 (Excerpts Arr. C. Farmakis): No. 3, Epirotikos </p>
                        <p> Album: Songs &#38; Dances, 2019 </p>
                        <p> Artist: Kottos </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Ghazal </p>
                        <p> Album: Plex, 2022 </p>
                        <p> Artist: Fazer </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Say Something (Live On Later With Jools Holland </p>)
                        <p> Album: Yellower, Vol. 1 - Single </p>
                        <p> Artist: Emma-Jean Thackray </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    </svg>
                </div>
                <div>
                    <h6>New Releases</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Album: Étant donnés </p>
                        <p> Edouard Ferlet, Fabrice Moreau and Antoine Banville </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Frostbite </p>
                        <p> Album: Early Hours (DJ Mix) </p>
                        <p> Artist: Shigeto </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Forever </p>
                        <p> Album: Loner </p>
                        <p> Artist: Alison Wonderland </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    </svg>
                </div>
                <div>
                    <h6>Today's Featured Music</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Still Life </p>
                        <p> Album: Still Life - Single</p>
                        <p> Artist: Big Bang </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Leave Before You Love Me </p>
                        <p> Single </p>
                        <p> Artist: Marshmello and Jonas Brothers </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> When You're Gone </p>
                        <p> Single </p>
                        <p> Artist: Shawn Mendes </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    </svg>
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
