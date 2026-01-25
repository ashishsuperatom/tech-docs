import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'user', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Business User\nNo technical skills needed', color: 'neutral', icon: '👤', tag: 'Start' } },
  { id: 'question', type: 'custom', position: { x: 240, y: 50 }, data: { label: 'Natural Language\n"Why did sales drop?"', color: 'neutral', icon: '💬' } },
  { id: 'superatom', type: 'custom', position: { x: 480, y: 50 }, data: { label: 'Superatom AI\n< 3 seconds', color: 'primary', icon: '🧠' } },
  { id: 'insight', type: 'custom', position: { x: 720, y: 50 }, data: { label: 'AI Analysis\nRoot cause + actions', color: 'primary', icon: '📊' } },
  { id: 'verify', type: 'custom', position: { x: 960, y: 50 }, data: { label: 'Human Verifies\nReview & approve', color: 'info', icon: '✓' } },
  { id: 'execute', type: 'badge', position: { x: 1200, y: 70 }, data: { label: 'Action Executed', color: 'success', icon: '🚀' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'user', target: 'question' },
  { id: 'e2', source: 'question', target: 'superatom' },
  { id: 'e3', source: 'superatom', target: 'insight' },
  { id: 'e4', source: 'insight', target: 'verify' },
  { id: 'e5', source: 'verify', target: 'execute' },
];

export default function SuperatomWorkflowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
