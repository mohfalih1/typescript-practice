<script lang="ts" setup>
import { ref } from "vue";
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  maxWidth: "787",
  title: "Title",
  titleBtn: "Add",
  item: null,
});
const emit = defineEmits(["update:modelValue"]);

interface Props {
  modelValue: boolean;
  title?: string;
  maxWidth?: string;
  atters?: any;
  item?: any;
  titleBtn: any;
}
const isValid = ref(false);
</script>
<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        :model-value="modelValue"
        :maxWidt="maxWidth"
        @update:model-value="emit('update:modelValue', $event)"
        transition="dialog-top-transition"
        width="auto"
      >
        <v-card rounded="lg">
          <v-toolbar color="primary" class="jj">
            <div class="d-flex justify-space-between w-100 fle px-3 pt-3">
              <div>
                <h2>{{ title }}</h2>
              </div>
              <v-col>
                
              </v-col>
              <div>
                <v-btn
                  variant="tonal"
                  color="red"
                  icon
                  @click="emit('update:modelValue', false)"
                >
                  <v-icon color="red" icon="mdi-close" />
                </v-btn>
              </div>
            </div>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="isValid"></v-form>
            <div class="text-h2 pa-12">{{ item }}</div>
          </v-card-text>
          <v-col cols="12" class="text-center">
            <v-btn
              block
              rounded="lg"
              color="primary"
              variant="flat"
              class="text-h6"
              size="40"
            >
              {{ titleBtn }}
            </v-btn>
          </v-col>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<style scoped></style>
>
