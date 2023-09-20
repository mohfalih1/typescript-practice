<script setup lang="ts">
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import TextField from "@/components/inputs/TextField.vue";
const appStore = useAppStore();
const dialog = ref(true);
const valid = ref(true);
const loginPassword = ref("");
const loginEmail = ref("");
const loadingBtn = ref(false);
const test = ref();
const show1 = ref(false);
const rememberMe = ref(false);
const isEmailValid = (email: any) => {
  return appStore.EmailRules.every((rule: any) => rule(email) === true);
};
const emailIcon = computed(() => {
  return isEmailValid(loginEmail.value) ? "mdi-email" : "mdi-email-off";
});
const iconColorEmail = computed(() => {
  return isEmailValid(loginEmail.value) ? "green" : "red";
});
const isPasswordValid = (pwd: any) => {
  return appStore.passwordRules.every((rule: any) => rule(pwd) === true);
};
const passwordIconColor = computed(() => {
  return isPasswordValid(loginPassword.value) ? "green" : "red";
});
const validate = () => {
  if (this.$refs.loginForm.validate()) {
    // submit form to server/API here...
  }
};
</script>
<template>
  <div id="app">
    <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
          <v-card class="px-4 py-3" rounded="lg" elevation="10">
            <v-card-title>
              <v-continer>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                  max-height="100"
                  max-width="100"
                  class="mx-auto"
                ></v-img>
              </v-continer>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text>
              <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <!-- <TextField
                      :modelValue="test"
                      @update:modelValue="(newValue) => (test = newValue)"
                      :TextField="{
                        title: 'ddd',
                        label: 'label',
                        placeholder: 'placeholder',
                      }"
                    ></TextField> -->
                    <v-text-field
                      v-model="loginEmail"
                      :rules="appStore.EmailRules"
                      label="E-mail"
                      placeholder="example@gmail.com"
                      required
                      variant="outlined"
                    >
                      <template v-slot:append>
                        <v-icon size="30" :color="iconColorEmail">{{
                          emailIcon
                        }}</v-icon>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginPassword"
                      :rules="appStore.passwordRules"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      variant="outlined"
                      required
                    >
                      <template v-slot:append>
                        <v-icon
                          @click="show1 = !show1"
                          size="30"
                          :color="passwordIconColor"
                          >{{ show1 ? "mdi-eye" : "mdi-eye-off" }}</v-icon
                        >
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-spacer acer></v-spacer>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="rememberMe"
                      label="Remember me"
                      color="primary"
                      hide-details
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="12" xsm="12" align-end>
                    <v-btn
                      x-large
                      block
                      :loading="loadingBtn"
                      :disabled="!valid"
                      color="primary"
                      @click="validate()"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
      </v-dialog>
    </v-app>
  </div>
</template>
