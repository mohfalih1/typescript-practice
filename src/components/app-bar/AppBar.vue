<script setup lang="ts">
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
import { availableLanguages } from "@/i18n";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { locale } = useI18n();
const selectedLanguage = ref(locale.value); // initialize with current language
function changeLanguage() {
  locale.value = selectedLanguage.value; // set the new language
}
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
watch(
  () => selectedLanguage.value,
  (val) => {
    changeLanguage();
  }
);
</script>
<template>
  <v-app-bar :elevation="2">
    <template v-slot:append>
      <v-btn
        @click="toggleTheme()"
        :icon="changeIcon ? 'mdi-brightness-4' : 'mdi-brightness-6'"
      ></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>
      <label class="bg-background">AR</label>

      <v-switch
        class="mt-5 mx-2"
        v-model="selectedLanguage"
        color="primary"
        true-icon="mdi-translate"
        false-icon="mdi-translate"
        true-value="en"
        false-value="ar"
      >
      </v-switch>
      <label>EN</label>
      <v-btn icon="mdi-dots-vertical"></v-btn>
      <h1>{{ t("Add") }}</h1>
      <br />

      <h1>
        {{ t("edit") }}
      </h1>
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
