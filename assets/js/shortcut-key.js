// The previous behavior inserted a visible "⌘ k" hint into the
// #search-toggle element which we don't want in the navbar UI.
// Keep the script present (non-destructive) but avoid injecting
// any text — leave only the icon that the header template already provides.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      // Ensure the element contains only the search icon markup.
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i>';
    }
  }
});
