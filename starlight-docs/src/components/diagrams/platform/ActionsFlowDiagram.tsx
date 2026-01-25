import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'trigger', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Trigger\nSchedule or condition', color: 'primary', icon: '⚡', tag: 'Start' } },
  { id: 'execute', type: 'custom', position: { x: 240, y: 50 }, data: { label: 'Execute Analysis\nRun queries', color: 'neutral', icon: '🔍' } },
  { id: 'action', type: 'custom', position: { x: 480, y: 50 }, data: { label: 'Take Action\nAlert, report, workflow', color: 'success', icon: '🚀' } },
  { id: 'track', type: 'badge', position: { x: 720, y: 70 }, data: { label: 'Track Results', color: 'info', icon: '📊' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'trigger', target: 'execute' },
  { id: 'e2', source: 'execute', target: 'action' },
  { id: 'e3', source: 'action', target: 'track' },
];

export default function ActionsFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
