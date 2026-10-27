export const site = {
  name: 'Futuristic World',
  wordmark: 'FUTURISTIC WORLD',
  domain: 'futuristicworld.us',
  url: 'https://futuristicworld.us',
  tagline: 'Explore Tomorrow, Today',
  email: 'hello@futuristicworld.us',
  tips: 'tips@futuristicworld.us',
  partners: 'partners@futuristicworld.us',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/ai-news', label: 'AI News' },
  { to: '/latest-tech', label: 'Latest Tech' },
  { to: '/future-trends', label: 'Future Trends' },
  { to: '/guides', label: 'Guides' },
  { to: '/about', label: 'About' },
]

export const footerNav = [...nav, { to: '/contact', label: 'Contact' }]

export const categories = {
  'ai-news': {
    label: 'AI News',
    description:
      'Research, product shifts, and practical explainers from the AI desk at Futuristic World.',
  },
  'latest-tech': {
    label: 'Latest Tech',
    description:
      'Devices, infrastructure, space, and the engineering that moves from the lab into daily life.',
  },
  'future-trends': {
    label: 'Future Trends',
    description:
      'Industries and ideas most likely to look different five years from now, and why that matters now.',
  },
  guides: {
    label: 'Guides',
    description:
      'Short, practical guides for reading technology news and pulling a usable judgment out of it.',
  },
}

export const topics = [
  'ChatGPT',
  'On-device AI',
  'AI Agents',
  'Robotics',
  'Space Tech',
  'Quantum Computing',
  'Biotech',
  'Clean Energy',
  'Batteries',
  'Spatial Computing',
]

export const signals = [
  { label: 'Models', note: 'Useful beats theatrical', to: '/article/gpt-5-unveiled' },
  { label: 'On-device', note: 'Private by default', to: '/article/on-device-ai' },
  { label: 'Robotics', note: 'Tasks, not costumes', to: '/article/ai-robots-work' },
  { label: 'Space', note: 'Instruments first', to: '/article/nasa-life' },
  { label: 'Energy', note: 'Delivery, not slogans', to: '/article/grid-of-tomorrow' },
  { label: 'Quantum', note: 'Hardware, not hype', to: '/article/quantum-roadmap' },
]

export const perks = ['Daily Updates', 'Expert Views', 'Expert Insights', 'Exclusive Content']

export const socials = [
  { label: 'YouTube', icon: 'youtube' },
  { label: 'X', icon: 'x' },
  { label: 'Instagram', icon: 'instagram' },
  { label: 'LinkedIn', icon: 'linkedin' },
]
