import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'User Question\n"Show me inventory levels"', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'user', type: 'custom', position: { x: 260, y: 50 }, data: { label: 'User Knowledge\nWest Coast Manager\n"Only show CA, OR, WA"', color: 'purple', icon: '👤', tag: 'Rule' } },
  { id: 'filter', type: 'custom', position: { x: 520, y: 50 }, data: { label: 'Auto Filter\nRegional filter applied', color: 'neutral', icon: '🔽' } },
  { id: 'result', type: 'badge', position: { x: 780, y: 70 }, data: { label: 'West Coast Only', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'user' },
  { id: 'e2', source: 'user', target: 'filter' },
  { id: 'e3', source: 'filter', target: 'result' },
];

export default function UserKnowledgeDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
