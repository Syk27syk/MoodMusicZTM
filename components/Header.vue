<template>
    <div id="head" class="flex flex-row w-screen align-center bg-gray-800">
      <div id="menu-left" class="px-6">
        <NuxtLink to="/index"><img src="/mmlogo.png" class="h-[150px] w-[150px] p-5" alt="logo" /></NuxtLink>
      </div>
      <div id="menu" class="font-['open_sans'] font-bold text-lg text-gray-100 uppercase flex flex-row gap-x-20 py-5">
        <button>
          <NuxtLink to="/browse">
            Browse Our Library
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/artist">
            Artist
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/corporateInformation">
            Corporate Information
          </NuxtLink>
        </button>
        <button>
          <NuxtLink to="/support">
            Support
          </NuxtLink>
        </button>
        <button>
          <p> More </p>
        </button>
      </div>
    </div>
</template>
