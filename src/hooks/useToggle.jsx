import { useState } from "react";

/**
 *
 * @param {boolean | undefined} opened
 * @returns {[boolean, () => void]}
 */
export default function useToggle(opened = false) {
  const [open, setOpen] = useState(opened);
  return [open, () => setOpen((prev) => !prev)];
}
