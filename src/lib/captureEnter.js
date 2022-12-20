export default function captureEnter(callback) {
  return (e) => {
    if (!e.isComposing && e.key === "Enter") callback();
  };
}
