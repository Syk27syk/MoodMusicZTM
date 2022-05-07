<template>
    <div>
        <Header />
        <MoodBot />
        <div id="body">
            <h1 class="text-5xl text-gray-900 mx-auto text-center py-20 px-5 font-['nunito_sans'] border border-b-gray-300"> Mood Music Support </h1>
            <div class="w-3/4 mx-auto px-20">
                <div id="password-and-account" class="my-10 mx-auto py-5 text-center border border-l-0 border-r-0 border-t-0 border-b-gray-300 text-blue-500 font-['nunito_sans']">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto my-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                    </svg>
                    <p><NuxtLink to="">Forgot password or account details ></NuxtLink></p>
                </div>
                <div id="billing-and-subscriptions" class="my-10 mx-auto py-5 text-center border border-l-0 border-r-0 border-t-0 border-b-gray-300 text-blue-500 font-['nunito_sans']">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto my-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                    </svg>
                    <p><NuxtLink to=""> Billing and subscriptions ></NuxtLink></p>
                </div>
                <div id="billing-and-subscriptions" class="my-10 mx-auto py-5 text-center text-blue-500 font-['nunito_sans']">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto my-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                    <p><NuxtLink to="/faqs"> Frequently Asked Questions ></NuxtLink></p>
                </div>
            </div>
            <div id="Search for topics" class="mx-auto my-10 text-center border border-t-gray-300 border-b-gray-300 border-l-0 border-r-0">
                <p class="text-3xl py-10">Search for topics</p>
                <form class="flex items-center my-10 mx-auto px-10 md:px-20 lg:px-48 max-w-5/6">
                    <label for="simple-search" class="sr-only">Simple Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                            </svg>
                        </div>
                        <input id="simple-search" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                        </svg>
                    </button>
                </form>
            </div>
            <div id="Contact us" class="mx-auto my-10 px-5 md:px-20 lg:px-48 text-center">
                <p class="text-3xl py-10">Contact us</p>
                <p class="text-blue-500 py-5 md:py-8 lg:py-10 px-5 md:px-8 lg:px-10"><NuxtLink to="/contact"> > Contact</NuxtLink></p>
                <p class="mx-auto text-lg text-center pb-10"> Or follow us on social media to stay connected with Mood Music support.</p>
            </div>
        </div>
        <Footer />
    </div>
</template>
