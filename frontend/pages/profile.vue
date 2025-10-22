<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h1 class="text-3xl font-bold mb-4">Profile</h1>
    <div v-if="user">
      <p><b>Email:</b> {{ user.email }}</p>
      <button @click="logout" class="mt-4 bg-red-600 px-4 py-2 rounded">Logout</button>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <button @click="goLogin" class="mt-4 bg-blue-600 px-4 py-2 rounded">Go to Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const res = await fetch("http://localhost:4000/api/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (data.user) user.value = data.user;
});

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/auth";
}

function goLogin() {
  window.location.href = "/auth";
}
</script>
