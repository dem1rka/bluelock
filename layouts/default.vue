<template>
  <header class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md py-4 px-6">
    <div class="basis-1/4 flex items-center justify-start px-4">
      <img src="assets/image/arizonalogo.jpg" class="w-20 h-20 rounded-full shadow-lg" />
    </div>
    <div class="basis-1/4"></div>
    <nav class="basis-1/2 flex flex-row items-center justify-end px-4 gap-4">
      <NuxtLink to="/" class="px-4 py-2 rounded hover:bg-blue-700 hover:text-blue-100 transition">Home</NuxtLink>
      <NuxtLink to="Lab3" class="px-4 py-2 rounded hover:bg-blue-700 hover:text-blue-100 transition">Lab3</NuxtLink>
      <NuxtLink to="login" class="px-4 py-2 rounded hover:bg-blue-700 hover:text-blue-100 transition">Login</NuxtLink>
      <NuxtLink to="logout" class="px-4 py-2 rounded hover:bg-blue-700 hover:text-blue-100 transition">Logout</NuxtLink>
    </nav>
  </header> 

  <main class="p-5 flex bg-blue-100 h-screen">
    <slot />
   </main>

   <footer class="flex flex-row w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white shadow-md justify-center gap-4 py-4 px-6">
    <a href="https://www.youtube.com"><img src="assets/image/youtube.png" class=" w-16 h-16"></a>
    <a href="web.telegram.org"><img src="assets/image/telegram.png" class=" w-16 h-16"></a>
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


