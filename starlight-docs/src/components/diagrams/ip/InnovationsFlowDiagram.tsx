import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 140 }, data: { label: 'Enterprise Data\nMultiple sources', color: 'neutral', icon: '🗄️', tag: 'Source' } },
  { id: 'sm', type: 'custom', position: { x: 240, y: 140 }, data: { label: 'Semantic Modeling\nUnderstand the data', color: 'primary', icon: '🔍', tag: 'IP-1' } },
  { id: 'tk', type: 'custom', position: { x: 480, y: 140 }, data: { label: 'Tribal Knowledge\nAdd org context', color: 'primary', icon: '🧠', tag: 'IP-2' } },
  { id: 'ca', type: 'custom', position: { x: 720, y: 60 }, data: { label: 'Coding Agents\nProcess complex queries', color: 'primary', icon: '🤖', tag: 'IP-3' } },
  { id: 'aa', type: 'custom', position: { x: 720, y: 220 }, data: { label: 'Automated Analyst\nContinuous monitoring', color: 'primary', icon: '📊', tag: 'IP-4' } },
  { id: 'gui', type: 'custom', position: { x: 960, y: 140 }, data: { label: 'Generative UI\nPerfect visualizations', color: 'success', icon: '🎨' } },
  { id: 'user', type: 'badge', position: { x: 1200, y: 160 }, data: { label: 'Business Users', color: 'success', icon: '👤' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'sm' },
  { id: 'e2', source: 'sm', target: 'tk' },
  { id: 'e3', source: 'tk', target: 'ca' },
  { id: 'e4', source: 'tk', target: 'aa' },
  { id: 'e5', source: 'ca', target: 'gui' },
  { id: 'e6', source: 'aa', target: 'gui' },
  { id: 'e7', source: 'gui', target: 'user' },
];

export default function InnovationsFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="380px" />;
}
