<template>
  <header class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md py-4 px-6 max-sm:justify-between max-sm:relative">
    <div class="basis-1/4 flex items-center justify-start px-4 max-sm:basis-auto">
      <img src="assets/image/arizonalogo.jpg" class="w-16 h-16 bg-transparent rounded-full ">
    </div>
    <div class="basis-1/4 max-sm:basis-auto"> 
    </div>
    <nav class="basis-1/2 flex flex-row items-center justify-end px-8 gap-4 max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full
    max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-white max-sm:px-0">
      <NuxtLink to="/" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Home</NuxtLink>
      <div class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center max-sm:0 max-sm:pb-0">Labs
  
        <div class="flex flex-col absolute top-full bg-white text-black w-56 text-center max-sm:relative max-sm:w-full maxs-sm-red-100">

    <NuxtLink to="/login" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover-text-white max-sm:w-full max-sm:border-t-2 max sm:text-center">Lab3</NuxtLink>
    <NuxtLink to="/login" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover-text-white max-sm:w-full sm:text-center">Lab4</NuxtLink>
    <NuxtLink to="/login" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover-text-white max-sm:w-full sm:text-center">Lab5</NuxtLink>
    <NuxtLink to="/login" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover-text-white max-sm:w-full sm:text-center max-sm:border-black max-sm:text-center">Lab6</NuxtLink>
        </div>
      </div>


  
      <NuxtLink to="/login" class="my-auto p-2 hover:bg-blue-700 hover:text-gray max-sm:w-full max-sm:border-b-2 max-sm:border-black max sm:text-center">Login</NuxtLink>
      <NuxtLink to="/logout" class="my-auto p-2 hover:bg-blue-700 hover:text-gray max-sm:w-full max-sm:border-b-2 max-sm:border-black max sm:text-center">Logout</NuxtLink>
    </nav>
  </header> 

  <main class="p-5 flex bg-blue-100 h-screen">
    <slot />
   </main>

   <footer class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md justify-center gap-4 py-4 px-6">
    <a href="https://www.youtube.com"><img src="assets/image/youtube.png" class=" w-16 h-16"></a>
    <a href="https://web.telegram.org"><img src="assets/image/telegram.png" class=" w-16 h-16"></a>
    <a href="https://www.instagram.com"><img src="assets/image/instagram.png" class=" w-16 h-16"></a>
   </footer>
</template> 

<script setup>
import { useHead } from '#app';

useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XDVKVHQNNP',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XDVKVHQNNP');
      `,
      type: 'text/javascript',
    },
  ],
  __dangerouslyDisableSanitizersByTagID: {
    gtag: ['innerHTML'],
  },
});
</script>


