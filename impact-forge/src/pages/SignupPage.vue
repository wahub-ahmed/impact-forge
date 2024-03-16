<template>
  <div class="q-pa-md row justify-center">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section>
        <div class="text-h6 text-center">Sign Up</div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-input v-model="firstName" label="First Name" />
        <q-input v-model="lastName" label="Last Name" />
        <q-input v-model="email" label="Email" type="email" />
        <q-input v-model="password" label="Password" type="password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" />
        <q-btn color="secondary" label="Sign Up" @click="signup" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { signup }  from './firebaseConfig.js'; 

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signup() {
      try {
        await signup(this.email, this.password);
        // Store additional user data in Firebase if needed
        this.$router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>