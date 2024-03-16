<template>
  <div>
    <div class="header clickable flex items-center">
        <div class="logo">   </div> 
        <div class="title">
          CrowdWatt
        </div>
        <div class="nav-items flex space-x-8">
          <a @click="smoothScrollTo('#overview')">Overview</a>
          <a @click="smoothScrollTo('#key-features')">Key Features</a>
          <a @click="smoothScrollTo('#impact')">Impact</a>
          <router-link to="/login" ><q-btn rounded label="Login" /></router-link>
        </div>
    </div>
    <div class="content q-pa-md">
      <div class="hero">
        <p class="text-h1">“The greatest threat to our planet is<br>the belief that someone else will save it”<br>--Robert Swan</p>
      </div>
      <section id="overview" class="flex md:flex-row flex-col">
        <div class="overview-content"> <div class="text-and-button">
      <h4>
        Who are we?
      </h4>
      <p>CrowdWatt is a community investment platform that gives cities in different stages of urbanization the ability to lead the push towards access to energy and renewable energies. We’re democratizing access to energy, focusing on vulnerable/large impact communities, and unifying cities.</p>
      <router-link to="/signup" ><q-btn label="Join CrowdWatt Community" color="secondary" /></router-link>
      </div>
    <div class="image-section">
      <img src="./homepage.png" width="400px" height="300px" />
    </div>
  </div>
      </section>

      <section id="key-features">
        <h4>
          Why do We Care?
        </h4>
        <p>The problem of unsustainable infrastructure and energy inefficiency persists to affect communities’ well being. In the Latin America area,  17 million people lack access to electricity and 75 million lack access to clean fuels for cooking. The lack of investment, regional disparities, and inadequate planning results in ineffective allocation of resources, leading to the problem remaining unresolved. The infrastructure gap increases risks for public health, hinders access to education and economic opportunities, and exacerbates social conflicts and environmental degradation.</p>
        
      </section>
      <section id="impact">
  <h4>
    What is the Expected Outcome in 3 Years?
  </h4>
  <p>
          <span style="font-size: 40px; color: green;">$42.5M</span> in Total Invested through CrowdWatt<br>
          <span style="font-size: 40px; color: green;">23.1B kWh</span> of Potential Electricity Produced<br>
          <span style="font-size: 40px; color: green;">40K</span> Lives Saved Annually
        </p>
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

.title {
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px; 
}

.logo {
  background-image: url('Logo.png'); 
  background-size: contain;  
  background-repeat: no-repeat; 
  padding: 0px;
  font-size: 24px;
  font-weight: bold;
  margin-left: 0px; 
}

.nav-items a {
  font-size: 24px;
  margin-left: 20px; 
  margin-right: 20px; 
  justify-content: space-between; 
}

.nav-items .q-btn {
  font-size: 16px;  
  margin-left: 625%;  
  justify-content: right; 
}

.content {
  display: flex;
  flex-direction: column;
  padding: 40px; 
}

.hero {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 40px;
}

.text-h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: center;
}

#overview {
  flex-direction: row; /* Keep overview as a row */
}

.overview-content {
  display: flex;     /* Use flexbox to distribute space */
  flex: 1;           /* Allow the overview-content to expand to fill the #overview section */
}

.text-and-button,
.image-section {
  flex: 1;           /* Both sections get equal space */
  margin: 0 10px;    /* Add some spacing between the sections */
}

.image-section {
  text-align: center; /* Keep the image centered */
}
</style>