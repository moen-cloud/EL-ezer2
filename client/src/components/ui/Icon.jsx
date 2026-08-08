import {
  Cpu,
  GraduationCap,
  HandHeart,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Mail,
  Megaphone,
  PenTool,
  Rocket,
  Scale,
  Search,
  Share2,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
  Workflow,
} from 'lucide-react'

// Explicit map (rather than `import * as Icons`) so unused lucide icons get
// tree-shaken out of the production bundle instead of all ~1,500 shipping.
// Using an icon that isn't listed here yet? Import it above and add it below.
const ICONS = {
  Cpu,
  GraduationCap,
  HandHeart,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Mail,
  Megaphone,
  PenTool,
  Rocket,
  Scale,
  Search,
  Share2,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
  Workflow,
}

/**
 * Generic icon component that maps string names to lucide-react icons
 */
export default function Icon({ name, className = 'h-6 w-6', ...props }) {
  // Convert kebab-case to PascalCase (e.g., 'arrow-right' -> 'ArrowRight'),
  // in case a name is ever passed that way. Current data already uses
  // PascalCase directly, so this is a no-op for those, kept for safety.
  const iconName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const IconComponent = ICONS[iconName]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Add it to the ICONS map in Icon.jsx.`)
    return null
  }

  return <IconComponent className={className} {...props} />
}