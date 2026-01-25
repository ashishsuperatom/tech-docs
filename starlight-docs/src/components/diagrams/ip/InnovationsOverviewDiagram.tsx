import CardGrid from '../CardGrid';

// This diagram has no connections, so we use CardGrid instead of FlowDiagram
const innovations = [
  { label: 'Multi-Source Semantic Understanding\nMaking sense of disconnected data', color: 'primary' as const, icon: '🧠', tag: 'IP-1' },
  { label: 'Generative UI\nAuto-creating perfect visualizations', color: 'primary' as const, icon: '🎨', tag: 'IP-2' },
  { label: 'Tribal Knowledge System\nCapturing organizational wisdom', color: 'primary' as const, icon: '📚', tag: 'IP-3' },
  { label: 'Coding Agents for Enterprise\nAI agents that understand business', color: 'primary' as const, icon: '🤖', tag: 'IP-4' },
  { label: 'Automated Semantic Modeling\nZero-setup data understanding', color: 'primary' as const, icon: '⚙️', tag: 'IP-5' },
  { label: 'Automated Analyst\nContinuous intelligence', color: 'primary' as const, icon: '📊', tag: 'IP-6' },
];

export default function InnovationsOverviewDiagram() {
  return <CardGrid cards={innovations} columns={2} gap="16px" />;
}
