<script setup lang="ts">
const props = defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="mb-4">
    <h1 class="text-xl font-bold">
      <a 
        class="text-blue-500 underline"
        href="https://github.com/YWoooo/neutec-test"
        target="_blank"
        rel="noreferrer noopener"
      >
        張育維-neutec-前端面試前測作業
      </a>
    </h1>
    <div class="mt-4">
      Github Page 網址
      <a 
        class="text-blue-500 underline"
        href="https://ywoooo.github.io/neutec-test/"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://ywoooo.github.io/neutec-test/
      </a>      
    </div>    
    <div>
      串接的是 {{ props.username }} 的 repo
      <a 
        class="text-blue-500 underline"
        :href="`https://github.com/${username}?tab=repositories`"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://github.com/{{ props.username }}?tab=repositories
      </a>
    </div>  
    <div>
      專案本機啟動方式: yarn dev
    </div>
    <div class="mt-2">
      <a 
        class="text-blue-500 underline"
        href="https://drive.google.com/file/d/1CEGNp5QSmMG0xJpuflro-8ob2VDomQsk/view"
        target="_blank"
        rel="noreferrer noopener"
      >
        Resume
      </a>
    </div>
    <a 
      class="text-blue-500 underline"
      href="mailto:ywchangsmail@gmail.com">
      ywchangsmail@gmail.com
    </a>
  </div>
  <div class="mb-2 text-xl">
    {{ props.username }} repo list:
  </div>
</template>
