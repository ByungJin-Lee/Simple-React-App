import client from "../client";

/**
 *
 * @param {number} id
 * @returns
 */
export default function request(id) {
  if (!id) throw Error("정확한 식별자를 입력하세요.");
  return new Promise((resolve, reject) => {
    client
      .delete(`/todo/${id}`)
      .then((v) => resolve(v.data))
      .catch(reject);
  });
}
