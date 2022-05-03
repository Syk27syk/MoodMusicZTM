<template>
    <div id="background" class="flex h-screen w-screen bg-center bg-[url('/balloongift.jpg')] bg-cover align-middle text-white text-center">
        <div id="body" class="m-auto flex-col">
            <div id="login" class="text-black h-250 w-250 border border-white border-opacity-30 rounded-md px-20 bg-white bg-opacity-20 backdrop-blur-lg">
                <h1> Catchy Title  Here</h1>
                <button>
                    <NuxtLink to="/cart">Buy</NuxtLink>
                </button>
                <div>$15</div>
                <div>$30</div>
                <div>$60</div>
                <p> description</p>
            </div>
            <div>
                <h4>Account Balance</h4>
                <h3>Redeem. Shop. Repeat</h3>
                <p> description </p>
                <button> redeem </button>
                <button> add credit </button>
            </div>
            <div class="text-sm">
                <p>Beware of gift card scams. Do not share your code.</p>
                <p>Valid only for U.S. transactions in Apple properties. For assistance, visit support.apple.com/giftcard(Opens in a new window) or call 800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply; see apple.com/us/go/legal/gc(Opens in a new window). Issued by Apple Value Services, LLC (AVS). ©2020 Apple Inc. All rights reserved.</p>
                <p>We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.</p>
            </div>
        </div>
        <footer>
            information and footer
        </footer>
    </div>
</template>

<script>

</script>
