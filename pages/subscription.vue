<template>
  <div id="background" class="flex h-screen w-screen bg-center bg-[url('/bluering.jpg')] bg-cover align-middle text-white text-center">
    <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
      <p class="text-5xl font-['nunito_sans']">Mood Music</p>
      <div id="visualizer" class="width height border rounded-md ">
          <img src="" alt="" />
      </div>
      <p>
        Enjoy millions of songs. text text text.
      </p>
      <div id="individual">
        <div id="title block" class="border-bottom">
            <h5 class="text-3xl"> Individual </h5>
            <p>1 month free, then RM19.90/month</p>
            <p>Your existing subscriptions are not eligible for trial</p>
            <p>⭐ Recommended</p>
        </div>
        <div>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
        </div>
      </div>
      <div id="family">
        <div id="title block" class="border-bottom">
            <h5 class="text-3xl"> Family </h5>
            <p>1 month free, then RM33.90month</p>
            <p>Share with up to 5 people. Your existing subscriptions are not eligible for triall</p>
        </div>
        <div>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
        </div>
      </div>
            <div id="premier">
        <div id="title block" class="border-bottom">
            <h5 class="text-3xl"> Premier </h5>
            <p>1 month free, then RM69.90/month</p>
            <p>Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
        </div>
        <div>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
            <p>70+ million songs, all ad free</p>
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
</template>

<script>

</script>
