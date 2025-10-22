<template>
    <div class= "fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0 relative min-h-screen flex bg-gray-950" >
      


    <!-- Sidebar -->
    <Sidebar />

    <!--content-->
    <main class="flex-1 bg-gray-950 text-white overflow-y-auto p-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";
import { ref } from "vue";
import Sidebar from '~/components/Sidebar.vue'

// Google Analytics
useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-XDVKVHQNNP",
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XDVKVHQNNP');
      `,
      type: "text/javascript",
    },
  ],
  _dangerouslyDisableSanitizersByTagID: {
    gtag: ["innerHTML"],
  },
});

// Condition of menu 
const submenu = ref(false);
const isOpen = ref(false);

const switch_submenu = () => (submenu.value = !submenu.value);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);
</script>
