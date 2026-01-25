import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // User interaction
  { id: 'user', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'User\nTypes question', color: 'neutral', icon: '👤', tag: 'Start' } },
  { id: 'ui', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Chat UI\nCaptures input', color: 'info', icon: '💬' } },
  { id: 'ws', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'WebSocket\nReal-time channel', color: 'info', icon: '🔌' } },

  // Backend processing
  { id: 'do', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Durable Object\nRoute to project', color: 'warning', icon: '☁️' } },
  { id: 'be', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Backend\nProcess request', color: 'primary', icon: '⚙️', tag: 'Process' } },

  // AI & Data
  { id: 'ai', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'LLM\nGenerate & analyze', color: 'purple', icon: '🧠' } },
  { id: 'db', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Database\nExecute query', color: 'pink', icon: '🗄️' } },

  // Response
  { id: 'stream', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Streamed Response', color: 'success', icon: '📤' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'user', target: 'ui' },
  { id: 'e2', source: 'ui', target: 'ws' },
  { id: 'e3', source: 'ws', target: 'do' },
  { id: 'e4', source: 'do', target: 'be' },
  { id: 'e5', source: 'be', target: 'ai' },
  { id: 'e6', source: 'be', target: 'db' },
  { id: 'e7', source: 'ai', target: 'stream' },
  { id: 'e8', source: 'db', target: 'stream' },
];

export default function DataFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="LR" />;
}
