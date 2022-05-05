<template>
    <div>
        <Header />
        <MoodBot />
        <div id="background" class="flex h-screen w-screen bg-center bg-[url('/balloongift.jpg')] bg-cover align-middle text-white text-center">
            <div id="body" class="m-auto flex-col">
                <div id="login" class="text-black h-250 w-250">
                    <div id="top-section">
                        <h1 class="text-5xl pt-20 pb-12 z-10 text-gray-800 drop-shadow-xl shadow-black opacity-100">Gift Cards</h1>
                        <button class="font-['open_sans'] bg-blue-500 text-white text-bold uppercase rounded-full border-red-500 px-8 py-3 mx-10 mt-5 mb-10 drop-shadow-xl shadow-black" @click="goto('division')">
                            Buy
                        </button>
                    </div>
                    <div class="flex flex-col m-auto gap-x-10 gap-y-10 px-24 pb-10 my-10">
                        <div class="mx-auto grid grid-cols-2 gap-x-2 h-[300px] w-[450px] border border-white border-opacity-10 rounded-md bg-white bg-opacity-20 backdrop-blur-md drop-shadow-xl shadow-black">
                            <img src="/mmlogo.png" class="m-auto pl-3 py-2" alt="" />
                            <div class="flex flex-col m-auto pr-8">
                                <p class="flex flex-row m-auto text-3xl text-gray-700 font-bold font-['nunito_sans']">Mood Music</p>
                                <p class="flex flex-row m-auto py-3 text-xl text-gray-700 font-['nunito_sans']">Gift Card</p>
                                <p class="text-2xl text-[#bcac80] text-bold font-lora">$200</p>
                            </div>
                        </div>
                        <p class="text-lg font-bold font-lora py-3 text-gray-700 drop-shadow-xl shadow-black opacity-100">Starting from $15.</p>
                    </div>
                </div>
                <div class="pb-10 pt-5">
                    <h4 class="text-3xl font-bold font-['open_sans'] py-3 text-gray-800 drop-shadow-xl shadow-black opacity-100">Redeem. Shop. Repeat.</h4>
                    <h3 class="text-2xl font-bold font-lora py-3 px-10 text-gray-700 drop-shadow-xl shadow-black opacity-100">The perfect gift card for anyone and for any occasion.</h3>
                    <div class="grid grid-cols-2 m-auto mx-24 my-3 font-['nunito_sans'] text-blue-500 font-bold text-2xl">
                        <button>
                            <NuxtLink to="/subscription"> > redeem </NuxtLink>
                        </button>
                        <button>
                            <NuxtLink to="/login"> > add credit </NuxtLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-800 py-10 px-10 m-auto text-white text-center">
            <p class="text-bold text-lg font-['nunito_sans']">Beware of gift card scams. Do not share your code.</p>
            <p class="text-sm py-2 px-5">Valid only for U.S. transactions in Apple properties. For assistance, visit support.apple.com/giftcard(Opens in a new window) or call 800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply; see apple.com/us/go/legal/gc(Opens in a new window). </p>
            <p class="text-sm py-2 px-5">Issued by Apple Value Services, LLC (AVS). ©2020 Apple Inc. All rights reserved.</p>
            <p class="text-sm py-2 px-5">We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.</p>
        </div>
        <div id="gift-card-form" ref="division" class="bg-white px-10 py-10">
            <h3 class="text-5xl text-gray-800 font-bold font['open_sans'] py-10 px-10 m-auto"> Buy Mood Music Gift Card </h3>
            <div id="delivery" class="border border-gray-500 border-t-0 border-r-0 border-l-0 p-5">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2 px-5"> How would you like to send it? </h5>
                <p class="text-lg text-gray-800 my-2 px-5"> Choose to send by mail and get a collectible sticker </p>
                <div class="grid grid-cols-2 gap-x-5 m-auto py-5 px-10 ">
                    <div class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">
                        <input id="email" type="radio">
                        <label for="email"> Email </label>
                    </div>
                        <div class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">
                        <input id="mail" type="radio" class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">
                        <label for="mail"> Mail </label>
                    </div>
                </div>
            </div>
            <div id="design" class="border border-gray-500 border-t-0 border-r-0 border-l-0 p-5">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2"> Choose a design </h5>
                <select v-model="giftCardDesign" class="grid grid-cols-2">
                    <option class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl"><img src="/mmlogo.png" class="h-48 w-48" alt="" />logo</option>
                    <option class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl"><img src="/quaverheart.png" class="h-48 w-48" alt="" /></option>
                    <option class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl"><img src="/brainplug.png" class="h-48 w-48" alt="" /></option>
                    <option class="m-auto font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl"><img src="/moodbot.png" class="h-48 w-48" alt="" />moodbot</option>
                </select>
            </div>
            <select id="amount" v-model="giftCardAmount" class="border border-gray-500 border-t-0 border-r-0 border-l-0 p-5">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2"> Choose an amount </h5>
                    <option class="m-auto text-center font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">$15</option>
                    <option class="m-auto text-center font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">$30</option>
                    <option class="m-auto text-center font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">$60</option>
                    <p class="m-auto text-center font-bold text-lg text-gray-800 my-2 border border-gray-800 py-5 px-10 rounded-xl">
                        Other Amount
                        <input class="flex w-full h-auto bg-gray-100 border border-gray-500 rounded-xl mx-2 my-2" placeholder="Amount in US dollars"></input>
                    </p>
            </select>
            <div id="personalized-message" class="border border-gray-500 border-t-0 border-r-0 border-l-0 p-5">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2"> Want to add a personalized message?</h5>
                <input class="flex w-full h-auto text-left text-xl bg-gray-100 border border-gray-500 rounded-xl mx-2 my-2" placeholder="Your message here"></input>
            </div>
            <div id="total" class="text-gray-800 font-bold my-2 p-2 py-5">
                 <h5 class="text-3xl">Total: </h5>
                <h5 class="text-xl pt-5 pb-3">Delivery: </h5>
                <div class="font-normal text-lg">
                    <p> In Stock </p>
                    <p> Free Shipping </p>
                    <p class="text-blue-500"> Get delivery dates </p>
                </div>
                <button class="font-['open_sans'] bg-blue-500 text-white text-bold uppercase rounded-full border-red-500 px-8 py-3 mx-10 mt-5 mb-10 drop-shadow-xl shadow-black">
                    <NuxtLink to="/cart">Add to Cart</NuxtLink>
                </button>
            </div>
            <div id="bookmark">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2"> Still deciding?</h5>
                <p class="text-lg text-gray-800 my-2 p-2"> Add this item to a list and easily come back to it later. </p>
            </div>
            <div id="support">
                <h5 class="text-2xl text-gray-800 font-bold my-2 p-2"> Need Some Help?</h5>
                <p class="text-lg text-gray-800 my-2 p-2"> Reach out to our <NuxtLink to="/support" class="text-blue-500">support</NuxtLink> team.  </p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>
