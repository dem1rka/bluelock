<template>
  <header class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md py-4 px-6 max-sm:justify-between max-sm:relative">
    <div class="basis-1/4 flex items-center justify-start px-4 max-sm:basis-auto">
      <img src="assets/image/arizonalogo.jpg" class="w-20 h-20 rounded-full shadow-lg bg-transparent" />
    </div>
    <div class="basis-1/4 max-sm:basis-auto"> 
    </div>
    <nav class="basis-1/2 flex flex-row items-center justify-end px-4 gap-4 max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full
    max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-white max-sm:px-0">
      <NuxtLink to="/" class="my-auto p-2 hover: bg-blue-700 hover:text-blue-100 max-sm:w-full max-sm:border-b-2 max-sm:border-black max sm:text-center">Home</NuxtLink>
      <div class="relative group my-auto p-2 hover:bg-blue-700 hover:text-blue-100 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Labs
  
        <div class="hidden group-hover:flex flex-col absolute top-full left-0 bg-white text-black w-56 text-center z-10
              max-sm:flex max-sm:relative max-sm:w-full max-sm:bg-red-100 max-sm:border-y-2 max-sm:border-black">
    <NuxtLink to="/login" class="p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-none">Lab3</NuxtLink>
    <NuxtLink to="/login" class="p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-none">Lab4</NuxtLink>
    <NuxtLink to="/login" class="p-2 border-b-2 border-black hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-none">Lab5</NuxtLink>
    <NuxtLink to="/login" class="p-2 hover:bg-blue-500 hover:text-white max-sm:w-full max-sm:border-none">Lab6</NuxtLink>
        </div>
      </div>

  
      <NuxtLink to="login" class="my-auto p-2 hover: bg-blue-700 hover:text-blue-100 max-sm:w-full max-sm:border-b-2 max-sm:border-black max sm:text-center">Login</NuxtLink>
      <NuxtLink to="logout" class="my-auto p-2 hover: bg-blue-700 hover:text-blue-100 max-sm:w-full max-sm:border-b-2 max-sm:border-black max sm:text-center">Logout</NuxtLink>
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


