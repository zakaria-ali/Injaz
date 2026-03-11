/**
 * Public asset URL with base path for GitHub Pages (/Injaz/) or root (/).
 * Use for all assets in the public folder (images, PDFs, videos, files).
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/'
  const clean = (path || '').replace(/^\//, '')
  return base + clean
}
