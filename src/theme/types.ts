export function applyTheme() {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
  }
}
