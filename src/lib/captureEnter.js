export default function captureEnter(callback) {
  return (e) => {
    if (e.key === "Enter") callback();
  };
}
