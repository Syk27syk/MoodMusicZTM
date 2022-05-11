<template>
  <button id="individual" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-30 hover:bg-opacity-100 border-white border-opacity10 rounded-3xl" @click="select">
    <div id="title block" class="border-bottom">
      <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']">{{ subscription.name }}</h5>
      <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM{{ subscription.price(toFixed) }}/month</p>
      <p class="py-2 text-xl text-black">{{ subscription.share }}</p>
      <p class="py-2 text-xl text-black">⭐ Recommended</p>
    </div>
    <div class="pb-5 text-xl text-black">
      <ul>{{ subscription.benefits }}</ul>
    </div>
    </button>
</template>

<script>
export default ({
  data () {
    return {
      props: ['subscription'],
    }
  },

  methods: {
    select () {
    }
  }
});
/*
    function getBenefits(benefits) {
         for (benefit in benefits) {
            return this.benefit
    }
  }
  function arrayConvert(json){
    var arr = [];
    for(index in json){
        var obj = json[index];
        var key = null;
        while(typeof obj == 'object'){
            for(ind in obj){
                if(key == null) key = ind;
                obj = obj[ind];
            }
        }
        arr.push({'key':key, 'val':obj});
    }
    return arr;
}
*/

</script>