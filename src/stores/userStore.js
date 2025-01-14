import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBaseUrl } from '@/utils/getBaseUrl.js'
import { formatUser } from '@/utils/formatUser.js'

/**
 * Pinia store for managing user data.
 * @returns {Object} Exposes the fetchUsers method and the users state.
 */
export const useUserStore = defineStore('user', () => {
  /**
   * State to store the list of users.
   * @type {Ref<Object[]>}
   */
  const users = ref([])

  /**
   * Current page for paginated user data.
   * @type {Ref<number>}
   */
  const page = ref(1)

  /**
   * Fetches a paginated list of users from the API.
   * On success, adds formatted users to the state and increments the page.
   * Logs an error if the request fails.
   * @async
   * @function
   * @throws {Error} If the API request fails or returns an error status.
   */
  const fetchUsers = async () => {
    try {
      const url = `${getBaseUrl()}/api/?page=${page.value}&results=10`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.status === 'error') {
        throw new Error(data.message)
      }

      const results = data.results

      if (results.length > 0) {
        results.forEach(user => users.value.push(formatUser(user)))
        page.value++
      }
    } catch (e) {
      console.error(e)
    }
  }

  return { fetchUsers, users }
})
