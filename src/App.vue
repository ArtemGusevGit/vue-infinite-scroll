<script setup>
  import { useUserStore } from '@/stores/userStore.js'
  import AppSkeleton from '@/components/common/AppSkeleton.vue'
  import AppScroller from '@/components/common/AppScroller.vue'
  import AppCard from '@/components/common/AppCard.vue'

  const { fetchUsers, users } = useUserStore()
</script>

<template>
  <main class="main d-flex flex-col gap-8 margin-center">
    <app-skeleton class="header-skeleton flex-1" />
    <div class="d-flex gap-8">
      <app-scroller class="scroller" :on-scroll-end="fetchUsers">
        <app-card v-for="item in users" :key="item.id" v-bind="item" />
      </app-scroller>
      <app-skeleton class="content-skeleton" />
    </div>
    <app-skeleton class="footer-skeleton flex-1" />
  </main>
</template>

<style scoped>
  .main {
    max-width: 1600px;
    padding: 12px 24px;
    height: 100vh;
  }

  .scroller {
    flex-shrink: 2;
    height: 450px;
  }

  .content-skeleton {
    flex-shrink: 1.5;
  }

  @media (max-width: 744px) {
    .content-skeleton {
      display: none;
    }
  }
</style>
