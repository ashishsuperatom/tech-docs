import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'e1', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Spreadsheets\n1990s-2000s', color: 'neutral', icon: '📋', tag: 'Era 1' } },
  { id: 'e2', type: 'custom', position: { x: 240, y: 50 }, data: { label: 'BI Tools\n2000s-2010s', color: 'neutral', icon: '📊', tag: 'Era 2' } },
  { id: 'e3', type: 'custom', position: { x: 480, y: 50 }, data: { label: 'Self-Service BI\n2010s-2020s', color: 'neutral', icon: '🛠️', tag: 'Era 3' } },
  { id: 'e4', type: 'custom', position: { x: 720, y: 50 }, data: { label: 'Decision Intelligence\n2020s+', color: 'primary', icon: '🧠', tag: 'NOW' } },
];

const edges: Edge[] = [
  { id: 'e1-2', source: 'e1', target: 'e2' },
  { id: 'e2-3', source: 'e2', target: 'e3' },
  { id: 'e3-4', source: 'e3', target: 'e4' },
];

export default function MarketEvolutionDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
