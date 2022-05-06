<template>
    <div id="subscription-plans" class="flex flex-row gap-5">
        <div id="individual" class="m-auto py-5 px-8 my-10 bg-white bg-opacity-20 border-white border-opacity10 rounded-3xl">
            <div id="title block" class="border-bottom">
                <h5 class="pt-5 text-3xl font-bold text-gray-900 font['nunito_sans']">{{ name }}</h5>
                <p class="py-2 text-xl font-bold font-lola text-gray-700">1 month free, then RM {{ price(toFixed) }}/month</p>
                <p class="py-2 text-xl">Your existing subscriptions are not eligible for trial</p>
                <p class="py-2 text-xl ">⭐ Recommended</p>
            </div>
            <div class="pb-5 text-xl">
                {{ benefits }}
            </div>
        </div>
    </div>
</template>
