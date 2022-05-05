<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/bluering.jpg')] bg-cover align-middle text-white text-center">
      <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
        <p class="text-5xl font-['nunito_sans']">Mood Music</p>
        <div id="visualizer" class="width height border rounded-md ">
            <img src="" alt="" />
        </div>
        <p>
          Enjoy millions of songs. text text text.
        </p>
        <div id="subscription-plans" class="flex flex-row gap-5">
          <div id="individual" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-20 border-white border-opacity10 rounded-3xl">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold font['nunito_sans']"> Individual </h5>
                <p class="py-2 text-xl font-bold font-lola">1 month free, then RM19.90/month</p>
                <p class="py-2 text-xl">Your existing subscriptions are not eligible for trial</p>
                <p class="py-2 text-xl ">⭐ Recommended</p>
            </div>
            <div class="pb-5 text-xl">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </div>
          <div id="family" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-20 border-white border-opacity10 rounded-3xl">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold font['nunito_sans']"> Family </h5>
                <p class="py-2 text-xl font-bold font-lola">1 month free, then RM33.90month</p>
                <p class="py-2 text-xl">Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
            </div>
            <div class="pb-5 text-xl">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </div>
          <div id="premier" class="m-auto my-10 py-5 px-8 bg-white bg-opacity-20 border-white border-opacity10 rounded-3xl">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold font['nunito_sans']"> Premier </h5>
                <p class="py-2 text-xl font-bold font-lola">1 month free, then RM69.90/month</p>
                <p class="py-2 text-xl">Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
            </div>
            <div class="pb-5 text-xl">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </div>
        </div>
        <div id="summary">
          <p>1 month free, then RM PRICE per month</p>
          <button>
            <NuxtLink to="/login">Start Free Trial</NuxtLink>
          </button>
        </div>
        <div id="signinmodal">
          <p>Sign In required</p>
          <p>If you have a Mood Music ID and password, enter them here.</p>
          <p>ID:<input type="email"></p>
          <p>Password:<input type="password"></p>
          <p>Forgot Mood Music ID or password?</p>
          <button>Cancel</button>
          <button>
            <NuxtLink to="cart">Buy</NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

</script>
