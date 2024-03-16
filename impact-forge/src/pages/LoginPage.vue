<template>
  <div class="q-pa-md row justify-center">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-input v-model="email" label="Email" type="email" />
        <q-input v-model="password" label="Password" type="password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" />
        <q-btn color="secondary" label="Login" @click="login" />
      </q-card-actions>

      <q-card-section class="text-center text-caption">
        Don't have an account?
        <q-btn flat label="Sign Up" @click="$router.push('/signup')" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { login } from './firebaseConfig.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await login(this.email, this.password);
        this.$router.push('/dashboard'); 
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>