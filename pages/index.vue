<template>
  <div>
    <div id="head" class="flex flex-row w-screen align-center bg-gray-800">
      <div id="menu-left" class="px-6">
        <NuxtLink to="/index"><img src="/mmlogo.png" class="h-[150px] w-[150px] p-5" alt="logo" /></NuxtLink>
      </div>
      <div id="menu" class="font-['open_sans'] font-bold text-lg text-gray-100 uppercase flex flex-row gap-x-20 py-5">
        <button>
          <NuxtLink to="/browse">
            Browse Our Library
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/artist">
            Artist
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/corporateInformation">
            Corporate Information
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/support">
            Support
          </NuxtLink>
        </button>
        <button>
          <p> More </p>
        </button>
      </div>
    </div>
    <div id="quick links" class="bg-blue-300 bg-opacity-20 backdrop-blur-lg rounded-full border border-white border-opacity-30 text-white p-10 absolute top-0 right-0 m-5">
      <button
          type="button"
          class="text-xl font-extrabold font-roboto text-gray-500 text-opacity-100 text-center align-center mx-auto py-2 flex flex-col relative z-10"
      >
          Quick<br>Links
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>
      <button class="fixed inset-0 h-full w-full text-transparent cursor-default tabindex=-1 z-0">text</button>
      <div class="flex flex-col relative z-10">
          <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/account"><img src="/quaverheart.png" alt="account"></NuxtLink>
          </button>
          <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/playlist"><img src="/musichead.png" alt="playlist"></NuxtLink>
          </button>
          <button class="rounded-full bg-transparent h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/cart"><img src="/semiquaver.png" alt="cart"></NuxtLink>
          </button>
      </div>
    </div>
    <div id="mood bot" class="w-[150px] h-[150px] rounded-full absolute right-0 bottom-0 m-10 text-center">
      <button>
      <img src="/moodbot.png" class="p-5 animate-bounce" alt="moodbot" />
      </button>
      <p class="font-lola text-xl text-amber-500 font-italic text-center uppercase drop-shadow-lg">
        Chat with Moodbot
      </p>
    </div>
    <div id="body" class="bg-slate-300">
      <div id="hero" class="flex  h-screen w-screen bg-center bg-[url('/testbg.png')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-white opacity-100">Mood Music</h1>
            <p class="font-alegreya text-2xl mt-5 py-20 z-10 text-white opacity-100">The music app that responds to your state of mind</p>
          </div>
          <canvas>
            <img src="" alt="" />
          </canvas>
          <button>
            Try 1 Month Free
          </button>
        </div>
      </div>
      <div id="library" class="flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-white text-center">
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
      <div id="mooddetection" class="flex h-screen w-screen bg-center bg-[url('/3dbg2.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">The music app that understands you</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Real time music composition and curation, based on your emotional state and context. State of the art AI.</p>
            <p> 3d model that responds to webcam input</p>
          </div>
        </div>
      </div>
      <div id="spatialaudio" class="flex h-screen w-screen bg-center bg-[url('/3dbg5.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100"> Hear sound all around </h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> Spatial audio with dynamic head tracking for sound that surrounds you with Dolby Atmos technology. </p>
          </div>
          <p> video </p>
          <iframe />
        </div>
      </div>
      <div id="3daudiovisual" class="flex h-screen w-screen bg-center bg-[url('/orbsblack.jpg')] bg-cover align-middle text-white text-center">
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
      <div id="logos" class="flex h-screen w-screen bg-center bg-[url('/geotunnelblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Section </h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> logos </p>
            <div class="grid grid-cols-12 gap-x-12 gap-y-12">
              <img src="/logo1.png" alt="" />
              <img src="/logo2.png" alt="" />
              <img src="/logo3.png" alt="" />
              <img src="/logo4.png" alt="" />
              <img src="/logo5.png" alt="" />
              <img src="/logo6.png" alt="" />
              <img src="/logo7.png" alt="" />
              <img src="/logo8.png" alt="" />
              <img src="/logo9.png" alt="" />
              <img src="/logo10.png" alt="" />
              <img src="/logo11.png" alt="" />
              <img src="/logo12.png" alt="" />
              <img src="/logo13.png" alt="" />
              <img src="/logo14.png" alt="" />
              <img src="/logo15.png" alt="" />
              <img src="/logo16.png" alt="" />
              <img src="/logo17.png" alt="" />
              <img src="/logo18.png" alt="" />
              <img src="/logo19.png" alt="" />
              <img src="/logo20.png" alt="" />
              <img src="/logo21.png" alt="" />
              <img src="/logo22.png" alt="" />
              <img src="/logo23.png" alt="" />
              <img src="/logo24.png" alt="" />
              <img src="/logo25.png" alt="" />
              <img src="/logo26.png" alt="" />
              <img src="/logo27.png" alt="" />
              <img src="/logo28.png" alt="" />
              <img src="/logo29.png" alt="" />
              <img src="/logo30.png" alt="" />
              <img src="/logo31.png" alt="" />
              <img src="/logo32.png" alt="" />
              <img src="/logo33.png" alt="" />
              <img src="/logo34.png" alt="" />
              <img src="/logo35.png" alt="" />
              <img src="/logo36.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="3dcarousel" class="flex h-screen w-screen bg-center bg-[url('/smokering.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">3D carousel</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">featured music</p>
          </div>
        </div>
      </div>
      <div id="subcription" class="flex h-screen w-screen bg-center bg-[url('/goldmarble.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Subscription plans</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Choose the plan that's right for you</p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">No commitment. Cancel at any time.</p>
          </div>
          <div class="grid grid-cols-3">
            <div>
              <p>Student</p>
              <p>RM6.90/month</p>
              <button>
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div>
              <p>Individual</p>
              <p>RM14.90/month</p>
              <button>
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
            <div>
              <p>Family</p>
              <p>RM22.90/month</p>
              <button>
                <NuxtLink to="/subscription">Try it free</NuxtLink>
              </button>
            </div>
          </div>
          <table>
            <th>
              <td>text</td>
              <td>Student/Individual<sup>3</sup></td>
              <td>Family</td>
            </th>
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
              <td>text</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Personal music library for each family member</td>
              <td>text</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Personalized music recommendations for each family member</td>
              <td>text</td>
              <td>✔️</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="promotions" class="flex h-screen w-screen bg-center bg-[url('/goldblueswirl.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Promotions</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">promotions</p>
          </div>
          <div>
            <div class="flex flex-row">
              <img src="" alt="" />
              <h5>Title</h5>
            </div>
            <p>
              Get 6 months of Mood Music free with eligible audio devices.
            </p>
            <button>
              Learn more
            </button>
          </div>
          <div>
            <div class="flex flex-row">
              <img src="" alt="" />
              <h5>Title</h5>
            </div>
            <p>
              Get 6 months of Mood Music free with eligible audio devices.
            </p>
            <button>
              Learn more
            </button>
            <img src="" alt="" />
          </div>
          <div>
            <div class="flex flex-row">
              <img src="" alt="" />
              <h5>Title</h5>
            </div>
            <p>
              Mood Music's student plan comes with Apple TV+ for free.
            </p>
            <button>
                <NuxtLink to="/subscription">Try it free</NuxtLink>
            </button>
            <button>
              Learn more
            </button>
            <img src="" alt="" />
          </div>
          <div>
            <div class="flex flex-row">
              <img src="" alt="" />
              <h5>Title</h5>
            </div>
            <p>
              Bundle up to 5 services and enjoy more for less.
            </p>
            <button>
              <NuxtLink to="/subscription">Try it free</NuxtLink>
            </button>
            <button>
              Learn more
            </button>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div id="mobileapps" class="flex h-screen w-screen bg-center bg-[url('/goldcubes.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Mobile apps</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">promotions</p>
          </div>
          <p> links and buttons </p>
        </div>
      </div>
      <div id="faqs" class="flex h-screen w-screen bg-center bg-[url('/faqsbg.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Questions? Answers.</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">What is Mood Music?</p>
            <p>
              Mood Music is a streaming service that allows you to listen to over 90 million songs. Its great features include the ability to download your favourite tracks and play them offline, lyrics in real time, listening across all your favourite devices, new music personalised just for you, curated playlists from our editors and many more. All this in addition to exclusive and original content.
            </p>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">How can I listen to Mood Music?</p>
              <p>
                Apple Music is already on your iPhone, iPad, Apple Watch, Apple TV and Mac — and you can listen with CarPlay or online at music.apple.com/my. Apple Music is also available on Windows, Android and other devices.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">What does it cost?</p>
              <p>
                That all depends on which offer you choose. (1) Students can choose the Apple Music Student Plan at RM 6.90 per month. (2) An individual monthly subscription is just RM 14.90 per month after your free trial. (3) The Apple Music Family Plan, which allows you to share your account with up to five people and gives each member a personal account, is just RM 22.90 per month. (4) The Apple Music Individual Plan and the Apple Music Family Plan are also included in Apple One, which bundles up to four other Apple services into a single monthly subscription. Apple One plans start at RM 19.90 per month.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">What is Dolby Atmos music?</p>
              <p>
                Dolby Atmos is an innovative audio technology that envelops you in an immersive listening experience. While music mixed in stereo is limited to left and right channels, music created in Dolby Atmos is freed from channels, allowing artists to place individual sounds all around you. Artists can also decide the volume, size and vibrancy of each instrument to reveal nuanced details in the music.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">How can I listen to Dolby Atmos music?</p>
              <p>
                Apple Music subscribers using the latest version of Apple Music on iPhone, iPad, Mac and Apple TV can listen to thousands of Dolby Atmos music tracks using any headphones. When you listen with compatible Apple or Beats headphones, Dolby Atmos music plays back automatically when available for a song. For other headphones, go to Settings > Music > Audio and set Dolby Atmos to Always On. You can also hear Dolby Atmos music using the built-in speakers on a compatible iPhone, iPad, MacBook Pro, MacBook Air or iMac, or by connecting your Apple TV 4K to one of the following: a Dolby Atmos–compatible sound bar, a Dolby Atmos–enabled AV receiver or a television that supports Dolby Atmos audio. For the full list of compatible devices, please see https://support.apple.com/en-my/HT212182.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">What is lossless audio?</p>
              <p>
                Lossless audio compression reduces the original file size of a song while preserving all of the data perfectly. Apple Music is making its entire catalogue of more than 90 million songs available in lossless audio at different resolutions. In Apple Music, “Lossless” refers to lossless audio up to 48kHz and “Hi-Res Lossless” refers to lossless audio from 48kHz to 192kHz. Lossless and Hi-Res Lossless files are very large and use much more bandwidth and storage space than standard AAC files.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">How can I listen to lossless?</p>
              <p>
                You can listen to lossless audio using the latest Apple Music app on an iPhone, iPad, Mac or Apple TV. Turn on lossless audio in Settings > Music > Audio Quality. You can choose between Lossless and Hi-Res Lossless for mobile network or Wi-Fi connections. Note that Hi-Res Lossless requires external equipment such as a USB digital to analog converter.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Can I share with my family?</p>
              <p>
                Yes. With an Apple Music Family Plan, up to six people in the family can enjoy all the features and the full catalogue of Apple Music. To get started, just set up Family Sharing on your iOS or iPadOS device, Android phone or Mac and invite family members to join.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Is there a student subscription?</p>
              <p>
                Students get the same Apple Music features and benefits as individual members. Once your student status with your university is verified, you get student membership pricing for up to four years, as long as you remain a student. After four years, your membership will continue at the individual member price.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Are there commercials?</p>
              <p>
                Apple Music has zero ads.
              </p>
            </div>
            <div>
              <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Am I eligible for a six-month free Mood Music offer? How do I redeem it?</p>
              <p>
                New subscribers can get six months of Apple Music free with an eligible audio device. Make sure your iPhone or iPad is running the latest version of iOS or iPadOS. Then you can activate your Apple Music trial after you pair your audio device to your iPhone or iPad. You’ll have three months to redeem the offer after the first activation of the eligible device.◊
              </p>
            </div>
          </div>
          <p> dropdown menu </p>
          <p> search full FAQs page </p>
        </div>
      </div>
      <div id="philanthropy" class="flex h-screen w-screen bg-center bg-[url('/paperhearts.jpg')] bg-cover align-middle text-white text-center">
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
      <div id="artists" class="flex h-screen w-screen bg-center bg-[url('/3dbg7.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Artists</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Mood Music supports artists with tools to create, release and measure music across a global stage. Discover all the ways to showcase content on Apple Music — including MusicKit, RSS feeds, widgets, brand guidelines, badge art and more.</p>
          </div>
          <p><NuxtLink to="/artists">Mood Music for Artists</NuxtLink></p>
          <p>Mood Music Performance Partners Programme</p>
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
    <div id="information" class="font-['nunito_sans'] bg-gray-900 px-28 py-10 grid grid-cols-4 gap-x-14 text-center text-gray-100">
        <div id="information">
          <h5 class="text-2xl text-bold p-2">
              <strong>Information</strong>
          </h5>
          <div class="font-alegreya text-light text-lg">
              <p>FAQ</p>
              <p>Corporate information</p>
              <p>Investor relations</p>
              <p>Media</p>
              <p>Jobs</p>
              <p>Contact</p>
          </div>
        </div>
        <div id="info-phone">
          <h5 class="text-2xl text-semibold p-2">
              <strong>Support</strong>
          </h5>
          <div class="font-alegreya text-lg">
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Support</p>
            <p>Legal notice</p>
            <p>Feedback</p>
          </div>
        </div>
        <div id="info-follow">
          <h5 class="text-2xl text-semibold  p-2">
              <strong>Account</strong>
          </h5>
          <div id="social-media-icons" class=" font-alegreya text-lg justify-items-center p-3">
              <p>Manage account</p>
              <p>Gift cards</p>
              <p>Newsletter</p>
          </div>
        </div>
        <div id="info-follow">
          <h5 class="text-2xl text-semibold p-2">
              <strong>Follow Us</strong>
          </h5>
          <div id="social-media-icons" class="font-alegreya grid grid-cols-3 justify-items-center p-3">
              <a href=""><img src="facebook.png" alt="" class="h-5 w-5" /></a>
              <a href=""><img src="instagram.png" alt="" class="h-5 w-5" /></a>
              <a href=""><img src="youtube.png" alt="" class="h-5 w-5" /></a>
          </div>
        </div>
    </div>
    <div id="footer" class="font-['nunito_sans'] text-center text-gray-100 text-bold text-lg p-10 border-t-2 border-opacity-10 border-color-gray-200 bg-gray-900">
      <p>
        @ 2022 Mood Music All Rights Reserved | <NuxtLink to="/about">About Us</NuxtLink> | <NuxtLink to="/giftCards">Gift Cards</NuxtLink> | <NuxtLink to="/termsOfUse">Terms Of Use</NuxtLink> | <NuxtLink to="/privacyPolicy">Privacy Policy</NuxtLink>
      </p>
    </div>
  </div>
</template>
