import { useState } from "react";

/**
 *
 * @returns {[number, ()=> void]} [dependency, requestUpdate]
 */
export default function useUpdate() {
  const [value, setValue] = useState(0);

  const update = () => setValue((prev) => ++prev);
  // 값이 바뀌면 자동으로 Element를 다시 그리는 것을 이용함.

  return [value, update];
}
