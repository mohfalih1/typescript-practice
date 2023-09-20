<template>
  <!-- <transition name="fade" mode="out-in"> -->
    <v-app slide-y-transition>
      <v-main>
        <!-- <AppBar />
      <Navigation />
      <HelloWorld/> -->
        <RouterView />
      </v-main>
    </v-app>
  <!-- </transition> -->
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "./components/navigation/navigation.vue";
import AppBar from "@/components/app-bar/AppBar";
</script>
<style>
html {
  scroll-behavior: smooth;
  transition-duration: 1000ms;
}
</style>
