<template>
  <div class="q-pa-md">
    <q-layout view="lHh LpR lFf" style="height: 300px">
      <q-header class="bg-cyan-8">
        <q-toolbar>
          <a href="/dashboard" style="text-decoration: none;  color: inherit;">
            <q-toolbar-title>Impact Forge</q-toolbar-title>
          </a>
          <q-btn flat rounded @click="drawer = !drawer" round dense icon="menu" style="margin-left: auto;"/>
          <q-btn flat rounded padding icon = "logout" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area padding style="height: calc(100% - 0px); margin-top: 0px;">
          <q-list>
            <q-item clickable v-ripple :to ="{name: 'BrowseProjects'}">
              <q-item-section avatar>
                <q-icon name="manage_search" />
              </q-item-section>

              <q-item-section>
                Browse Projects
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'YourInvestments' }">
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                Your Investments
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'ForumPage' }">
              <q-item-section avatar>
                <q-icon name="forum" />
              </q-item-section>

              <q-item-section>
                Forum
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'InitiateProject' }">
              <q-item-section avatar>
                <q-icon name="maps_home_work" />
              </q-item-section>

              <q-item-section>
                Initiate a Project
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'MyProfile' }">
              <q-item-section avatar>
                <q-icon name="manage_accounts" />
              </q-item-section>

              <q-item-section>
                My Profile
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'FAQ' }">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              FAQ
            </q-item-section>
          </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  },
  beforeRouteEnter(to, from, next) {
    const isLoggedIn = true; // authentication check

    if (isLoggedIn) {
      next(); // Allow access if logged in
    } else {
      next('/login'); // Redirect to login if not
    }
  }
};
</script>
