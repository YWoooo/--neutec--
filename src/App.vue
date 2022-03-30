<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Infos from '@/components/Infos/index.vue'
import RepoItem from '@/components/RepoItem/index.vue'
import { $api } from '@/apis/index'
import { RepoItem as IRepoItem } from '@/types/index'

const repoItems = ref<IRepoItem[]>([])
const username = 'franklion'
const page = ref(1)
const isNoMoreRepo = ref(false)

onMounted(async () => {
  await getRepos(username)
  setIo()
})

async function getRepos(username: string) {
  try {
    const res = await $api.repos(username, {
      page: page.value
    })
    const newItems = res.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url
      }
    })
    if (!newItems.length) {
      page.value--
      isNoMoreRepo.value = true
      return
    }
    repoItems.value = [...repoItems.value, ...newItems]
  } catch (e) {
    console.error(e)
  }
}

function setIo () {
  const io = new IntersectionObserver((entries) => {
    if (isNoMoreRepo.value) {
      io.disconnect()
      return
    }
    const isBottom = entries[0].isIntersecting
    if (isBottom) {
      page.value++
      getRepos(username)
    }
  })
  const bottom = document.getElementsByClassName('bottom')[0]
  io.observe(bottom)
}
</script>

<template>
  <div class="p-4">
    <Infos :username="username" />
    <RepoItem 
      v-for="repoItem in repoItems"
      :key="repoItem.id"
      :repoItem="repoItem" 
      data-test="repo-item"
    />
    <div class="bottom h-3" />
  </div>
</template>
