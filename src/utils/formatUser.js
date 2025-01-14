/**
 * Formats user data from the API into a more convenient format for the application.
 *
 * @function formatUser
 * @param {Object} user - User object received from the API.
 * @param {Object} user.login - User login data.
 * @param {string} user.login.uuid - Unique user identifier.
 * @param {Object} user.name - User's name.
 * @param {string} user.name.first - First name.
 * @param {string} user.name.last - Last name.
 * @param {string} user.email - User's email.
 * @param {Object} user.picture - User's picture data.
 * @param {string} user.picture.thumbnail - URL of the user's thumbnail image.
 * @returns {Object} Formatted user object.
 * @returns {string} return.id - Unique user identifier.
 * @returns {string} return.name - Full name of the user (first name + last name).
 * @returns {string} return.email - User's email.
 * @returns {string} return.image - URL of the user's thumbnail image.
 *
 * @example
 * const rawUser = {
 *   login: { uuid: '12345' },
 *   name: { first: 'John', last: 'Doe' },
 *   email: 'john.doe@example.com',
 *   picture: { thumbnail: 'https://example.com/image.jpg' }
 * };
 *
 * const formattedUser = formatUser(rawUser);
 * console.log(formattedUser);
 * // {
 * //   id: '12345',
 * //   name: 'John Doe',
 * //   email: 'john.doe@example.com',
 * //   image: 'https://example.com/image.jpg'
 * // }
 */
export const formatUser = user => {
  return {
    id: user.login.uuid,
    name: user.name.first + ' ' + user.name.last,
    email: user.email,
    image: user.picture.thumbnail,
  }
}
