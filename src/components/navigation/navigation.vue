<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(true);
const rail = ref(false);
const nav = ref([
  { title: "Profile", icon: "mdi-face-man-profile", route: "/profile" },
  { title: "Home", icon: "mdi-home-city", route: "/home" },
  { title: "Users", icon: "mdi-account", route: "/users" },
  { title: "Group", icon: "mdi-account-group-outline", route: "/group" },
]);
</script>
<template>
  <v-card>
    <v-navigation-drawer
    
      v-model="drawer"
      :rail="rail"
      
      permanent
      location="left"
      :disable-resize-watcher="true"
      @click="rail = false"
    >
      <div class="d-flex justify-space-between align ma-4">
        <div>
          <div v-if="rail" class="hover">
            <v-icon> mdi-menu </v-icon>
          </div>
          <v-list-item prepend-avatar="" class="ml-10">
            <v-img
              class="rounded-lg"
              width="100"
              src="https://randomuser.me/api/portraits/men/85.jpg"
            ></v-img>
          </v-list-item>
        </div>
        <div>
          <v-btn
            variant="text"
            :icon="rail ? 'mdi-menu' : 'mdi-segment'"
            @click.stop="rail = !rail"
          ></v-btn>
        </div>
      </div>
      <!-- <v-divider></v-divider>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Admin"
        nav
      >
      </v-list-item> -->
      <v-divider></v-divider>
      <v-list density="compact" nav v-for="item in nav" :key="item.title">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.route"
        ></v-list-item>
      </v-list>
      <template v-slot:append v-if="!rail">
        <div class="pa-2">
          <v-btn block color="primary">
            logout
            <v-icon class="ml-2">mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>
<style scoped>
.hover:hover {
  cursor: pointer;
}
</style>
