<template>
  <v-app>
    <v-main>
      <!-- <AppBar />
      <Navigation />
      <HelloWorld/> -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "./components/navigation/navigation.vue";
import AppBar from "@/components/app-bar/AppBar";
</script>
