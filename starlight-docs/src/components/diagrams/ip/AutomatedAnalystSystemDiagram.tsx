import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Enterprise Data\nAll sources', color: 'neutral', icon: '🗄️', tag: 'Input' } },
  { id: 'monitor', type: 'custom', position: { x: 0, y: 0 }, data: { label: '24/7 Monitoring\nContinuous watch', color: 'primary', icon: '👁️', tag: 'Continuous' } },
  { id: 'analyze', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Automated Analysis\nPattern recognition', color: 'info', icon: '🔍' } },
  { id: 'detect', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Anomaly Detection\nStatistical outliers', color: 'warning', icon: '⚠️' } },
  { id: 'causal', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Causal Analysis\nRoot cause finding', color: 'purple', icon: '🧠' } },
  { id: 'alert', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Smart Alerting\nContext-aware', color: 'primary', icon: '🔔' } },
  { id: 'users', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Users (when it matters)', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'monitor' },
  { id: 'e2', source: 'monitor', target: 'analyze' },
  { id: 'e3', source: 'analyze', target: 'detect' },
  { id: 'e4', source: 'detect', target: 'causal' },
  { id: 'e5', source: 'causal', target: 'alert' },
  { id: 'e6', source: 'alert', target: 'users' },
];

export default function AutomatedAnalystSystemDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="TB" />;
}
