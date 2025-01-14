<script setup>
  import { useInfiniteScroll } from '@/hooks/useInfiniteScroll.js'
  import AppSkeleton from '@/components/common/AppSkeleton.vue'

  const props = defineProps({
    onScrollEnd: Function,
  })

  const { target, isFetching } = useInfiniteScroll(props.onScrollEnd)
  const SKELETON_AMOUNT = 10
</script>

<template>
  <div
    class="scroller d-flex flex-col gap-4 pa-4 border-colored border-r-8 full-w"
  >
    <slot />
    <div ref="target" />
    <template v-if="isFetching">
      <!-- Render skeleton placeholders while fetching data -->
      <app-skeleton v-for="(skeleton, index) in SKELETON_AMOUNT" :key="index" />
    </template>
    <!-- Target element to observe for infinite scrolling -->
  </div>
</template>

<style scoped>
  .scroller {
    overflow-y: scroll;
  }
</style>
