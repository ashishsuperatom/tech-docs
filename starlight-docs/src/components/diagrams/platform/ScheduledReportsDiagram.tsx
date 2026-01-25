import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'schedule', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Schedule\nWeekly, Monday 9 AM', color: 'neutral', icon: '📅', tag: 'Config' } },
  { id: 'generate', type: 'custom', position: { x: 240, y: 50 }, data: { label: 'Generate Report\nAuto-created', color: 'primary', icon: '📄' } },
  { id: 'deliver', type: 'custom', position: { x: 480, y: 50 }, data: { label: 'Deliver\nTo recipients', color: 'neutral', icon: '📧' } },
  { id: 'track', type: 'badge', position: { x: 720, y: 70 }, data: { label: 'Track Opens', color: 'info', icon: '👁️' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'schedule', target: 'generate' },
  { id: 'e2', source: 'generate', target: 'deliver' },
  { id: 'e3', source: 'deliver', target: 'track' },
];

export default function ScheduledReportsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
