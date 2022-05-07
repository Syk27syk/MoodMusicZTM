<template>
  <div>
    <Header />
    <MoodBot />
    <div id="body" class="bg-slate-300 snap-y">
      <div id="hero" class="snap-center flex h-screen w-screen bg-center bg-[url('/whitesmoke.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto w-3/4 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-gray-900 drop-shadow-lg opacity-100">Mood Music</h1>
            <p class="font-alegreya font-bold text-3xl mt-5 pt-10 pb-20 z-10 text-gray-800 drop-shadow-lg opacity-100">The music app that responds to your state of mind</p>
            <button class="text-2xl m-auto font-['open_sans'] font-bold bg-[url('/blobbybutton.png')] bg-blue-500 py-5 px-8 mb-10 text-white rounded-full border-2 border-t-white border-l-white border-b-black border-r-black border-opacity-30" @click="goto('subscriptions')">Try 1 Month Free</button>
          </div>
        </div>
      </div>
      <div id="library" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-gray-800 text-center">
        <div class="m-auto flex-col">
          <div class="m-auto">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-['open_sans'] font-bold opacity-100">Unbeatable Music Library</h1>
            <div class="mx-auto py-16">
              <button id="gold-button"><img src="/goldpearl.png" class="w-[48px] h-[48px]" alt="" @click="tabFunction" /></button>
              <button id="pink-button"><img src="/pinkpearl.png" class="w-[48px] h-[48px]" alt="" @click="tabFunction" /></button>
              <button id="gray-button"><img src="/graypearl.png" class="w-[48px] h-[48px]" alt="" @click="tabFunction" /></button>
              <!--<button><img src="/greenpearl.png" class="w-[48px] h-[48px]" alt="" @click="isShow = !isShow" /></button>-->
            </div>
            <div id="tab-content" class="mx-auto my-5 py-10 px-20">
              <h5 id="tab-title" class="text-2xl mt-5 py-5 z-10 text-gray-900 font-bold opacity-100">{{ tabtitle }} </h5>
              <img id="tab-image" src="" alt="" />
              <p id="tab-text" class="text-lg text-left mx-20">
                  {{ tabtext }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="mooddetection" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg2.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto px-10 h-250 w-3/4 border border-white border-opacity-30 rounded-md bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold font-['open_sans']">The music app that understands you</h1>
            <p class="text-2xl mt-5 py-5 z-10 text-gray-800 font-lorafont-bold">Real time music composition and curation, based on your emotional state and context. State of the art AI.</p>
            <img src="/webcam.jpg" class="m-auto p-5 pb-20 w-3/4" alt="" />
          </div>
        </div>
      </div>
      <div id="spatialaudio" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg5.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 px-20">
            <h1 class="text-6xl pt-20 z-10 text-white opacity-100 font-['nunito_sans'] font-bold"> Hear sound all around </h1>
            <p class="text-3xl mt-5 px-10 py-20 z-10 text-white opacity-100 font-bold font-lora"> Spatial audio with dynamic head tracking for sound that surrounds you with Dolby Atmos technology. </p>
            <iframe
              class="m-10 mx-auto min-height-[315px] min-width-[560px] md:h-[315px] md:w-[560px] xl:h-[630px] xl:w-[1120px] 2xl:h-[800px] 2xl:w-[1422px]"
              src="https://www.youtube.com/embed/3TOlN9dLpi8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen />
            </div>
          </div>
      </div>
      <div id="3daudiovisual" class="snap-center flex h-screen w-screen bg-center bg-[url('/orbsblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl pt-20 z-10 text-gray-100 font-['open_sans'] selection:font-bold drop-shadow-lg">3D customizable audio visualization</h1>
            <p class="text-3xl mt-5 py-20 z-10 text-red-500 font-lora font-bold drop-shadow-lg"> See what you hear </p>
          </div>
          <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-x-5 px-5 mx-5">
              <div><img src="/fogvisualizer.png" class="hover:scale-110 duration-1000 ease-in-out" alt="3daudiovisualization1" /></div>
              <div><img src="/meshvisualizer.png" class="hover:scale-110 duration-700 ease-in-out" alt="3daudiovisualization2" /></div>
              <div><img src="/beetlevisualizer.png" class="hover:scale-110 duration-1000 ease-in-out" alt="3daudiovisualization3" /></div>
            </div>
        </div>
      </div>
      <div id="logos" class="snap-center flex h-screen w-screen bg-center bg-[url('/geotunnelblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="our-partners" class="m-auto h-250 w-250 px-20 py-24">
            <h1 class="text-5xl pt-20 z-10 font-lora font-italic text-[#645215] opacity-100 shadow-white">Our Partners </h1>
          </div>
          <div id="company-logos" class="flex pb-36 px-36">
            <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 lg:gap-12 md:gap-5 sm:gap-3">
              <Logo
                v-for="l in logos"
                :key="l.name"
                :logo="l"
              />
            <!--
              <a href="https://mood-music-syk.netlify.app/"><img src="/logo1.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://music.apple.com/"><img src="/logo2.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.spotify.com/us/"><img src="/logo3.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.spotify.com/us/"><img src="/logo4.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://aes2.org/"><img src="/logo5.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://womensaudiomission.org/"><img src="/logo6.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://welcome.online.berklee.edu/"><img src="/logo7.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.avid.com/"><img src="/logo8.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.sweetwater.com/"><img src="/logo9.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.pioneerdj.com/en-gb/"><img src="/logo10.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.bose.com/"><img src="/logo11.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.steinway.com/"><img src="/logo12.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo13.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo14.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo15.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo16.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo17.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo18.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo19.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo20.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo21.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo22.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo23.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              <a href="https://www.masterclass.com/"><img src="/logo24.png" class="md:h-12 md:w-12 lg:h-24 lg:w-24 xl:h-48 xl:w-48 sepia" alt="" /></a>
              -->
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
      </div>
      <div id="subcription" ref="subscriptions" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldmarble.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="subscription-title" class="m-auto h-250 w-250 px-20">
            <h1 class="text-5xl pt-12 z-10 text-white opacity-100">Choose the plan that's right for you</h1>
            <p class="text-3xl my-5 py-5 z-10 text-white opacity-100">No commitment. Cancel at any time.</p>
          </div>
          <div id="plans" class="grid grid-cols-3 gap-x-5 my-5 mx-5">
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Student</p>
              <p class="text-xl font-bold">RM6.90/month</p>
              <button class="text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Individual</p>
              <p class="text-xl font-bold">RM14.90/month</p>
              <button class="text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Family</p>
              <p class="text-xl font-bold">RM22.90/month</p>
              <button class="text-xl font-bold bg-black hover:bg-white text-red-500 border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
          </div>
          <table id="information-table" class="text-lg font-['nunito_sans'] pb-10 mx-5">
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
      </div>
      <div id="promotions" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldblueswirl.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="promotions-title">
            <h1 class="m-auto text-7xl pt-20 z-10 text-gray-900 font-bold opacity-100 drop-shadow-lg shadow-[#BCAC80]">Promotions</h1>
          </div>
          <div id="promotion-panels" class="2xl:flex">
            <div class="flex xl:flex-row md:flex-col m-10 ">
              <div id="free-6-months" class="m-auto bg-black bg-opacity-30 backdrop-blur-lg h-full border-gray-900 border-opacity-10 rounded-xlur-lg rounded-lg">
                <div class="m-auto p-10">
                  <img src="/freetrial.png" class="py-12" alt="" />
                  <h5 class="uppercase text-gray-900 drop-shadow-lg text-5xl font-bold font-['nunito_sans']">6-month free trial</h5>
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
                    <img src="/bundlepromotion.png" class="drop-shadow-lg" alt="" />
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
      </div>
      <div id="mobileapps" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldcubes.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto w-3/4 h-3/4 p-10 border border-white border-opacity-30 rounded-2xl px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold">Mobile Apps</h1>
            <p class="text-2xl mt-5 pb-12 z-10 text-gray-800 font-bold">Access our services wherever you are.</p>
            <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5 pb-16">
              <button id="android-store" class="m-auto w-2/3 drop-shadow-lg"><img src="/android-app.png" alt="" /></button>
              <button id="apple-app-store" class="m-auto w-2/3 drop-shadow-lg"><img src="/apple-app.png" alt="" /></button>
              <button id="google-play" class="m-auto w-2/3 drop-shadow-lg"><img src="/google-play.png" alt="" /></button>
              <button id="microsoft-store" class="m-auto w-2/3 drop-shadow-lg"><img src="/microsoft-store.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <div id="faqs" class="snap-center flex h-screen w-screen bg-center bg-[url('/faqsbg.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl py-20 z-10 text-gray-900 font-bold">Questions? Answers.</h1>
            <div id="faqs-accordion">
                <div>
                  <h5>What is Mood Music?</h5>
                  <p>
                    Mood Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favourite tracks and play them offline, lyrics in real time, listening across all your favourite devices, new music personalised just for you, curated playlists from our editors and many more. All this in addition to exclusive and original content.
                  </p>
                </div>
                <div>
                  <h5>How can I listen to Mood Music?</h5>
                  <p>
                    Apple Music is already on your iPhone, iPad, Apple Watch, Apple TV and Mac — and you can listen with CarPlay or online at music.apple.com/my. Apple Music is also available on Windows, Android and other devices.
                  </p>
                </div>
                <div>
                  <h5>What does it cost?</h5>
                  <p>
                    That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.
                  </p>
                </div>
                <div>
                  <h5>What is Dolby Atmos music?</h5>
                  <p>
                    Dolby Atmos is an innovative audio technology that envelops you in an immersive listening experience. While music mixed in stereo is limited to left and right channels, music created in Dolby Atmos is freed from channels, allowing artists to place individual sounds all around you. Artists can also decide the volume, size and vibrancy of each instrument to reveal nuanced details in the music.
                  </p>
                </div>
              </div>
            </div>
            <!-- https://flowbite.com/docs/components/accordion/ default accordion
              <div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
            -->
            <!--
              <v-row class="mx-auto my-10">
                <v-expansion-panels accordion>
                  <v-expansion-panel class="bg-black">
                    <v-expansion-panel-header>What is Mood Music?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Mood Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favourite tracks and play them offline, lyrics in real time, listening across all your favourite devices, new music personalised just for you, curated playlists from our editors and many more. All this in addition to exclusive and original content.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>How can I listen to Mood Music?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Apple Music is already on your iPhone, iPad, Apple Watch, Apple TV and Mac — and you can listen with CarPlay or online at music.apple.com/my. Apple Music is also available on Windows, Android and other devices.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>What does it cost?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>What is Dolby Atmos music?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Dolby Atmos is an innovative audio technology that envelops you in an immersive listening experience. While music mixed in stereo is limited to left and right channels, music created in Dolby Atmos is freed from channels, allowing artists to place individual sounds all around you. Artists can also decide the volume, size and vibrancy of each instrument to reveal nuanced details in the music.
                    </v-expansion-panel-content>
                   <v-expansion-panel-header>What does it cost?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>How can I listen to Dolby Atmos music?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Apple Music subscribers using the latest version of Apple Music on iPhone, iPad, Mac and Apple TV can listen to thousands of Dolby Atmos music tracks using any headphones. When you listen with compatible Apple or Beats headphones, Dolby Atmos music plays back automatically when available for a song. For other headphones, go to Settings > Music > Audio and set Dolby Atmos to Always On. You can also hear Dolby Atmos music using the built-in speakers on a compatible iPhone, iPad, MacBook Pro, MacBook Air or iMac, or by connecting your Apple TV 4K to one of the following: a Dolby Atmos–compatible sound bar, a Dolby Atmos–enabled AV receiver or a television that supports Dolby Atmos audio. For the full list of compatible devices, please see https://support.apple.com/en-my/HT212182.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>What is lossless audio?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lossless audio compression reduces the original file size of a song while preserving all of the data perfectly. Apple Music is making its entire catalogue of more than 90 million songs available in lossless audio at different resolutions. In Apple Music, “Lossless” refers to lossless audio up to 48kHz and “Hi-Res Lossless” refers to lossless audio from 48kHz to 192kHz. Lossless and Hi-Res Lossless files are very large and use much more bandwidth and storage space than standard AAC files.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>How can I listen to lossless?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      You can listen to lossless audio using the latest Apple Music app on an iPhone, iPad, Mac or Apple TV. Turn on lossless audio in Settings > Music > Audio Quality. You can choose between Lossless and Hi-Res Lossless for mobile network or Wi-Fi connections. Note that Hi-Res Lossless requires external equipment such as a USB digital to analog converter.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>Can I share with my family?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Yes. With an Apple Music Family Plan, up to six people in the family can enjoy all the features and the full catalogue of Apple Music. To get started, just set up Family Sharing on your iOS or iPadOS device, Android phone or Mac and invite family members to join.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>Is there a student subscription?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Students get the same Apple Music features and benefits as individual members. Once your student status with your university is verified, you get student membership pricing for up to four years, as long as you remain a student. After four years, your membership will continue at the individual member price.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>Are there commercials?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Apple Music has zero ads.
                    </v-expansion-panel-content>
                    <v-expansion-panel-header>Am I eligible for a six-month free Mood Music offer? How do I redeem it?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      New subscribers can get six months of Apple Music free with an eligible audio device. Make sure your iPhone or iPad is running the latest version of iOS or iPadOS. Then you can activate your Apple Music trial after you pair your audio device to your iPhone or iPad. You’ll have three months to redeem the offer after the first activation of the eligible device.◊
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
              -->
          <p class="text-2xl font-bold text-blue-500 my-10"> > Search full FAQs page </p>
        </div>
      </div>
      <!--https://flowbite.com/docs/components/carousel/-->
      <div id="philanthropy" class="snap-center flex h-screen w-screen bg-center bg-[url('/paperhearts.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold opacity-100">Donate Now</h1>
            <p class="text-3xl mt-5 py-10 z-10 text-gray-900 font-bold opacity-100">You can help.</p>
          </div>
          <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-5 px-16 py-5 my-10 w-3/4 mx-auto items-center border-t-gray-800 border-b-gray-800">
            <div class="flex flex-col m-auto">
              <img src="/unicef.png" class="m-auto p-5 w-3/4 h-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-2xl text-blue-500 font-bold py-5"> > Donate to UNICEF</p>
            </div>
            <div class="flex flex-col m-auto">
              <img src="/oxfam.png" class="m-auto p-5 w-3/4 h-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-2xl text-blue-500 font-bold py-5"> > Donate to OXFAM</p>
            </div>
            <div class="flex flex-col m-auto">
              <img src="/spca.png" class="m-auto p-5  w-3/4 h-3/4 border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl" alt="" />
              <p class="text-2xl text-blue-500 font-bold py-5"> > Donate to SPCA</p>
            </div>
          </div>
        </div>
      </div>
      <div id="artists" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg7.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="relative m-auto h-250 w-3/4 border border-white border-opacity-30 rounded-2xl px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <div>
              <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold">Artists</h1>
              <div>
                <p class="text-2xl mt-5 mx-24 md:mr-10 lg:mr-60 pt-20 z-10 text-gray-800 text-left font-bold">Mood Music supports artists with tools to create, release and measure music across a global stage.</p>
                <p class="text-2xl mt-5 mx-24 mr-72 pb-20 z-10 text-gray-800 fext-left font-bold">Discover all the ways to showcase content on Apple Music — including MusicKit, RSS feeds, widgets, brand guidelines, badge art and more.</p>
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
                <p class="font-['nunito_sans'] text-blue-500 font-bold text-2xl"><NuxtLink to="/artist"> > Mood Music for Artists</NuxtLink></p>
                <p class="font-['nunito_sans'] text-blue-500 font-bold text-2xl"> > Mood Music Performance Partners Programme</p>
              </div>
            </div>
            <img src="/glamoursinger.png" class="float-right -mt-10 mx-5 absolute bottom-0 right-0" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="smallprint" class="flex m-auto w-screen bg-gray-900 font-['nunito_sans'] px-28 py-10 gap-x-14 text-center text-gray-100">
      <div id="information" class="m-auto flex-col">
        <div>
          *New subscribers only. RM 14.90/month after free trial. Plan is automatically renewed until cancelled. Terms apply.
          ◊New subscribers only. RM 14.90/month after trial. Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer is valid for three months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan is automatically renewed until cancelled. Restrictions and other terms apply.
          Compatible hardware and software are required. Not all content is available in Dolby Atmos. Head-tracking feature requires iPhone or iPad paired with AirPods Pro, AirPods Max, AirPods (3rd generation) or Beats Fit Pro.
          Apple Music 1, Apple Music Hits and Apple Music Country are available without an Apple Music subscription.
          University students only. Verification is required.
          Requires Family Sharing. See apple.com/my/family-sharing for more information.
          Free trial for new subscribers only. Plan is renewed at stated price per month until cancelled.
          The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan is automatically renewed after trial until cancelled. Restrictions and other terms apply.
          Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer is valid for verified university students only and does not extend to a Family Sharing group.
          “coastline” written by mehro.
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
