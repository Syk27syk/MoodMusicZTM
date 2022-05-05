<template>
  <div>
    <Header />
    <QuickLinks />
    <MoodBot />
    <div id="body" class="bg-slate-300 snap-y">
      <div id="hero" class="snap-center flex  h-screen w-screen bg-center bg-[url('/testbg.png')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-white opacity-100">Mood Music</h1>
            <p class="font-alegreya text-2xl mt-5 py-20 z-10 text-white opacity-100">The music app that responds to your state of mind</p>
          </div>
          <canvas>
            <img src="" alt="" />
          </canvas>
          <div class="relative">
            <img src="/blobbybutton.png" class="absolute h-[300px]" alt="" />
            <p class="absolute text-3xl font-['open_sans'] ">Try 1 Month Free</p>
          </div>
        </div>
      </div>
      <div id="library" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Unbeatable Music Library</h1>
            <div class="flex flex-row">
              <img src="/goldpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/greenpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/pinkpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/graypearl.png" class="w-[96px] h-[96px]" alt="" />
            </div>
            <div>
              <h5 class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Play over 90 million songs and 30,000 playlists. </h5>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Download your favourite tracks, play them offline.</p>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Get curated playlists and live radio.</p>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Listen across your devices.</p>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="mooddetection" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg2.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">The music app that understands you</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Real time music composition and curation, based on your emotional state and context. State of the art AI.</p>
            <p> 3d model that responds to webcam input</p>
          </div>
        </div>
      </div>
      <div id="spatialaudio" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg5.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 px-20">
            <h1 class="text-6xl pt-20 z-10 text-white opacity-100 font-['nunito_sans'] font-bold"> Hear sound all around </h1>
            <p class="text-3xl mt-5 px-10 py-20 z-10 text-white opacity-100 font-lora"> Spatial audio with dynamic head tracking for sound that surrounds you with Dolby Atmos technology. </p>
            <iframe
              class="m-10 mx-auto min-height-[315px] min-width-[560px] md:h-[315px] md:w-[560px] xl:h-[630px] xl:w-[1120px] 2xl:h-[1000px] 2xl:w-[2350px]"
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
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">3D customizable audio visualization</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> See what you hear </p>
          </div>
          <div class="grid grid-cols-3">
              <div><img src="" alt="3daudiovisualization1" /></div>
              <div><img src="" alt="3daudiovisualization2" /></div>
              <div><img src="" alt="3daudiovisualization3" /></div>
            </div>
        </div>
      </div>
      <div id="logos" class="snap-center flex h-screen w-screen bg-center bg-[url('/geotunnelblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="our-partners" class="m-auto h-250 w-250 px-20 py-24">
            <h1 class="text-5xl pt-20 z-10 font-lora font-italic text-[#645215] opacity-100 shadow-white">Our Partners </h1>
          </div>
          <div id="company-logos" class="flex pb-36 px-36">
            <div class="grid lg:grid-cols-3 xl:grid-cols-6 gap-x-12 gap-y-12">
              <a href="https://mood-music-syk.netlify.app/"><img src="/logo1.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://music.apple.com/"><img src="/logo2.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.spotify.com/us/"><img src="/logo3.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.spotify.com/us/"><img src="/logo4.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://aes2.org/"><img src="/logo5.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://womensaudiomission.org/"><img src="/logo6.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://welcome.online.berklee.edu/"><img src="/logo7.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.avid.com/"><img src="/logo8.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.sweetwater.com/"><img src="/logo9.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.pioneerdj.com/en-gb/"><img src="/logo10.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.bose.com/"><img src="/logo11.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.steinway.com/"><img src="/logo12.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo13.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo14.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo15.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo16.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo17.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo18.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo19.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo20.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo21.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo22.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href=""><img src="/logo23.png" class="h-48 w-48 sepia" alt="" /></a>
              <a href="https://www.masterclass.com/"><img src="/logo24.png" class="h-48 w-48 sepia" alt="" /></a>
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
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 rounded-md px-20">
            <h1 class="text-5xl font-lora font-italic pt-20 py-24 z-10 text-[#BCAC80] opacity-100 shadow-white drop-shadow-lg">Music for Every Shade of Emotion</h1>
            <div id="select-category" class="text-white text-2xl grid grid-cols-3 gap-10 py-5 my-5 border-b-2 border-white">
              <button class="active:text-red-500">Featured</button>
              <button class="active:text-red-500">Top Hits</button>
              <button class="active:text-red-500">New Releases</button>
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
      <div id="subcription" class="snap-center flex h-screen w-screen bg-center bg-[url('/goldmarble.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div id="subscription-title" class="m-auto h-250 w-250 px-20">
            <h1 class="text-5xl pt-12 z-10 text-white opacity-100">Choose the plan that's right for you</h1>
            <p class="text-3xl my-5 py-5 z-10 text-white opacity-100">No commitment. Cancel at any time.</p>
          </div>
          <div id="plans" class="grid grid-cols-3 gap-x-5 my-5">
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Student</p>
              <p class="text-xl font-bold">RM6.90/month</p>
              <button class="text-xl font-bold bg-white text-red-500 border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Individual</p>
              <p class="text-xl font-bold">RM14.90/month</p>
              <button class="text-xl font-bold bg-white text-black border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div class="border border-white border-opacity-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-full">
              <p class="text-xl font-bold py-5 uppercase">Family</p>
              <p class="text-xl font-bold">RM22.90/month</p>
              <button class="text-xl font-bold bg-black text-red-500 border-none rounded-full px-8 py-3 my-5 uppercase">
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
          </div>
          <table id="information-table" class="text-lg font-['nunito_sans'] pb-10">
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
            <h1 class="m-auto text-7xl pt-20 z-10 text-gray-900 opacity-100 drop-shadow-lg shadow-[#BCAC80]">Promotions</h1>
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
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Mobile apps</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Download</p>
            <div class="h-[150px] grid grid-cols-2 gap-x-12">
            <button id="android-store" class="h-[50px]"><img src="/android-app.png" alt="" /></button>
            <button id="apple-app-store" class="h-[50px]"><img src="/apple-app.png" alt="" /></button>
            <button id="google-play" class="h-[50px]"><img src="/google-play.png" alt="" /></button>
            <button id="microsoft-store" class="h-[50px]"><img src="/microsoft-store.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <div id="faqs" class="snap-center flex h-screen w-screen bg-center bg-[url('/faqsbg.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl py-20 z-10 text-gray-900 font-bold">Questions? Answers.</h1>
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
          </div>
          <p class="text-xl font-bold text-blue-500 my-10"> > Search full FAQs page </p>
        </div>
      </div>
      <div id="philanthropy" class="snap-center flex h-screen w-screen bg-center bg-[url('/paperhearts.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Donate Now</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">You can help.</p>
          </div>
          <div class="grid grid-cols-3">
            <div>
              <h5>Make a donation to UNICEF</h5>
              <p>text text text</p>
            </div>
            <div>
              <h5>Help children and families</h5>
              <p>text text text</p>
            </div>
            <div>
              <h5>Donate now</h5>
              <p>text text text</p>
            </div>
          </div>
        </div>
      </div>
      <div id="artists" class="snap-center flex h-screen w-screen bg-center bg-[url('/3dbg7.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Artists</h1>
            <p class="text-2xl mt-5 mx-24 max-width- py-20 z-10 text-white opacity-100">Mood Music supports artists with tools to create, release and measure music across a global stage. Discover all the ways to showcase content on Apple Music — including MusicKit, RSS feeds, widgets, brand guidelines, badge art and more.</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="font-['nunito_sans'] text-blue-500 font-bold text-2xl"><NuxtLink to="/artists">Mood Music for Artists</NuxtLink></p>
            <p class="font-['nunito_sans'] text-blue-500 font-bold text-2xl">Mood Music Performance Partners Programme</p>
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
