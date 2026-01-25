import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'User Question\n"What were Q3 sales?"', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'global', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'Global Knowledge\nFiscal year starts April 1', color: 'primary', icon: '🌐', tag: 'Rule' } },
  { id: 'interpret', type: 'custom', position: { x: 500, y: 50 }, data: { label: 'Interpretation\nQ3 = Oct 1 - Dec 31', color: 'neutral', icon: '🔄' } },
  { id: 'sql', type: 'badge', position: { x: 750, y: 70 }, data: { label: 'Correct Query', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'global' },
  { id: 'e2', source: 'global', target: 'interpret' },
  { id: 'e3', source: 'interpret', target: 'sql' },
];

export default function GlobalKnowledgeDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
