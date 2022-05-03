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
            <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-white opacity-100">Make Your Music</h1>
            <p class="font-alegreya text-2xl mt-5 py-20 z-10 text-white opacity-100">Get your songs out of your head and into the world. Now anyone can record studio-quality sound, release new tracks, and connect with fans.</p>
          </div>
          <canvas>
            <img src="" alt="" />
          </canvas>
        </div>
      </div>
      <div id="library" class="flex h-screen w-screen bg-center bg-[url('/3dbg1.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Enter a new dimension of creativity</h1>
            <div class="flex flex-row">
              <img src="/goldpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/greenpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/pinkpearl.png" class="w-[96px] h-[96px]" alt="" />
              <img src="/graypearl.png" class="w-[96px] h-[96px]" alt="" />
            </div>
            <div>
              <h5 class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Spatial Audio </h5>
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
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Capture yur sound with tools for writing, recording, mixing, and mastering.</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Explore new ways to create.</p>
            <p> Play with ideas in real time with Live Loops on Logic Pro.</p>
          </div>
        </div>
      </div>
      <div id="spatialaudio" class="flex h-screen w-screen bg-center bg-[url('/3dbg5.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100"> Release your songs across the globe. </h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Learn more about preparing your release.</p>
          </div>
        </div>
      </div>
      <div id="3daudiovisual" class="flex h-screen w-screen bg-center bg-[url('/orbsblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Share the excitement</h1>
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">With milestones you can post on your social channels</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> View all promotion tools </p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> Celebrate Milestones with your fans by sharing song plays, Shazams, and playlists your songs have been added to. </p>
          </div>
        </div>
      </div>
      <div id="logos" class="flex h-screen w-screen bg-center bg-[url('/geotunnelblack.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Stay connected to fans </h1>
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">And see how they listen around the world. </h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> See how to measure your music. </p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100"> Insights can help you understand what your audience is looking for, and how they're reacting to your music. </p>
          </div>
        </div>
      </div>
      <div id="3dcarousel" class="flex h-screen w-screen bg-center bg-[url('/smokering.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Get the latest news for artists.</h1>
            <p class="text-4xl mt-5 py-20 z-10 text-white opacity-100">Fans can now find concert information and tickets to your shows with Shazam.</p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Learn more about publishing your concerts to Shazam.</p>
            <p class="text-4xl mt-5 py-20 z-10 text-white opacity-100">Celebrating the 2021 Mood Music Awards.</p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Find out more about the winners, including The Weeknd, H.E.R., and Olivia Rodrigo.</p>
            <p class="text-4xl mt-5 py-20 z-10 text-white opacity-100">Artists featured in DJ mixes can now get paid.</p>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Mood Music is using Shazam technology to identify and pay rights holders who appear in thousands of DJ mixes.</p>
          </div>
        </div>
      </div>
      <div id="subcription" class="flex h-screen w-screen bg-center bg-[url('/goldmarble.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <h1 class="text-5xl pt-20 z-10 text-white opacity-100">Have a question?</h1>
            <p class="text-2xl mt-5 py-20 z-10 text-white opacity-100">Contact our support team.</p>
          </div>
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
