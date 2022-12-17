import { useState } from "react";

/**
 *
 * @param {string} initialValue
 * @returns {[string, (e: Event)=>void, ()=>void]} [value, handleValue, clear]
 */
export default function useInput(initialValue = "") {
  const [txt, setTxt] = useState(initialValue);

  return [
    txt,
    (e) => {
      if (e) setTxt(e.target.value);
    },
    () => {
      setTxt("");
    },
  ];
}
