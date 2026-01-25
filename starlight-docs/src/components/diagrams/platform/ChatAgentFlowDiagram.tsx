import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'user', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'User Question\nNatural language', color: 'primary', icon: '💬', tag: 'Input' } },
  { id: 'ai', type: 'custom', position: { x: 220, y: 50 }, data: { label: 'AI Processing\nIntent recognition', color: 'neutral', icon: '🧠' } },
  { id: 'sql', type: 'custom', position: { x: 440, y: 50 }, data: { label: 'SQL Generated\nQuery optimization', color: 'neutral', icon: '📝' } },
  { id: 'data', type: 'custom', position: { x: 660, y: 50 }, data: { label: 'Data Retrieved\nFrom sources', color: 'neutral', icon: '📊' } },
  { id: 'viz', type: 'custom', position: { x: 880, y: 50 }, data: { label: 'Visualization\nAuto-selected', color: 'neutral', icon: '🎨' } },
  { id: 'stream', type: 'badge', position: { x: 1100, y: 70 }, data: { label: 'Response', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'user', target: 'ai' },
  { id: 'e2', source: 'ai', target: 'sql' },
  { id: 'e3', source: 'sql', target: 'data' },
  { id: 'e4', source: 'data', target: 'viz' },
  { id: 'e5', source: 'viz', target: 'stream' },
];

export default function ChatAgentFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
