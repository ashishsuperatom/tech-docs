import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'ai', type: 'custom', position: { x: 200, y: 0 }, data: { label: 'AI Suggests Action\nAutomated recommendation', color: 'info', icon: '🤖', tag: 'Step 1' } },
  { id: 'dry', type: 'custom', position: { x: 200, y: 140 }, data: { label: 'Dry-Run Execution\nSimulated environment', color: 'warning', icon: '🧪', tag: 'Step 2' } },
  { id: 'review', type: 'custom', position: { x: 200, y: 280 }, data: { label: 'Human Review\nSee what WOULD happen', color: 'primary', icon: '👁️', tag: 'Step 3' } },
  { id: 'approve', type: 'custom', position: { x: 200, y: 420 }, data: { label: 'Decision Point\nApprove or reject?', color: 'neutral', icon: '⟡' } },
  { id: 'commit', type: 'badge', position: { x: 420, y: 440 }, data: { label: 'Commit Changes', color: 'success', icon: '✓' } },
  { id: 'modify', type: 'badge', position: { x: 0, y: 440 }, data: { label: 'Modify / Reject', color: 'danger', icon: '✕' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'ai', target: 'dry' },
  { id: 'e2', source: 'dry', target: 'review' },
  { id: 'e3', source: 'review', target: 'approve' },
  { id: 'e4', source: 'approve', target: 'commit' },
  { id: 'e5', source: 'approve', target: 'modify' },
  { id: 'e6', source: 'modify', target: 'ai' },
];

export default function DryRunExecutionDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="560px" />;
}
