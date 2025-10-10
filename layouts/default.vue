<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-screen w-48  bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0 md:static'
      ]"
    >
      <!-- Лого -->
      <div class="flex items-center justify-center py-4"r>
        <img
          src="assets/image/RIPNDIP.png"
          class="w-20 h-20 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
          alt="Logo"
        />
      </div>

      <!-- Навигация -->
      <nav class="flex flex-col gap-2 px-4 py-6">
        <NuxtLink to="/" class="p-2 rounded hover:bg-gray-700" @click="closeMenu">Home</NuxtLink>

        <div class="relative">
          <div
            @click="switch_submenu"
            class="p-2 rounded hover:bg-gray-700 cursor-pointer flex justify-between items-center"
          >
            Labs
            <span :class="['transition-transform', submenu ? 'rotate-90' : '']">▶</span>
          </div>
          <div v-show="submenu" class="flex flex-col bg-gray-800 rounded shadow-md mt-1">
            <NuxtLink to="/lab3" class="px-4 py-2 hover:bg-gray-700" @click="closeMenu">Lab3</NuxtLink>
            <NuxtLink to="/lab4" class="px-4 py-2 hover:bg-gray-700" @click="closeMenu">Lab4</NuxtLink>
            <NuxtLink to="/lab5" class="px-4 py-2 hover:bg-gray-700" @click="closeMenu">Lab5</NuxtLink>
            <NuxtLink to="/lab6" class="px-4 py-2 hover:bg-gray-700" @click="closeMenu">Lab6</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/login" class="p-2 rounded hover:bg-slate-700" @click="closeMenu">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="p-2 rounded hover:bg-slate-700" @click="closeMenu">LogOut</NuxtLink>
      </nav>

      <!-- Footer соц. сети -->
      <div class="mt-auto flex flex-row justify-center gap-4 py-4 ">
        <a href="https://www.youtube.com"><img src="assets/image/youtube.png" class="w-10 h-10" /></a>
        <a href="https://web.telegram.org"><img src="assets/image/telegram.png" class="w-10 h-10" /></a>
        <a href="https://www.instagram.com"><img src="assets/image/instagram.png" class="w-10 h-10" /></a>
      </div>
    </aside>

    <!-- Контент -->
    <main class="flex-1 p-6 bg-gray-100 relative overflow-y-auto w-full">
      <!-- Кнопка бургера-->
      <button
        class="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
        @click="toggleMenu"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";
import { ref } from "vue";

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

// Состояния меню
const submenu = ref(false);
const isOpen = ref(false);

const switch_submenu = () => (submenu.value = !submenu.value);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);
</script>
