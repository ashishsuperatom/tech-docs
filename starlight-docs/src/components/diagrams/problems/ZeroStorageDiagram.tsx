import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Enterprise Network
  { id: 'data', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Your Data\nEnterprise sources', color: 'neutral', icon: '🗄️', tag: 'Source' } },
  { id: 'sa', type: 'custom', position: { x: 0, y: 260 }, data: { label: 'Superatom\nDeployed inside your network', color: 'primary', icon: '⚙️' } },

  // Security Guarantees
  { id: 's1', type: 'custom', position: { x: 280, y: 0 }, data: { label: 'Zero Data Storage\nNever stored outside network', color: 'success', icon: '🔒', tag: 'Security' } },
  { id: 's2', type: 'custom', position: { x: 280, y: 130 }, data: { label: 'Ephemeral Processing\nDeleted after analysis', color: 'success', icon: '⏳', tag: 'Security' } },
  { id: 's3', type: 'custom', position: { x: 280, y: 260 }, data: { label: 'End-to-End Encryption\nAll connections secured', color: 'success', icon: '🔐', tag: 'Security' } },
  { id: 's4', type: 'custom', position: { x: 280, y: 390 }, data: { label: 'Enterprise IAM\nRole-based access control', color: 'success', icon: '👥', tag: 'Security' } },
];

const edges: Edge[] = [
  { id: 'e0', source: 'data', target: 'sa' },
  { id: 'e1', source: 'sa', target: 's1' },
  { id: 'e2', source: 'sa', target: 's2' },
  { id: 'e3', source: 'sa', target: 's3' },
  { id: 'e4', source: 'sa', target: 's4' },
];

export default function ZeroStorageDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="560px" />;
}
