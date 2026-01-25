import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'l1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Layer 1: Authentication\nSecure login, sessions, RBAC', color: 'primary', icon: '🔐', tag: 'L1' } },
  { id: 'l2', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Layer 2: Project Isolation\nSeparate Durable Objects', color: 'primary', icon: '🏠', tag: 'L2' } },
  { id: 'l3', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Layer 3: Data Protection\nParameterized SQL, TLS/SSL', color: 'primary', icon: '🛡️', tag: 'L3' } },
  { id: 'l4', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Layer 4: Message Validation\nZod schema, type-safe', color: 'primary', icon: '✓', tag: 'L4' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'l1', target: 'l2' },
  { id: 'e2', source: 'l2', target: 'l3' },
  { id: 'e3', source: 'l3', target: 'l4' },
];

export default function SecurityLayersDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="320px" direction="TB" />;
}
