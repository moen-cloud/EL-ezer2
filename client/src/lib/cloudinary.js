// Cloudinary URL builder for optimized image and video delivery
// Replace 'your-cloud-name' with your actual Cloudinary cloud name

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD || 'your-cloud-name'

/**
 * Build a Cloudinary image URL with optional transformations
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options (w, h, q, f, etc.)
 * @returns {string} Optimized Cloudinary image URL
 */
export function cld(publicId, options = {}) {
  const params = new URLSearchParams()
  
  // Set sensible defaults for web optimization
  params.set('f', options.f || 'auto') // Auto format (WebP, AVIF, etc.)
  params.set('q', options.q || 'auto') // Auto quality
  
  // Add custom options
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && key !== 'f' && key !== 'q') {
      params.set(key, value)
    }
  })
  
  const queryString = params.toString()
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${queryString}/${publicId}`
  return url
}

/**
 * Build a Cloudinary video URL with optional transformations
 * @param {string} publicId - The public ID of the video in Cloudinary
 * @param {object} options - Transformation options (w, h, q, etc.)
 * @returns {string} Optimized Cloudinary video URL
 */
export function cldVideo(publicId, options = {}) {
  const params = new URLSearchParams()
  
  // Set sensible defaults for web video
  params.set('f', options.f || 'auto')
  params.set('q', options.q || 'auto')
  
  // Add custom options
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined && key !== 'f' && key !== 'q') {
      params.set(key, value)
    }
  })
  
  const queryString = params.toString()
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${queryString}/${publicId}.mp4`
  return url
}
