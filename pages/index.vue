<template>
  <div>
    <Header />
    <MoodBot />
    <div id="body" class="bg-slate-300 snap-y">
      <div id="hero" class="relative snap-center flex h-screen w-screen bg-center bg-[url('/whitesmoke.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto w-3/4 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-gray-900 drop-shadow-lg opacity-100">Mood Music</h1>
            <p class="font-alegreya font-bold text-3xl mt-5 pt-10 pb-20 z-10 text-gray-800 drop-shadow-lg opacity-100">The music app that responds to your state of mind</p>
            <button class="text-2xl m-auto font-['open_sans'] font-bold bg-[url('/blobbybutton.png')] bg-blue-500 py-5 px-8 mb-10 text-white rounded-full border-2 border-t-white border-l-white border-b-black border-r-black border-opacity-30" @click="goto('subscriptions')">Try 1 Month Free</button>
          </div>
        </div>
        <!-- debug button <button class="text-2xl m-auto font-['open_sans'] font-bold bg-[url('/blobbybutton.png')] bg-blue-500 py-5 px-8 mb-10 text-white rounded-full border-2 border-t-white border-l-white border-b-black border-r-black border-opacity-30" @click="consoleLog">Debug Button</button> -->
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="library" class="relative snap-center flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-gray-800 text-center">
        <div class="m-auto flex-col">
            <div class="m-auto">
                <h1 class="text-4xl md:text-5xl pt-20 z-10 text-gray-900 font-['open_sans'] font-bold opacity-100">Unbeatable Music Library</h1>
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
      <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <div id="mooddetection" class="relativesnap-center flex h-screen w-screen bg-center bg-[url('/3dbg2.jpg')] bg-cover align-middle text-white text-center">
      <div class="m-auto flex-col">
          <div class="m-automd:m-auto px-3 md:px-5 lg:px-10 h-250 w-full md:w-3/4 md:border md:border-white md:border-opacity-30 md:rounded-md md:bg-white md:bg-opacity-20 md:backdrop-blur-lg">
            <h1 class="text-4xl md:text-5xl mx-auto pt-5 md:pt-10 lg:pt-20 z-10 text-gray-900 font-bold font-['open_sans']">The music app that understands you</h1>
            <p class="text-2xl mt-5 py-5 z-10 text-gray-800 font-lora font-bold">Real time music composition and curation, based on your emotional state and context. State of the art AI.</p>
            <img src="/webcam.jpg" class="m-auto p-2 md:p-5 pb-5 md:pb-10 lg:pb-20 w-full md:w-3/4" alt="" />
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="spatialaudio" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg5.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 px-5 md:px-10 lg:px-20">
            <h1 class="text-4xl md:text-5xl lg:text-6xl py-5 md:py-10 lg:pt-16 z-10 text-white opacity-100 font-['nunito_sans'] font-bold"> Hear sound all around </h1>
            <p class="text-3xl mt-5 px-10 py-5 md:py-10 lg:py-16 z-10 text-white opacity-100 font-bold font-lora"> Spatial audio with dynamic head tracking for sound that surrounds you with Dolby Atmos technology. </p>
            <iframe
              class="z-0 m-10 mx-auto min-height-[315px] min-width-[560px] md:h-[315px] md:w-[560px] xl:h-[630px] xl:w-[1120px]"
              src="https://www.youtube.com/embed/3TOlN9dLpi8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen />
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="3daudiovisual" class="snap-center flex h-screen w-screen bg-center bg-[url('/orbsblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl px-3 pt-10 py-10 lg:pt-20 z-10 text-gray-100 font-['open_sans'] selection:font-bold drop-shadow-lg">3D customizable audio visualization</h1>
            <p class="text-3xl mt-5 pt-10 py-10 lg:py-20 z-10 text-red-500 font-lora font-bold drop-shadow-lg"> See what you hear </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-3 px-5 mx-5">
              <div><img src="/beetlevisualizer.png" class="m-auto hover:scale-110 duration-1000 ease-in-out" alt="3daudiovisualization3" /></div>
              <div><img src="/fogvisualizer.png" class="invisible md:visible m-auto hover:scale-110 duration-1000 ease-in-out" alt="3daudiovisualization1" /></div>
              <div><img src="/meshvisualizer.png" class="invisible md:visible m-auto hover:scale-110 duration-700 ease-in-out" alt="3daudiovisualization2" /></div>
            </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="logos" class="snap-center flex h-screen w-screen bg-center bg-[url('/geotunnelblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="our-partners" class="m-auto h-250 w-250 px-5 md:px-10 lg:px-20 py-5 md:py-12 lg:py-24">
            <h1 class="text-5xl pt-5 md:pt-10 lg:pt-20 z-10 font-lora font-italic text-[#645215] opacity-100 shadow-white">Our Partners </h1>
          </div>
          <div id="company-logos" class="flex pb-5 md:pb-12 lg:pb-36 px-5 md:px-16 lg:px-36">
            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 lg:gap-12 md:gap-5 -gap-10">
              <Logo
                v-for="l in logos"
                :key="l.name"
                :logo="l"
              />
            </div>
            <!--
            <v-sheet class="mx-auto" max-width="700">
              <v-slide-group multiple show-arrows>
                <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
                  <v-btn
                    class="mx-2"
                    :input-value="active"
                    active-class="purple white--text"
                    depressed
                    rounded
                    @click="toggle"
                  >
                    Options {{ n }}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          -->
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="3dcarousel" class="snap-center flex h-screen w-screen bg-center bg-[url('/smokering.jpg')] bg-cover align-middle text-white text-center">
      <!--https://flowbite.com/docs/components/carousel/-->
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 rounded-md px-20">
            <h1 class="text-5xl font-lora font-italic pt-20 py-24 z-10 text-[#BCAC80] opacity-100 shadow-white drop-shadow-lg">Music for Every Shade of Emotion</h1>
            <div id="select-category" class="text-white text-2xl grid grid-cols-3 gap-10 py-5 my-5 border-b-2 border-white">
              <button class="font-bold active:text-red-500">Featured</button>
              <button class="font-bold active:text-red-500">Top Hits</button>
              <button class="font-bold active:text-red-500">New Releases</button>
            </div>
            <div id="music">
              <div id="featured" class="mx-auto my-5 flex flex-row gap-x-12">
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </div>
            </div>
            <!--
            <carousel-3d id="featured" class="mx-auto my-5 flex flex-row gap-x-12">
              <slide :index="0">
                <div class="relative m-auto flex flex-col text-center font-['nunito_sans']">
                  <div id="image">
                    <img src="/player1.jpg" class="absolute mx-auto h-96 w-72 z-0" alt="" />
                    <div class="absolute bg-gray-600 bg-cover bg-opacity-30 z-10">
                      <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10 active: "><NuxtLink to="/player">Listen now</NuxtLink></button>
                    </div>
                  </div>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </slide>
              <slide :index="1">
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </slide>
              <slide :index="2">
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </slide>
              <slide :index="3">
                <div class="m-auto text-center font-['nunito_sans']">
                  <img src="/player1.jpg" class="mx-auto h-96 w-72 z-0" alt="" />
                  <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10"><NuxtLink to="/player">Listen now</NuxtLink></button>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </slide>
              <slide :index="4">
                <div class="relative m-auto flex flex-col text-center font-['nunito_sans']">
                  <div id="image">
                    <img src="/player1.jpg" class="absolute mx-auto h-96 w-72 z-0" alt="" />
                    <div class="absolute bg-gray-600 bg-cover bg-opacity-30 z-10">
                      <button class="text-xl px-8 py-3 rounded-full bg-slate-500 my-5 z-10 active: "><NuxtLink to="/player">Listen now</NuxtLink></button>
                    </div>
                  </div>
                  <h5 class="text-2xl font-['nunito_sans'] font-bold py-1">Song Title</h5>
                  <p class="text-lg font-lora py-1">Artist</p>
                </div>
              </slide>
            </carousel-3d>
            <carousel-3d class="top-hits">
              <slide :index="0">
                <img src="" alt="" />
              </slide>
              <slide :index="1">
                <img src="" alt="" />
              </slide>
              <slide :index="2">
                <img src="" alt="" />
              </slide>
              <slide :index="3">
                <img src="" alt="" />
              </slide>
              <slide :index="4">
                <img src="" alt="" />
              </slide>
              <slide :index="5">
                <img src="" alt="" />
              </slide>
              <slide :index="6">
                <img src="" alt="" />
              </slide>
              <slide :index="7">
                <img src="" alt="" />
              </slide>
              <slide :index="8">
                <img src="" alt="" />
              </slide>
              <slide :index="9">
                <img src="" alt="" />
              </slide>
            </carousel-3d>
            <carousel-3d class="new-releases">
              <slide :index="0">
                <img src="" alt="" />
              </slide>
              <slide :index="1">
                <img src="" alt="" />
              </slide>
              <slide :index="2">
                <img src="" alt="" />
              </slide>
              <slide :index="3">
                <img src="" alt="" />
              </slide>
              <slide :index="4">
                <img src="" alt="" />
              </slide>
              <slide :index="5">
                <img src="" alt="" />
              </slide>
              <slide :index="6">
                <img src="" alt="" />
              </slide>
              <slide :index="7">
                <img src="" alt="" />
              </slide>
              <slide :index="8">
                <img src="" alt="" />
              </slide>
              <slide :index="9">
                <img src="" alt="" />
              </slide>
            </carousel-3d>
            -->
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="subcription" ref="subscriptions" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldmarble.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="subscription-title" class="m-auto h-250 w-250 px-20">
            <h1 class="text-5xl pt-12 z-10 text-white opacity-100">Choose the plan that's right for you</h1>
            <p class="text-3xl my-5 py-5 z-10 text-white opacity-100">No commitment. Cancel at any time.</p>
          </div>
          <div id="plans" class="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-auto justify-center px-5">
            <div class="w-1/2 md:w-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-2 md:py-3 lg:py-5 uppercase">Student</p>
              <p class="text-xl font-bold">RM6.90/month</p>
              <button class="text-lg lg:text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-1 md:py-2 lg:py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="w-1/2 md:w-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-2 md:py-3 lg:py-5 uppercase">Individual</p>
              <p class="text-xl font-bold">RM14.90/month</p>
              <button class="text-lg lg:text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-1 md:py-2 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="w-1/2 md:w-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-2 md:py-3 lg:py-5 uppercase">Family</p>
              <p class="text-xl font-bold">RM22.90/month</p>
              <button class="text-lg lg:text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-1 md:py-2 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
          </div>
          <table id="information-table" class="invisible md:visible text-lg font-['nunito_sans'] pb-10 mx-5">
            <tr>
              <th class="invisible text-left">text</th>
              <th class="px-5 uppercase py-5">Student/Individual<sup>3</sup></th>
              <th class="px-5 uppercase">Family</th>
            </tr>
            <tr>
              <td>90 million songs</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
              <tr>
              <td>More than 30,000 expert-curated playlists</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
              <tr>
              <td>Free trial with no commitment<sup>5</sup></td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Stream ad-free music</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Original programmes, concerts and exclusives</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Live and on-demand radio stations hosted by artists</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Available on Apple devices</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Available on other supported devices</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Stream ad-free music</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Live and on-demand radio stations hosted by artists</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Available on supported devices</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Stream ad-free music</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Spatial audio with Dolby Atmos</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Full catalogue in lossless audio</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Lyrics view</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Download 100,000 songs to your library</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Access your entire library from any device and listen online and off</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>See what your friends are listening to</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Unlimited access for up to six people</td>
              <td class="invisible">text</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Personal music library for each family member</td>
              <td class="invisible">text</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Personalized music recommendations for each family member</td>
              <td class="invisible">text</td>
              <td>✔️</td>
            </tr>
          </table>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="promotions" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldblueswirl.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="promotions-title">
            <h1 class="m-auto text-7xl pt-5 md:pt-10 lg:pt-20 z-10 text-gray-900 font-bold opacity-100 drop-shadow-lg shadow-[#BCAC80]">Promotions</h1>
          </div>
          <div id="promotion-panels" class="2xl:flex mx-auto px-3 md:px-5">
            <div class="flex xl:flex-row md:flex-col my-3 md:my-6 lg:my-10 mx-auto">
              <div id="free-6-months" class="m-auto bg-black bg-opacity-30 backdrop-blur-lg h-full border-gray-900 border-opacity-10 rounded-xlur-lg rounded-lg">
                <div class="m-auto p-10">
                  <img src="/freetrial.png" class="py-12" alt="" />
                  <h5 class="uppercase text-gray-900 drop-shadow-lg text-3xl md:text-4xl lg:text-5xl font-bold font-['nunito_sans']">6-month free trial</h5>
                  <p class="px-12 py-5 text-2xl text-gray-200 font-lora">
                    Get 6 months of Mood Music free with eligible audio devices.
                  </p>
                      <div class="grid grid-cols-2 font-['nunito_sans'] text-blue-500 font-bold text-2xl">
                        <button>
                            <NuxtLink to="/subscription"> > Try it free</NuxtLink>
                        </button>
                        <button>
                          > Learn more
                        </button>
                      </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div id="student-plan" class="flex lg:flex-row sm:flex-col m-10 bg-black bg-opacity-30 backdrop-blur-lg border-gray-900 border-opacity-10 rounded-xl">
                  <div class="flex flex-col m-auto p-10">
                    <h5 class="uppercase text-gray-900 drop-shadow-lg text-5xl font-bold font-['nunito_sans']">Free for Students</h5>
                    <p class="px-12 py-5 text-2xl text-gray-200 font-lora">
                      Mood Music's student plan comes with Apple TV+ for free.
                    </p>
                    <div class="grid grid-cols-2 font-['nunito_sans'] text-blue-500 font-bold text-2xl">
                      <button>
                          <NuxtLink to="/subscription"> > Try it free</NuxtLink>
                      </button>
                      <button>
                        > Learn more
                      </button>
                    </div>
                  </div>
                  <div>
                    <img src="/studentpromotion.png" class="drop-shadow-lg" alt="" />
                  </div>
                </div>
                <div id="subscription-bundle" class="flex lg:flex-row sm:flex-col m-10 bg-black bg-opacity-30 backdrop-blur-lg border-gray-900 border-opacity-10 rounded-xl">
                  <div>
                    <img src="/bundlepromotion.png" class="my-auto drop-shadow-lg" alt="" />
                  </div>
                  <div class="flex flex-col m-auto p-10">
                    <h5 class="uppercase text-gray-900 drop-shadow-lg text-5xl font-bold font-['nunito_sans']">All In One</h5>
                    <p class="px-12 py-5 text-2xl text-gray-200 font-lora">
                      Bundle up to 5 services and enjoy more for less.
                    </p>
                    <div class="grid grid-cols-2 px-12 font-['nunito_sans'] text-blue-500 font-bold text-2xl">
                      <button>
                          <NuxtLink to="/subscription"> > Try it free</NuxtLink>
                      </button>
                      <button>
                        > Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="mobileapps" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldcubes.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto w-3/4 h-3/4 p-10 border border-white border-opacity-30 rounded-2xl px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold">Mobile Apps</h1>
            <p class="text-2xl mt-5 pb-12 z-10 text-gray-800 font-bold">Access our services wherever you are.</p>
            <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5 pb-16">
              <button id="android-store" class="m-auto md:w-2/3 drop-shadow-lg"><img src="/android-app.png" alt="" /></button>
              <button id="apple-app-store" class="m-auto md:w-2/3 drop-shadow-lg"><img src="/apple-app.png" alt="" /></button>
              <button id="google-play" class="m-auto md:w-2/3 drop-shadow-lg"><img src="/google-play.png" alt="" /></button>
              <button id="microsoft-store" class="m-auto md:w-2/3 drop-shadow-lg"><img src="/microsoft-store.png" alt="" /></button>
            </div>
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
    </div>
    <div id="faqs" class="snap-center flex h-screen w-screen bg-center bg-[url('/faqsbg.jpg')] bg-cover align-middle text-white text-center">
      <div class="m-auto flex-col">
        <div class="m-auto w-11/12">
          <h1 class="text-4xl lg:text-5xl py-5 md:py-10 lg:py-20 z-10 text-gray-900 font-bold">Questions? Answers.</h1>
          <div id="faqs-accordion" class="text-left m-5 md:px-24">
              <div class="container relative py-3">
                <h5 class="text-3xl font-bold py-2">
                  <span class="justify-left">What is Mood Music?</span>
                  <button class="absolute right-0 px-8 font-bold" @click="active1 = !active1"> + </button>
                </h5>
                <p v-if="active1" class="py-2">
                  Mood Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favourite tracks and play them offline, lyrics in real time, listening across all your favourite devices, new music personalised just for you, curated playlists from our editors and many more. All this in addition to exclusive and original content.
                </p>
              </div>
              <div class="container relative py-3">
                <h5 class="text-3xl font-bold py-2">
                  <span class="justify-left">How can I listen to Mood Music?</span>
                  <button class="absolute right-0 px-8 font-bold" @click="active2 = !active2"> + </button>
                </h5>
                <p v-if="active2" class="py-2">
                  Apple Music is already on your iPhone, iPad, Apple Watch, Apple TV and Mac — and you can listen with CarPlay or online at music.apple.com/my. Apple Music is also available on Windows, Android and other devices.
                </p>
              </div>
              <div class="container relative py-3">
                <h5 class="text-3xl font-bold py-2">
                  <span class="justify-left">What does it cost?</span>
                  <button class="absolute right-0 px-8 font-bold" @click="active3 = !active3"> + </button>
                </h5>
                <p v-if="active3" class="py-2">
                  That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.
                </p>
              </div>
              <div class="container relative py-3">
                <h5 class="text-3xl font-bold py-2">
                  <span class="justify-left">What is Dolby Atmos music?</span>
                  <button class="absolute right-0 px-8 font-bold" @click="active4 = !active4"> + </button>
                </h5>
                <p v-if="active4" class="py-2">
                  Dolby Atmos is an innovative audio technology that envelops you in an immersive listening experience. While music mixed in stereo is limited to left and right channels, music created in Dolby Atmos is freed from channels, allowing artists to place individual sounds all around you. Artists can also decide the volume, size and vibrancy of each instrument to reveal nuanced details in the music.
                </p>
              </div>
            </div>
          </div>
        <p class="text-2xl font-bold text-blue-500 my-10"> > Search full FAQs page </p>
      </div>
      <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
    </div>
      <div id="philanthropy" class="snap-center flex h-screen w-screen bg-center bg-[url('/paperhearts.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl pt-10 md:pt-16 lg:pt-20 z-10 text-gray-900 font-bold opacity-100">Donate Now</h1>
            <p class="text-3xl mt-5 py-3 md:py-6 lg:py-10 z-10 text-gray-900 font-bold opacity-100">You can help.</p>
          </div>
          <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3 md:gap-y-5 px-10 md:px-12 lg:px-16 py-5 my-3 md:my-6 lg:my-10 w-3/4 mx-auto items-center border-t-gray-800 border-b-gray-800">
            <div class="flex flex-col m-auto">
              <img src="/unicef.png" class="m-auto p-5 w-5/6 md:w-11/12 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-sm md:backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-xl md:text-2xl text-blue-500 font-bold py-5"><nobr> > Donate to UNICEF</nobr></p>
            </div>
            <div class="flex flex-col m-auto">
              <img src="/oxfam.png" class="m-auto p-5 w-5/6 md:w-11/12 h-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-sm md:backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-xl md:text-2xl text-blue-500 font-bold py-5"><nobr> > Donate to OXFAM</nobr></p>
            </div>
            <div class="flex flex-col m-auto">
              <img src="/spca.png" class="m-auto p-5 w-5/6 md:w-11/12 h-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-sm md:backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-xl md:text-2xl text-blue-500 font-bold py-5"><nobr> > Donate to SPCA</nobr></p>
            </div>
          </div>
        </div>
        <button class="mx-auto my-3 md:my-5 lg:my-10 w-screen absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="artists" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg7.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="relative m-auto h-250 w-11/12 md:w-3/4 border border-[#bcac80] border-6 md:border-1 md:border-white md:border-opacity-30 rounded-2xl px-5 md:px-12 lg:px-20 md:bg-white bg-opacity-10 md:bg-opacity-20 backdrop-blur-sm md:backdrop-blur-lg">
            <div>
              <h1 class="text-5xl pt-8 md:pt-12 lg:pt-20 z-10 text-gray-900 font-bold">Artists</h1>
              <div>
                <p class="text-xl md:text-2xl mt-5 mx-3 md:mx-12 lg:mx-24 md:mr-10 lg:mr-60 pt-5 md:pt-10 lg:pt-20 z-10 text-gray-800 text-left font-bold">Mood Music supports artists with tools to create, release and measure music across a global stage.</p>
                <p class="text-xl md:text-2xl mt-5 mx-3 md:mx-12 lg:mx-24 mr-12 md:mr-36 lg:mr-72 pb-20 z-10 text-gray-800 fext-left font-bold">Discover all the ways to showcase content on Apple Music<span class="invisible md:visible"> — including MusicKit, RSS feeds, widgets, brand guidelines, badge art and more</span>.</p>
              </div>
                  <!--
                  <div>
                    <v-carousel class="w-2/3">
                      <v-carousel-item>
                      -->
                      <!--
                        v-for="(item,i) in items"
                        :key="i"
                        :src="/saxophone.jpg"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                      ></v-carousel-item>
                      <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="/singing.jpg"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                      ></v-carousel-item>
                      <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="/band.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                      ></v-carousel-item>
                    </v-carousel>
                      <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="/singer.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                      -->
                      <!--</v-carousel-item>
                    </v-carousel>
                </div>
                -->
              <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-5 pb-16 mr-60">
                <p class="font-['nunito_sans'] text-blue-500 font-bold text-xl md:text-2xl z-10"><NuxtLink to="/artist"> > Mood Music for Artists</NuxtLink></p>
                <p class="font-['nunito_sans'] text-blue-500 font-bold text-xl md:text-2xl z-10"> > Mood Music Performance Partners Programme</p>
              </div>
            </div>
            <img src="/glamoursinger.png" class="float-right -mt-10 mx-5 absolute bottom-0 sm:-right-5 md:right-0 z-0 lg:z-20" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="smallprint" class="flex flex-col m-auto w-screen bg-gray-900 font-['nunito_sans'] px-5 lg:px-28 py-3 lg:py-10 text-left text-sm text-gray-100">
      <div id="information" class="m-auto flex-col">
        <div>
          <p>
            *New subscribers only. RM 14.90/month after free trial. Plan is automatically renewed until cancelled. Terms apply.
          </p>
          <p>
            New subscribers only. RM 14.90/month after trial. Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer is valid for three months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan is automatically renewed until cancelled. Restrictions and other terms apply.
          </p>
          <p>
            Compatible hardware and software are required. Not all content is available in Dolby Atmos. Head-tracking feature requires iPhone or iPad paired with AirPods Pro, AirPods Max, AirPods (3rd generation) or Beats Fit Pro.
          </p>
            Apple Music 1, Apple Music Hits and Apple Music Country are available without an Apple Music subscription.
            University students only. Verification is required.
            Requires Family Sharing. See apple.com/my/family-sharing for more information.
            Free trial for new subscribers only. Plan is renewed at stated price per month until cancelled.
            The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan is automatically renewed after trial until cancelled. Restrictions and other terms apply.
          <p>
            Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer is valid for verified university students only and does not extend to a Family Sharing group. “coastline” written by mehro.
          </p>
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
      logos: [],
      active1: true,
      active2: false,
      active3: false,
      active4: false,
      tabIndex: '',
      activeIndex: ''
    };
  },

  mounted() {
    this.$axios.get('logos.json').then(
      (response) => {
        this.logos = response.data.logos;
      });
  },

  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
    consoleLog () {
      console.log('Hello Debugger');
    },
    selectTab() {
      const tabIndex = this.element.id;
      console.log(tabIndex);
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
};
/*
import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Vuetify)
Vue.use(Carousel3d);

const ops = {}

export default

  new Vuetify(opts)

  components: {
    Carousel3d,
    Slide
  }
}
*/

// You still need to register Vuetify itself
// src/plugins/vuetify.js

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

// const opts = {}

// export default new Vuetify(opts)

</script>
