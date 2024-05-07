<template>
  <div class="bg-red-400">yyds</div>
</template>

<script setup lang="ts">
const prepare = async (): Promise<void> => {
    const { mockWorker } = await import('./mocks/browser');
    mockWorker.start();
    setTimeout(async () => {
      const response = await fetch('https://api.example.com/user')
      console.log(await response.json(), 'yyds')
    }, 100 * 3)
};

prepare()
console.log(123)
</script>

