/**
 * Returns the base URL depending on the environment.
 *
 * @function getBaseUrl
 * @returns {string} The base URL for the content endpoint.
 * If the environment is development, it returns the URL from the environment variable `VITE_CONTENT_ENDPOINT_URL`,
 * otherwise, it returns an empty string.
 */
export const getBaseUrl = () => {
  const isDev = import.meta.env.MODE === 'development'
  return isDev ? import.meta.env.VITE_CONTENT_ENDPOINT_URL : ''
}
