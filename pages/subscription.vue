<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/bluering.jpg')] bg-cover align-middle text-white text-center">
      <div class="m-auto w-10/12 border border-gray-300 border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
        <p class="text-5xl text-gray-900 font-bold font-['nunito_sans'] py-10">Mood Music</p>
        <div id="visualizer" class="width height border rounded-md ">
          <img src="" alt="" />
        </div>
        <ul class="flex-col gap-3 my-5 md:mx-12 text-xl font-bold text-gray-200">
          <li>Enjoy millions of new hits and old favourites of any genre.</li>
          <li>Have real-time music composed just for you, based on the emotions of the moment.</li>
        </ul>
        <div id="subscription-plans" class="grid grid-cols-3 gap-5">
          <SubscriptionPackages
            v-for="s in subscriptions"
            :key="s.name"
            :subscription="s"
          />
          <button id="individual" :style="{border: selectedIndividualBorder}" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity-10 rounded-3xl" @click="selectIndividual">
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
          <button id="family" :style="{border: selectedFamilyBorder}" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="selectFamily">
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
          <button id="premier" :style="{border: selectedPremierBorder}" class="m-auto my-10 py-5 px-8 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="selectPremier">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']"> Premier </h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM69.90/month</p>
                <p class="py-2 text-xl text-black">Share with up to 5 people. Your existing subscriptions are not eligible for trial</p>
            </div>
            <div class="pb-5 text-xl text-black">
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
                <p>70+ million songs, all ad free</p>
            </div>
          </button>
        </div>
        <div id="summary" class="w-1/3 m-auto">
          <p v-bind="selectedSubscription">You selected: {{ selectedSubscription }} subscription.</p>
          <p v-bind="price">1 month free, then RM {{ selectedSubscription }} per month</p>
          <input id="tnc" v-model="tncagreed" type="checkbox" name="tnc" />
          <label for="tnc">I agree to <NuxtLink to="/termsOfUse" class="text-blue-500">terms and conditions</NuxtLink> of subscription. </label>
          <div id="cancel-or-buy" class="mx-auto grid grid-cols-2 my-5 justify-center">
            <button class="m-auto px-5 py-3 bg-black rounded-full text-white" @click="abc">Cancel</button>
            <button v-bind="formIsValid" class="m-auto px-5 py-3 bg-black rounded-full text-white" @click="addSubscription">
              <!-- it's supposed to be v-bind:disabled="!formIsValid"-->
              <NuxtLink to="cart">Buy</NuxtLink>
            </button>
          </div>
        </div>
        <div id="signinmodal">
          <p>Sign In required</p>
          <p>If you have a Mood Music ID and password, enter them here. Otherwise, <NuxtLink to="/login" class="text-blue-500">create an account.</NuxtLink></p>
          <p>ID:<input type="email"></p>
          <p>Password:<input type="password"></p>
          <p>Forgot Mood Music ID or password?</p>
          <div id="logout">
            <h5>Log out</h5>
            <p>Are you sure you want to log out?</p>
            <div class="grid grid-cols-2">
              <button> Cancel </button>
              <button> Log out </button>
            </div>
          </div>
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
      selectedSubscription: '',
      selectedIndividualBorder () {
        if (this.selectedSubscription === 'individual') {
          return 'border-8 border-yellow-300 rounded-3xl';
        } else {
          return 'border-white border-opacity-10 rounded-3xl';
        }
      },
      selectedFamilyBorder () {
        if (this.selectedSubscription === 'family') {
          return 'border-8 border-yellow-300 rounded-3xl';
        } else {
          return 'border-white border-opacity-10 rounded-3xl';
        }
      },
      selectedPremierBorder () {
        if (this.selectedSubscription === 'premier') {
          return 'border-8 border-yellow-300 rounded-3xl';
        } else {
          return 'border-white border-opacity-10 rounded-3xl';
        }
      },
      tncagreed: false,
      user: {}
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },
  mounted() {
    this.user = window.netlifyIdentity.currentUser();
    if (this.user) {
      // this.readOrders();
    }
  },
  methods: {
    selectIndividual () {
      this.selectedSubscription = 'individual';
    },
    selectFamily () {
      this.selectedSubscription = 'family';
    },
    selectPremier () {
      this.selectedSubscription = 'premier';
    },
    /*
    selectSubscription() {
      this.$store.subscriptions.commit('addSubscription', this.subscription);
    },
    removeSubscription() {
      this.$store.subscriptions.commit('removeSubscription', this.subscription);
    },
    agreeTerms() {
      this.$store.commit('agreeTermsSubscription', true)
    },
    */
    login() {
      window.netlifyIdentity.open()
      window.netlifyIdentity.on('login', (user) => {
        this.user = user;
        //
      })
    },
    logout() {
      window.netlifyIdentity.logout();
      this.user = null;
      //
    },
    submitOrder() {
      this.$axios.post('/netlify/functions/email', {
        // email: get email from logged in user's email
        subscription: this.selectedSubscription,
      });
      this.$axios.post('/netlify/functions/db', {
        // email: get email from logged in user's email
        subscription: this.selectedSubscription,
      });
    },
  }
};
</script>
