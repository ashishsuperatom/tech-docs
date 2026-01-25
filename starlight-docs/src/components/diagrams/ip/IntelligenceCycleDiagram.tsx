import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Continuous cycle
  { id: 'monitor', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Monitor\nReal-time watch', color: 'primary', icon: '👁️', tag: 'Cycle' } },
  { id: 'detect', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Detect\nFind anomalies', color: 'warning', icon: '🔍' } },
  { id: 'investigate', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Investigate\nRoot cause', color: 'purple', icon: '🧠' } },
  { id: 'alert', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Alert\nNotify stakeholders', color: 'danger', icon: '🔔' } },
  { id: 'learn', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Learn\nFrom feedback', color: 'success', icon: '📚' } },

  // Human interaction
  { id: 'review', type: 'simple', position: { x: 0, y: 0 }, data: { label: 'Review insights', color: 'info' } },
  { id: 'feedback', type: 'simple', position: { x: 0, y: 0 }, data: { label: 'Provide feedback', color: 'info' } },
  { id: 'adjust', type: 'simple', position: { x: 0, y: 0 }, data: { label: 'Adjust thresholds', color: 'info' } },
];

const edges: Edge[] = [
  // Main cycle
  { id: 'e1', source: 'monitor', target: 'detect' },
  { id: 'e2', source: 'detect', target: 'investigate' },
  { id: 'e3', source: 'investigate', target: 'alert' },
  { id: 'e4', source: 'alert', target: 'learn' },
  { id: 'e5', source: 'learn', target: 'monitor' },

  // Human connections
  { id: 'e6', source: 'alert', target: 'review' },
  { id: 'e7', source: 'feedback', target: 'learn' },
  { id: 'e8', source: 'adjust', target: 'monitor' },
];

export default function IntelligenceCycleDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="450px" direction="TB" />;
}
