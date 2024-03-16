<template>
  <div>
    <div class="header clickable flex items-center">
        <div class="logo">
          CrowdWatts
        </div>
        <div class="nav-items flex space-x-4">
          <a @click="smoothScrollTo('#overview')">Overview</a>
          <a @click="smoothScrollTo('#key-features')">Key Features</a>
          <a @click="smoothScrollTo('#impact')">Impact</a>
          <router-link to="/login" ><q-btn flat label="Login" /></router-link>
        </div>
    </div>
    <div class="content q-pa-md">
      <div class="hero">
        <p class="text-h1">“The greatest threat to our planet is the belief that someone else will save it”<br>--Robert Swan</p>
      </div>
      <section id="overview">
        <h4>
          Who are we?
        </h4>
        <p>CrowdWatt is a community investment platform that gives cities in different stages of urbanization the ability to lead the push towards access to energy and renewable energies. We’re democratizing access to energy, focusing on vulnerable/large impact communities, and unifying cities.</p>
        <q-btn label="Join CrowdWatt Community" color="secondary" />
    </section>

      <section id="key-features">
        <h2>
          Why do We Care?
        </h2>
        <p>The problem of unsustainable infrastructure and energy inefficiency persists to affect communities’ well being. In the Latin America area,  17 million people lack access to electricity and 75 million lack access to clean fuels for cooking. The lack of investment, regional disparities, and inadequate planning results in ineffective allocation of resources, leading to the problem remaining unresolved. The infrastructure gap increases risks for public health, hinders access to education and economic opportunities, and exacerbates social conflicts and environmental degradation.</p>
        
      </section>
      <section id="impact">
        <h2>
          What is the Expected Outcome in 3 Years?
        </h2>
        <p></p>
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
  padding: 12px;
  cursor: pointer;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-items {
  font-size: 16px;
  margin-bottom: 0px;
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
  text-align: left;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
