<template>
    <button id="individual" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="select">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']">{{ name }}</h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM{{ price(toFixed) }}/month</p>
                <p class="py-2 text-xl text-black">{{ share }}</p>
                <p class="py-2 text-xl text-black">⭐ Recommended</p>
            </div>
            <div class="pb-5 text-xl text-black">
                {{ benefits.getBenefits }}
            </div>
          </button>
</template>

<script>
export default ({
  props: ['subscription'],
  /*
  method: {
    const getBenefits = (benefits) => {
         for (benefit in benefits) {
            return benefit
    }
  }
  */
})
</script>
