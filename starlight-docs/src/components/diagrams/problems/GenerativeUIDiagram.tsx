import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'User Question\nNatural language input', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'ai', type: 'custom', position: { x: 230, y: 50 }, data: { label: 'AI Analysis\nIntent recognition', color: 'info', icon: '🧠' } },
  { id: 'data', type: 'custom', position: { x: 460, y: 50 }, data: { label: 'Data Retrieved\nFrom connected sources', color: 'data', icon: '📊' } },
  { id: 'select', type: 'custom', position: { x: 690, y: 50 }, data: { label: 'Component Selection\n16+ visualization types', color: 'primary', icon: '🎨' } },
  { id: 'render', type: 'badge', position: { x: 920, y: 70 }, data: { label: 'Interactive UI', color: 'success', icon: '✨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'ai' },
  { id: 'e2', source: 'ai', target: 'data' },
  { id: 'e3', source: 'data', target: 'select' },
  { id: 'e4', source: 'select', target: 'render' },
];

export default function GenerativeUIDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="220px" />;
}
