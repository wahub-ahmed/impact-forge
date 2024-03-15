<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" style="height: 300px">
      <q-header class="bg-cyan-8">
        <q-toolbar>
          
          <a href="/" style="text-decoration: none;  color: inherit;">
            <q-toolbar-title>Impact Forge</q-toolbar-title>
          </a>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" style="margin-left: auto;"/>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="manage_search" />
              </q-item-section>

              <q-item-section>
                Browse Projects
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                Your Investments
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="forum" />
              </q-item-section>

              <q-item-section>
                Forum
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="maps_home_work" />
              </q-item-section>

              <q-item-section>
                Create a Project
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="manage_accounts" />
              </q-item-section>

              <q-item-section>
                My Profile
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <div class="q-mx-auto" style="text-align: center;"> 
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="100px" class="q-md-sm">
              <img src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-14467.jpg?t=st=1710477496~exp=1710481096~hmac=8fcd4d3b865f0d156891451af7dd6744b338c79359a131e4f3dad36d6b4c4cab&w=740">
            </q-avatar>
            <div class="text-weight-bold">Welcome back!</div>
          </div>
        </q-img>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <p>
            Sample text
          </p>
        </q-page>
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
  }
}
</script>
