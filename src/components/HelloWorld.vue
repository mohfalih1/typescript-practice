<script setup lang="ts">
import axios from "@/plugins/axios";
import Dialog from "@/components/Dialog.vue";
import { ref } from "vue";
const testAPI = async () => {
  loadBtn.value = true;
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  axios
    .post("/posts", {
      test: "string",
    })
    .then(() => {
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
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <textarea v-model="message"></textarea>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            color="primary"
            @click="isDialog = true"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :loading="loadBtn"
          >
            <v-icon icon="mdi-speedometer" size="large" start />

            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <Dialog v-model="isDialog" title="Global Dialog" :item="item" />
</template>
