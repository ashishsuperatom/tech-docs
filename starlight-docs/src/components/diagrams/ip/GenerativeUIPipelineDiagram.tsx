import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'User Question\n"Show me top products"', color: 'primary', icon: '💬', tag: 'Input' } },
  { id: 'understand', type: 'custom', position: { x: 220, y: 100 }, data: { label: 'Understand\nParse intent & entities', color: 'neutral', icon: '🧠', tag: '1' } },
  { id: 'query', type: 'custom', position: { x: 440, y: 100 }, data: { label: 'Query\nGenerate & execute SQL', color: 'neutral', icon: '📝', tag: '2' } },
  { id: 'analyze', type: 'custom', position: { x: 660, y: 100 }, data: { label: 'Analyze\nProfile result data', color: 'neutral', icon: '📊', tag: '3' } },
  { id: 'select', type: 'custom', position: { x: 880, y: 100 }, data: { label: 'Select\nChoose component', color: 'neutral', icon: '🎯', tag: '4' } },
  { id: 'configure', type: 'custom', position: { x: 1100, y: 100 }, data: { label: 'Configure\nSet parameters', color: 'neutral', icon: '⚙️', tag: '5' } },
  { id: 'render', type: 'badge', position: { x: 1320, y: 120 }, data: { label: 'Interactive UI', color: 'success', icon: '✨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'understand' },
  { id: 'e2', source: 'understand', target: 'query' },
  { id: 'e3', source: 'query', target: 'analyze' },
  { id: 'e4', source: 'analyze', target: 'select' },
  { id: 'e5', source: 'select', target: 'configure' },
  { id: 'e6', source: 'configure', target: 'render' },
];

export default function GenerativeUIPipelineDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="280px" />;
}
