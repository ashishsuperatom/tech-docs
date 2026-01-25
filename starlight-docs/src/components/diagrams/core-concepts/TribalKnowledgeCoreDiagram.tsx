import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'question', type: 'custom', position: { x: 0, y: 140 }, data: { label: 'User Question\nNatural language', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'engine', type: 'custom', position: { x: 240, y: 140 }, data: { label: 'Knowledge Engine\nMatch & merge', color: 'primary', icon: '🧠' } },

  // Knowledge levels
  { id: 'g', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'Global Level\nOrg-wide rules', color: 'info', icon: '🌐', tag: 'L1' } },
  { id: 'u', type: 'custom', position: { x: 480, y: 130 }, data: { label: 'User Level\nRole preferences', color: 'purple', icon: '👤', tag: 'L2' } },
  { id: 'q', type: 'custom', position: { x: 480, y: 260 }, data: { label: 'Query Level\nSpecific definitions', color: 'pink', icon: '🎯', tag: 'L3' } },

  { id: 'answer', type: 'badge', position: { x: 720, y: 140 }, data: { label: 'Contextualized Answer', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'question', target: 'engine' },
  { id: 'e2', source: 'engine', target: 'g' },
  { id: 'e3', source: 'engine', target: 'u' },
  { id: 'e4', source: 'engine', target: 'q' },
  { id: 'e5', source: 'g', target: 'answer' },
  { id: 'e6', source: 'u', target: 'answer' },
  { id: 'e7', source: 'q', target: 'answer' },
];

export default function TribalKnowledgeCoreDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="420px" />;
}
