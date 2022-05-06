<template>
    <div>
        <Header />
        <MoodBot />
        <div id="background" class="flex h-screen w-screen bg-center bg-[url('/bluering.jpg')] bg-cover align-middle text-white text-center">
        <div class="m-auto h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
            <div id="create account form">
                <h3> Create Account Form </h3>
                <p>
                    Complete your profile by filling in this account creation form
                </p>
                <h5 class="my-5">
                    First Name
                </h5>
                <input
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
                />
                <h5 class="my-5">
                    Last Name
                </h5>
                <input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
                />
                <h5 class="my-5">
                    Your Email
                </h5>
                <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
                />
                <h5 class="my-5">
                    Password
                </h5>
                <input
                    id="password"
                    type="password"
                    placeholder=""
                    class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
                />
                <h5 class="my-5">
                    Confirm Password
                </h5>
                <input
                    id="confirm password"
                    type="password"
                    placeholder="Please enter your email"
                    class="w-full border border-gray-300 text-xl mt-5 py-3 px-2"
                />
            </div>
            <button>
                Continue
            </button>
            <div id="tnc">
                <p>Agree to Terms &#38; Conditions</p>
                <p>Country/Region:United States</p>
            </div>
            <p>Review our <NuxtLink to="privacyPolicy">Privacy Policy</NuxtLink></p>
            <p>By continuing, you acknowledge that you agree to the <NuxtLink to="termsOfUse">Mood Music Services Terms &#38; Conditions</NuxtLink></p>
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
}
</script>
