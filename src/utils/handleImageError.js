export default function handleImageError(event) {
  const img = event.currentTarget;
  if (img.dataset.errorHandled === "true") {
    return;
  }
  img.dataset.errorHandled = "true";
  img.style.visibility = "hidden";
  console.error(`Failed to load image: ${img.getAttribute("src")}`);
}
