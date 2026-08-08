// Cloudinary URL builder for optimized image and video delivery

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'debhmwj73'

// Cloudinary transformations belong in the URL path as comma-separated
// key_value pairs (e.g. f_auto,q_auto,w_500) — NOT as a query string.
function buildTransformString(options) {
  const transformations = []

  transformations.push(`f_${options.f || 'auto'}`)
  transformations.push(`q_${options.q || 'auto'}`)

  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && key !== 'f' && key !== 'q') {
      transformations.push(`${key}_${value}`)
    }
  })

  return transformations.join(',')
}

// Folder names in Cloudinary can contain spaces (e.g. "case studies").
// Encode each path segment individually so spaces and other special
// characters don't break the URL, while keeping the "/" separators intact.
function encodePublicId(publicId) {
  return publicId
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

/**
 * Build a Cloudinary image URL with optional transformations
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options (w, h, q, f, etc.)
 * @returns {string} Optimized Cloudinary image URL
 */
export function cld(publicId, options = {}) {
  const transformString = buildTransformString(options)
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${encodePublicId(publicId)}`
}

/**
 * Build a Cloudinary video URL with optional transformations
 * @param {string} publicId - The public ID of the video in Cloudinary
 * @param {object} options - Transformation options (w, h, q, etc.)
 * @returns {string} Optimized Cloudinary video URL
 */
export function cldVideo(publicId, options = {}) {
  const transformString = buildTransformString(options)
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transformString}/${encodePublicId(publicId)}.mp4`
}