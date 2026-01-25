import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'enterprise', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Your Enterprise Network\nData stays within control', color: 'success', icon: '🏢', tag: 'Secure' } },
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Your Data\nDatabases & sources', color: 'neutral', icon: '🗄️' } },
  { id: 'sa', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Superatom Platform\nIn-network deployment', color: 'primary', icon: '🔒' } },

  // Guarantees
  { id: 'g1', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Zero Data Storage', color: 'success', icon: '✓' } },
  { id: 'g2', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Ephemeral Processing', color: 'success', icon: '✓' } },
  { id: 'g3', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'End-to-End Encryption', color: 'success', icon: '✓' } },
  { id: 'g4', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Enterprise IAM', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'sa' },
  { id: 'e2', source: 'sa', target: 'g1' },
  { id: 'e3', source: 'sa', target: 'g2' },
  { id: 'e4', source: 'sa', target: 'g3' },
  { id: 'e5', source: 'sa', target: 'g4' },
];

export default function ZeroStorageDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="350px" direction="LR" />;
}
