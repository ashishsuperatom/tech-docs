import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'ai', type: 'custom', position: { x: 0, y: 80 }, data: { label: 'AI Suggests\nAction recommendation', color: 'info', icon: '🤖', tag: 'Step 1' } },
  { id: 'sim', type: 'custom', position: { x: 240, y: 80 }, data: { label: 'Simulate\nDry-run execution', color: 'warning', icon: '🧪', tag: 'Step 2' } },
  { id: 'review', type: 'custom', position: { x: 480, y: 80 }, data: { label: 'Human Review\nSee what would happen', color: 'primary', icon: '👁️', tag: 'Step 3' } },
  { id: 'approve', type: 'custom', position: { x: 720, y: 80 }, data: { label: 'Decision\nApprove or reject', color: 'neutral', icon: '⟡' } },
  { id: 'execute', type: 'badge', position: { x: 960, y: 20 }, data: { label: 'Execute', color: 'success', icon: '✓' } },
  { id: 'modify', type: 'badge', position: { x: 960, y: 140 }, data: { label: 'Modify / Reject', color: 'danger', icon: '✕' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'ai', target: 'sim' },
  { id: 'e2', source: 'sim', target: 'review' },
  { id: 'e3', source: 'review', target: 'approve' },
  { id: 'e4', source: 'approve', target: 'execute' },
  { id: 'e5', source: 'approve', target: 'modify', style: { stroke: '#EF4444' } },
];

export default function DryRunConceptDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="280px" />;
}
