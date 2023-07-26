export function showElement(
  ref: React.MutableRefObject<undefined | HTMLElement | null>
) {
  if (ref.current) ref.current.classList.add("fade-in");
}

export function showGroupElements(
  ref: React.MutableRefObject<undefined | HTMLElement | null>
) {
  if (ref.current) {
    const children = ref.current.children;
    Array.from(children).forEach((child) => child.classList.add("fade-in"));
  }
}
