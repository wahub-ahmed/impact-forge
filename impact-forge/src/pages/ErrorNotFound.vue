<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 25vh">
        Code 404
      </div>

      <div class="text-h2" style="opacity:.4">
        Uh oh, this page went off-grid! Help us reboot by exploring other awesome projects.
      </div>

      <q-btn
        class="q-mt-xl"
        color="green"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>