<template>
  <div class="bg-red-400">yyds</div>
</template>

<script setup lang="ts">
import { mockWorker } from './mocks/browser'

mockWorker.start()
console.log(123)
</script>

