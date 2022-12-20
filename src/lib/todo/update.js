import client from "../client";

export default function request(id, obj) {
  if (!id) throw Error("No id");

  if (Object.keys(obj).length < 1) throw Error("No Field");

  return new Promise((resolve, reject) => {
    client
      .patch(`/todo/${id}`, obj)
      .then((v) => resolve(v.data))
      .catch(reject);
  });
}
