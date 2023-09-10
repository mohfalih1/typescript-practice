<script setup lang="ts">
import axios from "@/plugins/axios";
import Dialog from "@/components/Dialog.vue";
import TextField from "@/components/inputs/TextField.vue";
import { ref } from "vue";
import { is } from "@babel/types";
const testAPI = async () => {
  loadBtn.value = true;
  isDialog.value = true;
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  // axios.defaults.baseURL = "http://localhost:1337/api";
  axios.post("/post").then(() => {
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
          <TextField />
        </v-col>
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

            Get Started
          </v-btn>
        </v-col>
      </v-row>
      <!-- dialog end  -->
    </v-responsive>
  </v-container>
  <Dialog v-model="isDialog" title="hello Dialog" :item="item" />
</template>
