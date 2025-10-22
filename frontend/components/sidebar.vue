<template>
  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-0 left-0 h-screen w-56 bg-black/70 backdrop-blur-md text-white shadow-xl transform transition-transform duration-300 z-50 flex flex-col justify-between',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0 md:static'
    ]"
  >
    <!-- Upper part -->
    <div>
      <!-- Logo -->
      <div class="flex items-center justify-center py-6">
        <img
          src="/assets/image/RIPNDIP.png"
          alt="Logo"
          class="w-20 h-20 rounded-full hover:scale-110 transition-transform"
        />
      </div>

      <!-- Nav -->

      <NuxtLink
        to="/auth"
        class="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
        @click="closeMenu"
>
        <User class="w-6 h-6" />
        <span>Profile</span>
      </NuxtLink>

      <nav class="flex flex-col items-start gap-4 px-6 mt-4">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
          @click="closeMenu"
        >
          <Home class="w-6 h-6" />
          <span>Home</span>
        </NuxtLink>

        <NuxtLink
          to="/movies"
          class="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
          @click="closeMenu"
        >
          <Clapperboard class="w-6 h-6" />
          <span>Movies</span>
        </NuxtLink>

        <NuxtLink
          to="/favorites"
          class="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
          @click="closeMenu"
        >
          <Heart class="w-6 h-6" />
          <span>Favorites</span>
        </NuxtLink>

  
        <NuxtLink
          to="/settings"
          class="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
          @click="closeMenu"
        >
          <Settings class="w-6 h-6" />
          <span>Settings</span>
        </NuxtLink>
      </nav>
    </div>

    <!-- footer -->
    <div class="flex justify-center gap-4 pb-6">
      <a href="https://www.youtube.com" target="_blank">
        <img src="/assets/image/youtube.png" class="w-8 h-8 hover:scale-110 transition" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src="/assets/image/instagram.png" class="w-8 h-8 hover:scale-110 transition" />
      </a>
      <a href="https://web.telegram.org" target="_blank">
        <img src="/assets/image/telegram.png" class="w-8 h-8 hover:scale-110 transition" />
      </a>
    </div>

    
  
  </aside>
  <!-- burger -->
   <button
        class="md:hidden fixed top-4 left-4 z-50 bg-black/70 text-white p-2 rounded"
        @click="toggleMenu"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Home, User, Settings, Heart, Clapperboard } from "lucide-vue-next";


const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);
</script>

<style scoped>

aside a.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}
</style>
