<template>
    <div>
        <div id="information" class="font-['nunito_sans'] bg-gray-900 px-3 md:px-16 lg:px-28 py-10 grid md:grid-cols-4 gap-x-5 gap-y-5 lg:gap-x-14 text-center text-gray-100">
            <div id="information">
            <h5 class="text-2xl text-bold p-2">
                <strong>Information</strong>
            </h5>
            <div class="font-alegreya text-light text-lg">
                <p><NuxtLInk to="/faqs">FAQ</NuxtLInk></p>
                <p><NuxtLink to="/corporateInformation">Corporate information</NuxtLink></p>
                <p><NuxtLInk to="/investorRelations">Investor relations</NuxtLink></p>
                <p><NuxtLInk to="/media">Media</NuxtLink></p>
                <p><NuxtLInk to="/jobs">Jobs</NuxtLInk></p>
                <p><NuxtLink to="/contact">Contact</NuxtLink></p>
            </div>
            </div>
            <div id="info-phone">
            <h5 class="text-2xl text-semibold p-2">
                <strong>Support</strong>
            </h5>
            <div class="font-alegreya text-lg">
                <p><NuxtLink to="/privacyPolicy">Privacy</NuxtLInk></p>
                <p><NuxtLInk to="/cookies">Cookies</NuxtLink></p>
                <p><NuxtLink to="/support">Support</NuxtLInk></p>
                <p><NuxtLInk to="/legalNotice">Legal notice</NuxtLink></p>
                <p><NuxtLInk to="/contact">Feedback</NuxtLink></p>
            </div>
            </div>
            <div id="info-follow">
            <h5 class="text-2xl text-semibold  p-2">
                <strong>Account</strong>
            </h5>
            <div id="social-media-icons" class=" font-alegreya text-lg justify-items-center p-3">
                <p><NuxtLInk to="/login">Manage account</NuxtLInk></p>
                <p><NuxtLInk to="/giftCards">Gift cards</NuxtLInk></p>
                <p><NuxtLInk to="/newsletter">Newsletter</NuxtLInk></p>
            </div>
            </div>
            <div id="info-follow">
            <h5 class="text-2xl text-semibold p-2">
                <strong>Follow Us</strong>
            </h5>
            <div id="social-media-icons" class="font-alegreya grid grid-cols-2 gap-5 justify-items-center p-3">
                <a href="https://www.facebook.com"><img src="facebook.png" alt="" class="h-16 w-16" /></a>
                <a href="https://www.instagram.com"><img src="instagram.png" alt="" class="h-16 w-16" /></a>
                <a href="https://twitter.com"><img src="twitter.png" alt="" class="h-16 w-16" /></a>
                <a href="https://www.youtube.com"><img src="youtube.png" alt="" class="h-16 w-16" /></a>
            </div>
            </div>
        </div>
        <div id="footer" class="font-['nunito_sans'] text-center text-gray-100 text-bold text-lg p-10 border-t-2 border-opacity-10 border-color-gray-200 bg-gray-900">
        <p>
            @ 2022 Mood Music All Rights Reserved | <NuxtLink to="/about">About Us</NuxtLink> | <NuxtLink to="/giftCards">Gift Cards</NuxtLink> | <NuxtLink to="/termsOfUse">Terms Of Use</NuxtLink> | <NuxtLink to="/privacyPolicy">Privacy Policy</NuxtLink>
        </p>
        </div>
    </div>
</template>
