<template>
  <div>
    <Header />
    <MoodBot />
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/whitecircle.jpg')] bg-cover align-middle text-white text-center">
      <div id="login" class="text-black m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
        <div class="font-['nunito_sans'] text-xl">
          <h3 class="text-6xl font-['nunito_sans'] text-bold text-center text-amber-800  pt-16 drop-shadow-lg">Welcome!</h3>
          <h5 class="text-3xl font-alegreya text-center py-5 mb-10 drop-shadow-md">Sign up or log in to continue.</h5>
          <div class="grid grid-cols-2 py-5 mx-auto text-left">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <label class="text-xl font-['nunito_sans'] font-bold" type="email" for="email">Email</label>
                <input id="email" placeholder="email">
              </div>
              <div class="flex flex-row">
                <label class="text-xl font-['nunito_sans'] font-bold" type="password" for="password">Password</label>
                <input id="password" placeholder="password">
              </div>
            </div>
            <button class="mx-auto px-5 py-3 bg-blue-500 text-white font-bold rounded-xl">Log in</button>
          </div>
          <div>
            <button class="w-[120px] h-[120px]"><img src="/google.png" class="drop-shadow-lg" alt="" /></button>
            <button class="w-[120px] h-[120px]"><img src="/apple.png" class="drop-shadow-lg" alt="" /></button>
            <button class="w-[120px] h-[120px]"><img src="/facebook.png" class="drop-shadow-lg" alt="" /></button>
          </div>
          <p class="my-5 text-2xl"> or </p>
          <button class="text-amber-300 text-3xl font-['nunito_sans'] text-bold text-center px-8 py-5 my-5 border-2 border-gray-100 border-opacity-50 drop-shadow-md">
            <NuxtLink to="/createAccount">Create Account</NuxtLink>
          </button>
          <p class="pt-3 pb-16">
            By signing up, you agree to our <NuxtLink to="/termsOfUse">Terms and Conditions</NuxtLink> and <NuxtLink to="">Privacy Policy</Nuxtlink>
          </p>
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
  },
  methods: {
    login() {
      window.netlifyIdentity.open();
      window.netlifyIdentity.on('login', (user) => {
        this.user = user;
      });
    },
    logout() {
      window.netlifyIdentity.logout();
      this.user = null;
    }
  },
}
</script>
