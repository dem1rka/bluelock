    <template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h1 class="text-2xl font-bold mb-6">Login / Register</h1>

    <div class="w-80 bg-gray-800 p-6 rounded-lg shadow-lg">
      <input v-model="email" type="email" placeholder="Email" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />

      <div class="flex gap-2 mt-4">
        <button @click="login" class="btn bg-blue-600 hover:bg-blue-700">Login</button>
        <button @click="register" class="btn bg-green-600 hover:bg-green-700">Register</button>
      </div>

      <p v-if="message" class="mt-4 text-sm text-yellow-400">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const message = ref("");

const API_URL = "http://localhost:4000/api";

async function register() {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email.value.split("@")[0], email: email.value, password: password.value })
    });
    const data = await res.json();
    message.value = data.message;
  } catch (err) {
    message.value = "Registration failed";
  }
}

async function login() {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      message.value = "Login successful!";
      window.location.href = "/profile";
    } else {
      message.value = data.message;
    }
  } catch (err) {
    message.value = "Login failed";
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #1f2937;
  border: none;
  border-radius: 6px;
  color: white;
}
.btn {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
}
</style>
    