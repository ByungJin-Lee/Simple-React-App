import client from "../client";

/**
 * @typedef {object} ReadParam
 * @property {number?} id
 *
 * @param {ReadParam}
 */

export default function request(id) {
  let path = "/todo";

  if (id) path += `/${id}`;

  return new Promise((resolve, reject) => {
    client
      .get(path)
      .then((v) => resolve(v.data))
      .catch(reject);
  });
}
