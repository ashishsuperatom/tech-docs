import FlowDiagram from './FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Presentation Layer
  { id: 'ui', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Chat Runtime\nReact 19 UI', color: 'info', icon: '💬', tag: 'Presentation' } },
  { id: 'fe', type: 'custom', position: { x: 240, y: 0 }, data: { label: 'Frontend Components\nVisualization Library', color: 'info', icon: '📊' } },
  { id: 'sdk_web', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'SDK-Web\nBrowser SDK', color: 'info', icon: '🌐' } },

  // Infrastructure Layer
  { id: 'do', type: 'custom', position: { x: 240, y: 140 }, data: { label: 'Durable Object WebSocket\nCloudflare Edge', color: 'warning', icon: '☁️', tag: 'Infrastructure' } },

  // Intelligence Layer
  { id: 'sdk_node', type: 'custom', position: { x: 0, y: 280 }, data: { label: 'SDK-Node\nCore Engine', color: 'primary', icon: '🧠', tag: 'Intelligence' } },
  { id: 'backend', type: 'custom', position: { x: 240, y: 280 }, data: { label: 'Backend\nBusiness Logic', color: 'primary', icon: '⚙️' } },
  { id: 'analysis', type: 'custom', position: { x: 480, y: 280 }, data: { label: 'Analysis\nSchema Tools', color: 'primary', icon: '🔍' } },

  // Data Layer
  { id: 'pg', type: 'custom', position: { x: 0, y: 420 }, data: { label: 'PostgreSQL\nRelational Database', color: 'pink', icon: '🐘', tag: 'Data' } },
  { id: 'chroma', type: 'custom', position: { x: 240, y: 420 }, data: { label: 'ChromaDB\nVector Database', color: 'pink', icon: '🔮' } },
  { id: 'customer', type: 'custom', position: { x: 480, y: 420 }, data: { label: 'Customer DBs\nSQL Server, etc.', color: 'pink', icon: '🗄️' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'ui', target: 'sdk_web' },
  { id: 'e2', source: 'sdk_web', target: 'do' },
  { id: 'e3', source: 'do', target: 'sdk_node' },
  { id: 'e4', source: 'sdk_node', target: 'backend' },
  { id: 'e5', source: 'backend', target: 'analysis' },
  { id: 'e6', source: 'sdk_node', target: 'pg' },
  { id: 'e7', source: 'sdk_node', target: 'chroma' },
  { id: 'e8', source: 'backend', target: 'customer' },
];

export default function ArchitectureDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="620px" />;
}
