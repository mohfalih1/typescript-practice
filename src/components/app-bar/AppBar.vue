<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
const changeIcon = ref(false);

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  if (theme.global.name.value === "light") {
    changeIcon.value = true;
  } else {
    changeIcon.value = false;
  }
}
</script>
<template>
  <v-app-bar :elevation="2">
    <template v-slot:append>
      <v-btn
        @click="toggleTheme()"
        :icon="changeIcon ? 'mdi-brightness-4' : 'mdi-brightness-6'"
      ></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
    <template v-slot:default>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Admin"
        nav
      >
      </v-list-item>
    </template>
  </v-app-bar>
</template>
