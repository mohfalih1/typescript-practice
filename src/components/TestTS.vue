<script setup lang="ts">
type stringOrNumber = string | number;
let test: stringOrNumber = 1 ;
test = 22
</script>
<template>
  <div>
    <h1>{{ test }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
