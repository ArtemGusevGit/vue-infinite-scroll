<script setup>
  import userImageDefault from '@/assets/images/user-profile-img.png'

  defineProps({
    image: String,
  })
</script>

<template>
  <img
    class="user-img border-r-12"
    :src="image || userImageDefault"
    alt="User Avatar"
  />
</template>

<style scoped>
  .user-img {
    width: 48px;
    height: 48px;
  }
</style>
