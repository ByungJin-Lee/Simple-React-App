/**
 * @typedef {"normal" | "special" | "warning"} Important
 *
 * @typedef {object} IncompleteTodo
 * @property {string} title
 * @property {Important} important
 * @property {string} category
 *
 * @typedef {object} Additional
 * @property {number} id
 * @property {number} createdAt
 * @property {number} updatedAt
 *
 * @typedef {IncompleteTodo & Additional} Todo
 */

/**
 * @param {IncompleteTodo}
 * @returns {Todo} todo
 */
export default function make({
  title,
  important = "normal",
  category = "none",
}) {
  const now = Date.now();

  return {
    title,
    important,
    category,
    createdAt: now,
    updatedAt: now,
  };
}
