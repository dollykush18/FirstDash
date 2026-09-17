import {
  Circle,
  Coffee,
  Eye,
  Gem,
  Layers,
  LayoutGrid,
  MessageSquare,
  MessagesSquare,
  PenTool,
  PhoneCall,
  Rocket,
  Scissors,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Sparkles,
  Star,
  Stethoscope,
  Store,
  Target,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';

/* ==========================================================================
   ICON REGISTRY
   --------------------------------------------------------------------------
   Data files reference icons by name (plain strings, no JSX). Each icon is
   imported explicitly here so the bundler only ships the ones actually used
   instead of the entire Lucide library.

   TO USE A NEW ICON: import it above, add it to the map below, then use its
   name in any data file.
   ========================================================================== */

const registry = {
  Circle,
  Coffee,
  Eye,
  Gem,
  Layers,
  LayoutGrid,
  MessageSquare,
  MessagesSquare,
  PenTool,
  PhoneCall,
  Rocket,
  Scissors,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Sparkles,
  Star,
  Stethoscope,
  Store,
  Target,
  UtensilsCrossed,
  Zap,
};

export default function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const Cmp = registry[name] || Circle;
  return <Cmp className={className} aria-hidden="true" focusable="false" {...rest} />;
}
