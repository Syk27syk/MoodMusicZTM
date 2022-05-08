<template>
    <div>
        <Header />
        <MoodBot />
        <BrowseSidebar />
        <div id="background" class="flex flex-col bg-gray-100 text-black text-center font-['nunito_sans']">
            <div id="welcome" class="my-10 border-2 border-b-gray-500 border-l-0 border-r-0 border-t-0">
                <h5 class="uppercase text-4xl py-5 mt-20"> playlists </h5>
                <p class="text-xl py-5"> You are logged in. </p>
                <div class="flex gap-5 m-auto w-screen my-5 pb-10 justify-center">
                    <button class="m-auto bg-gray-500 text-white px-5 py-3 rounded-lg"> Log out </button>
                    <button class="m-auto bg-gray-500 text-white px-5 py-3 rounded-lg"> Open Player </button>
                </div>
            </div>
            <!--
            <div id="playlist-main" class="m-auto">
                <div id="status bar" class="flex flex-row m-auto">
                    <button id="back"><img src="" class="m-auto" alt="" /></button>
                    <p class="font-['nunito_sans'] font-bold text-2xl text-center text-black py-5 m-auto">Playing Now</p>
                    <button id="favourite"><img src="/fav.png" class="h-20 m-auto" alt="" /></button>
                </div>
            </div>
            -->
            <div id="playlists" class="mx-auto my-auto px-10 py-10 text-left">
                <div id="playlist 1" class="mx-auto py-16 border border-b-gray-500 border-t-0 border-l-0 border-r-0">
                    <h6 class="uppercase text-xl font-bold">Playlist 1 Name </h6>
                    <div id="tags" class="flex flex-row">
                        <p class="m-5 font-bold"> Tags: </p>
                        <span class="m-5"> Tag 1 </span>
                        <span class="m-5"> Tag 2 </span>
                        <span class="m-5"> Tag 3 </span>
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Steep Hills of Vicodin Tears </p>
                        <p> Album: A Winged Victory for the Sullen </p>
                        <p> Artist: A Winged Victory for the Sullen </p>
                        <audio id="" controls><source src="/steep_hills_of_vicodin_tears.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Resonate </p>
                        <p> Album: be am, 2021 </p>
                        <p> Artist: Bugge Wesseltoft</p>
                        <audio id="" controls><source src="/resonate.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Distorted Light Beam </p>
                        <p> Album: Give Me The Future </p>
                        <p> Artist: Bastille </p>
                        <audio id="" controls><source src="/distorted_light_beam.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
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
                <div id="frequent" class="mx-auto py-16 border border-b-gray-500 border-t-0 border-l-0 border-r-0">
                    <h6 class="uppercase text-xl font-bold">Most Frequently Played</h6>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Brahms Piano Concerto No. 1 in D Minor</p>
                        <p> Artist:  </p>
                        <audio id="" controls><source src="/brahms_Dmin_pianoconcerto.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Ocean </p>
                        <p> Album: John Butler </p>
                        <p> Artist: John Butler Trio </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold">  La fille aux cheveux de lin </p>
                        <p> Album: Debussy Preludes, Book 1 </p>
                        <p> Artist: Maurizio Pollini </p>
                        <audio id="" controls><source src="/cheveux_de_lin.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
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
                <div id="recommended" class="mx-auto py-16 border border-b-gray-500 border-t-0 border-l-0 border-r-0">
                    <h6 class="uppercase text-xl font-bold">Recommended For You</h6>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> 36 Greek Dances, AK 11, Series 1 (Excerpts Arr. C. Farmakis): No. 3, Epirotikos </p>
                        <p> Album: Songs &#38; Dances, 2019 </p>
                        <p> Artist: Kottos </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Ghazal </p>
                        <p> Album: Plex, 2022 </p>
                        <p> Artist: Fazer </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Say Something (Live On Later With Jools Holland </p>)
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
                <div id="new-releases" class="mx-auto py-16 border border-b-gray-500 border-t-0 border-l-0 border-r-0">
                    <h6 class="uppercase text-xl font-bold">New Releases</h6>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Album: Étant donnés </p>
                        <p> Edouard Ferlet, Fabrice Moreau and Antoine Banville </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Frostbite </p>
                        <p> Album: Early Hours (DJ Mix) </p>
                        <p> Artist: Shigeto </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Forever </p>
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
                <div id="featured" class="mx-auto py-16 border border-b-gray-500 border-t-0 border-l-0 border-r-0">
                    <div class="my-auto py-10 flex flex-col">
                    <h6 class="uppercase text-xl font-bold">Today's Featured Music</h6>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Still Life </p>
                        <p> Album: Still Life - Single</p>
                        <p> Artist: Big Bang </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> Leave Before You Love Me </p>
                        <p> Single </p>
                        <p> Artist: Marshmello and Jonas Brothers </p>
                        <audio id="" controls><source src="/.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio>
                        <Controls />
                    </div>
                    <div class="my-auto py-10 flex flex-col">
                        <img src="/player1.jpg" alt="image" class="w-[175px] h-[175px] p-5" />
                        <p class="font-bold"> When You're Gone </p>
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
