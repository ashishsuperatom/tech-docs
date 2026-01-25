import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'monitor', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Monitor Metric\nContinuous watch', color: 'neutral', icon: '👁️', tag: 'Watch' } },
  { id: 'threshold', type: 'custom', position: { x: 240, y: 50 }, data: { label: 'Threshold Check\nBreached?', color: 'warning', icon: '⚠️' } },
  { id: 'generate', type: 'custom', position: { x: 480, y: 50 }, data: { label: 'Generate Report\nAuto-created', color: 'neutral', icon: '📄' } },
  { id: 'alert', type: 'badge', position: { x: 720, y: 70 }, data: { label: 'Send Alert', color: 'danger', icon: '🚨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'monitor', target: 'threshold' },
  { id: 'e2', source: 'threshold', target: 'generate' },
  { id: 'e3', source: 'threshold', target: 'monitor', style: { strokeDasharray: '5,5' } },
  { id: 'e4', source: 'generate', target: 'alert' },
];

export default function TriggeredReportsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
