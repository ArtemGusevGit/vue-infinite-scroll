<script setup>
  import AppAvatar from '@/components/common/AppAvatar.vue'

  defineProps({
    image: String,
    name: String,
    email: String,
  })
</script>

<template>
  <div
    class="user-card border-r-8 full-w d-flex gap-8 border-colored unreachable"
  >
    <app-avatar :image="image" alt="User Photo" />
    <div class="user-card__info hidden">
      <h3 class="text-bold text-ellipsis text-no-wrap hidden">
        {{ name }}
      </h3>
      <p class="text-ellipsis text-no-wrap hidden">{{ email }}</p>
    </div>
  </div>
</template>

<style scoped>
  .user-card {
    padding: 5px 4px;
  }
</style>
