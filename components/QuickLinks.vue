<template>
    <div id="quick links" class="bg-blue-300 bg-opacity-20 backdrop-blur-lg rounded-full border border-white border-opacity-30 text-white p-10 absolute top-0 right-0 m-5">
      <button
          type="button"
          class="text-xl font-extrabold font-roboto text-gray-500 text-opacity-100 text-center align-center mx-auto py-2 flex flex-col relative z-10"
      >
          Quick<br>Links
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>
      <button class="fixed inset-0 h-full w-full text-transparent cursor-default tabindex=-1 z-0">text</button>
      <div class="flex flex-col relative z-10">
          <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/account"><img src="/quaverheart.png" alt="account"></NuxtLink>
          </button>
          <button class="rounded-full bg-transparent  h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/playlist"><img src="/musichead.png" alt="playlist"></NuxtLink>
          </button>
          <button class="rounded-full bg-transparent h-24 w-24 p-2 my-2 mx-1 drop-shadow-lg">
              <NuxtLink to="/cart"><img src="/semiquaver.png" alt="cart"></NuxtLink>
          </button>
      </div>
    </div>
</template>
