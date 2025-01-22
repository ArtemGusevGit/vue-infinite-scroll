import { ref, onMounted } from 'vue'

/**
 * Custom hook for handling infinite scroll functionality using the Intersection Observer API.
 * @param {Function} fetchMore - Function to fetch additional data when the observer triggers.
 * @returns {Object} Returns a target element reference and a fetching state.
 */
export function useInfiniteScroll(fetchMore) {
  /**
   * Reactive state indicating whether data is currently being fetched.
   * @type {Ref<boolean>}
   */
  const isFetching = ref(false)

  /**
   * Intersection Observer instance to detect when the target element comes into view.
   * Triggers the fetchMore function and manages the fetching state.
   * @type {IntersectionObserver}
   */
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !isFetching.value) {
      isFetching.value = true
      fetchMore().finally(() => {
        isFetching.value = false
      })
    }
  })

  /**
   * Reference to the target element for the Intersection Observer.
   * @type {Ref<HTMLElement | null>}
   */
  const target = ref(null)

  // Start observing the target element once it is mounted
  onMounted(() => {
    if (target.value) {
      observer.observe(target.value)
    }
  })

  return { target, isFetching }
}
