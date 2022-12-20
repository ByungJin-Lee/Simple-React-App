import create from "./create";
import read from "./read";
import del from "./delete";
import update from "./update";

const Repo = {
  create,
  read,
  del,
  update: (id, obj) => {
    return update(id, {
      ...obj,
      updatedAt: Date.now(),
    });
  },
};

export default Repo;
