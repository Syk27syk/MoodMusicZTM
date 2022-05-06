<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/bluering.jpg')] bg-cover align-middle text-white text-center">
      <div class="m-auto h-250 w-250 border border-gray-300 border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
        <p class="text-5xl text-gray-900 font-bold font-['nunito_sans'] py-10">Mood Music</p>
        <div id="visualizer" class="width height border rounded-md ">
            <img src="" alt="" />
        </div>
        <ul class="flex-col gap-3 my-5 md:mx-12 text-xl font-bold text-gray-200">
          <li>Enjoy millions of new hits and old favourites of any genre.</li>
          <li>Have real-time music composed just for you, based on the emotions of the moment.</li>
        </ul>
        <div id="subscription-plans" class="grid grid-cols-3 gap-5">
          <button id="individual" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="select">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']"> Individual </h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM19.90/month</p>
                <p class="py-2 text-xl text-black">Your existing subscriptions are not eligible for trial</p>
                <p class="py-2 text-xl text-black">⭐ Recommended</p>
            </div>
            <div class="pb-5 text-xl text-black">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </button>
          <button id="family" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="select">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']"> Family </h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM33.90month</p>
                <p class="py-2 text-xl text-gray-700">Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
            </div>
            <div class="pb-5 text-xl text-gray-700">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </button>
          <button id="premier" class="m-auto my-10 py-5 px-8 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="selectComponent">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']"> Premier </h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM69.90/month</p>
                <p class="py-2 text-xl text-gray-700">Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
            </div>
            <div class="pb-5 text-xl text-gray-700">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </button>
        </div>
        <div id="summary">
          <p v-bind="selectedSubscription">You selected: {{ selectedSubscription }} subscription.</p>
          <!--<p v-bind="selectedSubscription.price">1 month free, then RM {{ }} per month</p>-->
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
export default {
  selectedSubscription: 'individual',
  price: '16.90',
  computed: {
  }
}
/*
  methods: {
    selectSubscription(Subscription) {
       if(this.Subscription) {
         this.
        add('highlight');

       }
    }
    addSubscription() {
      this.$store.commit('addItem', this.subscription);
    },
  };
}
*/
</script>
