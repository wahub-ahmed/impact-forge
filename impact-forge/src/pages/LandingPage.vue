<template>
  <div>
    <div class="header">
      <div class="flex justify-between items-center">
        <div class="logo">
          CrowdWatts
        </div>
        <div class="nav-items flex space-x-4">
          <a href="#">Overview</a>
          <a href="#">Key Features</a>
          <a href="#">Impact</a>
          <a href="#">EN</a>
          <q-btn flat label="Login" />
          <q-btn flat label="Signup →" />
        </div>
      </div>
    </div>
    <div class="content q-pa-md">
      <div class="hero">
        <p class="text-h1">“The Greatest Threat to Our Planet is the Belief that Someone Else Will Save It.”</p>
        <p class="text-subheading">--Robert Swan</p>
      </div>
      <div class="description">
        <p>Who are we?</p>
        <p>
          [Replace with your company description here. It can be a short story or a creative mission statement that describes what CrowdWatt does and its goals.]
        </p>
        <q-btn label="Join CrowdWatt Community" color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
.header {
  background-color: #f5f5f5;
  padding: 16px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-items {
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.text-h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 10px;
}

.text-subheading {
  font-size: 16px;
  color: #828282;
}

.description {
  text-align: center;
}

.description p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
