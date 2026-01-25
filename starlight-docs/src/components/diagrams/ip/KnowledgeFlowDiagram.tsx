import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Input stage
  { id: 'q', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'User Query\nNatural language input', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'parse', type: 'custom', position: { x: 160, y: 100 }, data: { label: 'Parse Question\nIntent extraction', color: 'process', icon: '🔍' } },
  { id: 'match', type: 'custom', position: { x: 320, y: 100 }, data: { label: 'Match Knowledge\nFind relevant nodes', color: 'process', icon: '🎯' } },

  // Knowledge levels
  { id: 'm1', type: 'custom', position: { x: 500, y: 10 }, data: { label: 'Query-Level\nMost specific rules', color: 'pink', icon: '🎯', tag: 'L1' } },
  { id: 'm2', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'User-Level\nUser preferences', color: 'purple', icon: '👤', tag: 'L2' } },
  { id: 'm3', type: 'custom', position: { x: 500, y: 190 }, data: { label: 'Global-Level\nOrganization rules', color: 'info', icon: '🌐', tag: 'L3' } },

  // Processing
  { id: 'merge', type: 'custom', position: { x: 700, y: 100 }, data: { label: 'Merge Knowledge\nSpecific overrides general', color: 'primary', icon: '🔄' } },
  { id: 'context', type: 'custom', position: { x: 900, y: 100 }, data: { label: 'Contextualized Query\nAll relevant rules applied', color: 'data', icon: '📋' } },

  // Output
  { id: 'execute', type: 'badge', position: { x: 1100, y: 100 }, data: { label: 'Execute Analysis', color: 'success', icon: '▶' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'parse' },
  { id: 'e2', source: 'parse', target: 'match' },
  { id: 'e3', source: 'match', target: 'm1' },
  { id: 'e4', source: 'm1', target: 'm2' },
  { id: 'e5', source: 'm2', target: 'm3' },
  { id: 'e6', source: 'm3', target: 'merge' },
  { id: 'e7', source: 'merge', target: 'context' },
  { id: 'e8', source: 'context', target: 'execute' },
];

export default function KnowledgeFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="280px" />;
}
