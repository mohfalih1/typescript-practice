<script setup lang="ts">
import axios from "@/plugins/axios";
import Dialog from "@/components/Dialog.vue";
import TextField from "@/components/inputs/TextField.vue";
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();
import { inject } from "vue";
const t = inject("t");
// import TestTs from "@/components/TestTS.vue";
import { ref } from "vue";
// import { is } from "@babel/types";
const testAPI = async () => {
  loadBtn.value = true;
  // isDialog.value = true;
  // axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  axios.defaults.baseURL = "http://localhost:1337/api";
  axios.get("/").then(() => {
    loadBtn.value = false;
  });
};
const message = ref<string>();
const loadBtn = ref<boolean>(false);
const isDialog = ref<boolean>(false);
const item = ref([{ data: "hi data dialog" }]);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <!-- <span>Multiline message is:</span> -->
      <p style="white-space: pre-line">{{ item[0].data }}</p>
      <!-- <textarea v-model="message"></textarea> -->
      <v-row>
        <v-col>
          <TextField
            :modelValue="message"
            @update:modelValue="(newValue) => (message = newValue)"
            :TextField="{
              title: 'ddd',
              label: 'Email',
              placeholder: 'Enter your email',
            }"
          />
        </v-col>
        <div>
          {{ t("welcome") }}
        </div>
        <!-- <TestTs></TestTs> -->
      </v-row>
      <!-- dialog start  -->
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            color="primary"
            @click="testAPI()"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :loading="loadBtn"
          >
            <v-icon icon="mdi-speedometer" size="large" start />
            <!-- {{ t("test") }} -->
            Get Started
          </v-btn>
        </v-col>
      </v-row>
      <!-- dialog end  -->
    </v-responsive>
  </v-container>
  <Dialog v-model="isDialog" title="hello Dialog" :item="item" />
</template>
