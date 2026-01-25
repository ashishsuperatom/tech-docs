import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'users', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Users\nGlobal access', color: 'neutral', icon: '👥', tag: 'Input' } },

  // Edge Layer
  { id: 'cf', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'CDN + DDoS\nCloudflare Edge', color: 'warning', icon: '🛡️', tag: 'Edge' } },
  { id: 'do', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Durable Objects\nWebSocket routing', color: 'warning', icon: '☁️' } },

  // Compute Layer
  { id: 'k8s', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Kubernetes\nContainer orchestration', color: 'primary', icon: '🎯', tag: 'Compute' } },

  // Data Layer
  { id: 'pg', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'PostgreSQL\nRelational data', color: 'pink', icon: '🐘', tag: 'Data' } },
  { id: 'chroma', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'ChromaDB\nVector embeddings', color: 'pink', icon: '🔮' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'users', target: 'cf' },
  { id: 'e2', source: 'cf', target: 'do' },
  { id: 'e3', source: 'do', target: 'k8s' },
  { id: 'e4', source: 'k8s', target: 'pg' },
  { id: 'e5', source: 'k8s', target: 'chroma' },
];

export default function InfrastructureDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="LR" />;
}
