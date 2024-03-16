<template>
  <div>
    <div class="header">
      <div class="flex justify-between items-center">
        <div class="logo">
          CrowdWatts
        </div>
        <div class="nav-items flex space-x-4">
          <a href="#overview">Overview</a>
          <a href="#key-features">Key Features</a>
          <a href="#impact">Impact</a>
          <a href="#es">ES</a>
          <q-btn flat label="Login" />
          <q-btn flat label="Signup →" />
        </div>
      </div>
    </div>
    <div class="content q-pa-md">
      <section id="overview" class="hero">
        <p class="text-h1">“The greatest threat to our planet is the belief that someone else will save it”</p>
        <p class="text-subheading">--Robert Swan</p>
      
      <div class="description">
        <p>Who are we?</p>
        <p>
          Government takes too long. We speed it up
        </p>
        <q-btn label="Join CrowdWatt Community" color="secondary" />
      </div>
    </section>
      
    <section id="key-features" class="description">
       </section>

      <section id="impact" class="description">
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    smoothScrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
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
