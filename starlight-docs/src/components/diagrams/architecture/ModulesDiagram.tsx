import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Frontend
  { id: 'cr', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Chat Runtime\nReact 19 UI', color: 'info', icon: '💬', tag: 'Frontend' } },
  { id: 'fc', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Frontend Components\nVisualization Library', color: 'info', icon: '📊' } },
  { id: 'sw', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'SDK-Web\nBrowser SDK', color: 'info', icon: '🌐' } },

  // Infrastructure
  { id: 'do', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Durable Object\nWebSocket Server', color: 'warning', icon: '☁️', tag: 'Infra' } },

  // Backend
  { id: 'sn', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'SDK-Node\nCore Engine', color: 'primary', icon: '🧠', tag: 'Backend' } },
  { id: 'ba', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Backend App\nBusiness Logic', color: 'primary', icon: '⚙️' } },
  { id: 'an', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Analysis Tools\nSchema Tools', color: 'primary', icon: '🔍' } },

  // Data
  { id: 'pg', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'PostgreSQL\nRelational', color: 'pink', icon: '🐘', tag: 'Data' } },
  { id: 'ch', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'ChromaDB\nVector', color: 'pink', icon: '🔮' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'cr', target: 'sw' },
  { id: 'e2', source: 'sw', target: 'do' },
  { id: 'e3', source: 'do', target: 'sn' },
  { id: 'e4', source: 'sn', target: 'ba' },
  { id: 'e5', source: 'ba', target: 'an' },
  { id: 'e6', source: 'sn', target: 'pg' },
  { id: 'e7', source: 'sn', target: 'ch' },
];

export default function ModulesDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="450px" direction="LR" />;
}
