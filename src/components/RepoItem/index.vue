<script setup lang="ts">
import { PropType } from 'vue';
import { RepoItem } from '@/types/index'

const props = defineProps({
  repoItem: {
    type: Object as PropType<RepoItem>,
    required: true
  }
})
</script>

<template>
  <div class="mb-2 border px-2 py-3 break-all">
    <div class="font-bold">
      {{ props.repoItem.name }}
    </div>
    <div>
      {{ props.repoItem.description }}
    </div>
    <a 
      class="text-blue-500 underline"
      :href="props.repoItem.html_url"
      target="_blank"
      rel="noreferrer noopener"
    >
      {{ props.repoItem.html_url }}  
    </a>
  </div>
</template>
