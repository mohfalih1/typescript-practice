<!-- <template>
  <v-main>
    <router-view >
      
    </router-view>
  </v-main>
</template> -->

<script lang="ts" setup>
  import AppBar from '@/components/app-bar/AppBar.vue';
</script>
<template>
<div>
    <v-main>
        <AppBar v-if="!$route.meta.hideNavigation"/>
        <transition name="router-anim" enter-active-class="animated zoomIn">
                <v-container fluid v-if="!$route.meta.hideNavigation">
                    <router-view :key="$route.path" />
                </v-container>
                <router-view :key="$route.path" v-else />
        </transition>
    </v-main>
</div>
</template>


