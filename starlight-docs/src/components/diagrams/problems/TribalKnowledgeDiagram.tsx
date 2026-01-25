import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Input
  { id: 'q', type: 'custom', position: { x: 0, y: 160 }, data: { label: 'User Query\n"What are our sales?"', color: 'neutral', icon: '💬', tag: 'Input' } },

  // Engine
  { id: 'tk', type: 'custom', position: { x: 240, y: 160 }, data: { label: 'Tribal Knowledge\nEngine', color: 'primary', icon: '🧠' } },

  // Knowledge Levels
  { id: 'l1', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'Global Level\nApplies to entire org', color: 'info', icon: '🌐', tag: 'L1' } },
  { id: 'l2', type: 'custom', position: { x: 480, y: 140 }, data: { label: 'User Level\nSpecific to individual', color: 'purple', icon: '👤', tag: 'L2' } },
  { id: 'l3', type: 'custom', position: { x: 480, y: 280 }, data: { label: 'Query Level\nAttached to questions', color: 'pink', icon: '🎯', tag: 'L3' } },

  // Processing
  { id: 'context', type: 'custom', position: { x: 720, y: 140 }, data: { label: 'Contextualized Query\nOrg-specific rules applied', color: 'data', icon: '📋' } },

  // Output
  { id: 'answer', type: 'badge', position: { x: 960, y: 160 }, data: { label: 'Accurate Answer', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'tk' },
  { id: 'e2', source: 'tk', target: 'l1' },
  { id: 'e3', source: 'tk', target: 'l2' },
  { id: 'e4', source: 'tk', target: 'l3' },
  { id: 'e5', source: 'l1', target: 'context' },
  { id: 'e6', source: 'l2', target: 'context' },
  { id: 'e7', source: 'l3', target: 'context' },
  { id: 'e8', source: 'context', target: 'answer' },
];

export default function TribalKnowledgeDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="440px" />;
}
