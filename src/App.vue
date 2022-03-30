<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RepoItem from '@/components/RepoItem/index.vue'
import { $api } from '@/apis/index'
import { RepoItem as IRepoItem } from '@/types/index'

const repoItems = ref<IRepoItem[]>([])
const page = ref(1)

onMounted(() => {
  getRepos('franklion')
})

async function getRepos(username: string) {
  try {
    const res = await $api.repos(username, {
      page: page.value
    })
    repoItems.value = res.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url
      }
    })
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="p-4">
    <RepoItem 
      v-for="repoItem in repoItems"
      :key="repoItem.id"
      :repoItem="repoItem" 
    />
  </div>
</template>
