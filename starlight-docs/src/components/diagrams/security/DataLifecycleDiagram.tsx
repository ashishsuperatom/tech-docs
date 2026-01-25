import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Your Data\nSource databases', color: 'neutral', icon: '📊', tag: 'Input' } },
  { id: 'process', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Ephemeral Processing\nIn-memory analysis', color: 'info', icon: '⚡' } },
  { id: 'result', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Results Returned', color: 'success', icon: '📤' } },
  { id: 'delete', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Data Deleted', color: 'primary', icon: '🗑️' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'process' },
  { id: 'e2', source: 'process', target: 'result' },
  { id: 'e3', source: 'process', target: 'delete' },
];

export default function DataLifecycleDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="280px" direction="LR" />;
}
