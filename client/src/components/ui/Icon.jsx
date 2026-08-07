import * as Icons from 'lucide-react'

/**
 * Generic icon component that maps string names to lucide-react icons
 */
export default function Icon({ name, className = 'h-6 w-6', ...props }) {
  // Convert kebab-case to PascalCase (e.g., 'arrow-right' -> 'ArrowRight')
  const iconName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const IconComponent = Icons[iconName]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }

  return <IconComponent className={className} {...props} />
}
