import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Input
  { id: 'q', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'User Question\n"Which items are overstock?"', color: 'neutral', icon: '💬', tag: 'Input' } },

  // Knowledge application
  { id: 'query', type: 'custom', position: { x: 220, y: 50 }, data: { label: 'Query Knowledge\nOverstock = inventory > 90 days', color: 'primary', icon: '🧠', tag: 'Rule' } },

  // Processing steps
  { id: 'calc', type: 'custom', position: { x: 450, y: 50 }, data: { label: 'Calculate\ninventory_qty / avg_daily_sales', color: 'process', icon: '🔢' } },
  { id: 'filter', type: 'custom', position: { x: 670, y: 50 }, data: { label: 'Filter\nWHERE days_supply > 90', color: 'process', icon: '🔍' } },

  // Output
  { id: 'result', type: 'badge', position: { x: 890, y: 50 }, data: { label: 'Consistent Results', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'query' },
  { id: 'e2', source: 'query', target: 'calc' },
  { id: 'e3', source: 'calc', target: 'filter' },
  { id: 'e4', source: 'filter', target: 'result' },
];

export default function QueryKnowledgeDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="180px" />;
}
