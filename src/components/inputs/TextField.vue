<script setup lang="ts">
import { defineProps } from "vue";
defineEmits(["update:modelValue"]);
interface textFieldProps {
  title: string;
  label: string;
  placeholder: string;
  value: any;
  modelValue: any;
  rules: any;
}

const props = defineProps<{
  TextField: textFieldProps;
}>();
</script>
<template>
  <div>
    <v-text-field
      :modelValue="TextField.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :label="TextField.label"
      :placeholder="TextField.placeholder"
      :rules="TextField.rules"
      variant="outlined"
    ></v-text-field>
  </div>
</template>

<style scoped></style>
