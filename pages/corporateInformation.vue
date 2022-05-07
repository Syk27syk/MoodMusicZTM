<template>
  <div>
    <Header />
    <MoodBot />
    <div id="body">
        <div class="flex h-screen bg-black bg-cover align-middle text-gray-100 text-center">
          <div class="m-auto w-11/12 md:w-5/6 max-h-screen">
            <h1 class="text-4xl md:text-6xl pt-10 lg:pt-20 z-10 px-10 pb-10 text-left xl:text-center text-white font-['open_sans'] font-bold opacity-100">About Mood Music</h1>
            <div class="grid grid-cols-1 xl:grid-cols-2">
              <img src="/abouthero.png" class="px-10 max-h-1/2 my-auto w-screen" alt="" />
              <p class="text-lg md:text-2xl mt-5 px-10 py-5 md:py-10 lg:py-20 z-10 text-left text-gray-100 opacity-100">Spotify transformed music listening forever when it launched in 2008. Discover, manage and share over 82 million tracks, including more than 4 million podcast titles, for free, or upgrade to Spotify Premium to access exclusive features for music including improved sound quality and an on-demand, offline, and ad-free music listening experience. Today, Spotify is the world’s most popular audio streaming subscription service with 422m users, including 182m subscribers, across 183 markets.</p>
            </div>
          </div>
        </div>
        <div class="flex lg:h-screen flex-col">
          <div class="grid md:grid-cols-1 lg:grid-cols-2">
            <div class="flex md:h-screen lg:h-p-10 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-gray-100 bg-cover align-middle text-center">
              <div class="m-auto h-250 w-250">
                <h1 class="text-5xl pt-20 px-10 z-10 font-bold">A message from our CEO, Daniel EK</h1>
                <p class="text-2xl mt-5 py-10 px-10 z-10 font-bold">Mood Music Founder and CEO Daniel EK discusses the economics of music streaming</p>
                <img src="/persontalking.png" class="p-10 mb-16" alt="" />
              </div>
            </div>
            <div class="flex bg-gray-300 hover:bg-green-800 text-green-800 hover:text-gray-300 align-middle text-center">
              <div class="m-auto h-250 w-250">
                <h1 class="text-5xl pt-20 pb-10 z-10 font-bold">Life at Mood Music</h1>
                <img src="/lifeat.png" class="p-10 mb-15" alt="" />
                <button class="text-2xl mt-5 mb-10 px-6 py-3 z-10 text-black font-bold bg-gray-500 hover:bg-gray-100 rounded-full">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex bg-gray-800 bg-cover align-middle text-white text-center">
          <div class="m-auto h-150 w-screen">
            <p class="mt-5 m-auto w-5/6 py-20 z-10 text-left text-2xl text-white font-['open_sans']"><strong class="text-3xl">Our mission </strong>is to unlock the potential of human creativity—by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.</p>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="grid lg:grid-cols-2 md:grid-cols1">
            <div class="flex md:h-screen bg-gray-900 hover:bg-gray-100 text-gray-100 hover:text-gray-900 bg-cover align-middle text-center">
              <div class="m-auto w-3/4">
                <h1 class="text-5xl font-bold pt-10 lg:pt-20 z-10">By the Numbers</h1>
                <p class="mt-24 mb-10 px-5 py-3 z-10 text-2xl font-bold uppercase border-2 rounded-full border-gray-900 hover:bg-gray-500">Mood Music Investors</p>
              </div>
            </div>
            <div class="flex md:h-screen bg-gray-500 bg-cover align-middle text-white text-center">
              <div class="m-auto h-250 w-250">
                <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold">Sustainability Reports</h1>
                <p class="text-2xl mt-5 mx-10 pt-8 lg:pt-16 px-5 lg:px-10 z-10  text-left text-gray-900 font-bold">Lowering emissions isn’t something we do on the side. It’s an integrated part of everyday business.</p>
                <p class="text-2xl mt-5 mx-10 pb-8 lg:pb-16 px-5 lg:px-10 z-10  text-left text-blue-500 font-bold">Learn how we’re taking action.</p>
                <img src="/sustainability.jpg" class="p-10 mb-16" alt="" />
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 md:grid-cols1">
            <div class="flex md:h-screen bg-[url('/bluewave.jpg')] bg-cover align-middle text-white text-center">
              <div class="m-auto h-250 w-250">
                <h1 class="text-5xl pt-20 z-10 px-5 text-gray-100 font-bold">Time to Play Fair</h1>
                <p class="text-2xl mt-5 mx-10 py-10 lg:py-20 z-10 text-gray-100 font-bold ">When competition is fair, both consumers and companies win. Learn about our efforts to even the playing field for all developers.</p>
                <img src="/fairplay2.png" alt="" />
              </div>
            </div>
            <div class="flex md:h-screen bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-gray-100 bg-cover align-middle text-center">
              <div class="m-auto h-250 w-250">
                <h1 class="text-5xl pt-12 px-5 lg:pt-20 z-10 font-bold">Mood Music Loud &#38; Clear</h1>
                <p class="mt-5 px-10 py-10 lg:py-20 z-10 text-2xl font-bold">Artists deserve clarity about the economics of music streaming. This site sheds light on the global streaming economy and royalty system.</p>
                <img src="/globalstreamingeconomy.jpg" class="p-10 mb-16" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-screen bg-[url('/geostripeswhite.jpg')] bg-cover align-middle text-white text-center">
          <div class="m-auto h-250 w-250">
            <h1 class="text-5xl pt-20 z-10 text-gray-900 font-bold">Get in touch</h1>
            <p class="text-2xl mt-5 py-20 z-10 font-bold text-blue-500">Contact us</p>
          </div>
        </div>
      </div>
      <Footer />
  </div>
</template>
