export const communities = [
  { id: 1, name: 'Code Collective', category: 'Technology', members: '1,240 members', description: 'Build, learn and ship projects with student developers.', accent: 'cyan' },
  { id: 2, name: 'Design Circle', category: 'Creative', members: '680 members', description: 'For UI/UX, visual design and creative problem solving.', accent: 'violet' },
  { id: 3, name: 'Sports Arena', category: 'Sports', members: '920 members', description: 'Find teammates, campus games and fitness communities.', accent: 'emerald' },
  { id: 4, name: 'Startup Society', category: 'Entrepreneurship', members: '510 members', description: 'Meet founders and turn student ideas into products.', accent: 'amber' }
]

export function fetchCommunities() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(communities), 900)
  })
}
