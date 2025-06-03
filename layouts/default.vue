
<template>
    <header class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md py-4 px-6 max-sm:justify-between max-sm:relative">
        <div class="basis-1/4 flex items-center justify-start px-4 max-sm:basis-auto">
          <img src="assets/image/arizonalogo.jpg" class="w-16 h-16 bg-transparent rounded-full ">

        </div>
        <div class="basis-1/4 max-sm:hidden">
        </div>
        <nav :class="{'basis-1/2 flex flex-row items-center justify-end px-8 gap-4': !burger || burger,
         'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-blue-900 max-sm:px-0': burger,'max-sm:hidden':!burger}">
      <NuxtLink to="/" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Home</NuxtLink>
      <div class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0" @click = "switch_submenu">Labs
        <div class="flex flex-col absolute bg-blue-900 w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-blue-900" v-show = "submenu">
          <NuxtLink to="/lab3" class="my-auto p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-t-2 max-sm:text-center">Lab3</NuxtLink>
          <NuxtLink to="/lab4" class="my-auto p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:text-center">Lab4</NuxtLink>
          <NuxtLink to="/lab5" class="my-auto p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:text-center">Lab5</NuxtLink>
          <NuxtLink to="/lab6" class="my-auto p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-black max-sm:text-center">Lab6</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/login" :class="{'my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center': submenu,
      'my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-t-2 max-sm:border-black max-sm:text-center': !submenu}">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">LogOut</NuxtLink>
    </nav>
    <div v-if ="!burger" @click ="switch_burger" class = "max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
      <span class="h-[3px] w-full bg-blue-950"></span>
      <span class="h-[3px] w-full bg-blue-950"></span>
      <span class="h-[3px] w-full bg-blue-950"></span>
    </div>
    <div v-else class = "max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6" @click="switch_burger">
      <span class="h-[3px] w-full bg-blue-950 rotate-45 relative top-[9px]"></span>
      <span class="h-[3px] w-full bg-blue-950 opacity-0"></span>
      <span class="h-[3px] w-full bg-blue-950 relative bottom-3 rotate-[-45deg]"></span>
    </div>
    </Header>


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
