import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'query', type: 'custom', position: { x: 0, y: 160 }, data: { label: 'User Question\nAsks a question', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'engine', type: 'custom', position: { x: 240, y: 160 }, data: { label: 'Knowledge Engine\nMatch & merge', color: 'primary', icon: '🧠' } },

  // Levels
  { id: 'l1', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'Global Level\nApplies to ALL users, ALL queries', color: 'info', icon: '🌐', tag: 'L1' } },
  { id: 'l2', type: 'custom', position: { x: 480, y: 140 }, data: { label: 'User Level\nApplies to SPECIFIC users', color: 'purple', icon: '👤', tag: 'L2' } },
  { id: 'l3', type: 'custom', position: { x: 480, y: 280 }, data: { label: 'Query Level\nApplies to SPECIFIC questions', color: 'pink', icon: '🎯', tag: 'L3' } },

  { id: 'context', type: 'custom', position: { x: 720, y: 140 }, data: { label: 'Contextualized Query\nAll rules applied', color: 'neutral', icon: '📋' } },
  { id: 'answer', type: 'badge', position: { x: 960, y: 160 }, data: { label: 'Accurate Answer', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'query', target: 'engine' },
  { id: 'e2', source: 'engine', target: 'l1' },
  { id: 'e3', source: 'engine', target: 'l2' },
  { id: 'e4', source: 'engine', target: 'l3' },
  { id: 'e5', source: 'l1', target: 'context' },
  { id: 'e6', source: 'l2', target: 'context' },
  { id: 'e7', source: 'l3', target: 'context' },
  { id: 'e8', source: 'context', target: 'answer' },
];

export default function TribalKnowledgeLevelsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="440px" />;
}
