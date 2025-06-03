
<template>
 

  <header class="flex w-full items-center justify-between bg-blue-900 shadow-sm py-2 sticky top-0 z-50 text-gray-500">

    <div class="basis-1/4 flex items-center justify-start px-8 min-w-40 max-sm:basis-auto">
      <img src="assets/image/arizonalogo.jpg" class="w-16 h-16 bg-white rounded-full p-1 shadow-md hover:scale-110 transition-transform" alt="Logo"></div>

    <div class="basis-1/4 max-sm:basis-auto"></div>
      <nav :class="{
    'basis-1/2 flex flex-row items-center justify-end px-2 gap-2': !burger || burger,
    'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-blue-800 max-sm:px-0': burger,
    'max-sm:hidden': !burger,}"
>
  <NuxtLink to="/" @click="burger = false" class="my-auto p-2 rounded hover:bg-blue-700 text-white max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0">Home</NuxtLink>

  <div class="relative">
    <div @click="switch_submenu" class="my-auto p-2 rounded hover:bg-blue-700 text-white cursor-pointer max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0">
      Labs
    </div>
    <div
      class="flex flex-col absolute right-0 top-full bg-blue-800 text-white w-56 text-left shadow-lg rounded mt-1 z-40 max-sm:static max-sm:w-56 max-sm:mx-auto max-sm:mt-2"
      v-show="submenu"
    >
      <NuxtLink to="/lab3" class="px-4 py-2 hover:bg-blue-700 transition">Lab3</NuxtLink>
      <NuxtLink to="/lab4" class="px-4 py-2 hover:bg-blue-700 transition">Lab4</NuxtLink>
      <NuxtLink to="/lab5" class="px-4 py-2 hover:bg-blue-700 transition">Lab5</NuxtLink>
      <NuxtLink to="/lab6" class="px-4 py-2 hover:bg-blue-700 transition">Lab6</NuxtLink>
    </div>
  </div>

  <NuxtLink to="/login" class="my-auto p-2 rounded hover:bg-slate-700 text-white max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0">
    LogIn
  </NuxtLink>
  <NuxtLink to="/logout" class="my-auto p-2 rounded hover:bg-slate-700 text-white max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0">
    LogOut
  </NuxtLink>
    </nav>

      <div
  v-if="!burger"
  @click="switch_burger"
  class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6"
>
  <span class="h-[3px] w-full bg-white"></span>
  <span class="h-[3px] w-full bg-white"></span>
  <span class="h-[3px] w-full bg-white"></span>
</div>
</header>
   



  <main class="p-5 flex-row w-full h-screen relative overflow-hidden">
  <div 
    class="absolute inset-0 -z-10 bg-cover bg-center ">
  </div>
  <slot />
</main>

    <footer class = "flex flex-row w-full bg-blue-950 border-t-2 border-black items-center justify-center px-4 py-2 gap-4">
       <a href="https://www.youtube.com"><img src="assets/image/youtube.png" class=" w-16 h-16"></a>
      <a href="https://web.telegram.org"><img src="assets/image/telegram.png" class=" w-16 h-16"></a>
      <a href="https://www.instagram.com"><img src="assets/image/instagram.png" class=" w-16 h-16"></a>
    </footer>
    <footer class="p-4 bg-blue-950">
  <div class="text-xs text-center">
    <p>©Donpollo</p>
  </div>
</footer>
</template>
<script setup lang="ts">
import { useHead } from "#app";
import { ref } from "vue";
useHead({
    script: [
        {
            async: true,

src: 'https://www.googletagmanager.com/gtag/js?id=G-XDVKVHQNNP',
        },
        {
            innerHTML:`
            window.dataLayer = window.dataLayer  [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XDVKVHQNNP');            
            ` ,
            type: 'text/javascript',
        },
    ],
    _dangerouslyDisableSanitizersByTagID: {
        gtag: ['innerHTML'],
    },
})

const burger = ref<boolean>(false)
const submenu = ref<boolean>(false)

const switch_burger = ()=> (burger.value = !burger.value)
const switch_submenu = ()=> (submenu.value = !submenu.value)

</script>
