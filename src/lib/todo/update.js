import client from "../client";

export default function request(obj) {
  if (Object.keys(obj).length < 1) throw Error("No Field");
  return new Promise((resolve, reject) => {
    client
      .patch("/todo", obj)
      .then((v) => resolve(v.data))
      .catch(reject);
  });
}
