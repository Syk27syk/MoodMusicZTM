<template>
  <div>
    <Header />
    <MoodBot />
    <div id="body" class="bg-slate-300">
      <div id="new-dimensions" class="flex h-screen w-screen bg-center bg-[url('/smokehole.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 flex flex-col gap-y-20 text-6xl pt-20 mx-10 z-10 text-white font-alegreya font-bold opacity-100">
            <h1>Enter</h1>
            <h1><nobr>a new dimension</nobr></h1>
            <h1>of</h1>
            <h1>creativity</h1>
          </div>
        </div>
      </div>
      <!-- the font isn't right here. Experiment until you get it right. Also the hero section has potential to be a lot more than this. -->
      <div class="grid md:grid-cols-1 lg:grid-cols-2">
        <div id="make-music" class="relative flex h-screen w-full bg-center bg-[url('/colorbg.png')] bg-cover align-middle text-white text-center">
          <div class="m-auto flex-col">
            <div class="m-auto h-250 w-250">
              <h1 class="font-['open_sans'] font-bold text-5xl pt-20 z-10 text-white opacity-100">Make Your Music</h1>
              <p class="font-alegreya text-3xl mx-16 mt-5 py-20 z-10 text-white font-bold opacity-100">Get your songs out of your head and into the world. Now anyone can record studio-quality sound, release new tracks, and connect with fans.</p>
              <img src="/singing.png" class="absolute left-0 bottom-0 w-screen z-0" alt="" />
            </div>
            <canvas>
              <img src="" alt="" />
            </canvas>
          </div>
        </div>
        <div id="tools" class="relative flex h-screen w-full bg-center bg-[url('/wavesaudio.jpg')] bg-cover align-middle text-white text-center">
          <div class="m-auto flex-col">
            <div class="m-auto h-250 w-250">
              <h1 class="text-5xl pt-10 md:pt-16 lg:pt-20  px-24 z-10 text-white font-bold opacity-100">Capture your sound with tools for writing, recording, mixing, and mastering.</h1>
              <p class="text-2xl mt-5 py-20 z-10 text-blue-500 font-bold opacity-100">Explore new ways to create.</p>
              <!--<p> Play with ideas in real time with Live Loops on Logic Pro.</p>-->
            </div>
            <img src="/createmusic.png" class="absolute left-0 bottom-0 w-screen z-0" alt="" />
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-1 lg:grid-cols-2">
        <div id="release" class="flex h-screen w-full bg-center bg-[url('/goldstars.jpg')] bg-cover align-middle text-white text-center">
          <div class="m-auto flex-col px-5">
            <div class="m-auto h-250 w-250">
              <h1 class="text-5xl py-10 md:py-16 lg:pt-20 my-10 z-10 text-white opacity-100"> Release your songs across the globe. </h1>
              <img src="/globeheadphones.png" class="m-auto h-96 py-8" alt="" />
              <p class="text-2xl mt-5 py-10 md:py-16 lg:py-20 z-10 text-blue-500 font-bold opacity-100">Learn more about preparing your release.</p>
            </div>
          </div>
        </div>
        <div id="share" class="flex h-screen w-full bg-center bg-[url('/whitegoldmarble.jpg')] bg-cover align-middle text-white text-center">
          <div class="m-auto flex-col">
            <div class="m-auto h-250 w-250 px-10">
              <h1 class="text-5xl pt-10 lg:pt-20 z-10 text-red-500 font-bold">Share the excitement</h1>
              <h1 class="text-5xl pt-10 lg:pt-20 z-10 text-gray-900 font-bold">with milestones you can post on your social channels</h1>
              <p class="text-2xl mt-5 py-10 lg:py-20 z-10 text-blue-500 font-bold"> View all promotion tools </p>
              <p class="text-2xl mt-5 py-5 md:py-10 lg:py-20 z-10 text-gray-900 opacity-100"> Celebrate Milestones with your fans by sharing song plays, Shazams, and playlists your songs have been added to. </p>
            </div>
          </div>
        </div>
      </div>
      <div id="connect" class="flex h-screen w-screen bg-center bg-[url('/network.png')] bg-cover align-middle text-gray-800 text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl pt-6 md:pt-12 mx-10 z-10 text-red font-bold">Stay connected to fans </h1>
            <h1 class="text-5xl pt-5 md:pt-10 lg:pt-20 mx-10 z-10 text-gray-500">And see how they listen around the world. </h1>
            <p class="text-2xl mt-5 py-5 md:py-10 lg:py-20 z-10 text-blue-500 font-bold"> See how to measure your music. </p>
            <div class="mx-12 md:border md:border-white md:border-opacity-30 md:rounded-md px-5 md:px-10 lg:px-20 md:bg-white md:bg-opacity-20 md:backdrop-blur-lg">
              <img src="/musicdata.png" class="m-auto p-5 h-0 md:h-60 lg:h-96" alt="" />
              <p class="text-2xl mt-5 mx-3 md:mx-5 lg:mx-10 py-5 md:py-10 lg:py-20 z-10 text-gray-900"> Insights can help you understand what your audience is looking for, and how they're reacting to your music. </p>
            </div>
          </div>
        </div>
      </div>
      <div id="latest-news" class="flex h-screen w-screen bg-center bg-[url('/bluegold.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto px-6 md:px-8 lg:px-16 h-250 w-250">
            <h1 class="text-4xl lg:text-5xl pt-10 md:pt-16 lg:pt-20 z-10 font-bold text-gray-100">Get the latest news for artists.</h1>
            <div class="text-left">
              <p class="text-3xl lg:text-4xl mt-10 pt-5 md:pt-10 lg:pt-20 z-10 text-gray-200">Fans can now find concert information and tickets to your shows with Shazam.</p>
              <p class="text-xl lg:text-2xl md:mt-5 pt-5 md:pt-10 lg:pt-20 z-10 text-blue-500"> > Learn more about publishing your concerts to Shazam.</p>
              <p class="text-3xl lg:text-4xl mt-5 pt-5 md:pt-10 lg:pt-20 z-10 text-gray-200">Celebrating the 2021 Mood Music Awards.</p>
              <p class="textxl lg:text-2xl md:mt-5 pt-5 md:pt-10 lg:pt-20 z-10 text-blue-500"> > Find out more about the winners, including The Weeknd, H.E.R., and Olivia Rodrigo.</p>
              <p class="text-3xl lg:text-4xl mt-5 pt-5 md:pt-10 lg:pt-20 z-10 text-gray-200">Artists featured in DJ mixes can now get paid.</p>
              <p class="text-xl lg:text-2xl md:mt-5 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20 z-10 text-blue-500">> Mood Music is using Shazam technology to identify and pay rights holders who appear in thousands of DJ mixes.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="subcription" class="flex h-screen w-screen bg-center bg-[url('/white1.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto flex-col">
          <div class="m-auto h-250 w-250 px-20">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold opacity-100">Have a question?</h1>
            <p class="text-xl md:text-2xl mt-24 py-4 px-5 z-10 text-gray-200 font-bold opacity-100 bg-gray-800 rounded-full"><NuxtLink to="/support"><nobr>Contact our support team.</nobr></NuxtLink></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
